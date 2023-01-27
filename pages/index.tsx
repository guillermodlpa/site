import PageMeta from "../components/PageMeta";
import Home from "../features/home";

function HomePage() {
  return (
    <>
      <PageMeta
        canonicalPath={""}
        title={
          "Guillermo de la Puente - Freelance Frontend Engineer - TypeScript, React, Node"
        }
        description={
          "Freelance Software Engineer & Manager that builds successful, fast, high quality web applications."
        }
      />
      <Home />
    </>
  );
}

export default HomePage;
