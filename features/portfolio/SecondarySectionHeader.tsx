import { Box, Heading, Text } from "@chakra-ui/react";

export default function SecondarySectionHeader({
  children,
}: {
  children: string;
}) {
  return (
    <Box maxWidth="container.lg" margin="0 auto" mt={10} mb={10}>
      <Heading as="h2" size="md" mb={6}>
        {children}
      </Heading>
    </Box>
  );
}
