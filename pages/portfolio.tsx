import PageMeta from "../components/PageMeta";
import Portfolio from "../features/portfolio";
import BlogLayout from "../layouts/BlogLayout";

function PortfolioPage() {
  return (
    <>
      <PageMeta
        canonicalPath={"/portfolio"}
        title={
          "Portfolio - Guillermo de la Puente - Freelance Frontend Engineer"
        }
        description={""}
      />
      <Portfolio />
    </>
  );
}

PortfolioPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout fullWidth>{page}</BlogLayout>;
};

export default PortfolioPage;
