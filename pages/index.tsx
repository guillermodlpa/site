import PageMeta from "../components/PageMeta";
import About from "../features/about";
import BlogLayout from "../layouts/BlogLayout";
import { fetchBlogPosts } from "../lib/notionClient";
import { BlogPost } from "../types/types";
import recursivelyNullifyUndefinedValues from "../utils/recursivelyNullifyUndefinedValues";

function HomePage({ recentBlogPosts }: { recentBlogPosts: BlogPost[] }) {
  return (
    <>
      <PageMeta
        canonicalPath={"/"}
        title={"Guillermo de la Puente - Freelance Software Engineer & Manager"}
        description={
          "Building successful, fast, high quality web applications. React, Next.js, Node, TypeScript..."
        }
        ogType="profile"
      />
      <About recentBlogPosts={recentBlogPosts} />
    </>
  );
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

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
