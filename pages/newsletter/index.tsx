import PageMeta from "../../components/PageMeta";
import { PATH_NEWSLETTER } from "../../constants/paths";
import Newsletter from "../../features/newsletter/Newsletter";
import Layout from "../../layouts/Layout";

function NewsletterPage() {
  return (
    <Layout>
      <PageMeta
        canonicalPath={PATH_NEWSLETTER}
        title={"Personal Newsletter"}
        description={
          "Join my personal newsletter of project and life updates, as an experiment to stay truly connected, without the noise of mainstream social media platforms."
        }
      />
      <Newsletter />
    </Layout>
  );
}

export default NewsletterPage;
