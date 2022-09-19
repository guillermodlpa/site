import { ProfessionalProject } from "../professionalProjects";

import Description from "./alacartadigital-description.mdx";
import alacartadigitalLogo from "./alacartadigital-logo.svg";
import alacartadigitalDesktop from "./alacartadigital-desktop.png";
import alacartadigitalMobile from "./alacartadigital-mobile.png";
import alacartadigitalBackground from "./alacartadigital-background.png";

const alacartadigitalProject: ProfessionalProject = {
  logo: alacartadigitalLogo,
  logoAlt: "alacartadigital logo",
  name: "alacartadigital",
  anchorId: "alacartadigital",
  subheadline: "Online restaurant menu platform with QR code integration",
  Description,
  technologies: [
    "React",
    "Next.js",
    "Firebase Firestore",
    "Firebase Functions",
    "ActiveCampaign",
    "Stripe",
  ],
  url: "https://www.alacartadigital.es/",
  buttonLabel: "Go to alacartadigital",
  date: "2020",
  colors: {
    accent: "#00CF6A",
    accentForeground: "white",
    accentHightlighted: "white",
    accentHightlightedForeground: "#00CF6A",
    subheadline: "#909090",
    body: "#4F4F4F",
    background: "white",
    mobileAppBar: "rgb(33, 33, 33)",
  },
  mobileImage: alacartadigitalMobile,
  desktopImage: alacartadigitalDesktop,
  video: [
    {
      type: "video/mp4",
      src: "https://res.cloudinary.com/dwt7cth1hv/video/upload/q_auto/v1663607721/site/portfolio/demo-videos/alacartadigital-demo_ezu2yk.mp4",
    },
    {
      type: "video/webm",
      src: "https://res.cloudinary.com/dwt7cth1hv/video/upload/q_auto,f_webm/v1663607721/site/portfolio/demo-videos/alacartadigital-demo_ezu2yk.mp4",
    },
  ],
  backgroundImage: {
    src: alacartadigitalBackground,
    styles: {
      top: "20%",
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0.5,
    },
  },
  backgroundOverlay:
    "linear-gradient(50deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 100%)",
};

export default alacartadigitalProject;
