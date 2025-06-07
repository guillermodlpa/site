import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import generateImageSizesProp from "../../../utils/generateImageSizesProp";
import AuthorIntroContent from "./author-intro-content.mdx";
import ProfilePictureFace from "./guillermo_de_la_puente-face.png";

const markdownComponents = {
  p: (props) => <Text mb={1} fontSize="md" {...props} />,
  a: (props) => (
    <Link
      isExternal={props.href && !props.href.startsWith("/") && !props.href.startsWith("#")}
      {...props}
    />
  ),
};

const imageSize = { base: "6rem" };

export default function AuthorIntro() {
  return (
    <Box mb={8} backgroundColor={"callout-background"} p={3} borderRadius="md">
      <Flex
        pb={3}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        gap={4}
      >
        <Box width={imageSize} flexShrink={0} borderRadius="lg" overflow="hidden">
          <Image
            src={ProfilePictureFace}
            alt="Portrait photo of Guillermo de la Puente"
            sizes={generateImageSizesProp(imageSize)}
          />
        </Box>
        <Box>
          <MDXProvider components={markdownComponents}>
            <AuthorIntroContent />
          </MDXProvider>
        </Box>
      </Flex>
    </Box>
  );
}
