import PageMeta from "../components/PageMeta";
import { PATH_ABOUT } from "../constants/paths";
import About from "../features/about";
import BlogLayout from "../layouts/BlogLayout";

function AboutPage() {
  return (
    <>
      <PageMeta
        canonicalPath={PATH_ABOUT}
        title={"About Guillermo de la Puente - Freelance Frontend Engineer"}
        description={
          "Frontend Engineer that builds successful, fast, high quality web applications."
        }
        ogType="profile"
      />
      <About />
    </>
  );
}

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

export default AboutPage;
