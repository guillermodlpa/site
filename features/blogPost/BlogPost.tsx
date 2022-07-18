import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";
import NextLink from "next/link";
import { PATH_BLOG } from "../../constants/paths";
import { BlogPost as BlogPostType } from "../../types/types";
import capitalizeString from "../../utils/capitalizeString";
import formatDateForAttribute from "../../utils/formatDateForAttribute";
import formatDateForUser from "../../utils/formatDateForUser";
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
        <Heading size="2xl" as="h1" mb={4} fontWeight="bold">
          {blogPost.title}
        </Heading>
        <Text
          variant="secondaryText"
          mb={4}
          as="time"
          dateTime={formatDateForAttribute(blogPost.datePublished)}
        >
          {formatDateForUser(blogPost.datePublished)}
        </Text>
        {blogPost.tags.length > 0 && (
          <>
            <Text as="span" variant="secondaryText">
              {` / `}
              {blogPost.tags.map(capitalizeString).join(", ")}
            </Text>
          </>
        )}
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
