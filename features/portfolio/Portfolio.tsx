import ProfessionalProjectLayout from "./professionalProjects/ProfessionalProjectLayout";
import React from "react";
import { Flex } from "@chakra-ui/react";
import professionalProjects from "./professionalProjects/professionalProjects";
import MagicalDivider from "../../components/MagicalDivider";
import personalProjects from "./personalProjects/personalProjects";
import PersonalProjectLayout from "./personalProjects/PersonalProjectLayout";

export default function Portfolio() {
  return (
    <>
      {professionalProjects.map((project, index) => (
        <React.Fragment key={project.name}>
          <ProfessionalProjectLayout {...project} />
          {index + 1 < professionalProjects.length && (
            <MagicalDivider mx={4} width="auto" />
          )}
        </React.Fragment>
      ))}

      <MagicalDivider mx={4} width="auto" />

      <Flex flexWrap="wrap" justifyContent="center">
        {personalProjects.map((project) => (
          <PersonalProjectLayout key={project.name} {...project} />
        ))}
      </Flex>
    </>
  );
}
