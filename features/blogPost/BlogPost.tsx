import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";
import NextLink from "next/link";
import { PATH_BLOG } from "../../constants/paths";
import { BlogPost as BlogPostType } from "../../types/types";
import formatDate from "../../utils/formatDate";
import NotionPageRenderer from "./NotionPageRenderer";

export default function BlogPost({
  blogPost,
  blocks,
}: {
  blogPost: BlogPostType;
  blocks: GetBlockResponse[];
}) {
  return (
    <Container py={4} maxWidth="container.md" as="article">
      <Box as="header" mb={8}>
        <Heading size="xl" as="h1" mb={4} fontWeight="bold">
          {blogPost.title}
        </Heading>
        <Text
          variant="secondaryText"
          mb={4}
          as="time"
          dateTime={"todo format the date example: 2022-06-05T07:00:00-07:00"}
        >
          {formatDate(blogPost.datePublished)}
        </Text>
      </Box>

      <NotionPageRenderer blocks={blocks} />

      <Box as="footer" mt={16} mb={4}>
        <Text textAlign="center">
          <NextLink href={PATH_BLOG} passHref>
            <Link>Back to all posts</Link>
          </NextLink>
        </Text>
      </Box>
    </Container>
  );
}
