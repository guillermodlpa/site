import { Text } from "@chakra-ui/react";
import { ProfessionalProject } from "../professionalProjects";

import splashLogo from "./splash-logo.png";
import splashDesktop from "./splash-desktop.png";
import splashMobile from "./splash-mobile.png";

const splashProject: ProfessionalProject = {
  logo: splashLogo,
  logoAlt: "Splash logo",
  name: "Splash",
  anchorId: "splash",
  subheadline:
    "Event marketing platform for virtual, in-person, and hybrid event programs",
  content: (
    <>
      <Text fontSize="sm" mb={4}>
        As an all-in-one platform, Splash has built-in website editor for event
        pages, form editor, tickets and registration platform, CRM,
        integrations, email builder and sender for transactional and marketing,
        and in-app integrations with virtual event providers.
      </Text>
      <Text fontSize="sm" mb={4}>
        During my years as software engineer, and later as an engineering
        manager, I worked in all kinds of projects and with many types of
        technologies: frontend, backend, databases, queues, platform, design
        system... Through this experience, I learned{" "}
        <strong>
          the fundamentals and pitfalls of building SaaS platforms
        </strong>{" "}
        for enterprise users, and it shaped the way I approach projects to this
        day.
      </Text>
      <Text fontSize="sm" mb={4}>
        My main contributions as an engineer were the stabilization and
        evolution of the <strong>website editor</strong>, modernization of
        frontend and backend codebases, implementation of the{" "}
        <strong>registration confirmations module</strong>, implementation of
        Splash&apos;s &quot;growth machine&quot; combining registrations and
        sign-ups, and the implementation of tooling and processes for improving{" "}
        <strong>developer-experience</strong>.
      </Text>
    </>
  ),
  technologies: [
    "React",
    "Backbone.js",
    "Vanilla JavaScript",
    "CakePHP",
    "Symfony (PHP)",
    "AWS",
    "MySQL",
  ],
  url: "https://splashthat.com",
  buttonLabel: "Go to Splash",
  date: "2014 - 2022",
  colors: {
    accent: "rgb(115, 76, 218)",
    accentForeground: "white",
    accentHightlighted: "rgb(76, 64, 149)",
    accentHightlightedForeground: "white",
    subheadline: "rgb(163, 163, 163)",
    background: "white",
    mobileAppBar: "white",
  },
  mobileImage: splashMobile,
  desktopImage: splashDesktop,
  video: null,
  backgroundImage: null,
  backgroundOverlay: null,
};

export default splashProject;
