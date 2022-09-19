import { Text } from "@chakra-ui/react";
import { ProfessionalProject } from "../professionalProjects";

import afterLogo from "./after-logo.png";
import afterDesktop from "./after-desktop.png";
import afterMobile from "./after-mobile.png";
import afterBackground from "./after-background.png";

const afterProject: ProfessionalProject = {
  logo: afterLogo,
  logoAlt: "after logo",
  name: "After",
  anchorId: "after",
  subheadline:
    "Collaborate with family and friends to create beautiful, emotional memorials for your loved ones in minutes",
  content: (
    <>
      <Text fontSize="sm" mb={4}>
        The MVP was initially developed by an offshore agency. While they
        created very nice designs, there were a number of problems resulting in
        a poor quality product: bugs, UX issues, poor code quality, bad SEO, and
        lack of basic accessibility. Users tried it a bit, but didn&apos;t
        stick.
      </Text>
      <Text fontSize="sm" mb={4}>
        I took on the project to increase user adoption. That included{" "}
        <strong>
          fixing outstanding issues, improving the UX, and improving performance
          and SEO
        </strong>
        . As part of that, I migrated the frontend codebase to{" "}
        <strong>TypeScript</strong>, which helped reduce bugs and ship with
        continuous delivery with more confidence. With a very data-driven
        approach measuring user traffic, I continued adding features, like the{" "}
        <strong>email nurture sequence with Sendinblue</strong>, and simplifying
        the way users collaborate on memorials to increase the metric of new
        users per week.
      </Text>
    </>
  ),
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Sendinblue",
    "AWS",
    "Node.js",
    "Koa",
    "Objection.js",
  ],
  url: "https://after.io/",
  buttonLabel: "Go to After",
  date: "2022",
  colors: {
    accent: "#657287",
    accentForeground: "white",
    accentHightlighted: "#4e5b6f",
    accentHightlightedForeground: "white",
    subheadline: "#627389",
    background: "white",
    mobileAppBar: "black",
  },
  mobileImage: afterMobile,
  desktopImage: afterDesktop,
  video: { url: "/assets/after-demo.mp4" },
  backgroundImage: {
    src: afterBackground,
    styles: {
      bottom: "12%",
      left: { base: "auto", md: "30%" },
      right: { base: "2%", md: "auto" },
      width: { base: "50%", md: "30%" },
      opacity: 0.25,
    },
  },
  backgroundOverlay: null,
};

export default afterProject;
