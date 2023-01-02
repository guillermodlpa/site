import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import NextLink from "next/link";
import { PATH_CONTACT, PATH_NEWSLETTER } from "../../../constants/paths";
import generateImageSizesProp from "../../../utils/generateImageSizesProp";
import IntroContent from "./intro-content.mdx";
import ProfilePicture from "./profile-picture-2.jpeg";

const markdownComponents = {
  h1: (props) => <Heading as="h1" size="xl" mb={6} mt={2} {...props} />,
  h2: (props) => <Heading as="h2" size="md" mb={6} mt={2} {...props} />,
  h3: (props) => <Heading as="h3" size="sm" mb={6} mt={2} {...props} />,
  p: (props) => <Text mb={4} fontSize="md" {...props} />,
};

export default function Intro() {
  return (
    <Box
      as="section"
      px={4}
      py={{ base: 10, md: 16 }}
      position="relative"
      overflow="hidden"
      maxWidth="container.md"
      margin="0 auto"
      data-group /* to apply _groupHover to child elements */
    >
      <Flex
        height="full"
        alignItems="center"
        minHeight="40vh"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 8, md: 16 }}
      >
        <Box width={{ base: "75%", md: "33%" }} flexShrink={0}>
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
              src={ProfilePicture}
              alt="Portrait photo"
              sizes={generateImageSizesProp({
                base: "33vw",
                md: "15vw",
              })}
            />
          </Box>
        </Box>

        <Box flexGrow={1}>
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
              <Text as={Link}>Join my Personal Newsletter</Text>
            </NextLink>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
