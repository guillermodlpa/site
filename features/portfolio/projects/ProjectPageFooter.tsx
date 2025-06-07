import { GridItem, Hide, Link, Show, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";
import { useMemo } from "react";
import { PATH_PORTFOLIO, getPortfolioProjectPath } from "../../../constants/paths";
import type { Project } from "../../../types/types";
import { allProjects } from "./projectLists";

function BackToPortfolioLink() {
  return (
    <Link as={NextLink} href={PATH_PORTFOLIO}>
      Back to portfolio
    </Link>
  );
}

export default function ProjectPageFooter({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const previousProject = useMemo<Project | undefined>(() => {
    const currentProjectIndex = allProjects.findIndex((project) => project.slug === currentSlug);
    return allProjects[currentProjectIndex - 1];
  }, [currentSlug]);
  const nextProject = useMemo<Project | undefined>(() => {
    const currentProjectIndex = allProjects.findIndex((project) => project.slug === currentSlug);
    return allProjects[currentProjectIndex + 1];
  }, [currentSlug]);

  return (
    <>
      <SimpleGrid columns={{ base: 2, md: 3 }} width="full">
        <GridItem textAlign="left">
          {previousProject ? (
            <Link as={NextLink} href={getPortfolioProjectPath(previousProject.slug)}>
              {"Previous project: "}
              {previousProject.name}
            </Link>
          ) : (
            <></>
          )}
        </GridItem>

        <Show above="md">
          <GridItem textAlign="center">
            <BackToPortfolioLink />
          </GridItem>
        </Show>

        <GridItem textAlign="right">
          {nextProject ? (
            <Link as={NextLink} href={getPortfolioProjectPath(nextProject.slug)}>
              {"Next project: "}
              {nextProject.name}
            </Link>
          ) : (
            <></>
          )}
        </GridItem>
      </SimpleGrid>

      <Hide above="md">
        <GridItem textAlign="center" mt={4}>
          <BackToPortfolioLink />
        </GridItem>
      </Hide>
    </>
  );
}
