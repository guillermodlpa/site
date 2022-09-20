import { Container, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import AuthorAside from "../../components/AuthorAside";
import MagicalDivider from "../../components/MagicalDivider";
import { BlogPost } from "../../types/types";
import BlogPostSummary from "./BlogPostSummary";
import RssFeedLink from "./RssFeedLink";

export default function Blog({ blogPosts }: { blogPosts: BlogPost[] }) {
  const renderAuthorAside = useBreakpointValue({ base: false, xl: true });

  return (
    <Container pt={2} pb={10} maxWidth="container.md" position="relative">
      <Flex justifyContent="flex-end" mb={6}>
        <Text fontSize="small">
          <RssFeedLink />
        </Text>
      </Flex>

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

      <Flex justifyContent="flex-end" mt={14}>
        <Text fontSize="small">
          <RssFeedLink />
        </Text>
      </Flex>

      {renderAuthorAside && <AuthorAside />}
    </Container>
  );
}
