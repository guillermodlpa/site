/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    SITE_DOMAIN: process.env.SITE_DOMAIN,
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
  },
};

module.exports = nextConfig;
