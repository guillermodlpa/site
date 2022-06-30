import Canonical from "../../components/Canonical";
import { getBlogPostPath } from "../../constants/paths";
import BlogPost from "../../features/blogPost";
import BlogLayout from "../../layouts/BlogLayout";
import { fetchBlogPostBySlug, fetchBlogPosts } from "../../lib/notionClient";
import { BlogPost as BlogPostType } from "../../types/types";

function BlogPostPage({ blogPost }: { blogPost: BlogPostType }) {
  return (
    <>
      <Canonical path={getBlogPostPath(blogPost.slug)} />
      <BlogPost blogPost={blogPost} />
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
  return {
    props: {
      blogPost,
    },
  };
}

export default BlogPostPage;
