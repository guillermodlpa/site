import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import MagicalDivider from "../MagicalDivider";

export default function AppNav() {
  return (
    <Container py={4} maxWidth="container.md">
      <Box py={4}>
        <Heading size="lg" mb={2}>
          <NextLink passHref href="/">
            <Link variant="inheritColor">Guillermo de la Puente</Link>
          </NextLink>
        </Heading>

        <Text size="md">
          <NextLink passHref href="/blog">
            <Link variant="inheritColor">Blog</Link>
          </NextLink>
        </Text>
      </Box>
      <MagicalDivider />
    </Container>
  );
}
