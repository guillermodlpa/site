import { Client, LogLevel } from "@notionhq/client";
import {
  GetBlockResponse,
  GetPageResponse,
} from "@notionhq/client/build/src/api-endpoints";
import getConfig from "next/config";
import { BlogPost } from "../types/types";
import probeImageSize from "./probeImageSize";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

// These are custom properties defined in the Notion database, that we use here to filter, sort, and show info
const PROPERTY_SLUG = "Slug";
const PROPERTY_EXCERPT = "Excerpt";
const PROPERTY_PREVIEW = "Preview";
const PROPERTY_PRODUCTION = "Production";
const PROPERTY_DATE_PUBLISHED = "Date Published";
const PROPERTY_DATE_UPDATED = "Date Updated";
const PROPERTY_TAGS = "Tags";
const PROPERTY_NAME = "Name";

function getTextValue(property: any): string | undefined {
  return property?.rich_text?.[0]?.plain_text ?? undefined;
}
function getDateValue(property: any): string | undefined {
  return property?.date?.start ?? undefined;
}
function getMultiSelectValues(property: any): string[] | undefined {
  return property.multi_select.map((item) => item.name) ?? undefined;
}
function getTitleValue(property: any): string | undefined {
  return property?.title?.map((item) => item.plain_text).join("") ?? undefined;
}
function getCover(page: any): string | null {
  if (!page.cover) {
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
  page: GetPageResponse
): null | BlogPost {
  if (!("properties" in page)) {
    return null;
  }
  const cover = getCover(page);
  return {
    id: page.id,
    slug: getTextValue(page.properties[PROPERTY_SLUG]),
    excerpt: getTextValue(page.properties[PROPERTY_EXCERPT]) || "",
    datePublished: getDateValue(page.properties[PROPERTY_DATE_PUBLISHED]),
    dateUpdated: getDateValue(page.properties[PROPERTY_DATE_UPDATED]) || null,
    tags: getMultiSelectValues(page.properties[PROPERTY_TAGS]),
    title: getTitleValue(page.properties[PROPERTY_NAME]),
    originalNotionImageSrc: cover,
    imageSrc: cover
      ? `https://${publicRuntimeConfig.VERCEL_URL}/notion-resources/pages/${page.id}/cover`
      : null,
  };
}

const notion = new Client({
  auth: serverRuntimeConfig.NOTION_TOKEN,
  logLevel:
    process.env.NODE_ENV === "development" ? LogLevel.DEBUG : LogLevel.WARN,
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
            process.env.VERCEL_ENV === "production"
              ? PROPERTY_PRODUCTION
              : PROPERTY_PREVIEW,
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

export async function fetchBlogPostByPageId(pageId: string) {
  const result = await notion.pages.retrieve({
    page_id: pageId,
  });
  const blogPost = transformNotionPageIntoBlogPost(result);
  return blogPost;
}

export async function fetchBlogPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const result = await notion.databases.query({
    database_id: serverRuntimeConfig.NOTION_BLOG_DATABASE_ID,
    page_size: 1,
    filter: {
      and: [
        {
          property:
            process.env.VERCEL_ENV === "production"
              ? PROPERTY_PRODUCTION
              : PROPERTY_PREVIEW,
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
  blocks: GetBlockResponse[]
): Promise<void[]> {
  return await Promise.all(
    blocks
      .filter((block) => "type" in block && block.type === "image")
      .map(async (block) => {
        // @ts-ignore
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
              dim: { width, height },
            };
          })
          .catch((error) => {
            console.warn(error);
            // Not a huge deal. If this fails, we won't have these and resort back to regular images
            return;
          });
      })
  );
}

export async function fetchAllBlocks(
  pageIdOrBlockId: string
): Promise<GetBlockResponse[]> {
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
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (
      "has_children" in block &&
      block.has_children &&
      !block[block.type].children
    ) {
      block[block.type].children = childBlocks.find(
        ({ id }) => id === block.id
      )?.children;
    }
    return block;
  });

  await addDimensionsToImageBlocks(blocksWithChildren);

  return blocksWithChildren;
}
