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
import kikiricoin from "./kikiricoin";

const tags = ["Web3", "Solidity", "Polygon", "React", "Next.js", "Cypress"];

export default function KikiricoinProjectPage() {
  const markdownComponents = useMarkdownComponents();

  return (
    <ProjectPageMainContainer>
      <ProjectPageHeader
        name={kikiricoin.name}
        subheadline={"An ERC-20 token experiment"}
        logo={kikiricoin.logoImage}
      />

      <DevicePreviews
        mb={10}
        mobileImage={kikiricoin.mobileImage}
        desktopImage={kikiricoin.desktopImage}
        mobileAppBarColor={kikiricoin.mobileAppBarColor}
      />

      <Text mb={4} fontSize="md">
        {kikiricoin.date}
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
          href="https://kikiricoin.guillermodlpa.com/"
          colorScheme="primary"
        >
          Visit KikiriCoin
        </Button>
      </ProjectPageButtonGroup>

      <TagCloud
        tags={tags}
        mb={{ base: 12, md: 20 }}
        width={{ base: "100%", md: "80%" }}
        mx="auto"
      />

      <ProjectPageFooter currentSlug={kikiricoin.slug} />
    </ProjectPageMainContainer>
  );
}
