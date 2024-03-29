/**
 * This is a dynamic sitemap rendered on the server with all posts
 * We use SSG with a cache of a few minutes instead of statically generating the sitemap
 * because we want to publish changes without redeploying and next-sitemap doesn't support ISG revalidation
 */

import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { GetServerSideProps } from "next";
import { fetchBlogPosts } from "../lib/notionClient";
import getConfig from "next/config";
import { getBlogPostPath } from "../constants/paths";
import blogPostCategories from "../utils/blogPostCategories";

const { publicRuntimeConfig } = getConfig();

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const blogPosts = await fetchBlogPosts();

  const blogPostFields: ISitemapField[] = blogPosts.map((blogPost) => ({
    loc: `${publicRuntimeConfig.SITE_URL}${getBlogPostPath(blogPost.slug)}`,
    lastmod: new Date(
      blogPost.dateUpdated || blogPost.datePublished
    ).toISOString(),
  }));

  const blogCategoryFields: ISitemapField[] = blogPostCategories
    .filter((category) => category.name !== "all")
    .map((category) => ({
      loc: `${publicRuntimeConfig.SITE_URL}${category.path}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
    }));

  const cacheMaxAgeUntilStaleSeconds = 60 * 60; // 1 minute
  const cacheMaxAgeStaleDataReturnSeconds = 15 * 60 * 60; // 15 minutes
  ctx.res.setHeader(
    "Cache-Control",
    `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`
  );

  return getServerSideSitemap(ctx, [...blogCategoryFields, ...blogPostFields]);
};

// Default export to prevent next.js errors
export default function BlogSitemap() {}
