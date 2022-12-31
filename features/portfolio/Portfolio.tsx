import ProfessionalProjectLayout from "./professionalProjects/ProfessionalProjectLayout";
import React from "react";
import { Flex } from "@chakra-ui/react";
import professionalProjects from "./professionalProjects/professionalProjects";
import MagicalDivider from "../../components/MagicalDivider";
import personalProjects from "./personalProjects/personalProjects";
import PersonalProjectLayout from "./personalProjects/PersonalProjectLayout";
import PortfolioHeader from "./PortfolioHeader";
import PersonalProjectsHeader from "./PersonalProjectsHeader";

export default function Portfolio() {
  return (
    <>
      <PortfolioHeader />

      {professionalProjects.map((project, index) => (
        <React.Fragment key={project.name}>
          <ProfessionalProjectLayout {...project} />
        </React.Fragment>
      ))}

      <MagicalDivider width="auto" mx={6} />
      <PersonalProjectsHeader />

      <Flex flexWrap="wrap" justifyContent="center" mb={8}>
        {personalProjects.map((project) => (
          <PersonalProjectLayout key={project.name} {...project} />
        ))}
      </Flex>
    </>
  );
}
