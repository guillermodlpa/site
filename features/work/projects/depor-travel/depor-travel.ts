import type { Project } from "../../../../types/types";
import deporTravelBackground from "./depor-travel-background.jpeg";
import deporTravelDesktop from "./depor-travel-desktop.png";
import deporTravelLogoDark from "./depor-travel-logo-dark.png";
import deporTravelLogoLight from "./depor-travel-logo-light.png";
import deporTravelMobile from "./depor-travel-mobile.png";

const deporTravel: Project = {
  name: "depor.travel",
  anchorId: "depor-travel",
  slug: "depor-travel",
  date: "2022",
  mobileAppBarColor: "white",
  mobileImage: deporTravelMobile,
  desktopImage: deporTravelDesktop,
  logoImage: {
    src: { light: deporTravelLogoLight, dark: deporTravelLogoDark },
    alt: "depor.travel",
    width: 150,
  },
  backgroundColor: null,
  backgroundImage: {
    src: deporTravelBackground,
    alt: "Cyclist",
    style: {
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      objectFit: "cover",
    },
  },
};

export default deporTravel;
