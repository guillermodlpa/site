import alacartadigital from "./alacartadigital";
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
import VideoPopupButton from "../../VideoPopupButton";

const tags = [
  "React",
  "Next.js",
  "Firebase Firestore",
  "Firebase Functions",
  "ActiveCampaign",
  "Stripe",
];

export default function AlacartadigitalProjectPage() {
  const markdownComponents = useMarkdownComponents();

  return (
    <ProjectPageMainContainer>
      <ProjectPageHeader
        name={alacartadigital.name}
        subheadline={"Online restaurant menu platform with QR code integration"}
        logo={{
          ...alacartadigital.logoImage,
          width: 200,
        }}
      />

      <DevicePreviews
        mb={10}
        mobileImage={alacartadigital.mobileImage}
        desktopImage={alacartadigital.desktopImage}
        mobileAppBarColor={alacartadigital.mobileAppBarColor}
      />

      <Text mb={4} fontSize="md">
        {alacartadigital.date}
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
          href="https://www.alacartadigital.es/"
          colorScheme="primary"
        >
          Visit alacartadigital
        </Button>
        <VideoPopupButton
          name={alacartadigital.name}
          videoSources={[
            {
              type: "video/mp4",
              src: "https://res.cloudinary.com/dwt7cth1hv/video/upload/q_auto/v1663607721/site/portfolio/demo-videos/alacartadigital-demo_ezu2yk.mp4",
            },
            {
              type: "video/webm",
              src: "https://res.cloudinary.com/dwt7cth1hv/video/upload/q_auto,f_webm/v1663607721/site/portfolio/demo-videos/alacartadigital-demo_ezu2yk.mp4",
            },
          ]}
        />
      </ProjectPageButtonGroup>

      <TagCloud
        tags={tags}
        mb={{ base: 12, md: 20 }}
        width={{ base: "100%", md: "80%" }}
        mx="auto"
      />

      <ProjectPageFooter currentSlug={alacartadigital.slug} />
    </ProjectPageMainContainer>
  );
}
