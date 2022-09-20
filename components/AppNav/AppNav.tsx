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
import {
  PATH_ABOUT,
  PATH_BLOG,
  PATH_CONTACT,
  PATH_PORTFOLIO,
} from "../../constants/paths";
import useActivePathname from "../../hooks/useActivePathname";
import MagicalDivider from "../MagicalDivider";

const links = [
  { label: "Blog", path: PATH_BLOG },
  { label: "Portfolio", path: PATH_PORTFOLIO },
  { label: "About", path: PATH_ABOUT },
  { label: "Contact", path: PATH_CONTACT },
];

export default function AppNav({ fullWidth = false }: { fullWidth?: boolean }) {
  const activePathname = useActivePathname();

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

        <Wrap as="nav" spacing={4}>
          {links.map(({ label, path }) => (
            <WrapItem key={path}>
              <Text size="md" color="neutral.600">
                <NextLink passHref href={path}>
                  <Link
                    variant="inheritColor"
                    aria-current={activePathname === path ? "page" : false}
                    borderBottomWidth={activePathname === path ? "1px" : "0px"}
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
