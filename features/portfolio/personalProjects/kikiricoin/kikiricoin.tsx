import { Text } from "@chakra-ui/react";
import { PersonalProject } from "../personalProjects";

import kikiriCoinLogo from "./kikiricoin-logo.webp";
import kikiriCoinMobile from "./kikiricoin-mobile.png";
import kikiriCoinDesktop from "./kikiricoin-desktop.png";

const kikiriCoinProject: PersonalProject = {
  name: "KikiriCoin",
  anchorId: "kikiricoin",
  date: "2021",
  logo: kikiriCoinLogo,
  logoAlt: "KikiriCoin logo",
  subheadline: "KikiriCoin (KIKI)",
  technologies: ["Web3", "Solidity", "Polygon", "React", "Next.js", "Cypress"],
  colors: {
    accent: "#7d2421",
    accentForeground: "white",
    accentHightlighted: "#6d1415",
    accentHightlightedForeground: "white",
    subheadline: "#343434",
    background: "white",
    mobileAppBar: "white",
  },
  buttons: [
    {
      url: "https://kikiricoin.guillermodlpa.com/",
      label: "Go to KikiriCoin",
      secondary: false,
    },
  ],
  mobileImage: kikiriCoinMobile,
  desktopImage: kikiriCoinDesktop,
  content: (
    <>
      <Text fontSize="sm" mb={4}>
        KikiriCoin (KIKI) is an ERC-20 token deployed on the Polygon blockchain
        network. Its implementation is open source and meant to be educational
        and fun
      </Text>
      <Text fontSize="sm" mb={4}>
        This was a pet project to learn Web3 basics building an ERC-20 token
      </Text>
    </>
  ),
  backgroundImage: {
    src: kikiriCoinLogo,
    layout: "responsive",
    styles: {
      top: "10%",
      left: "50%",
      width: "200%",
      height: "100vh",
      opacity: 0.5,
    },
  },
  backgroundOverlay: "rgba(255, 255, 255, 0.5)",
};

export default kikiriCoinProject;
