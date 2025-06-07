import type { Project } from "../../../types/types";
import after from "./after/after";
import alacartadigital from "./alacartadigital/alacartadigital";
import avocaty from "./avocaty/avocaty";
import deporTravel from "./depor-travel/depor-travel";
import kikiricoin from "./kikiricoin/kikiricoin";
import marte from "./marte/marte";
import notionPoweredBlog from "./notion-powered-blog/notion-powered-blog";
import quatro from "./quatro/quatro";
import rossaCalendar from "./rossa-calendar/rossa-calendar";
import splash from "./splash/splash";
import travelmap from "./travelmap/travelmap";

export const professionalProjects: Project[] = [avocaty, after, rossaCalendar, splash, alacartadigital];

export const personalProjects: Project[] = [
  marte,
  deporTravel,
  notionPoweredBlog,
  quatro, 
  kikiricoin,
  travelmap,
];

export const allProjects = [...professionalProjects, ...personalProjects];
