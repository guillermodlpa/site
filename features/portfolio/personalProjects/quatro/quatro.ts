import { PersonalProject } from "../personalProjects";

import Description from "./quatro-description.mdx";
import quatroLogo from "./quatro-logo.webp";
import quatroDesktop from "./quatro-desktop.png";

const quatroProject: PersonalProject = {
  name: "Quatro",
  type: "Startup",
  anchorId: "quatro",
  date: "2020 - 2021",
  logo: quatroLogo,
  logoAlt: "Quatro logo",
  subheadline: "A Task Manager that prioritizes your day for you",
  technologies: [
    "React",
    "Firebase Firestore",
    "Firebase Hosting",
    "Firebase Functions",
    "Google Calendar API",
    "Mailgun",
    "ActiveCampaign",
    "ToDesktop",
  ],
  colors: {
    accent: "#263573",
    accentForeground: "white",
    accentHightlighted: "rgba(38, 53, 115, 0.5)",
    accentHightlightedForeground: "white",
    subheadline: "#605E5E",
    body: "rgb(82, 82, 82)",
    background: "rgb(250, 250, 250)",
    mobileAppBar: "white",
  },
  buttons: [
    {
      url: "https://github.com/usequatro",
      label: "Source code",
      secondary: false,
    },
    {
      url: "https://vimeo.com/495868077",
      label: "Promotional Video",
      secondary: true,
    },
    {
      url: "https://github.com/usequatro/quatro-docs",
      label: "Technical Docs",
      secondary: true,
    },
  ],
  mobileImage: null,
  desktopImage: quatroDesktop,
  Description,
  backgroundImage: null,
  backgroundOverlay: null,
};

export default quatroProject;
