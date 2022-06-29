import BlogPost from "../../features/blogPost";
import blogPost from "../../fixtures/blogPost";
import BlogLayout from "../../layouts/BlogLayout";

function BlogPostPage() {
  return <BlogPost blogPost={blogPost} />;
}

BlogPostPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

export default BlogPostPage;
