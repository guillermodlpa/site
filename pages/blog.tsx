import PageMeta from "../components/PageMeta";
import { PATH_BLOG } from "../constants/paths";
import Blog from "../features/blog";
import BlogLayout from "../layouts/BlogLayout";
import { fetchBlogPosts } from "../lib/notionClient";
import { BlogPost } from "../types/types";

function BlogPage({ blogPosts }: { blogPosts: BlogPost[] }) {
  const description = blogPosts
    .slice(0, 5)
    .reduce(
      (memo, blogPost) =>
        memo ? `${memo}, "${blogPost.title}"` : `"${blogPost.title}"`,
      ""
    )
    .trim();
  return (
    <>
      <PageMeta
        canonicalPath={PATH_BLOG}
        title="Blog - Guillermo de la Puente - Freelance Frontend Engineer"
        description={description}
      />
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
