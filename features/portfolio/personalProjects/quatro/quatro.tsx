import { Link, Text } from "@chakra-ui/react";
import { PersonalProject } from "../personalProjects";

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
  content: (
    <>
      <Text fontSize="sm" mb={4}>
        With 2 other non-technical cofounders, we built Quatro as a web
        application for managing tasks and scheduling them, with a{" "}
        <strong>calendar display</strong>, repeating tasks, an{" "}
        <strong>integration with Google Calendar</strong>,
        <strong>desktop notifications</strong>, plenty of keyboard shortcuts,
        and a <strong>native desktop app</strong> using{" "}
        <Link isExternal href="https://www.todesktop.com/">
          ToDesktop
        </Link>
        .
      </Text>
      <Text fontSize="sm" mb={4}>
        The project is currently abandoned and its code left open source for
        others to learn from.
      </Text>
    </>
  ),
  backgroundImage: null,
  backgroundOverlay: null,
};

export default quatroProject;
