import type { Project } from "../../../../types/types";
import travelmapBackground from "./travelmap-background.png";
import travelmapLogoDark from "./travelmap-logo-dark.png";
import travelmapLogoLight from "./travelmap-logo-light.png";
import travelmapMobile from "./travelmap-mobile.png";

const travelmap: Project = {
  name: "Travelmap",
  anchorId: "travelmap",
  slug: "travelmap",
  date: "2021",
  mobileAppBarColor: "rgb(137, 148, 154)",
  mobileImage: travelmapMobile,
  desktopImage: null,
  logoImage: {
    src: { light: travelmapLogoLight, dark: travelmapLogoDark },
    alt: "Travelmap",
    width: 150,
    style: { marginBottom: "0.1em" },
  },
  backgroundColor: null,
  backgroundImage: {
    src: travelmapBackground,
    fill: true,
    alt: "World map",
    style: {
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      objectFit: "cover",
      opacity: 0.5,
    },
  },
};

export default travelmap;
