import React from "react";
import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import MagicalDivider from "../../components/MagicalDivider";
import PortfolioHeader from "./PortfolioHeader";
import SecondarySectionHeader from "./SecondarySectionHeader";
import ProjectCard from "./ProjectCard";
import {
  personalProjects,
  professionalProjects,
} from "./projects/projectLists";
import TagCloud from "../../components/TagCloud";
import technologyTags from "../../constants/technologyTags";
import OpenSourceSection from "./OpenSourceSection";

export default function Portfolio() {
  return (
    <Container maxWidth="container.md" pb={20}>
      <PortfolioHeader />

      <SimpleGrid spacingX={4} spacingY={6} columns={{ base: 1, md: 2 }}>
        {professionalProjects.map((project, index) => (
          <GridItem key={project.name}>
            <ProjectCard {...project} />
          </GridItem>
        ))}
      </SimpleGrid>

      <MagicalDivider width="auto" height="2px" mt={16} mb={16} />

      <SecondarySectionHeader>
        {`Startup Projects & Experiments`}
      </SecondarySectionHeader>

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
