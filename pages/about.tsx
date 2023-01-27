import PageMeta from "../components/PageMeta";
import { PATH_ABOUT } from "../constants/paths";
import About from "../features/about";
import BlogLayout from "../layouts/BlogLayout";
import { fetchBlogPosts } from "../lib/notionClient";
import { BlogPost } from "../types/types";
import recursivelyNullifyUndefinedValues from "../utils/recursivelyNullifyUndefinedValues";

function AboutPage({ recentBlogPosts }: { recentBlogPosts: BlogPost[] }) {
  return (
    <>
      <PageMeta
        canonicalPath={PATH_ABOUT}
        title={"Guillermo de la Puente - Freelance Software Engineer & Manager"}
        description={
          "Freelance Software Engineer & Manager that builds successful, fast, high quality web applications."
        }
        ogType="profile"
      />
      <About recentBlogPosts={recentBlogPosts} />
    </>
  );
}

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

export async function getStaticProps(context) {
  const blogPosts = await fetchBlogPosts({ pageSize: 3 });

  // Next doesn't like `undefined` values
  const parsedBlocks = recursivelyNullifyUndefinedValues(blogPosts);

  return {
    props: {
      recentBlogPosts: blogPosts,
    },
  };
}

export default AboutPage;
