import PageMeta from "../components/PageMeta";
import Home from "../features/home";

function HomePage() {
  return (
    <>
      <PageMeta
        canonicalPath={""}
        title="Guillermo de la Puente - Engineering manager. Software developer"
        description={
          "Blog and portfolio site. Check out my work, and learn about management and software engineering tips."
        }
      />
      <Home />
    </>
  );
}

export default HomePage;
