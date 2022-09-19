import { Container, useBreakpointValue } from "@chakra-ui/react";
import AuthorAside from "../../components/AuthorAside";
import MagicalDivider from "../../components/MagicalDivider";
import { BlogPost } from "../../types/types";
import BlogPostSummary from "./BlogPostSummary";

export default function Blog({ blogPosts }: { blogPosts: BlogPost[] }) {
  const renderAuthorAside = useBreakpointValue({ base: false, xl: true });

  return (
    <Container pt={12} pb={20} maxWidth="container.md" position="relative">
      {blogPosts.map((blogPost, index) => (
        <>
          <BlogPostSummary
            key={blogPost.id}
            {...blogPost}
            preloadImage={index < 5}
          />
          {index !== blogPosts.length - 1 && (
            <MagicalDivider
              height="2px"
              mb={{ base: 10, md: 10 }}
              mt={{ base: 10, md: 12 }}
              width="full"
            />
          )}
        </>
      ))}
      {renderAuthorAside && <AuthorAside />}
    </Container>
  );
}
