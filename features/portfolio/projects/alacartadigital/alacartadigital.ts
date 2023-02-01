import alacartadigitalLogoDark from "./alacartadigital-logo-dark.svg";
import alacartadigitalLogoLight from "./alacartadigital-logo-light.svg";
import alacartadigitalDesktop from "./alacartadigital-desktop.png";
import alacartadigitalMobile from "./alacartadigital-mobile.png";
import alacartadigitalBackground from "./alacartadigital-background.png";
import { Project } from "../../../../types/types";

const alacartadigital: Project = {
  name: "alacartadigital",
  anchorId: "alacartadigital",
  slug: "alacartadigital",
  date: "2020",
  mobileAppBarColor: "rgb(33, 33, 33)",
  mobileImage: alacartadigitalMobile,
  desktopImage: alacartadigitalDesktop,
  logoImage: {
    src: { dark: alacartadigitalLogoDark, light: alacartadigitalLogoLight },
    alt: "alacartadigital",
    width: 200,
    style: { marginBottom: "0.15em" },
  },
  backgroundImage: {
    src: alacartadigitalBackground,
    alt: "Illustration with brand color",
    fill: true,
    style: {
      top: "20%",
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0.5,
    },
  },
  backgroundColor: null,
};

export default alacartadigital;
