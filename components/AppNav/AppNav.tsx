import {
  Box,
  Container,
  Heading,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { PATH_BLOG, PATH_PORTFOLIO } from "../../constants/paths";
import MagicalDivider from "../MagicalDivider";

export default function AppNav({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <Container
      as="header"
      pb={4}
      maxWidth={fullWidth ? "full" : "container.md"}
    >
      <Box py={4}>
        <Heading size="xl" mb={2}>
          <NextLink passHref href="/">
            <Link variant="inheritColor">Guillermo de la Puente</Link>
          </NextLink>
        </Heading>

        <Wrap as="nav">
          <WrapItem>
            <Text size="md">
              <NextLink passHref href={PATH_BLOG}>
                <Link variant="inheritColor">Blog</Link>
              </NextLink>
            </Text>
          </WrapItem>
          <WrapItem>
            <Text size="md">
              <NextLink passHref href={PATH_PORTFOLIO}>
                <Link variant="inheritColor">Portfolio</Link>
              </NextLink>
            </Text>
          </WrapItem>
        </Wrap>
      </Box>
      <MagicalDivider as="div" />
    </Container>
  );
}
