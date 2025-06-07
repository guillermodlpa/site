import { Box, Button, Link, Text } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import TagCloud from "../../../../components/TagCloud";
import DevicePreviews from "../../DevicePreviews";
import useMarkdownComponents from "../../hooks/useMarkdownComponents";
import ProjectPageButtonGroup from "../ProjectPageButtonGroup";
import ProjectPageFooter from "../ProjectPageFooter";
import ProjectPageHeader from "../ProjectPageHeader";
import ProjectPageMainContainer from "../ProjectPageMainContainer";
import Description from "./description.mdx";
import splash from "./splash";

const tags = [
  "React",
  "Backbone.js",
  "Vanilla JavaScript",
  "CakePHP",
  "Symfony (PHP)",
  "AWS",
  "MySQL",
  "Prometheus",
];

export default function SplashProjectPage() {
  const markdownComponents = useMarkdownComponents();

  return (
    <ProjectPageMainContainer>
      <ProjectPageHeader
        name={splash.name}
        subheadline={"Event marketing platform for virtual, in-person, and hybrid event programs"}
        logo={{ ...splash.logoImage, width: 200 }}
      />

      <DevicePreviews
        mb={10}
        mobileImage={splash.mobileImage}
        desktopImage={splash.desktopImage}
        mobileAppBarColor={splash.mobileAppBarColor}
      />

      <Text mb={4} fontSize="md">
        {splash.date}
      </Text>

      <MDXProvider components={markdownComponents}>
        <Box mb={{ base: 10, md: 16 }}>
          <Description />
        </Box>
      </MDXProvider>

      <ProjectPageButtonGroup>
        <Button as={Link} isExternal href="https://splashthat.com/" colorScheme="primary">
          Visit Splash
        </Button>
      </ProjectPageButtonGroup>

      <TagCloud
        tags={tags}
        mb={{ base: 12, md: 20 }}
        width={{ base: "100%", md: "80%" }}
        mx="auto"
      />

      <ProjectPageFooter currentSlug={splash.slug} />
    </ProjectPageMainContainer>
  );
}
