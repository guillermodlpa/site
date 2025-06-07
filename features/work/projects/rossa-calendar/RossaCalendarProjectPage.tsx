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
import rossaCalendar from "./rossa-calendar";

const tags = ["React", "Vite", "TypeScript", "Tailwind CSS", "TanStack Query"];

export default function RossaCalendarProjectPage() {
  const markdownComponents = useMarkdownComponents();

  return (
    <ProjectPageMainContainer>
      <ProjectPageHeader
        name={rossaCalendar.name}
        subheadline={"Airbnb-style calendar to manage bookings across rooms and properties"}
        logo={rossaCalendar.logoImage}
      />

      <DevicePreviews
        mb={10}
        mobileImage={rossaCalendar.mobileImage}
        desktopImage={rossaCalendar.desktopImage}
        mobileAppBarColor={rossaCalendar.mobileAppBarColor}
      />

      <Text mb={4} fontSize="md">
        {rossaCalendar.date}
      </Text>

      <MDXProvider components={markdownComponents}>
        <Box mb={{ base: 10, md: 16 }}>
          <Description />
        </Box>
      </MDXProvider>

      <ProjectPageButtonGroup>
        <Button as={Link} isExternal href="https://rossa.app/" colorScheme="primary">
          Rossa homepage
        </Button>
      </ProjectPageButtonGroup>

      <TagCloud
        tags={tags}
        mb={{ base: 12, md: 20 }}
        width={{ base: "100%", md: "80%" }}
        mx="auto"
      />

      <ProjectPageFooter currentSlug={rossaCalendar.slug} />
    </ProjectPageMainContainer>
  );
}
