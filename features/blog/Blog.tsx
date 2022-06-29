import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import MagicalDivider from "../../components/MagicalDivider";
import { BlogPostSummary } from "../../fixtures/blogPostSummaries";

export default function Blog({
  blogPostSummaries,
}: {
  blogPostSummaries: BlogPostSummary[];
}) {
  return (
    <Container py={4} maxWidth="container.md">
      {blogPostSummaries.map((post) => (
        <Box key={post.title} mb={24}>
          <Box my={8}>
            <Heading as="h2" size="lg" mb={2}>
              <NextLink href={`/blog/${post.slug}`}>
                <Link variant="inheritColorKeepHover">{post.title}</Link>
              </NextLink>
            </Heading>
            <MagicalDivider height="2px" />
          </Box>

          <Flex gap={8}>
            <Box
              sx={{
                width: " 25%",
                backgroundImage: `url(${post.imageSrc})`,
                backgroundSize: "contain",
                backgroundPosition: "top center",
                flexShrink: 0,
              }}
            />
            <Box>
              <Text>
                <Text
                  as="span"
                  variant="secondaryText"
                >{`${post.date} / `}</Text>
                {post.excerpt}{" "}
                <NextLink href={`/blog/${post.slug}`} passHref>
                  <Link>Read more</Link>
                </NextLink>
              </Text>
            </Box>
          </Flex>
        </Box>
      ))}
    </Container>
  );
}
