import { Box, Button, Link, Text } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import TagCloud from "../../../../components/TagCloud";
import DevicePreviews from "../../DevicePreviews";
import useMarkdownComponents from "../../hooks/useMarkdownComponents";
import ProjectPageButtonGroup from "../ProjectPageButtonGroup";
import ProjectPageFooter from "../ProjectPageFooter";
import ProjectPageHeader from "../ProjectPageHeader";
import ProjectPageMainContainer from "../ProjectPageMainContainer";
import deporTravel from "./depor-travel";
import Description from "./description.mdx";

const tags = [
  "Next.js",
  "next-i18n",
  "Google Sheets",
  "Webflow",
  "Google AdWords",
  "Instagram Ads",
  "Umami",
];

export default function DeporTravelProjectPage() {
  const markdownComponents = useMarkdownComponents();

  return (
    <ProjectPageMainContainer>
      <ProjectPageHeader
        name={deporTravel.name}
        subheadline={"A platform to find organized sport trips around the world"}
        logo={{ ...deporTravel.logoImage, width: 225 }}
      />

      <DevicePreviews
        mb={10}
        mobileImage={deporTravel.mobileImage}
        desktopImage={deporTravel.desktopImage}
        mobileAppBarColor={deporTravel.mobileAppBarColor}
      />

      <Text mb={4} fontSize="md">
        {deporTravel.date}
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
          href="https://deportravel.guillermodlpa.com/"
          colorScheme="primary"
        >
          Visit RIP page
        </Button>
        <Button
          as={Link}
          isExternal
          href="https://github.com/guillermodlpa/deportravel-squeeze-page"
        >
          View squeeze page source code
        </Button>
      </ProjectPageButtonGroup>

      <TagCloud
        tags={tags}
        mb={{ base: 12, md: 20 }}
        width={{ base: "100%", md: "80%" }}
        mx="auto"
      />

      <ProjectPageFooter currentSlug={deporTravel.slug} />
    </ProjectPageMainContainer>
  );
}
