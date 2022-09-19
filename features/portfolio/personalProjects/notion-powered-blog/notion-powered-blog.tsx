import { Text } from "@chakra-ui/react";
import { PersonalProject } from "../personalProjects";

import notionPoweredBlogLogo from "./notion-powered-blog-logo.png";
import notionPoweredBlogDesktop from "./notion-powered-blog-desktop.png";
import notionPoweredBlogMobile from "./notion-powered-blog-mobile.png";

const notionPoweredBlogProject: PersonalProject = {
  name: "Notion-powered blog",
  type: "Personal Project",
  anchorId: "notion-powered-blog",
  date: "2022",
  logo: notionPoweredBlogLogo,
  logoAlt: "This website's logo",
  subheadline: "Blog using Notion as the CMS",
  technologies: ["Next.js", "Notion"],
  colors: {
    accent: "#af6ae2",
    accentForeground: "white",
    accentHightlighted: "#f457d3",
    accentHightlightedForeground: "white",
    subheadline: "#495c6a",
    background: "white",
    mobileAppBar: "white",
  },
  buttons: [
    {
      url: "/blog",
      label: "Go to Blog",
      secondary: false,
    },
    {
      url: "https://github.com/guillermodlpa/site",
      label: "Source Code",
      secondary: true,
    },
  ],
  mobileImage: notionPoweredBlogMobile,
  desktopImage: notionPoweredBlogDesktop,
  content: (
    <>
      <Text fontSize="sm" mb={4}>
        Notion is a project management and note-taking software platform. Since
        they launched their API, it can be used as a database for rich text
        documents, and so it&quot;s a backend for a blog.
      </Text>
      <Text fontSize="sm" mb={4}>
        With Next.js Static-Site-Generation, we just need to pull the blog posts
        from the Notion API at build time, build the sitemap, and then make a
        renderer to display the post as we want.
      </Text>
    </>
  ),
  backgroundImage: null,
  backgroundOverlay: null,
};

export default notionPoweredBlogProject;
