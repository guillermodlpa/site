import type React from "react";
import PageMeta from "../../components/PageMeta";
import { getWorkProjectPath } from "../../constants/paths";
import AfterProjectPage from "../../features/work/projects/after/AfterProjectPage";
import after from "../../features/work/projects/after/after";
import AlacartadigitalProjectPage from "../../features/work/projects/alacartadigital/AlacartadigitalProjectPage";
import alacartadigital from "../../features/work/projects/alacartadigital/alacartadigital";
import DeporTravelProjectPage from "../../features/work/projects/depor-travel/DeporTravelProjectPage";
import deporTravel from "../../features/work/projects/depor-travel/depor-travel";
import KikiricoinProjectPage from "../../features/work/projects/kikiricoin/KikiricoinProjectPage";
import kikiricoin from "../../features/work/projects/kikiricoin/kikiricoin";
import NotionPoweredBlogProjectPage from "../../features/work/projects/notion-powered-blog/NotionPoweredBlogProjectPage";
import notionPoweredBlog from "../../features/work/projects/notion-powered-blog/notion-powered-blog";
import { allProjects } from "../../features/work/projects/projectLists";
import QuatroProjectPage from "../../features/work/projects/quatro/QuatroProjectPage";
import quatro from "../../features/work/projects/quatro/quatro";
import RossaCalendarProjectPage from "../../features/work/projects/rossa-calendar/RossaCalendarProjectPage";
import rossaCalendar from "../../features/work/projects/rossa-calendar/rossa-calendar";
import SplashProjectPage from "../../features/work/projects/splash/SplashProjectPage";
import splash from "../../features/work/projects/splash/splash";
import TravelmapProjectPage from "../../features/work/projects/travelmap/TravelmapProjectPage";
import travelmap from "../../features/work/projects/travelmap/travelmap";
import Layout from "../../layouts/Layout";
import type { Project } from "../../types/types";
import marte from "../../features/work/projects/marte/marte";
import MarteProjectPage from "../../features/work/projects/marte/MarteProjectPage";

const projectComponentsByName: { [key in Project["slug"]]: React.ElementType } = {
  [after.slug]: AfterProjectPage,
  [splash.slug]: SplashProjectPage,
  [alacartadigital.slug]: AlacartadigitalProjectPage,
  [quatro.slug]: QuatroProjectPage,
  [marte.slug]: MarteProjectPage,
  [kikiricoin.slug]: KikiricoinProjectPage,
  [travelmap.slug]: TravelmapProjectPage,
  [notionPoweredBlog.slug]: NotionPoweredBlogProjectPage,
  [deporTravel.slug]: DeporTravelProjectPage,
  [rossaCalendar.slug]: RossaCalendarProjectPage,
};

export default function WorkPage({ project }: { project: Project }) {
  const Component = projectComponentsByName[project.slug];

  return (
    <Layout>
      <PageMeta
        canonicalPath={getWorkProjectPath(project.slug)}
        title={`${project.name}, by Guillermo de la Puente`}
        description={
          "High quality web applications and experiments. Splash, alacartadigital, After Memorials..."
        }
      />

      <Component />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = allProjects.map((project) => ({
    params: {
      projectSlug: project.slug,
    },
  }));
  return {
    paths, // Pre-render only these paths at build time.
    fallback: "blocking", // { fallback: false } means other routes should 404.
  };
}

export async function getStaticProps(context) {
  const projectSlug = context.params.projectSlug as string;

  const project = allProjects.find((project) => project.slug === projectSlug);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
    },
  };
}
