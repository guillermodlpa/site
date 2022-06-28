import BlogPost from "../../features/blogPost";
import BlogLayout from "../../layouts/BlogLayout";

function BlogPostPage() {
  return <BlogPost />;
}

BlogPostPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

export default BlogPostPage;
