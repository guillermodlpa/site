import Blog from "../features/blog";
import blogPostSummaries from "../fixtures/blogPostSummaries";
import BlogLayout from "../layouts/BlogLayout";

function BlogPage() {
  return <Blog blogPostSummaries={blogPostSummaries} />;
}

BlogPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

export default BlogPage;
