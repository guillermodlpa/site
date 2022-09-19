import ProfessionalProjectLayout from "./professionalProjects/ProfessionalProjectLayout";
import React from "react";
import { Flex } from "@chakra-ui/react";
import professionalProjects from "./professionalProjects/professionalProjects";
import MagicalDivider from "../../components/MagicalDivider";
import personalProjects from "./personalProjects/personalProjects";
import PersonalProjectLayout from "./personalProjects/PersonalProjectLayout";
import Intro from "../about/Intro";
import PortfolioHeader from "./PortfolioHeader";

export default function Portfolio() {
  return (
    <>
      <PortfolioHeader />

      {professionalProjects.map((project, index) => (
        <React.Fragment key={project.name}>
          <ProfessionalProjectLayout {...project} />
        </React.Fragment>
      ))}

      <Flex flexWrap="wrap" justifyContent="center">
        {personalProjects.map((project) => (
          <PersonalProjectLayout key={project.name} {...project} />
        ))}
      </Flex>
    </>
  );
}
