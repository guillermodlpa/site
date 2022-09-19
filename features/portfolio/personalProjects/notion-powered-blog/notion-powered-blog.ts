import { PersonalProject } from "../personalProjects";

import Description from "./notion-powered-blog-description.mdx";
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
    body: "#1c2831",
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
  Description,
  backgroundImage: null,
  backgroundOverlay: null,
};

export default notionPoweredBlogProject;
