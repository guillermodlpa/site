import PageMeta from "../components/PageMeta";
import { PATH_CONTACT } from "../constants/paths";
import Contact from "../features/contact";
import BlogLayout from "../layouts/BlogLayout";

function ContactPage() {
  return (
    <>
      <PageMeta
        canonicalPath={PATH_CONTACT}
        title={
          "Contact Guillermo de la Puente - Freelance Software Engineer & Manager"
        }
        description={
          "Get in touch to discuss opportunities and talk about projects. Frontend Engineer that builds successful, fast, high quality web applications."
        }
      />
      <Contact />
    </>
  );
}

ContactPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

export default ContactPage;
