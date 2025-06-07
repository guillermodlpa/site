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
import notionPoweredBlog from "./notion-powered-blog";

const tags = ["Next.js", "Notion API", "SEO", "RSS", "Umami"];

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
        <Button as={Link} isExternal href="https://guillermodlpa.com/blog" colorScheme="primary">
          Visit blog
        </Button>

        <Button as={Link} isExternal href="https://github.com/guillermodlpa/site">
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
