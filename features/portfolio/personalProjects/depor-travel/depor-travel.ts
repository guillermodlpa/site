import { PersonalProject } from "../personalProjects";

import Description from "./depor-travel-description.mdx";
import deporTravelLogo from "./depor-travel-logo.png";
import deporTravelDesktop from "./depor-travel-desktop.png";
import deporTravelMobile from "./depor-travel-mobile.png";
import deporTravelBackground from "./depor-travel-background.jpeg";

const deporTravelProject: PersonalProject = {
  name: "depor.travel",
  type: "Startup",
  anchorId: "depor-travel",
  date: "2022",
  logo: deporTravelLogo,
  logoAlt: "depor.travel",
  subheadline: "Travel and sport.\nTwo passions, one portal",
  technologies: ["Next.js", "next-i18n", "Google Sheets", "Webflow"],
  colors: {
    accent: "#ef3d21",
    accentForeground: "white",
    accentHightlighted: "#d80f1e",
    accentHightlightedForeground: "transparent",
    subheadline: "white",
    body: "white",
    background: "white",
    mobileAppBar: "white",
  },
  buttons: [
    {
      url: "https://depor.travel",
      label: "Go to depor.travel",
      secondary: false,
    },
    {
      url: "https://github.com/guillermodlpa/deportravel-squeeze-page",
      label: "Squeeze Page Source Code",
      secondary: true,
    },
  ],
  mobileImage: deporTravelMobile,
  desktopImage: deporTravelDesktop,
  Description,
  backgroundImage: {
    src: deporTravelBackground,
    layout: "fill",
    styles: {
      height: "100%",
      width: "100%",
      top: 0,
      left: "auto",
      right: 0,
    },
  },
  backgroundOverlay:
    "linear-gradient(135deg,rgba(30,33,33,.82) 1%,rgba(32,32,32,.14) 98%)",
};

export default deporTravelProject;
