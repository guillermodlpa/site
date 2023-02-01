import travelmap from "./travelmap";
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
  "Mapbox",
  "Planetscale",
  "Auth0",
  "Cloudinary",
];

export default function TravelmapProjectPage() {
  const markdownComponents = useMarkdownComponents();

  return (
    <ProjectPageMainContainer>
      <ProjectPageHeader
        name={travelmap.name}
        subheadline={"A beautiful map of the countries you have visited"}
        logo={{ ...travelmap.logoImage, width: 200 }}
      />

      <DevicePreviews
        mb={10}
        mobileImage={travelmap.mobileImage}
        desktopImage={travelmap.desktopImage}
        mobileAppBarColor={travelmap.mobileAppBarColor}
      />

      <Text mb={4} fontSize="md">
        {travelmap.date}
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
          href="https://travelmap.guillermodlpa.com/"
          colorScheme="primary"
        >
          Visit Travelmap
        </Button>

        <Button
          as={Link}
          isExternal
          href="https://travelmap.guillermodlpa.com/map/b659ca4b-3531-4e6d-97f2-74352b73eebb"
        >
          Check out my map 🗺️
        </Button>
      </ProjectPageButtonGroup>

      <TagCloud
        tags={tags}
        mb={{ base: 12, md: 20 }}
        width={{ base: "100%", md: "80%" }}
        mx="auto"
      />

      <ProjectPageFooter currentSlug={travelmap.slug} />
    </ProjectPageMainContainer>
  );
}
