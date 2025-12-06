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
import avocaty from "./haddock";

const tags = [
  "OpenAI",
  "Gemini",
  "React",
  "React Router",
  "shadcn",
  "Fastify",
  "Node.js",
  "Google Cloud Platform",
  "Stripe",
  "POS Integrations",
];

export default function HaddockProjectPage() {
  const markdownComponents = useMarkdownComponents();

  return (
    <ProjectPageMainContainer>
      <ProjectPageHeader
        name={avocaty.name}
        subheadline={
          "haddock helps restaurants increase the profitability, providing price tracking in real time, stock management, ordering, and more."
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
        <Button as={Link} isExternal href="https://haddock.app" colorScheme="primary">
          Visit haddock
        </Button>
        <Button as={Link} isExternal href="https://jobs.haddock.app/#jobs">
          Job openings
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
