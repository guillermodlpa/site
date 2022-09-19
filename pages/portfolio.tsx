import PageMeta from "../components/PageMeta";
import { PATH_PORTFOLIO } from "../constants/paths";
import Portfolio from "../features/portfolio";
import BlogLayout from "../layouts/BlogLayout";

function PortfolioPage() {
  return (
    <>
      <PageMeta
        canonicalPath={PATH_PORTFOLIO}
        title={
          "Portfolio - Guillermo de la Puente - Freelance Frontend Engineer"
        }
        description={
          "High quality web applications and experiments. Splash, alacartadigital, After..."
        }
      />
      <Portfolio />
    </>
  );
}

PortfolioPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout fullWidth>{page}</BlogLayout>;
};

export default PortfolioPage;
