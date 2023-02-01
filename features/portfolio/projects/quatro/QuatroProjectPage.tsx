import quatro from "./quatro";
import ProjectPageHeader from "../ProjectPageHeader";
import ProjectPageMainContainer from "../ProjectPageMainContainer";
import DevicePreviews from "../../DevicePreviews";
import { MDXProvider } from "@mdx-js/react";
import { Box, Button, Link, Text } from "@chakra-ui/react";
import Description from "./description.mdx";
import useMarkdownComponents from "../../hooks/useMarkdownComponents";
import ProjectPageButtonGroup from "../ProjectPageButtonGroup";
import TagCloud from "../../../../components/TagCloud";
import ProjectPageFooter from "../ProjectPageFooter";

const tags = [
  "React",
  "Firebase Firestore",
  "Firebase Hosting",
  "Firebase Functions",
  "Google Calendar API",
  "Mailgun",
  "ActiveCampaign",
  "ToDesktop",
];

export default function QuatroProjectPage() {
  const markdownComponents = useMarkdownComponents();

  return (
    <ProjectPageMainContainer>
      <ProjectPageHeader
        name={quatro.name}
        subheadline={"A Task Manager that prioritizes your day for you"}
        logo={quatro.logoImage}
      />

      <DevicePreviews
        mb={10}
        mobileImage={quatro.mobileImage}
        desktopImage={quatro.desktopImage}
        mobileAppBarColor={quatro.mobileAppBarColor}
      />

      <Text mb={4} fontSize="md">
        {quatro.date}
      </Text>

      <MDXProvider components={markdownComponents}>
        <Box mb={{ base: 10, md: 16 }}>
          <Description />
        </Box>
      </MDXProvider>

      <ProjectPageButtonGroup>
        <Button
          as={Link}
          isExternal
          href="https://github.com/usequatro"
          colorScheme="primary"
        >
          Check out the code
        </Button>

        <Button as={Link} isExternal href="https://vimeo.com/495868077">
          View promotional video
        </Button>

        <Button
          as={Link}
          isExternal
          href="https://github.com/usequatro/quatro-docs"
        >
          Read technical docs
        </Button>
      </ProjectPageButtonGroup>

      <TagCloud
        tags={tags}
        mb={{ base: 12, md: 20 }}
        width={{ base: "100%", md: "80%" }}
        mx="auto"
      />

      <ProjectPageFooter currentSlug={quatro.slug} />
    </ProjectPageMainContainer>
  );
}
