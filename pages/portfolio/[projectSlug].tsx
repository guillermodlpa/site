import React from "react";
import PageMeta from "../../components/PageMeta";
import { getPortfolioProjectPath } from "../../constants/paths";
import after from "../../features/portfolio/projects/after/after";
import AfterProjectPage from "../../features/portfolio/projects/after/AfterProjectPage";
import alacartadigital from "../../features/portfolio/projects/alacartadigital/alacartadigital";
import AlacartadigitalProjectPage from "../../features/portfolio/projects/alacartadigital/AlacartadigitalProjectPage";
import deporTravel from "../../features/portfolio/projects/depor-travel/depor-travel";
import DeporTravelProjectPage from "../../features/portfolio/projects/depor-travel/DeporTravelProjectPage";
import kikiricoin from "../../features/portfolio/projects/kikiricoin/kikiricoin";
import KikiricoinProjectPage from "../../features/portfolio/projects/kikiricoin/KikiricoinProjectPage";
import notionPoweredBlog from "../../features/portfolio/projects/notion-powered-blog/notion-powered-blog";
import NotionPoweredBlogProjectPage from "../../features/portfolio/projects/notion-powered-blog/NotionPoweredBlogProjectPage";
import { allProjects } from "../../features/portfolio/projects/projectLists";
import quatro from "../../features/portfolio/projects/quatro/quatro";
import QuatroProjectPage from "../../features/portfolio/projects/quatro/QuatroProjectPage";
import splash from "../../features/portfolio/projects/splash/splash";
import SplashProjectPage from "../../features/portfolio/projects/splash/SplashProjectPage";
import travelmap from "../../features/portfolio/projects/travelmap/travelmap";
import TravelmapProjectPage from "../../features/portfolio/projects/travelmap/TravelmapProjectPage";
import Layout from "../../layouts/Layout";
import { Project } from "../../types/types";
import rossaCalendar from "../../features/portfolio/projects/rossa-calendar/rossa-calendar";
import RossaCalendarProjectPage from "../../features/portfolio/projects/rossa-calendar/RossaCalendarProjectPage";

const projectComponentsByName: { [key in Project["slug"]]: React.ElementType } =
  {
    [after.slug]: AfterProjectPage,
    [splash.slug]: SplashProjectPage,
    [alacartadigital.slug]: AlacartadigitalProjectPage,
    [quatro.slug]: QuatroProjectPage,
    [kikiricoin.slug]: KikiricoinProjectPage,
    [travelmap.slug]: TravelmapProjectPage,
    [notionPoweredBlog.slug]: NotionPoweredBlogProjectPage,
    [deporTravel.slug]: DeporTravelProjectPage,
    [rossaCalendar.slug]: RossaCalendarProjectPage,
  };

export default function PortfolioPage({ project }: { project: Project }) {
  const Component = projectComponentsByName[project.slug];

  return (
    <Layout>
      <PageMeta
        canonicalPath={getPortfolioProjectPath(project.slug)}
        title={`${project.name} - Guillermo de la Puente - Freelance Software Engineer & Manager`}
        description={
          "Portfolio of high quality web applications and experiments. Splash, alacartadigital, After Memorials..."
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
