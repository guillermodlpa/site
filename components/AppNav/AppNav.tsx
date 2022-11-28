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
import { useRouter } from "next/router";
import {
  PATH_ABOUT,
  PATH_BLOG,
  PATH_CONTACT,
  PATH_NEWSLETTER,
  PATH_PORTFOLIO,
} from "../../constants/paths";
import MagicalDivider from "../MagicalDivider";

const links = [
  { label: "Blog", path: PATH_BLOG },
  { label: "Portfolio", path: PATH_PORTFOLIO },
  { label: "About", path: PATH_ABOUT },
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

        <Wrap as="nav" spacingX={4} spacingY={1}>
          {links.map(({ label, path }) => (
            <WrapItem key={path}>
              <Text size="md" color="neutral.600">
                <NextLink passHref legacyBehavior href={path}>
                  <Link
                    variant="inheritColor"
                    aria-current={
                      path !== "/" && pathname?.startsWith(path)
                        ? "page"
                        : false
                    }
                    borderBottomWidth={
                      path !== "/" && pathname?.startsWith(path) ? "1px" : "0px"
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
      </Box>
      <MagicalDivider as="div" />
    </Container>
  );
}
