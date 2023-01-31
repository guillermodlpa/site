import { ProfessionalProject } from "../professionalProjects";

import Description from "./splash-description.mdx";
import splashLogo from "./splash-logo.png";
import splashDesktop from "./splash-desktop.png";
import splashMobile from "./splash-mobile.png";
import { getPortfolioProjectPath } from "../../../../constants/paths";

const splashProject: ProfessionalProject = {
  logo: splashLogo,
  logoAlt: "Splash logo",
  name: "Splash",
  anchorId: "splash",
  subheadline:
    "Event marketing platform for virtual, in-person, and hybrid event programs",
  Description,
  technologies: [
    "React",
    "Backbone.js",
    "Vanilla JavaScript",
    "CakePHP",
    "Symfony (PHP)",
    "AWS",
    "MySQL",
  ],
  buttons: [
    {
      url: "https://splashthat.com",
      buttonLabel: "Go to Splash",
    },
  ],
  date: "2014 - 2022",
  colors: {
    accent: "rgb(115, 76, 218)",
    accentForeground: "white",
    accentHightlighted: "rgb(76, 64, 149)",
    accentHightlightedForeground: "white",
    subheadline: "rgb(163, 163, 163)",
    body: "rgb(0, 0, 0)",
    background: "white",
    mobileAppBar: "white",
  },
  mobileImage: splashMobile,
  desktopImage: splashDesktop,
  video: null,
  backgroundImage: null,
  backgroundOverlay: null,
  path: getPortfolioProjectPath("splash"),
};

export default splashProject;
