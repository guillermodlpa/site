import type { Project } from "../../../../types/types";
import quatroDesktop from "./quatro-desktop.png";
import quatroLogo from "./quatro-logo.webp";

const quatro: Project = {
  name: "Quatro",
  anchorId: "quatro",
  slug: "quatro",
  date: "2020 - 2021",
  mobileAppBarColor: "white",
  mobileImage: null,
  desktopImage: quatroDesktop,
  logoImage: {
    src: { light: quatroLogo, dark: quatroLogo },
    alt: "Quatro",
    width: 150,
    style: { marginBottom: "0.1em" },
  },
  backgroundImage: null,
  backgroundColor: null,
};

export default quatro;
