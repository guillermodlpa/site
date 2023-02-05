import PageMeta from "../../components/PageMeta";
import { PATH_BLOG } from "../../constants/paths";
import Blog from "../../features/blog";
import Layout from "../../layouts/Layout";
import { fetchBlogPosts } from "../../lib/notionClient";
import { BlogPost } from "../../types/types";
import { BlogPostCategoryName } from "../../utils/blogPostCategories";
import recursivelyNullifyUndefinedValues from "../../utils/recursivelyNullifyUndefinedValues";

function BlogPage({
  blogPosts,
  categoryName,
}: {
  blogPosts: BlogPost[];
  categoryName: BlogPostCategoryName;
}) {
  const description = blogPosts
    .slice(0, 5)
    .reduce(
      (memo, blogPost) =>
        memo ? `${memo}, "${blogPost.title}"` : `"${blogPost.title}"`,
      ""
    )
    .trim();
  return (
    <Layout>
      <PageMeta
        canonicalPath={PATH_BLOG}
        title="Blog - Guillermo de la Puente - Freelance Software Engineer & Manager"
        description={description}
      />
      <Blog blogPosts={blogPosts} categoryName={categoryName} />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const blogPosts = await fetchBlogPosts();
  const categoryName =
    typeof context.params?.categoryName === "string"
      ? context.params?.categoryName.replace(/\+/g, " ")
      : "all";

  // Next doesn't like `undefined` values
  const parsedBlogPosts = recursivelyNullifyUndefinedValues(blogPosts);

  return {
    props: {
      blogPosts: parsedBlogPosts,
      categoryName,
    },
  };
}

export default BlogPage;
