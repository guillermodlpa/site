/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    SITE_URL: process.env.SITE_URL,
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
