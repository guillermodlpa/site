import PageMeta from "../components/PageMeta";
import { PATH_CONTACT } from "../constants/paths";
import Contact from "../features/contact";
import Layout from "../layouts/Layout";

function ContactPage() {
  return (
    <Layout>
      <PageMeta
        canonicalPath={PATH_CONTACT}
        title={"Contact Guillermo de la Puente"}
        description={
          "Get in touch to discuss opportunities and talk about projects. Building successful, fast, high quality web applications."
        }
      />
      <Contact />
    </Layout>
  );
}

export default ContactPage;
