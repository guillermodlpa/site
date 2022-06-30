import { Container, Heading, Link, Text } from "@chakra-ui/react";
import { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";
import NextLink from "next/link";
import { PATH_BLOG } from "../../constants/paths";
import { BlogPost as BlogPostType } from "../../types/types";
import NotionPageRenderer from "./NotionPageRenderer";

export default function BlogPost({
  blogPost,
  blocks,
}: {
  blogPost: BlogPostType;
  blocks: GetBlockResponse[];
}) {
  return (
    <Container py={4} maxWidth="container.md">
      <Heading as="h1" mb={4}>
        {blogPost.title}
      </Heading>
      <Text variant="secondaryText" mb={4}>
        {blogPost.datePublished}
      </Text>

      <NotionPageRenderer blocks={blocks} />

      <Text textAlign="center">
        <NextLink href={PATH_BLOG} passHref>
          <Link>Back to all posts</Link>
        </NextLink>
      </Text>
    </Container>
  );
}
