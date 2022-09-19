import { PersonalProject } from "../personalProjects";

import Description from "./depor-travel-description.mdx";
import deporTravelLogo from "./depor-travel-logo.png";
import deporTravelDesktop from "./depor-travel-desktop.png";
import deporTravelMobile from "./depor-travel-mobile.png";

const deporTravelProject: PersonalProject = {
  name: "depor.travel",
  type: "Startup",
  anchorId: "depor-travel",
  date: "2022",
  logo: deporTravelLogo,
  logoAlt: "depor.travel",
  subheadline: "Travel and sport. Two passions, one portal",
  technologies: ["Next.js", "next-i18n", "Google Sheets", "Webflow"],
  colors: {
    accent: "#ef3d21",
    accentForeground: "white",
    accentHightlighted: "#d80f1e",
    accentHightlightedForeground: "white",
    subheadline: "rgba(0, 0, 0, 0.87)",
    body: "rgba(0, 0, 0, 0.87)",
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
  backgroundImage: null,
  backgroundOverlay: null,
};

export default deporTravelProject;
