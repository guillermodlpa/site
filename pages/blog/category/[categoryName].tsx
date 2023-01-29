import blogPostCategories from "../../../utils/blogPostCategories";
import BlogPage, { getStaticProps } from "../index";

export default BlogPage;
export { getStaticProps };

export async function getStaticPaths() {
  const paths = blogPostCategories.map((category) => ({
    params: {
      categoryName: category.name,
    },
  }));
  return {
    paths, // Pre-render only these paths at build time.
    fallback: "blocking", // { fallback: false } means other routes should 404.
  };
}
