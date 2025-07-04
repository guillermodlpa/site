import { Client, LogLevel } from "@notionhq/client";
import type {
  BlockObjectResponse,
  DatabaseObjectResponse,
  GetBlockResponse,
  ImageBlockObjectResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import getConfig from "next/config";
import type { BlogPost } from "../types/types";
import probeImageSize from "./probeImageSize";

// These are custom properties defined in the Notion database, that we use here to filter, sort, and show info
const PROPERTY_SLUG = "Slug";
const PROPERTY_EXCERPT = "Excerpt";
const PROPERTY_PREVIEW = "Preview";
const PROPERTY_PRODUCTION = "Production";
const PROPERTY_DATE_PUBLISHED = "Date Published";
const PROPERTY_DATE_UPDATED = "Date Updated";
const PROPERTY_TAGS = "Tags";
const PROPERTY_NAME = "Name";

type NotionPageObject = PageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse;

type NotionPageProperty = NotionPageObject["properties"][string];

function getTextValue(property: NotionPageProperty): string | undefined {
  if (!("rich_text" in property)) {
    return undefined;
  }
  return property?.rich_text?.[0]?.plain_text ?? undefined;
}
function getDateValue(property: NotionPageProperty): string | undefined {
  if (!("date" in property)) {
    return undefined;
  }
  return property?.date?.start ?? undefined;
}
function getMultiSelectValues(property: NotionPageProperty): string[] | undefined {
  if (!("multi_select" in property)) {
    return undefined;
  }
  const options = Array.isArray(property.multi_select)
    ? property.multi_select
    : property.multi_select.options;
  return options.map((item) => item.name) ?? undefined;
}
function getTitleValue(property: NotionPageProperty): string | undefined {
  if (!("title" in property)) {
    return undefined;
  }
  return property?.title?.map((item) => item.plain_text).join("") ?? undefined;
}
function getCover(page: NotionPageObject): string | null {
  if (!("cover" in page) || !page.cover) {
    return null;
  }
  if (page.cover.type === "external") {
    return page.cover.external.url;
  }
  if (page.cover.type === "file") {
    return page.cover.file.url; // File URLs are temporary, so we can't optimize these images with Next.js
  }
}
function transformNotionPageIntoBlogPost(
  page:
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
    | DatabaseObjectResponse,
): null | BlogPost {
  if (!("properties" in page)) {
    return null;
  }
  return {
    id: page.id,
    slug: getTextValue(page.properties[PROPERTY_SLUG]),
    excerpt: getTextValue(page.properties[PROPERTY_EXCERPT]) || "",
    datePublished: getDateValue(page.properties[PROPERTY_DATE_PUBLISHED]),
    dateUpdated: getDateValue(page.properties[PROPERTY_DATE_UPDATED]) || null,
    tags: getMultiSelectValues(page.properties[PROPERTY_TAGS]),
    title: getTitleValue(page.properties[PROPERTY_NAME]),
    imageSrc: getCover(page),
  };
}

const { serverRuntimeConfig } = getConfig();

const notion = new Client({
  auth: serverRuntimeConfig.NOTION_TOKEN,
  logLevel: process.env.NODE_ENV === "development" ? LogLevel.DEBUG : LogLevel.WARN,
});

export async function fetchBlogPosts({
  pageSize = 100,
}: { pageSize?: number } = {}): Promise<BlogPost[]> {
  const result = await notion.databases.query({
    page_size: pageSize,
    database_id: serverRuntimeConfig.NOTION_BLOG_DATABASE_ID,
    filter: {
      and: [
        {
          property:
            process.env.VERCEL_ENV === "production" ? PROPERTY_PRODUCTION : PROPERTY_PREVIEW,
          checkbox: { equals: true },
        },
        {
          property: PROPERTY_DATE_PUBLISHED,
          date: { before: new Date().toISOString() },
        },
      ],
    },
    sorts: [{ property: PROPERTY_DATE_PUBLISHED, direction: "descending" }],
  });

  // @todo: add pagination support when we reach 100 posts
  const { results } = result;

  const blogPosts = results.map(transformNotionPageIntoBlogPost);

  return blogPosts;
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const result = await notion.databases.query({
    database_id: serverRuntimeConfig.NOTION_BLOG_DATABASE_ID,
    page_size: 1,
    filter: {
      and: [
        {
          property:
            process.env.VERCEL_ENV === "production" ? PROPERTY_PRODUCTION : PROPERTY_PREVIEW,
          checkbox: {
            equals: true,
          },
        },
        {
          property: PROPERTY_SLUG,
          rich_text: {
            equals: slug,
          },
        },
      ].filter(Boolean),
    },
  });
  if (result.results.length === 0) {
    return undefined;
  }
  const blogPost = transformNotionPageIntoBlogPost(result.results[0]);
  return blogPost;
}

async function addDimensionsToImageBlocks(
  blocks: (PartialBlockObjectResponse | BlockObjectResponse)[],
): Promise<void> {
  await Promise.all(
    blocks
      .filter(
        (block): block is ImageBlockObjectResponse => "type" in block && block.type === "image",
      )
      .map(async (block) => {
        const type = block.type;
        const value = block[type];
        const src =
          value.type === "external"
            ? value.external.url
            : value.type === "file"
              ? value.file.url
              : null;
        if (!src) {
          return;
        }
        return probeImageSize(src)
          .then(({ width, height }) => {
            block[type] = {
              ...value,
              // @ts-expect-error dim is not included in the image block type of Notion
              dim: { width, height },
            };
          })
          .catch((error) => {
            console.warn(error);
            // Not a huge deal. If this fails, we won't have these and resort back to regular images
            return;
          });
      }),
  );
}

export async function fetchAllBlocks(pageIdOrBlockId: string): Promise<GetBlockResponse[]> {
  const result = await notion.blocks.children.list({
    block_id: pageIdOrBlockId,
  });
  const blocks = result.results;

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => "has_children" in block && block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await fetchAllBlocks(block.id),
        };
      }),
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if ("has_children" in block && block.has_children && !block[block.type].children) {
      block[block.type].children = childBlocks.find(({ id }) => id === block.id)?.children;
    }
    return block;
  });

  await addDimensionsToImageBlocks(blocksWithChildren);

  return blocksWithChildren;
}
