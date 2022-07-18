// See https://github.com/iamvishnusankar/next-sitemap

const { Client, LogLevel } = require("@notionhq/client");

const PATH_ROOT = "/";
const PATH_BLOG = "/blog";

/**
 * @param {string} slug
 * @returns {Promise<string | undefined>}
 */
async function fetchBlogPostDatePublished(slug) {
  const PROPERTY_SLUG = "Slug";
  const PROPERTY_PUBLISHED = "Published";
  const PROPERTY_DATE_PUBLISHED = "Date Published";

  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
    logLevel:
      process.env.NODE_ENV === "development" ? LogLevel.DEBUG : LogLevel.WARN,
  });

  process.stdout.write(`\n📅 Fetching date published for blog post /${slug}`);
  const result = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DATABASE_ID,
    filter: {
      and: [
        { property: PROPERTY_PUBLISHED, checkbox: { equals: true } },
        { property: PROPERTY_SLUG, rich_text: { equals: slug } },
      ],
    },
    page_size: 1,
  });
  if (result.results.length === 0) {
    process.stdout.write(`. Not found`);
    return undefined;
  }
  const page = result.results[0];
  const datePublished = page.properties[PROPERTY_DATE_PUBLISHED]?.date?.start;
  if (!datePublished) {
    process.stdout.write(`. Not date value`);
    return undefined;
  }
  const formattedDate = new Date(datePublished).toISOString();
  process.stdout.write(`. ${formattedDate}`);
  return formattedDate;
}

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL,
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  exclude: [],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === PATH_BLOG ? "weekly" : "monthly",
      priority: [PATH_ROOT, PATH_BLOG].includes(path) ? 1 : 0.7,
      lastmod: path.startsWith("/blog/")
        ? await fetchBlogPostDatePublished(path.replace("/blog/", ""))
        : new Date().toISOString(),
    };
  },
};

module.exports = config;
