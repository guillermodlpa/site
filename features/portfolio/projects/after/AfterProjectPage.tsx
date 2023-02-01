import after from "./after";
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
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Stripe",
  "Sendinblue",
  "AWS",
  "Node.js",
  "Koa",
  "Objection.js",
  "Knex",
  "SEO",
];

export default function AfterProjectPage() {
  const markdownComponents = useMarkdownComponents();

  return (
    <ProjectPageMainContainer>
      <ProjectPageHeader
        name={after.name}
        subheadline={
          "Collaborate with family and friends to create beautiful, emotional memorials for your loved ones in minutes"
        }
        logo={after.logoImage}
      />

      <DevicePreviews
        mb={10}
        mobileImage={after.mobileImage}
        desktopImage={after.desktopImage}
        mobileAppBarColor={after.mobileAppBarColor}
        hoverScaleTransform={false}
      />

      <Text mb={4} fontSize="md">
        {after.date}
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
          href="https://after.io"
          colorScheme="primary"
        >
          Visit After
        </Button>
        <Button
          as={Link}
          isExternal
          href="https://after.io/snowy-de-torrelodones"
        >
          View demo memorial
        </Button>
      </ProjectPageButtonGroup>

      <TagCloud
        tags={tags}
        mb={{ base: 12, md: 20 }}
        width={{ base: "100%", md: "80%" }}
        mx="auto"
      />

      <ProjectPageFooter currentSlug={after.slug} />
    </ProjectPageMainContainer>
  );
}
