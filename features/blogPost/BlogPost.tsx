import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { PATH_BLOG } from "../../constants/paths";
import { BlogPost as BlogPostType } from "../../types/types";

export default function BlogPost({ blogPost }: { blogPost: BlogPostType }) {
  return (
    <Container py={4} maxWidth="container.md">
      <Heading as="h1" mb={4}>
        {blogPost.title}
      </Heading>
      <Text variant="secondaryText" mb={4}>
        {blogPost.datePublished}
      </Text>

      {[].map((paragraph, key) => (
        <Text key={key} mb={4}>
          {paragraph}
        </Text>
      ))}

      <Text textAlign="center">
        <NextLink href={PATH_BLOG} passHref>
          <Link>Back to all posts</Link>
        </NextLink>
      </Text>
    </Container>
  );
}
