import PageMeta from "../../components/PageMeta";
import { PATH_BLOG_REVALIDATE } from "../../constants/paths";
import BlogRevalidate from "../../features/blogRevalidate";
import Layout from "../../layouts/Layout";

export default function BlogRevalidatePage() {
  return (
    <Layout>
      <PageMeta
        canonicalPath={PATH_BLOG_REVALIDATE}
        title={"Blog Revalidation"}
        description={
          "Building successful, fast, high quality web applications."
        }
        ogType="profile"
      />
      <BlogRevalidate />
    </Layout>
  );
}
