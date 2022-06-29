import Canonical from "../components/Canonical";
import { PATH_BLOG } from "../constants/paths";
import Blog from "../features/blog";
import blogPostSummaries from "../fixtures/blogPostSummaries";
import BlogLayout from "../layouts/BlogLayout";

function BlogPage() {
  return (
    <>
      <Canonical path={PATH_BLOG} />
      <Blog blogPostSummaries={blogPostSummaries} />
    </>
  );
}

BlogPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

export default BlogPage;
