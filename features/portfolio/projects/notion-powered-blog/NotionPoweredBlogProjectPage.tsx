import notionPoweredBlog from "./notion-powered-blog";
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

const tags = ["Next.js", "Notion API", "SEO", "RSS"];

export default function NotionPoweredBlogProjectPage() {
  const markdownComponents = useMarkdownComponents();

  return (
    <ProjectPageMainContainer>
      <ProjectPageHeader
        name={notionPoweredBlog.name}
        subheadline={"Blog using Notion as the CMS"}
        logo={notionPoweredBlog.logoImage}
      />

      <DevicePreviews
        mb={10}
        mobileImage={notionPoweredBlog.mobileImage}
        desktopImage={notionPoweredBlog.desktopImage}
        mobileAppBarColor={notionPoweredBlog.mobileAppBarColor}
      />

      <Text mb={4} fontSize="md">
        {notionPoweredBlog.date}
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
          href="https://guillermodlpa.com/blog"
          colorScheme="primary"
        >
          Visit blog
        </Button>

        <Button
          as={Link}
          isExternal
          href="https://github.com/guillermodlpa/site"
        >
          View source code
        </Button>
      </ProjectPageButtonGroup>

      <TagCloud
        tags={tags}
        mb={{ base: 12, md: 20 }}
        width={{ base: "100%", md: "80%" }}
        mx="auto"
      />

      <ProjectPageFooter currentSlug={notionPoweredBlog.slug} />
    </ProjectPageMainContainer>
  );
}
