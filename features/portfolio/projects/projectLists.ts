import after from "./after/after";
import splash from "./splash/splash";
import alacartadigital from "./alacartadigital/alacartadigital";
import quatro from "./quatro/quatro";
import kikiricoin from "./kikiricoin/kikiricoin";
import travelmap from "./travelmap/travelmap";
import notionPoweredBlog from "./notion-powered-blog/notion-powered-blog";
import deporTravel from "./depor-travel/depor-travel";
import { Project } from "../../../types/types";
import rossaCalendar from "./rossa-calendar/rossa-calendar";

export const professionalProjects: Project[] = [
  after,
  rossaCalendar,
  splash,
  alacartadigital,
];

export const personalProjects: Project[] = [
  quatro,
  kikiricoin,
  travelmap,
  notionPoweredBlog,
  deporTravel,
];

export const allProjects = [...professionalProjects, ...personalProjects];
