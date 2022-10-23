import { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";
import PageMeta from "../../components/PageMeta";
import { getBlogPostPath } from "../../constants/paths";
import BlogPost from "../../features/blogPost";
import BlogLayout from "../../layouts/BlogLayout";
import {
  fetchAllBlocks,
  fetchBlogPostBySlug,
  fetchBlogPosts,
} from "../../lib/notionClient";
import { BlogPost as BlogPostType } from "../../types/types";
import recursivelyNullifyUndefinedValues from "../../utils/recursivelyNullifyUndefinedValues";

function BlogPostPage({
  blogPost,
  blocks,
}: {
  blogPost: BlogPostType;
  blocks: GetBlockResponse[];
}) {
  return (
    <>
      <PageMeta
        canonicalPath={getBlogPostPath(blogPost.slug)}
        title={`${blogPost.title} - Guillermo de la Puente`}
        description={blogPost.excerpt}
        ogType="article"
        ogImageUrl={blogPost.imageSrc}
        ogArticleTags={{
          published_time: blogPost.datePublished
            ? new Date(blogPost.datePublished).toISOString()
            : null,
          modified_time: blogPost.dateUpdated
            ? new Date(blogPost.dateUpdated).toISOString()
            : null,
          author: "Guillermo de la Puente",
          tags: blogPost.tags,
        }}
      />
      <BlogPost blogPost={blogPost} blocks={blocks} />
    </>
  );
}

BlogPostPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

export async function getStaticPaths() {
  const blogPosts = await fetchBlogPosts();
  const paths = blogPosts.map((blogPost) => ({
    params: {
      blogPostSlug: blogPost.slug,
    },
  }));
  return {
    paths, // Pre-render only these paths at build time.
    fallback: "blocking", // { fallback: false } means other routes should 404.
  };
}

export async function getStaticProps(context) {
  const slug = context.params.blogPostSlug as string;
  const blogPost = await fetchBlogPostBySlug(slug);

  if (!blogPost) {
    return { notFound: true };
  }

  const blocks = await fetchAllBlocks(blogPost.id);
  return {
    props: {
      blogPost: recursivelyNullifyUndefinedValues(blogPost),
      blocks,
    },
  };
}

export default BlogPostPage;
