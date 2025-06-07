import { Box, Container, Flex, Heading, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import type { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";
import NextLink from "next/link";
import AuthorAside from "../../components/AuthorAside";
import { PATH_BLOG } from "../../constants/paths";
import type { BlogPost as BlogPostType } from "../../types/types";
import capitalizeString from "../../utils/capitalizeString";
import formatDateForAttribute from "../../utils/formatDateForAttribute";
import formatDateInUTCForUser from "../../utils/formatDateInUTCForUser";
import RssFeedLink from "../blog/RssFeedLink";
import NotionPageRenderer from "./NotionPageRenderer";

export default function BlogPost({
  blogPost,
  blocks,
}: {
  blogPost: BlogPostType;
  blocks: GetBlockResponse[];
}) {
  const renderAuthorAside = useBreakpointValue({ base: false, xl: true });

  return (
    <Container py={4} maxWidth="container.md" as="article" position="relative">
      <Box as="header" mb={8}>
        <Heading size="xl" as="h1" mb={4} fontWeight="bold">
          {blogPost.title}
        </Heading>

        {blogPost.tags.length > 0 && (
          <Text as="p" variant="secondaryText" mb={1} fontSize="md">
            {blogPost.tags.map(capitalizeString).join(", ")}
          </Text>
        )}

        <Flex alignItems="flex-start">
          <Box flexGrow={1}>
            <Text variant="secondaryText" mb={4} as="span" fontSize="md">
              {"Published on "}
              <time dateTime={formatDateForAttribute(blogPost.datePublished)}>
                {formatDateInUTCForUser(blogPost.datePublished)}
              </time>
            </Text>

            {blogPost.dateUpdated && (
              <Text variant="secondaryText" mb={4} as="span" fontSize="md">
                {" / Updated on "}
                <time dateTime={formatDateForAttribute(blogPost.dateUpdated)}>
                  {formatDateInUTCForUser(blogPost.dateUpdated)}
                </time>
              </Text>
            )}
          </Box>

          <Text fontSize="xs">
            <RssFeedLink />
          </Text>
        </Flex>
      </Box>

      <NotionPageRenderer blocks={blocks} />

      <Box as="footer" mt={16} mb={4}>
        <Text textAlign="center">
          <Link as={NextLink} href={PATH_BLOG}>
            Back to all posts
          </Link>
        </Text>
      </Box>
      {renderAuthorAside && <AuthorAside />}
    </Container>
  );
}
