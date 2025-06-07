import PageMeta from "../components/PageMeta";
import { PATH_PORTFOLIO } from "../constants/paths";
import Portfolio from "../features/portfolio";
import Layout from "../layouts/Layout";

function PortfolioPage() {
  return (
    <Layout>
      <PageMeta
        canonicalPath={PATH_PORTFOLIO}
        title={"Portfolio - Guillermo de la Puente - Freelance Software Engineer & Manager"}
        description={
          "High quality web applications and experiments. Splash, alacartadigital, After Memorials..."
        }
      />
      <Portfolio />
    </Layout>
  );
}

export default PortfolioPage;
