import { StaticImageData } from "next/image";
import quatroProject from "./quatro/quatro";
import kikiriCoinProject from "./kikiricoin/kikiricoin";
import travelmapProject from "./travelmap/travelmap";
import notionPoweredBlogProject from "./notion-powered-blog/notion-powered-blog";
import deporTravelProject from "./depor-travel/depor-travel";

export type PersonalProject = {
  name: string;
  anchorId: string;
  date: string;
  logo: StaticImageData;
  logoAlt: string;
  subheadline: string;
  technologies: string[];
  colors: {
    accent: string;
    accentForeground: string;
    accentHightlighted: string;
    accentHightlightedForeground: string;
    subheadline: string;
    background: string;
    mobileAppBar: string;
  };
  buttons:
    | {
        url: string;
        label: string;
        secondary?: boolean;
      }[]
    | null;
  mobileImage: StaticImageData;
  desktopImage: StaticImageData;
  content: JSX.Element;
  backgroundImage: {
    src: StaticImageData;
    layout: "responsive" | "fill" | "fixed" | "intrinsic" | "raw";
    styles: {
      top?: string | number | { base: string | number; md: string | number };
      left?: string | number | { base: string | number; md: string | number };
      right?: string | number | { base: string | number; md: string | number };
      bottom?: string | number | { base: string | number; md: string | number };
      width?: string | number | { base: string | number; md: string | number };
      height?: string | number | { base: string | number; md: string | number };
      opacity?:
        | string
        | number
        | { base: string | number; md: string | number };
    };
  } | null;
  backgroundOverlay: string | null;
};

const personalProjects: PersonalProject[] = [
  quatroProject,
  kikiriCoinProject,
  travelmapProject,
  notionPoweredBlogProject,
  deporTravelProject,
];

export default personalProjects;
