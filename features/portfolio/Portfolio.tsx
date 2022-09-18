import TableOfContents from "./TableOfContents";

import ProfessionalProjectLayout from "./ProfessionalProjectLayout";
import React from "react";
import { Box, Divider, Text } from "@chakra-ui/react";
import professionalProjects from "./data/professionalProjects";
import MagicalDivider from "../../components/MagicalDivider";

export default function Portfolio() {
  return (
    <>
      {/* <TableOfContents /> */}

      {professionalProjects.map((project, index) => (
        <React.Fragment key={project.name}>
          {/* <Divider /> */}
          <ProfessionalProjectLayout {...project} />
          {index + 1 < professionalProjects.length && (
            <Box px={4}>
              <MagicalDivider />
            </Box>
          )}
        </React.Fragment>
      ))}
    </>
  );
}
