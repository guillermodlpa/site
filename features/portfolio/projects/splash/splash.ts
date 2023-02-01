import splashLogoDark from "./splash-logo-dark.png";
import splashLogoLight from "./splash-logo-light.png";
import splashDesktop from "./splash-desktop.png";
import splashMobile from "./splash-mobile.png";
import { Project } from "../../../../types/types";

const splash: Project = {
  name: "Splash",
  anchorId: "splash",
  slug: "splash",
  date: "2014 - 2022",
  mobileAppBarColor: "white",
  mobileImage: splashMobile,
  desktopImage: splashDesktop,
  logoImage: {
    src: { dark: splashLogoDark, light: splashLogoLight },
    alt: "Splash",
    width: 120,
    style: { marginBottom: "0.15em" },
  },
  backgroundImage: null,
  backgroundColor: null,
};

export default splash;
