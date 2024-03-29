import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import NextLink from "next/link";
import {
  PATH_BLOG,
  PATH_CONTACT,
  PATH_NEWSLETTER,
} from "../../constants/paths";
import generateImageSizesProp from "../../utils/generateImageSizesProp";
import IntroContent from "./intro-content.mdx";
import ProfilePicturePortrait from "./guillermo_de_la_puente-portrait.png";
import ProfilePictureSquare from "./guillermo_de_la_puente-square.png";
import SocialLinks from "../../components/SocialLinks";
import BusinessCard from "./BusinessCard";
import { BlogPost } from "../../types/types";
import RecentBlogPostItem from "./RecentBlogPostItem";
import MagicalDivider from "../../components/MagicalDivider";
import React from "react";
import TagCloud from "../../components/TagCloud";
import technologyTags from "../../constants/technologyTags";

const markdownComponents = {
  h1: (props) => <Heading as="h1" size="xl" mb={6} mt={2} {...props} />,
  h2: (props) => <Heading as="h2" size="md" mb={6} mt={2} {...props} />,
  h3: (props) => <Heading as="h3" size="sm" mb={6} mt={2} {...props} />,
  p: (props) => <Text mb={4} fontSize="md" {...props} />,
  a: (props) => (
    <Link
      isExternal={
        props.href && !props.href.startsWith("/") && !props.href.startsWith("#")
      }
      {...props}
    />
  ),
};

export default function Intro({
  recentBlogPosts,
}: {
  recentBlogPosts: BlogPost[];
}) {
  const isPortrait = useBreakpointValue({ base: false, md: true }) ?? false;

  return (
    <Box
      px={4}
      py={10}
      position="relative"
      overflow="hidden"
      maxWidth="container.md"
      margin="0 auto"
    >
      <Flex
        height="full"
        minHeight="40vh"
        alignItems={{ base: "center", md: "flex-start" }}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 8, md: 16 }}
      >
        <Box width={{ base: "66%", md: "33%" }} flexShrink={0}>
          <Box
            width="95%"
            margin="0 auto"
            sx={{
              borderRadius: "1rem",
              overflow: "hidden",
              filter: `brightness(1.01) contrast(1.02)`,
            }}
          >
            <Image
              src={isPortrait ? ProfilePicturePortrait : ProfilePictureSquare}
              alt="Guillermo de la Puente over a peach color background"
              sizes={generateImageSizesProp({
                base: "33vw",
                md: "15vw",
              })}
              priority
            />
          </Box>

          <SocialLinks mt={8} justify="center" />
        </Box>

        <Box flexGrow={1}>
          <BusinessCard />

          <Box as="section">
            <MDXProvider components={markdownComponents}>
              <IntroContent />
            </MDXProvider>

            <Flex
              mt={8}
              justifyContent={{ base: "center", md: "flex-start" }}
              gap={4}
              flexWrap="wrap"
            >
              <NextLink passHref legacyBehavior href={PATH_CONTACT}>
                <Text as={Link}>Get in touch</Text>
              </NextLink>

              <NextLink passHref legacyBehavior href={PATH_NEWSLETTER}>
                <Text as={Link}>Join my personal newsletter</Text>
              </NextLink>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <MagicalDivider mt={16} mb={16} height="2px" />

      {recentBlogPosts.length > 0 && (
        <Box as="section">
          <Box mb={4}>
            <Heading as="h3" size="lg" display="inline" mr={4}>
              Recent blog posts
            </Heading>
          </Box>

          <Box>
            {recentBlogPosts.map((post, index) => (
              <React.Fragment key={post.id}>
                <RecentBlogPostItem preloadImage={false} {...post} />
                {index !== recentBlogPosts.length - 1 && (
                  <MagicalDivider
                    height="1px"
                    mb={{ base: 5, md: 3 }}
                    mt={{ base: 5, md: 5 }}
                    width="full"
                  />
                )}
              </React.Fragment>
            ))}
          </Box>

          <Text mt={10} textAlign="center">
            <NextLink passHref legacyBehavior href={PATH_BLOG}>
              <Text as={Link}>View all blog posts</Text>
            </NextLink>
          </Text>
        </Box>
      )}

      <TagCloud tags={technologyTags} mt={20} />
    </Box>
  );
}
