import Canonical from "../components/Canonical";
import { PATH_BLOG } from "../constants/paths";
import Blog from "../features/blog";
import BlogLayout from "../layouts/BlogLayout";
import { fetchBlogPosts } from "../lib/notionClient";
import { BlogPost } from "../types/types";

function BlogPage({ blogPosts }: { blogPosts: BlogPost[] }) {
  return (
    <>
      <Canonical path={PATH_BLOG} />
      <Blog blogPosts={blogPosts} />
    </>
  );
}

BlogPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

export async function getStaticProps(context) {
  const blogPosts = await fetchBlogPosts();
  return {
    props: {
      blogPosts,
    },
  };
}

export default BlogPage;
