import { ProfessionalProject } from "../professionalProjects";

import Description from "./after-description.mdx";
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
  Description,
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
    body: "#627389",
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
