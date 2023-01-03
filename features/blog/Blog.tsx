import { Container, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import AuthorAside from "../../components/AuthorAside";
import MagicalDivider from "../../components/MagicalDivider";
import { BlogPost, Categories } from "../../types/types";
import BlogPostSummary from "./BlogPostSummary";
import CategorySelector from "./CategorySelector";
import RssFeedLink from "./RssFeedLink";
import AuthorIntro from "./AuthorIntro";

export default function Blog({ blogPosts }: { blogPosts: BlogPost[] }) {
  const renderAuthorAside = useBreakpointValue({ base: false, xl: true });
  const [selectedCategory, setSelectedCategory] = useState<Categories>("all");

  const filteredBlogPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((blogPost) =>
          selectedCategory
            ? blogPost.tags.includes(selectedCategory)
            : blogPost.tags.length === 0
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
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
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
