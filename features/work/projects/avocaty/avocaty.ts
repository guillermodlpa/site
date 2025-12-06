import type { Project } from "../../../../types/types";
import avocatyDesktop from "./avocaty-desktop.png";
import logoDark from "./avocaty-logo-dark.png";
import logoLight from "./avocaty-logo-light.png";
import avocatyMobile from "./avocaty-mobile.png";
import qrSardineRecomendaciones from "./qr-el-botanico.png";

const avocaty: Project = {
  name: "Avocaty",
  anchorId: "avocaty",
  slug: "avocaty",
  date: "2023 - 2025",
  mobileAppBarColor: "white",
  mobileImage: avocatyMobile,
  desktopImage: avocatyDesktop,
  logoImage: {
    src: { light: logoLight, dark: logoDark },
    alt: "Avocaty",
    width: 180,
    style: { marginBottom: "0.3em" },
  },
  backgroundImage: {
    src: qrSardineRecomendaciones,
    alt: "QR code sticker",
    style: {
      top: "-3%",
      right: "-1%",
      width: "25%",
      opacity: 0.6,
      transform: "rotate(10deg)",
    },
  },
  backgroundColor: null,
};

export default avocaty;
