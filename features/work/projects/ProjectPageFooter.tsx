import { GridItem, Hide, Link, Show, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";
import { useMemo } from "react";
import { PATH_WORK, getWorkProjectPath } from "../../../constants/paths";
import type { Project } from "../../../types/types";
import { allProjects } from "./projectLists";

function BackToWorkIndexPage() {
  return (
    <Link as={NextLink} href={PATH_WORK}>
      Back to works page
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
            <Link as={NextLink} href={getWorkProjectPath(previousProject.slug)}>
              <span role="img" aria-label="previous project">
                {"< "}
              </span>
              {previousProject.name}
            </Link>
          ) : (
            <></>
          )}
        </GridItem>

        <Show above="md">
          <GridItem textAlign="center">
            <BackToWorkIndexPage />
          </GridItem>
        </Show>

        <GridItem textAlign="right">
          {nextProject ? (
            <Link as={NextLink} href={getWorkProjectPath(nextProject.slug)}>
              {nextProject.name}
              <span role="img" aria-label="next project">
                {" >"}
              </span>
            </Link>
          ) : (
            <></>
          )}
        </GridItem>
      </SimpleGrid>

      <Hide above="md">
        <GridItem textAlign="center" mt={4}>
          <BackToWorkIndexPage />
        </GridItem>
      </Hide>
    </>
  );
}
