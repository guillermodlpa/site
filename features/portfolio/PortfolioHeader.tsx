import { Box, Heading, Text } from "@chakra-ui/react";

export default function PortfolioHeader() {
  return (
    <Box maxWidth="container.lg" margin="0 auto" pt={10} pb={16}>
      <Heading as="h1" size="xl" mb={2}>
        Software Engineering Portfolio
      </Heading>
      <Text fontSize="lg" color="chakra-body-text-secondary">
        High quality applications, startup projects and experiments
      </Text>
    </Box>
  );
}
