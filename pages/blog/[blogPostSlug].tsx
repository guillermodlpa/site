import { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";
import Canonical from "../../components/Canonical";
import { getBlogPostPath } from "../../constants/paths";
import BlogPost from "../../features/blogPost";
import BlogLayout from "../../layouts/BlogLayout";
import {
  fetchBlocks,
  fetchBlogPostBySlug,
  fetchBlogPosts,
} from "../../lib/notionClient";
import { BlogPost as BlogPostType } from "../../types/types";

function BlogPostPage({
  blogPost,
  blocks,
}: {
  blogPost: BlogPostType;
  blocks: GetBlockResponse[];
}) {
  return (
    <>
      <Canonical path={getBlogPostPath(blogPost.slug)} />
      <BlogPost blogPost={blogPost} blocks={blocks} />
    </>
  );
}

BlogPostPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

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
  const blocks = await fetchBlocks(blogPost.id);
  return {
    props: {
      blogPost,
      blocks,
    },
  };
}

export default BlogPostPage;
