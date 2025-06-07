import { Container, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import AuthorAside from "../../components/AuthorAside";
import MagicalDivider from "../../components/MagicalDivider";
import type { BlogPost } from "../../types/types";
import type { BlogPostCategoryName } from "../../utils/blogPostCategories";
import AuthorIntro from "./AuthorIntro";
import BlogPostSummary from "./BlogPostSummary";
import CategorySelector from "./CategorySelector";
import RssFeedLink from "./RssFeedLink";

export default function Blog({
  blogPosts,
  categoryName,
}: {
  blogPosts: BlogPost[];
  categoryName: BlogPostCategoryName;
}) {
  const [activeCategoryName, setActiveCategoryName] = useState(categoryName);

  const renderAuthorAside = useBreakpointValue({ base: false, xl: true });

  const filteredBlogPosts =
    activeCategoryName === "all"
      ? blogPosts
      : blogPosts.filter((blogPost) =>
          activeCategoryName !== "others"
            ? blogPost.tags.includes(activeCategoryName)
            : blogPost.tags.length === 0,
        );

  const showRssFeedAtTheTop = useBreakpointValue({ base: false, md: true });

  return (
    <Container pt={2} pb={10} maxWidth="container.md" position="relative">
      <AuthorIntro />

      <Flex
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        mb={6}
        gap={4}
      >
        <CategorySelector
          categoryName={activeCategoryName}
          setCategoryName={setActiveCategoryName}
        />
        {showRssFeedAtTheTop && (
          <Text fontSize="xs">
            <RssFeedLink />
          </Text>
        )}
      </Flex>

      {filteredBlogPosts.map((blogPost, index) => (
        <React.Fragment key={blogPost.id}>
          <BlogPostSummary {...blogPost} preloadImage={index < 5} />
          {index !== filteredBlogPosts.length - 1 && (
            <MagicalDivider
              height="2px"
              mb={{ base: 5, md: 5 }}
              mt={{ base: 5, md: 7 }}
              width="full"
            />
          )}
        </React.Fragment>
      ))}

      <Flex justifyContent="flex-end" mt={14}>
        <Text fontSize="xs">
          <RssFeedLink />
        </Text>
      </Flex>

      {renderAuthorAside && <AuthorAside />}
    </Container>
  );
}
