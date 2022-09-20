const loadEnvConfig = require("@next/env").loadEnvConfig;
loadEnvConfig(process.cwd());

const siteURL = process.env.SITE_URL;

module.exports = {
  siteTitle: "Guillermo de la Puente's Blog",
  siteDescription:
    "I blog about frontend patterns and projects, management, and digital nomad lifestyle",
  siteLanguage: "en",
  siteCopyright: `©${new Date().getFullYear()} Guillermo de la Puente`,
  siteUrl: siteURL,
  outDir: "public",
  postsDir: "blog",
  createFeedItem: (pageProps, config) => ({
    title: pageProps.blogPost.title,
    description: pageProps.blogPost.excerpt,
    image: pageProps.blogPost.imageSrc,
    category: pageProps.blogPost.tags.map((tag) => ({ name: tag })),
    id: `${config.siteUrl}/${config.postsDir}/${pageProps.blogPost.slug}`,
    link: `${config.siteUrl}/${config.postsDir}/${pageProps.blogPost.slug}`,
    date: new Date(pageProps.blogPost.datePublished),
  }),
};
