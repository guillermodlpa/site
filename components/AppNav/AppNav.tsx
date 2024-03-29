import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  PATH_BLOG,
  PATH_CONTACT,
  PATH_NEWSLETTER,
  PATH_PORTFOLIO,
} from "../../constants/paths";
import ColorModeButton from "../ColorModeButton";
import MagicalDivider from "../MagicalDivider";

const links = [
  { label: "Blog", path: PATH_BLOG },
  { label: "Portfolio", path: PATH_PORTFOLIO },
  { label: "Contact", path: PATH_CONTACT },
  { label: "Newsletter", path: PATH_NEWSLETTER },
];

export default function AppNav({ fullWidth = false }: { fullWidth?: boolean }) {
  const { pathname } = useRouter();

  return (
    <Container
      as="header"
      pb={4}
      maxWidth={fullWidth ? "full" : "container.md"}
    >
      <Box py={4}>
        <Heading size="xl" mb={2}>
          <NextLink passHref legacyBehavior href="/">
            <Link variant="inheritColor">Guillermo de la Puente</Link>
          </NextLink>
        </Heading>

        <Flex alignItems="center">
          <Wrap as="nav" spacingX={4} spacingY={1} flexGrow={1}>
            {links.map(({ label, path }) => (
              <WrapItem key={path}>
                <Text size="md" color="chakra-body-soft-headline">
                  <NextLink passHref legacyBehavior href={path}>
                    <Link
                      variant="inheritColor"
                      aria-current={
                        path !== "/" && pathname?.startsWith(path)
                          ? "page"
                          : false
                      }
                      borderBottomWidth={
                        path !== "/" && pathname?.startsWith(path)
                          ? "1px"
                          : "0px"
                      }
                      borderColor="currentColor"
                    >
                      {label}
                    </Link>
                  </NextLink>
                </Text>
              </WrapItem>
            ))}
          </Wrap>

          <ColorModeButton />
        </Flex>
      </Box>

      <MagicalDivider as="div" />
    </Container>
  );
}
