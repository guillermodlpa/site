import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import NextLink from "next/link";
import { PATH_CONTACT } from "../../../constants/paths";
import generateImageSizesProp from "../../../utils/generateImageSizesProp";
import IntroContent from "./intro-content.mdx";
import ProfilePicture from "./profile-picture.jpg";

const markdownComponents = {
  h1: (props) => <Heading as="h1" size="lg" mb={6} mt={2} {...props} />,
  h2: (props) => <Heading as="h2" size="md" mb={6} mt={2} {...props} />,
  h3: (props) => <Heading as="h3" size="sm" mb={6} mt={2} {...props} />,
  p: (props) => <Text mb={4} fontSize="md" {...props} />,
};

export default function Intro() {
  return (
    <Box
      as="section"
      px={4}
      py={16}
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
        <Box width={{ base: "50%", md: "33%" }} flexShrink={0}>
          <Box
            width="75%"
            margin="0 auto"
            sx={{
              borderRadius: "1rem",
              overflow: "hidden",
              filter: `brightness(1.05) contrast(1.1)`,
            }}
          >
            <Image
              src={ProfilePicture}
              alt="Portrait photo"
              layout="responsive"
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

          <Flex mt={8} justifyContent={{ base: "center", md: "flex-start" }}>
            <NextLink passHref legacyBehavior href={PATH_CONTACT}>
              <Button colorScheme="primary" as={Link}>
                Get in touch
              </Button>
            </NextLink>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
