import type { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";
import PageMeta from "../../components/PageMeta";
import { getBlogPostPath } from "../../constants/paths";
import BlogPost from "../../features/blogPost";
import Layout from "../../layouts/Layout";
import { fetchAllBlocks, fetchBlogPostBySlug, fetchBlogPosts } from "../../lib/notionClient";
import type { BlogPost as BlogPostType } from "../../types/types";
import recursivelyNullifyUndefinedValues from "../../utils/recursivelyNullifyUndefinedValues";

function BlogPostPage({
  blogPost,
  blocks,
}: {
  blogPost: BlogPostType;
  blocks: GetBlockResponse[];
}) {
  return (
    <Layout>
      <PageMeta
        canonicalPath={getBlogPostPath(blogPost.slug)}
        title={`${blogPost.title}`}
        description={blogPost.excerpt}
        ogType="article"
        ogImageUrl={blogPost.imageSrc}
        ogArticleTags={{
          published_time: blogPost.datePublished
            ? new Date(blogPost.datePublished).toISOString()
            : null,
          modified_time: blogPost.dateUpdated ? new Date(blogPost.dateUpdated).toISOString() : null,
          author: "Guillermo de la Puente",
          tags: blogPost.tags,
        }}
      />
      <BlogPost blogPost={blogPost} blocks={blocks} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const blogPosts = await fetchBlogPosts();
  const paths = blogPosts.map((blogPost) => ({
    params: {
      blogPostSlug: blogPost.slug,
    },
  }));
  return {
    paths, // Pre-render only these paths at build time.
    fallback: "blocking", // { fallback: false } means other routes should 404.
  };
}

export async function getStaticProps(context) {
  const slug = context.params.blogPostSlug as string;
  const blogPost = await fetchBlogPostBySlug(slug);

  if (!blogPost) {
    return { notFound: true };
  }

  const blocks = await fetchAllBlocks(blogPost.id);
  return {
    props: {
      blogPost: recursivelyNullifyUndefinedValues(blogPost),
      blocks,
    },
  };
}

export default BlogPostPage;
