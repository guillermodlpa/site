/**
 * This is a dynamic sitemap rendered on the server with all posts
 * We use SSG with a cache of a few minutes instead of statically generating the sitemap
 * because we want to publish changes without redeploying and next-sitemap doesn't support ISG revalidation
 */

import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import { fetchBlogPosts } from "../lib/notionClient";
import getConfig from "next/config";
import { getBlogPostPath, PATH_RSS } from "../constants/paths";
import RSS from "rss";

const { publicRuntimeConfig } = getConfig();

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const blogPosts = await fetchBlogPosts();

  const feed = new RSS({
    title: `Guillermo de la Puente's Blog`,
    description: `I blog about frontend patterns and projects, management, and digital nomad lifestyle`,
    language: "en",
    copyright: `©${new Date().getFullYear()} Guillermo de la Puente`,
    site_url: publicRuntimeConfig.SITE_URL,
    feed_url: `${publicRuntimeConfig.SITE_URL}${PATH_RSS}`,
  });

  blogPosts.forEach((blogPost) => {
    feed.item({
      guid: blogPost.id,
      title: blogPost.title,
      description: blogPost.excerpt,
      url: `${publicRuntimeConfig.SITE_URL}${getBlogPostPath(blogPost.slug)}`,
      date: new Date(blogPost.datePublished),
      categories: blogPost.tags.map((tag) => tag),
      enclosure: {
        url: blogPost.imageSrc,
      },
    });
  });

  const cacheMaxAgeUntilStaleSeconds = 60 * 60; // 1 minute
  const cacheMaxAgeStaleDataReturnSeconds = 60 * 60 * 60; // 60 minutes
  ctx.res.setHeader(
    "Cache-Control",
    `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`
  );

  ctx.res.setHeader("Content-Type", "text/xml");
  ctx.res.write(feed.xml());
  ctx.res.end();

  return { props: {} };
};

// Default export to prevent next.js errors
export default function RssPage() {}
