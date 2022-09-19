import { Box, Heading, Text } from "@chakra-ui/react";

export default function PersonalProjectsHeader() {
  return (
    <Box
      maxWidth="container.lg"
      margin="0 auto"
      px={4}
      my={{ base: 20, md: 40 }}
    >
      <Heading textAlign="center" as="h2" size="2xl" mb={6}>
        {`Personal Projects`}
      </Heading>
      <Text textAlign="center" fontSize="xl" color="chakra-body-text-secondary">
        Startups, experiments and educational pet projects
      </Text>
    </Box>
  );
}
