// See https://github.com/iamvishnusankar/next-sitemap

const { Client, LogLevel } = require("@notionhq/client");

const PATH_ROOT = "/";
const PATH_BLOG = "/blog";

/**
 * @returns {Promise<{ [slug: string]: string } | undefined>}
 */
async function fetchBlogPostsLastModDate() {
  const PROPERTY_SLUG = "Slug";
  const PROPERTY_PUBLISHED = "Published";
  const PROPERTY_DATE_PUBLISHED = "Date Published";
  const PROPERTY_DATE_UPDATED = "Date Updated";

  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
    logLevel:
      process.env.NODE_ENV === "development" ? LogLevel.DEBUG : LogLevel.WARN,
  });

  console.log(`📅 Fetching blog posts for their published date...`);

  const result = await notion.databases.query({
    page_size: 100,
    database_id: process.env.NOTION_BLOG_DATABASE_ID,
    filter:
      process.env.NODE_ENV === "development"
        ? undefined
        : {
            and: [
              {
                property: PROPERTY_PUBLISHED,
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

  const posts = results.map((page) => ({
    slug: page.properties[PROPERTY_SLUG]?.rich_text?.[0]?.plain_text,
    datePublished: page.properties[PROPERTY_DATE_PUBLISHED]?.date?.start,
    dateUpdated: page.properties[PROPERTY_DATE_UPDATED]?.date?.start,
  }));

  const lastModBySlug = posts.reduce(
    (memo, { slug, datePublished, dateUpdated }) => {
      const lastModificationDate = dateUpdated || datePublished;
      const formattedDate = new Date(lastModificationDate).toISOString();
      return { ...memo, [`/blog/${slug}`]: formattedDate };
    },
    {}
  );

  const printout = Object.entries(lastModBySlug)
    .map(([slug, lastMod]) => `- ${slug}: ${lastMod}`)
    .join("\n");
  console.log(printout);

  return lastModBySlug;
}

let lastMods;
async function getLastMods() {
  if (!lastMods) {
    lastMods = await fetchBlogPostsLastModDate();
  }
  return lastMods;
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  exclude: ["/blog/revalidate"],
  transform: async (config, path) => {
    const lastMods = await getLastMods();
    return {
      loc: path,
      changefreq: path === PATH_BLOG ? "weekly" : "monthly",
      priority: [PATH_ROOT, PATH_BLOG].includes(path) ? 1 : 0.7,
      lastmod:
        path.startsWith("/blog/") && lastMods[path]
          ? lastMods[path]
          : new Date().toISOString(),
    };
  },
};
