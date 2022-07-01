import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { PATH_BLOG } from "../../constants/paths";
import MagicalDivider from "../MagicalDivider";

export default function AppNav() {
  return (
    <Container pb={4} maxWidth="container.md">
      <Box py={4}>
        <Heading size="xl" mb={2}>
          <NextLink passHref href="/">
            <Link variant="inheritColor">Guillermo de la Puente</Link>
          </NextLink>
        </Heading>

        <Text size="md">
          <NextLink passHref href={PATH_BLOG}>
            <Link variant="inheritColor">Blog</Link>
          </NextLink>
        </Text>
      </Box>
      <MagicalDivider />
    </Container>
  );
}
