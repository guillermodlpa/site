import PageMeta from "../../components/PageMeta";
import { PATH_NEWSLETTER } from "../../constants/paths";
import Newsletter from "../../features/newsletter/Newsletter";
import BlogLayout from "../../layouts/BlogLayout";

function NewsletterPage() {
  return (
    <>
      <PageMeta
        canonicalPath={PATH_NEWSLETTER}
        title={
          "Personal Newsletter - Guillermo de la Puente - Freelance Software Engineer & Manager"
        }
        description={
          "Join my personal newsletter of project and life updates, as an experiment to stay truly connected, without the noise of mainstream social media platforms."
        }
      />
      <Newsletter />
    </>
  );
}

NewsletterPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

export default NewsletterPage;
