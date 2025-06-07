import { Box, Container, Flex, Heading, Link, Text, Wrap, WrapItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { PATH_BLOG, PATH_CONTACT, PATH_WORK } from "../../constants/paths";
import ColorModeButton from "../ColorModeButton";
import MagicalDivider from "../MagicalDivider";

const links = [
  { label: "Work", path: PATH_WORK },
  { label: "Blog", path: PATH_BLOG },
  { label: "Contact", path: PATH_CONTACT },
];

export default function AppNav({ fullWidth = false }: { fullWidth?: boolean }) {
  const { pathname } = useRouter();

  return (
    <Container as="header" pb={4} maxWidth={fullWidth ? "full" : "container.md"}>
      <Box py={4}>
        <Heading size="xl" mb={2}>
          <Link as={NextLink} href="/" variant="inheritColor">
            Guillermo de la Puente
          </Link>
        </Heading>

        <Flex alignItems="center">
          <Wrap as="nav" spacingX={4} spacingY={1} flexGrow={1}>
            {links.map(({ label, path }) => (
              <WrapItem key={path}>
                <Text size="md" color="chakra-body-soft-headline">
                  <Link
                    as={NextLink}
                    href={path}
                    variant="inheritColor"
                    aria-current={path !== "/" && pathname?.startsWith(path) ? "page" : false}
                    borderBottomWidth={path !== "/" && pathname?.startsWith(path) ? "1px" : "0px"}
                    borderColor="currentColor"
                  >
                    {label}
                  </Link>
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
