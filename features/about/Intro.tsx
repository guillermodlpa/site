import { Box, Flex, Heading, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import MagicalDivider from "../../components/MagicalDivider";
import SocialLinks from "../../components/SocialLinks";
import TagCloud from "../../components/TagCloud";
import { PATH_BLOG, PATH_CONTACT } from "../../constants/paths";
import technologyTags from "../../constants/technologyTags";
import type { BlogPost } from "../../types/types";
import generateImageSizesProp from "../../utils/generateImageSizesProp";
import BusinessCard from "./BusinessCard";
import RecentBlogPostItem from "./RecentBlogPostItem";
import ProfilePicturePortrait from "./guillermo_de_la_puente.png";
import IntroContent from "./intro-content.mdx";

const markdownComponents = {
  h1: (props) => <Heading as="h1" size="xl" mb={6} mt={2} {...props} />,
  h2: (props) => <Heading as="h2" size="md" mb={6} mt={2} {...props} />,
  h3: (props) => <Heading as="h3" size="sm" mb={6} mt={2} {...props} />,
  p: (props) => <Text mb={4} fontSize="md" {...props} />,
  a: (props) => (
    <Link
      isExternal={props.href && !props.href.startsWith("/") && !props.href.startsWith("#")}
      {...props}
    />
  ),
};

const DESKTOP_MEDIA_QUERY = "@media (min-width: 768px)";

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
              filter: "brightness(1.01) contrast(1.02)",
            }}
          >
            <Box
              as={Image}
              src={ProfilePicturePortrait}
              alt="Guillermo de la Puente over a peach color background"
              sizes={generateImageSizesProp({
                base: "50vw",
                md: "15vw",
              })}
              priority
              sx={{
                aspectRatio: "1 / 1",
                objectFit: "cover",
                objectPosition: "25% 20%",
                [DESKTOP_MEDIA_QUERY]: {
                  aspectRatio: "unset",
                  objectPosition: "50% 50%",
                },
              }}
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
              <Text>
                <Link as={NextLink} href={PATH_CONTACT}>
                  Get in touch
                </Link>
              </Text>
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
            <Link as={NextLink} href={PATH_BLOG}>
              View all blog posts
            </Link>
          </Text>
        </Box>
      )}

      <TagCloud tags={technologyTags} mt={20} />
    </Box>
  );
}
