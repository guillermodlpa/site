import { Link, Text } from "@chakra-ui/react";
import { PersonalProject } from "../personalProjects";

import deporTravelLogo from "./depor-travel-logo.png";
import deporTravelDesktop from "./depor-travel-desktop.png";
import deporTravelMobile from "./depor-travel-mobile.png";

const deporTravelProject: PersonalProject = {
  name: "depor.travel",
  anchorId: "depor-travel",
  date: "2022",
  logo: deporTravelLogo,
  logoAlt: "depor.travel",
  subheadline: "Travel and sport. Two passions, one portal",
  technologies: ["Next.js", "next-i18n", "Google Sheets", "Webflow"],
  colors: {
    accent: "#ef3d21",
    accentForeground: "white",
    accentHightlighted: "#d80f1e",
    accentHightlightedForeground: "white",
    subheadline: "rgba(0, 0, 0, 0.87)",
    background: "white",
    mobileAppBar: "white",
  },
  buttons: [
    {
      url: "https://depor.travel",
      label: "Go to depor.travel",
      secondary: false,
    },
    {
      url: "https://github.com/guillermodlpa/deportravel-squeeze-page",
      label: "Squeeze Page Source Code",
      secondary: true,
    },
  ],
  mobileImage: deporTravelMobile,
  desktopImage: deporTravelDesktop,
  content: (
    <>
      <Text fontSize="sm" mb={4}>
        depor.travel is an aggregator of sport trips around the world focused on
        users in Spain.
      </Text>
      <Text fontSize="sm" mb={4}>
        We started building a squeeze page to capture emails of interested
        users, built with Next.js and capturing data via Google Sheets with a
        custom Apps Script API.
      </Text>

      <Text fontSize="sm" mb={4}>
        The initial prototype to test market fit was built with Webflow, which
        combined with{" "}
        <Link isExternal href="https://www.finsweet.com/attributes/">
          Attributes
        </Link>
        , it included all functionality necessary for an MVP.
      </Text>
    </>
  ),
  backgroundImage: null,
  backgroundOverlay: null,
};

export default deporTravelProject;
