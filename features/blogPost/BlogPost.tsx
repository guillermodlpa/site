import {
  Box,
  Container,
  Heading,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";
import NextLink from "next/link";
import AuthorAside from "../../components/AuthorAside";
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
  const renderAuthorAside = useBreakpointValue({ base: false, xl: true });

  return (
    <Container py={4} maxWidth="container.md" as="article" position="relative">
      <Box as="header" mb={8}>
        <Heading size="xl" as="h1" mb={4} fontWeight="bold">
          {blogPost.title}
        </Heading>

        {blogPost.tags.length > 0 && (
          <>
            <Text as="p" variant="secondaryText" mb={1} fontSize="md">
              {blogPost.tags.map(capitalizeString).join(", ")}
            </Text>
          </>
        )}

        <Text variant="secondaryText" mb={4} as="span" fontSize="md">
          {`Published on `}
          <time dateTime={formatDateForAttribute(blogPost.datePublished)}>
            {formatDateForUser(blogPost.datePublished)}
          </time>
        </Text>

        {blogPost.dateUpdated && (
          <Text variant="secondaryText" mb={4} as="span" fontSize="md">
            {` / Updated on `}
            <time dateTime={formatDateForAttribute(blogPost.dateUpdated)}>
              {formatDateForUser(blogPost.dateUpdated)}
            </time>
          </Text>
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
      {renderAuthorAside && <AuthorAside />}
    </Container>
  );
}
