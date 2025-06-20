/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    SITE_URL: process.env.SITE_URL,
    FORMBOLD_CONTACT_FORM_ENDPOINT: process.env.FORMBOLD_CONTACT_FORM_ENDPOINT,
  },
  serverRuntimeConfig: {
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    NOTION_BLOG_DATABASE_ID: process.env.NOTION_BLOG_DATABASE_ID,
    REVALIDATION_PASSCODE: process.env.REVALIDATION_PASSCODE,
  },
  images: {
    domains: [
      // Notion images
      "s3.us-west-2.amazonaws.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      // Images moved to Cloudinary
      "res.cloudinary.com",
    ],
    minimumCacheTTL: 112492800, // 6 months. trying here that Next.js doesn't clear cache for iamges, as the Notion links are temporary
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/understanding-collaboration-good-and-bad",
        destination: "/blog/what-do-collaborative-teams-have-in-common",
        permanent: true,
      },
      {
        source: "/blog/team-meetups-and-art-interpretation",
        destination: "/blog/team-building-with-abstract-contemporary-art",
        permanent: true,
      },
      {
        source: "/blog/how-to-use-sendinblue-tracker-in-react-typescript-app",
        destination: "/blog/how-to-set-up-sendinblue-tracker-in-react-typescript-app",
        permanent: true,
      },
      // I decided to rename "portfolio" to "work" in 2025 june
      {
        source: "/portfolio",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio/:path*",
        destination: "/work/:path*",
        permanent: true,
      },
    ];
  },
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react", // for using MDXProvider
  },
  experimental: {
    mdxRs: true,
  },
});

module.exports = withMDX(nextConfig);
