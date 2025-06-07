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
import marte from "./marte";

const tags = ["React", "Next.js", "TinaCMS", "GraphQL", "Vercel KV", "Tailwind CSS", "TypeScript"];

export default function MarteProjectPage() {
  const markdownComponents = useMarkdownComponents();

  return (
    <ProjectPageMainContainer>
      <ProjectPageHeader
        name={marte.name}
        subheadline={"Easy and performant website builder for small businesses"}
        logo={marte.logoImage}
      />

      <DevicePreviews
        mb={10}
        mobileImage={marte.mobileImage}
        desktopImage={marte.desktopImage}
        mobileAppBarColor={marte.mobileAppBarColor}
      />

      <Text mb={4} fontSize="md">
        {marte.date}
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
          href="https://www.martewebsitebuilder.com/blog/la-velocidad-como-ventaja-competitiva-rendimiento-web"
          lang="es"
        >
          Performance blog post
        </Button>
        <Button
          as={Link}
          isExternal
          href="https://www.martewebsitebuilder.com/"
          lang="es"
          colorScheme="primary"
        >
          View website (made with Marte)
        </Button>
      </ProjectPageButtonGroup>

      <TagCloud
        tags={tags}
        mb={{ base: 12, md: 20 }}
        width={{ base: "100%", md: "80%" }}
        mx="auto"
      />

      <ProjectPageFooter currentSlug={marte.slug} />
    </ProjectPageMainContainer>
  );
}
