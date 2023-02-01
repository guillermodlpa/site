import { Project } from "../../../../types/types";
import afterBackground from "./after-background.png";
import afterDesktop from "./after-desktop.png";
import afterLogo from "./after-logo.png";
import afterMobile from "./after-mobile.png";

const after: Project = {
  name: "After",
  anchorId: "after",
  slug: "after",
  date: "2022 - 2023",
  mobileAppBarColor: "black",
  mobileImage: afterMobile,
  desktopImage: afterDesktop,
  logoImage: {
    src: { light: afterLogo, dark: afterLogo },
    alt: "After",
    width: 100,
    style: { marginBottom: "0.3em" },
  },
  backgroundImage: {
    src: afterBackground,
    alt: "Old photo illustration",
    style: {
      top: "12%",
      right: "10%",
      width: "30%",
      opacity: 0.25,
    },
  },
  backgroundColor: null,
};

export default after;
