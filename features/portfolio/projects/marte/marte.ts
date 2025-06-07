import type { Project } from "../../../../types/types";
import marteDesktop from "./marte-desktop.png";
import marteLogo from "./marte-logo.png";

const marte: Project = {
  name: "Marte Website Builder",
  anchorId: "marte",
  slug: "marte",
  date: "2024",
  mobileAppBarColor: "white",
  mobileImage: null,
  desktopImage: marteDesktop,
  logoImage: {
    src: { light: marteLogo, dark: marteLogo },
    alt: "Marte Website Builder logo",
    width: 150,
    style: { marginBottom: "0.1em" },
  },
  backgroundImage: null,
  backgroundColor: null,
};

export default marte;
