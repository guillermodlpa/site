import Blog from "../features/blog";
import BlogLayout from "../layouts/BlogLayout";

function BlogPage() {
  return <Blog />;
}

BlogPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

export default BlogPage;
