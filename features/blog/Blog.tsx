import { Container } from "@chakra-ui/react";
import { BlogPost } from "../../types/types";
import BlogPostSummary from "./BlogPostSummary";

export default function Blog({ blogPosts }: { blogPosts: BlogPost[] }) {
  return (
    <Container py={4} maxWidth="container.md">
      {blogPosts.map((blogPost, index) => (
        <BlogPostSummary
          key={blogPost.id}
          {...blogPost}
          preloadImage={index < 5}
        />
      ))}
    </Container>
  );
}
