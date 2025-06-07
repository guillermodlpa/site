import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import MagicalDivider from "../../components/MagicalDivider";
import TagCloud from "../../components/TagCloud";
import technologyTags from "../../constants/technologyTags";
import OpenSourceSection from "./OpenSourceSection";
import WorkHeader from "./WorkHeader";
import ProjectCard from "./ProjectCard";
import SecondarySectionHeader from "./SecondarySectionHeader";
import { personalProjects, professionalProjects } from "./projects/projectLists";

export default function Work() {
  return (
    <Container maxWidth="container.md" pb={20}>
      <WorkHeader />

      <SimpleGrid spacingX={4} spacingY={6} columns={{ base: 1, md: 2 }}>
        {professionalProjects.map((project, index) => (
          <GridItem key={project.name}>
            <ProjectCard {...project} />
          </GridItem>
        ))}
      </SimpleGrid>

      <MagicalDivider width="auto" height="2px" mt={16} mb={16} />

      <SecondarySectionHeader>{"Startup Projects & Experiments"}</SecondarySectionHeader>

      <SimpleGrid spacingX={4} spacingY={6} columns={{ base: 1, md: 2 }}>
        {personalProjects.map((project, index) => (
          <GridItem key={project.name}>
            <ProjectCard {...project} />
          </GridItem>
        ))}
      </SimpleGrid>

      <MagicalDivider width="auto" height="2px" mt={16} mb={16} />

      <OpenSourceSection />

      <TagCloud tags={technologyTags} mt={20} />
    </Container>
  );
}
