import { Box, Heading, Text } from "@chakra-ui/react";

export default function PortfolioHeader() {
  return (
    <Box maxWidth="container.lg" margin="0 auto" px={4} pt={20} pb={10}>
      <Heading textAlign="center" as="h1" size="3xl" mb={6}>
        Software Engineering Portfolio
      </Heading>
      <Text textAlign="center" fontSize="xl" color="chakra-body-text-secondary">
        High quality web applications and experiments
      </Text>
    </Box>
  );
}
