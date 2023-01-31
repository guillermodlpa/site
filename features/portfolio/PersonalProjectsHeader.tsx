import { Box, Heading, Text } from "@chakra-ui/react";

export default function PersonalProjectsHeader() {
  return (
    <Box maxWidth="container.lg" margin="0 auto" mt={10} mb={10}>
      <Heading as="h2" size="md" mb={6}>
        {`Startup Projects & Experiments`}
      </Heading>
    </Box>
  );
}
