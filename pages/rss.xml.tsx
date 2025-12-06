/**
 * This is a dynamic RSS feed rendered on the server with all blog posts
 * We use SSG with a cache of a few minutes instead of statically generating the file because we want
 * new blog posts and edits to automatically show up here
 */

import type { GetServerSideProps } from "next";
import RSS from "rss";
import { PATH_RSS, getBlogPostPath } from "../constants/paths";
import { fetchBlogPosts } from "../lib/notionClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? "";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const blogPosts = await fetchBlogPosts();

  const feed = new RSS({
    title: `Guillermo de la Puente's Blog`,
    description:
      "I blog about frontend patterns and projects, management, and digital nomad lifestyle",
    language: "en",
    copyright: `©${new Date().getFullYear()} Guillermo de la Puente`,
    site_url: siteUrl,
    feed_url: `${siteUrl}${PATH_RSS}`,
  });

  for (const blogPost of blogPosts) {
    feed.item({
      guid: blogPost.id,
      title: blogPost.title,
      description: blogPost.excerpt,
      url: `${siteUrl}${getBlogPostPath(blogPost.slug)}`,
      date: new Date(blogPost.datePublished),
      categories: blogPost.tags.map((tag) => tag),
      enclosure: {
        url: blogPost.imageSrc,
      },
    });
  }

  const cacheMaxAgeUntilStaleSeconds = 60 * 60; // 1 minute
  const cacheMaxAgeStaleDataReturnSeconds = 60 * 60 * 60; // 60 minutes
  ctx.res.setHeader(
    "Cache-Control",
    `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`,
  );

  ctx.res.setHeader("Content-Type", "text/xml");
  ctx.res.write(feed.xml());
  ctx.res.end();

  return { props: {} };
};

// Default export to prevent next.js errors
export default function RssPage() {}
