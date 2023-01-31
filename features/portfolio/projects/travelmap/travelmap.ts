import { PersonalProject } from "../../personalProjects/personalProjects";

import Description from "./travelmap-description.mdx";
import travelmapMobile from "./travelmap-mobile.png";
import travelmapLogo from "./travelmap-logo.png";
import travelmapBackground from "./travelmap-background.png";
import { getPortfolioProjectPath } from "../../../../constants/paths";

const travelmapProject: PersonalProject = {
  name: "Travelmap",
  type: "Personal Project",
  anchorId: "travelmap",
  date: "2022",
  logo: travelmapLogo,
  logoAlt: "Travelmap logo",
  subheadline: "A beautiful map of the countries you have visited",
  technologies: [
    "React",
    "Next.js",
    "Mapbox",
    "Planetscale",
    "Auth0",
    "Cloudinary",
  ],
  colors: {
    accent: "rgb(17, 47, 106)",
    accentForeground: "rgb(252, 245, 229)",
    accentHightlighted: "rgb(17, 47, 106)",
    accentHightlightedForeground: "rgb(252, 245, 229)",
    subheadline: "rgb(15, 15, 15)",
    body: "rgb(15, 15, 15)",
    background: "rgb(228, 207, 188)",
    mobileAppBar: "rgb(137, 148, 154)",
  },
  buttons: [
    {
      url: "https://travelmap.guillermodlpa.com/",
      label: "Go to Travelmap",
      secondary: false,
    },
  ],
  mobileImage: travelmapMobile,
  desktopImage: null,
  Description,
  backgroundImage: {
    src: travelmapBackground,
    fill: true,
    objectFit: "cover",
    styles: {
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
    },
  },
  backgroundOverlay: "rgba(228, 207, 188, 0.8) 30%",
  path: getPortfolioProjectPath("travelmap"),
};

export default travelmapProject;
