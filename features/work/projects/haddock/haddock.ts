import type { Project } from "../../../../types/types";
import haddockDesktop from "./haddock-desktop.png";
import logoDark from "./haddock-logo.png";
import logoLight from "./haddock-logo-white.svg";
import haddockMobile from "./haddock-mobile.png";

const haddock: Project = {
  name: "haddock",
  anchorId: "haddock",
  slug: "haddock",
  date: "2025 - Present",
  mobileAppBarColor: "black",
  mobileImage: haddockMobile,
  desktopImage: haddockDesktop,
  logoImage: {
    src: { light: logoLight, dark: logoDark },
    alt: "haddock logo",
    width: 180,
    style: { marginBottom: "1.4rem" },
  },
  backgroundImage: null,
  backgroundColor: null,
};

export default haddock;
