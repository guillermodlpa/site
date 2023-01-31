import React from "react";
import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import MagicalDivider from "../../components/MagicalDivider";
import PortfolioHeader from "./PortfolioHeader";
import PersonalProjectsHeader from "./PersonalProjectsHeader";
import ProjectCard from "./ProjectCard";
import { personalProjects, professionalProjects } from "./projects/projects";

export default function Portfolio() {
  return (
    <Container maxWidth="container.md">
      <PortfolioHeader />

      <SimpleGrid spacingX={4} spacingY={6} columns={{ base: 1, md: 2 }}>
        {professionalProjects.map((project, index) => (
          <GridItem key={project.name}>
            <ProjectCard {...project} />
          </GridItem>
        ))}
      </SimpleGrid>

      <MagicalDivider width="auto" height="2px" mt={16} mb={16} />

      <PersonalProjectsHeader />

      <SimpleGrid spacingX={4} spacingY={6} columns={{ base: 1, md: 2 }}>
        {personalProjects.map((project, index) => (
          <GridItem key={project.name}>
            <ProjectCard {...project} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  );
}
