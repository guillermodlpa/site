// See https://github.com/iamvishnusankar/next-sitemap

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateIndexSitemap: true,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [`${process.env.SITE_URL}/sitemap-blog.xml`],
  },
  changefreq: "weekly",
  exclude: [
    // blog posts are indexed in the dynamic blog sitemap
    // next-sitemap can actually put them here, but we want to keep it dynamic to allow regeneration without deployment
    "/blog/*",
    "/sitemap-*.xml",
  ],
};
