import { Box, Heading, Text } from "@chakra-ui/react";

export default function WorkHeader() {
  return (
    <Box maxWidth="container.lg" margin="0 auto" pt={10} pb={16}>
      <Heading as="h1" size="xl" mb={2}>
        Works
      </Heading>
      <Text fontSize="lg" color="chakra-body-text-secondary">
        A mix of full-time jobs, freelance collaborations, and startup experiments.
      </Text>
    </Box>
  );
}
