import after from "./after/after";
import splash from "./splash/splash";
import alacartadigital from "./alacartadigital/alacartadigital";
import quatro from "./quatro/quatro";
import kikiricoin from "./kikiricoin/kikiricoin";
import travelmap from "./travelmap/travelmap";
import notionPoweredBlog from "./notion-powered-blog/notion-powered-blog";
import deporTravel from "./depor-travel/depor-travel";
import { Project } from "../../../types/types";

export const professionalProjects: Project[] = [after, splash, alacartadigital];

export const personalProjects: Project[] = [
  quatro,
  kikiricoin,
  travelmap,
  notionPoweredBlog,
  deporTravel,
];

export const allProjects = [...professionalProjects, ...personalProjects];
