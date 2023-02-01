import { GridItem, Hide, Link, Show, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";
import { useMemo } from "react";
import {
  getPortfolioProjectPath,
  PATH_PORTFOLIO,
} from "../../../constants/paths";
import { Project } from "../../../types/types";
import { allProjects } from "./projectLists";

function BackToPortfolioLink() {
  return (
    <NextLink href={PATH_PORTFOLIO}>
      <Link>Back to portfolio</Link>
    </NextLink>
  );
}

export default function ProjectPageFooter({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const previousProject = useMemo<Project | undefined>(() => {
    const currentProjectIndex = allProjects.findIndex(
      (project) => project.slug === currentSlug
    );
    return allProjects[currentProjectIndex - 1];
  }, [currentSlug]);
  const nextProject = useMemo<Project | undefined>(() => {
    const currentProjectIndex = allProjects.findIndex(
      (project) => project.slug === currentSlug
    );
    return allProjects[currentProjectIndex + 1];
  }, [currentSlug]);

  return (
    <>
      <SimpleGrid columns={{ base: 2, md: 3 }} width="full">
        <GridItem textAlign="left">
          {previousProject ? (
            <NextLink
              href={getPortfolioProjectPath(previousProject.slug)}
              passHref
              legacyBehavior
            >
              <Link>
                {"Previous project: "}
                {previousProject.name}
              </Link>
            </NextLink>
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
            <NextLink
              href={getPortfolioProjectPath(nextProject.slug)}
              passHref
              legacyBehavior
            >
              <Link>
                {"Next project: "}
                {nextProject.name}
              </Link>
            </NextLink>
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
