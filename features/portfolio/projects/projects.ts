import { getPortfolioProjectPath } from "../../../constants/paths";
import { StaticImageData } from "next/image";

import afterBackground from "./after/after-background.png";
import afterDesktop from "./after/after-desktop.png";
import afterLogo from "./after/after-logo.png";
import afterMobile from "./after/after-mobile.png";

import splashLogo from "./splash/splash-logo.png";
import splashMobile from "./splash/splash-mobile.png";
import splashDesktop from "./splash/splash-desktop.png";

import alacartadigitalLogo from "./alacartadigital/alacartadigital-logo.svg";
import alacartadigitalBackground from "./alacartadigital/alacartadigital-background.png";
import alacartadigitalDesktop from "./alacartadigital/alacartadigital-desktop.png";
import alacartadigitalMobile from "./alacartadigital/alacartadigital-mobile.png";

import quatroLogo from "./quatro/quatro-logo.webp";
import quatroDesktop from "./quatro/quatro-desktop.png";

import kikiriCoinMobile from "./kikiricoin/kikiricoin-mobile.png";
import kikiriCoinDesktop from "./kikiricoin/kikiricoin-desktop.png";

import travelmapMobile from "./travelmap/travelmap-mobile.png";
import travelmapLogo from "./travelmap/travelmap-logo.png";
import travelmapBackground from "./travelmap/travelmap-background.png";

import notionPoweredBlogMobile from "./notion-powered-blog/notion-powered-blog-mobile.png";
import notionPoweredBlogDesktop from "./notion-powered-blog/notion-powered-blog-desktop.png";

import deporTravelLogo from "./depor-travel/depor-travel-logo.png";
import deporTravelMobile from "./depor-travel/depor-travel-mobile.png";
import deporTravelDesktop from "./depor-travel/depor-travel-desktop.png";
import deporTravelBackground from "./depor-travel/depor-travel-background.jpeg";

export type Project = {
  name: string;
  anchorId: string;
  date: string;
  backgroundImage: {
    src: StaticImageData;
    alt: string;
    fill?: boolean;
    width?: number;
    height?: number;
    style?: { [key: string]: string | number };
  } | null;
  backgroundColor: null | string;
  logoImage: {
    src: StaticImageData;
    alt: string;
    fill?: boolean;
    width?: number;
    height?: number;
    style?: { [key: string]: string | number };
  } | null;
  mobileImage: StaticImageData;
  desktopImage: StaticImageData;
  mobileAppBarColor: string;
  path: string;
};

export const professionalProjects: Project[] = [
  {
    name: "After",
    anchorId: "after",
    date: "2022 - 2023",
    mobileAppBarColor: "black",
    mobileImage: afterMobile,
    desktopImage: afterDesktop,
    logoImage: {
      src: afterLogo,
      alt: "After",
      width: 100,
      style: { marginBottom: "0.3em" },
    },
    backgroundImage: {
      src: afterBackground,
      alt: "Old photo illustration",
      style: {
        bottom: "12%",
        left: "30%",
        width: "30%",
        opacity: 0.25,
      },
    },
    backgroundColor: null,
    path: getPortfolioProjectPath("after"),
  },
  {
    name: "Splash",
    anchorId: "splash",
    date: "2014 - 2022",
    mobileAppBarColor: "white",
    mobileImage: splashMobile,
    desktopImage: splashDesktop,
    logoImage: {
      src: splashLogo,
      alt: "Splash",
      width: 120,
      style: { marginBottom: "0.15em" },
    },
    backgroundImage: null,
    backgroundColor: null,
    path: getPortfolioProjectPath("splash"),
  },
  {
    name: "alacartadigital",
    anchorId: "alacartadigital",
    date: "2020",
    mobileAppBarColor: "rgb(33, 33, 33)",
    mobileImage: alacartadigitalMobile,
    desktopImage: alacartadigitalDesktop,
    logoImage: {
      src: alacartadigitalLogo,
      alt: "alacartadigital",
      width: 200,
      style: { marginBottom: "0.15em" },
    },
    backgroundImage: {
      src: alacartadigitalBackground,
      alt: "Illustration with brand color",
      fill: true,
      style: {
        top: "20%",
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.5,
      },
    },
    backgroundColor: null,
    path: getPortfolioProjectPath("splash"),
  },
];

export const personalProjects: Project[] = [
  {
    name: "Quatro",
    anchorId: "quatro",
    date: "2020 - 2021",
    mobileAppBarColor: "white",
    mobileImage: null,
    desktopImage: quatroDesktop,
    logoImage: {
      src: quatroLogo,
      alt: "Quatro",
      width: 150,
      style: { marginBottom: "0.1em" },
    },
    backgroundImage: null,
    backgroundColor: null,
    path: getPortfolioProjectPath("quatro"),
  },
  {
    name: "KikiriCoin",
    anchorId: "kikiricoin",
    date: "2021",
    mobileAppBarColor: "white",
    mobileImage: kikiriCoinMobile,
    desktopImage: kikiriCoinDesktop,
    logoImage: null,
    backgroundImage: null,
    backgroundColor: null,
    path: getPortfolioProjectPath("kikiricoin"),
  },
  {
    name: "Travelmap",
    anchorId: "travelmap",
    date: "2021",
    mobileAppBarColor: "rgb(137, 148, 154)",
    mobileImage: travelmapMobile,
    desktopImage: null,
    logoImage: {
      src: travelmapLogo,
      alt: "Travelmap",
      width: 150,
      style: { marginBottom: "0.1em" },
    },
    backgroundColor: "rgba(228, 207, 188, 0.75)",
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
      },
    },
    path: getPortfolioProjectPath("travelmap"),
  },
  {
    name: "Notion-powered blog",
    anchorId: "notion-powered-blog",
    date: "2022",
    mobileAppBarColor: "white",
    mobileImage: notionPoweredBlogMobile,
    desktopImage: notionPoweredBlogDesktop,
    logoImage: null,
    backgroundColor: null,
    backgroundImage: null,
    path: getPortfolioProjectPath("travelmap"),
  },
  {
    name: "depor.travel",
    anchorId: "depor-travel",
    date: "2022",
    mobileAppBarColor: "white",
    mobileImage: deporTravelMobile,
    desktopImage: deporTravelDesktop,
    logoImage: { src: deporTravelLogo, alt: "depor.travel", width: 150 },
    backgroundColor:
      "linear-gradient(135deg,rgba(30,33,33,.82) 1%,rgba(32,32,32,.14) 98%)",
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
    path: getPortfolioProjectPath("depor-travel"),
  },
];
