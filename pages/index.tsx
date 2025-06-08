import PageMeta from "../components/PageMeta";
import About from "../features/about";
import Layout from "../layouts/Layout";
import { fetchBlogPosts } from "../lib/notionClient";
import type { BlogPost } from "../types/types";
import recursivelyNullifyUndefinedValues from "../utils/recursivelyNullifyUndefinedValues";

function HomePage({ recentBlogPosts }: { recentBlogPosts: BlogPost[] }) {
  return (
    <Layout>
      <PageMeta
        canonicalPath={"/"}
        title={"Guillermo de la Puente"}
        description={
          "Software engineer and product-minded tech leader with a passion for building high-quality web products that solve real problems."
        }
        ogType="profile"
      />
      <About recentBlogPosts={recentBlogPosts} />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const blogPosts = await fetchBlogPosts({ pageSize: 3 });

  // Next doesn't like `undefined` values
  const parsedBlogPosts = recursivelyNullifyUndefinedValues(blogPosts);

  return {
    props: {
      recentBlogPosts: parsedBlogPosts,
    },
  };
}

export default HomePage;
