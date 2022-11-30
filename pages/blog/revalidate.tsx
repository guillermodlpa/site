import PageMeta from "../../components/PageMeta";
import { PATH_BLOG_REVALIDATE } from "../../constants/paths";
import BlogRevalidate from "../../features/blogRevalidate";
import BlogLayout from "../../layouts/BlogLayout";

export default function BlogRevalidatePage() {
  return (
    <>
      <PageMeta
        canonicalPath={PATH_BLOG_REVALIDATE}
        title={"Blog Revalidation"}
        description={
          "Frontend Engineer that builds successful, fast, high quality web applications."
        }
        ogType="profile"
        robots="none"
      />
      <BlogRevalidate />
    </>
  );
}

BlogRevalidatePage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};