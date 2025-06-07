import { Box, Container, Link, Wrap, WrapItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { PATH_BLOG, PATH_CONTACT, PATH_WORK } from "../../constants/paths";
import MagicalDivider from "../MagicalDivider";
import SocialLinks from "../SocialLinks";

const links = [
  { label: "Home", path: "/" },
  { label: "Work", path: PATH_WORK },
  { label: "Blog", path: PATH_BLOG },
  { label: "Contact", path: PATH_CONTACT },
];

export default function AppFooter({
  fullWidth = false,
}: {
  fullWidth: boolean;
}) {
  const { pathname } = useRouter();
  return (
    <Container as="footer" py={4} maxWidth={fullWidth ? "full" : "container.md"}>
      <MagicalDivider as="div" />

      <Box py={4} display="flex" justifyContent="space-between">
        <Wrap spacingX={4} spacingY={2} direction={{ base: "column", md: "row" }}>
          {links.map(({ label, path }) => (
            <WrapItem key={path}>
              <Link
                as={NextLink}
                href={path}
                aria-current={path !== "/" && pathname?.startsWith(path) ? "page" : false}
                borderBottomWidth={path !== "/" && pathname?.startsWith(path) ? "1px" : "0px"}
                borderColor="currentColor"
              >
                {label}
              </Link>
            </WrapItem>
          ))}
        </Wrap>

        <SocialLinks size={6} />
      </Box>
    </Container>
  );
}
