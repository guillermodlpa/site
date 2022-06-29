import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { BlogPost } from "../../fixtures/blogPost";

export default function Blog({ blogPost }: { blogPost: BlogPost }) {
  return (
    <Container py={4} maxWidth="container.md">
      <Heading as="h1" mb={4}>
        {blogPost.title}
      </Heading>
      <Text variant="secondaryText" mb={4}>
        {blogPost.date}
      </Text>
      <Box mb={4}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={blogPost.imageSrc} alt={blogPost.imageAlt} />
      </Box>

      {blogPost.paragraphs.map((paragraph, key) => (
        <Text key={key} mb={4}>
          {paragraph}
        </Text>
      ))}

      <Text textAlign="center">
        <NextLink href="/blog" passHref>
          <Link>Back to all posts</Link>
        </NextLink>
      </Text>
    </Container>
  );
}
