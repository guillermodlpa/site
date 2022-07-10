/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    SITE_URL: process.env.SITE_URL,
    UMAMI_WEBSITE_ID: process.env.UMAMI_WEBSITE_ID,
  },
  serverRuntimeConfig: {
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    NOTION_BLOG_DATABASE_ID: process.env.NOTION_BLOG_DATABASE_ID,
  },
  images: {
    domains: [
      "s3.us-west-2.amazonaws.com", // Notion images
    ],
    minimumCacheTTL: 112492800, // 6 months. trying here that Next.js doesn't clear cache for iamges, as the Notion links are temporary
  },
};

module.exports = nextConfig;
