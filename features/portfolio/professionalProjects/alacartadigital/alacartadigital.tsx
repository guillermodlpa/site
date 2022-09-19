import { Text } from "@chakra-ui/react";
import { ProfessionalProject } from "../professionalProjects";

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
  content: (
    <>
      <Text fontSize="sm" mb={4}>
        Developed during the first weeks of the pandemic, alacartadigital
        brought a solution to restaurants that quickly needed to digitalize
        their menu and make it accessible via QR codes. The goal was to provide
        a super intuitive interface, but customizable enough to solve various
        menu use cases and capable of using the same branding as its restaurant.
      </Text>
      <Text fontSize="sm" mb={4}>
        Alongside Cristian C and Kelvin S, we built a Next.js application that
        optimized <strong>ease of use and page speed</strong>. It included{" "}
        <strong>
          brand customization of colors and typography with live preview
        </strong>
        , an integrated QR code generator, <strong>paid subscriptions</strong>,
        and enough admin controls so that the founders wouldn&apos;t depend on
        developers to operate the platform.
      </Text>
      <Text fontSize="sm" mb={4}>
        The project has become a successful company powering hundreds of
        thousands of menus in Spain and Latin America.
      </Text>
    </>
  ),
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
    background: "white",
    mobileAppBar: "rgb(33, 33, 33)",
  },
  mobileImage: alacartadigitalMobile,
  desktopImage: alacartadigitalDesktop,
  video: { url: "/assets/alacartadigital-demo.mp4" },
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
