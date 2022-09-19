import { StaticImageData } from "next/image";
import splashProject from "./splash/splash";
import alacartadigitalProject from "./alacartadigital/alacartadigital";
import afterProject from "./after/after";

export type ProfessionalProject = {
  logo: StaticImageData;
  logoAlt: string;
  name: string;
  subheadline: string;
  anchorId: string;
  Description: (props: any) => JSX.Element;
  technologies: string[];
  url: string;
  buttonLabel: string;
  date: string;
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
  mobileImage: StaticImageData;
  desktopImage: StaticImageData;
  video: { url: string } | null;
  backgroundImage: {
    src: StaticImageData;
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

const professionalProjects: ProfessionalProject[] = [
  splashProject,
  alacartadigitalProject,
  afterProject,
];

export default professionalProjects;
