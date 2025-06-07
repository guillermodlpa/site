import PageMeta from "../components/PageMeta";
import { PATH_WORK } from "../constants/paths";
import Work from "../features/work";
import Layout from "../layouts/Layout";

function WorkPage() {
  return (
    <Layout>
      <PageMeta
        canonicalPath={PATH_WORK}
        title={"Works of Guillermo de la Puente"}
        description={
          "High quality web applications and experiments. haddock, Avocarty, Splash, After Memorials..."
        }
      />
      <Work />
    </Layout>
  );
}

export default WorkPage;
