import { PersonalProject } from "../personalProjects";

import Description from "./kikiricoin-description.mdx";
import kikiriCoinLogo from "./kikiricoin-logo.webp";
import kikiriCoinMobile from "./kikiricoin-mobile.png";
import kikiriCoinDesktop from "./kikiricoin-desktop.png";

const kikiriCoinProject: PersonalProject = {
  name: "KikiriCoin",
  type: "Personal Project",
  anchorId: "kikiricoin",
  date: "2021",
  logo: kikiriCoinLogo,
  logoAlt: "KikiriCoin logo",
  subheadline: "KikiriCoin (KIKI)",
  technologies: ["Web3", "Solidity", "Polygon", "React", "Next.js", "Cypress"],
  colors: {
    accent: "#7d2421",
    accentForeground: "white",
    accentHightlighted: "#6d1415",
    accentHightlightedForeground: "white",
    subheadline: "#343434",
    body: "#343434",
    background: "white",
    mobileAppBar: "white",
  },
  buttons: [
    {
      url: "https://kikiricoin.guillermodlpa.com/",
      label: "Go to KikiriCoin",
      secondary: false,
    },
  ],
  mobileImage: kikiriCoinMobile,
  desktopImage: kikiriCoinDesktop,
  Description,
  backgroundImage: {
    src: kikiriCoinLogo,
    fill: true,
    objectFit: "contain",
    styles: {
      top: "10%",
      left: "50%",
      width: "200%",
      height: "100vh",
      opacity: 0.5,
    },
  },
  backgroundOverlay: "rgba(255, 255, 255, 0.5)",
};

export default kikiriCoinProject;
