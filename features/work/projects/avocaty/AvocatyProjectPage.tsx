import { Box, Button, Link, Text } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import TagCloud from "../../../../components/TagCloud";
import DevicePreviews from "../../DevicePreviews";
import useMarkdownComponents from "../../hooks/useMarkdownComponents";
import ProjectPageButtonGroup from "../ProjectPageButtonGroup";
import ProjectPageFooter from "../ProjectPageFooter";
import ProjectPageHeader from "../ProjectPageHeader";
import ProjectPageMainContainer from "../ProjectPageMainContainer";
import avocaty from "./avocaty";
import Description from "./description.mdx";

const tags = [
  "React",
  "Next.js",
  "OpenAI",
  "POS Integrations",
  "Firebase Firestore",
  "Firebase Functions",
  "ActiveCampaign",
  "Stripe",
  "Material UI",
];

export default function AvocatyProjectPage() {
  const markdownComponents = useMarkdownComponents();

  return (
    <ProjectPageMainContainer>
      <ProjectPageHeader
        name={avocaty.name}
        subheadline={
          "Create an amazing QR Digital Menu in minutes with Avocaty — a cloud-based solution that lets you manage and update your digital menu with ease."
        }
        logo={avocaty.logoImage}
      />

      <DevicePreviews
        mb={10}
        mobileImage={avocaty.mobileImage}
        desktopImage={avocaty.desktopImage}
        mobileAppBarColor={avocaty.mobileAppBarColor}
      />

      <Text mb={4} fontSize="md">
        {avocaty.date}
      </Text>

      <MDXProvider components={markdownComponents}>
        <Box mb={{ base: 10, md: 16 }}>
          <Description />
        </Box>
      </MDXProvider>

      <ProjectPageButtonGroup>
        <Button as={Link} isExternal href="https://avocaty.io" colorScheme="primary">
          Visit Avocaty
        </Button>
      </ProjectPageButtonGroup>

      <TagCloud
        tags={tags}
        mb={{ base: 12, md: 20 }}
        width={{ base: "100%", md: "80%" }}
        mx="auto"
      />

      <ProjectPageFooter currentSlug={avocaty.slug} />
    </ProjectPageMainContainer>
  );
}
