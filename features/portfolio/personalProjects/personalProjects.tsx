import { StaticImageData } from "next/legacy/image";
import quatroProject from "./quatro/quatro";
import kikiriCoinProject from "./kikiricoin/kikiricoin";
import travelmapProject from "./travelmap/travelmap";
import notionPoweredBlogProject from "./notion-powered-blog/notion-powered-blog";
import deporTravelProject from "./depor-travel/depor-travel";

export type PersonalProject = {
  name: string;
  type: "Personal Project" | "Startup";
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
    body: string;
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
  Description: (props: any) => JSX.Element;
  backgroundImage: {
    src: StaticImageData;
    layout: "responsive" | "fill" | "intrinsic";
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
