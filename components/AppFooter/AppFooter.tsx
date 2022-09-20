import { Box, Container, Link, Wrap, WrapItem } from "@chakra-ui/react";
import NextLink from "next/link";
import {
  PATH_ABOUT,
  PATH_BLOG,
  PATH_CONTACT,
  PATH_PORTFOLIO,
} from "../../constants/paths";
import useActivePathname from "../../hooks/useActivePathname";
import MagicalDivider from "../MagicalDivider";
import SocialLinks from "../SocialLinks";

const links = [
  { label: "Home", path: "/" },
  { label: "Blog", path: PATH_BLOG },
  { label: "Portfolio", path: PATH_PORTFOLIO },
  { label: "About", path: PATH_ABOUT },
  { label: "Contact", path: PATH_CONTACT },
];

export default function AppFooter({
  fullWidth = false,
}: {
  fullWidth: boolean;
}) {
  const activePathname = useActivePathname();
  return (
    <Container
      as="footer"
      py={4}
      maxWidth={fullWidth ? "full" : "container.md"}
    >
      <MagicalDivider as="div" />

      <Box py={4} display="flex" justifyContent="space-between">
        <Wrap spacing={4} direction={{ base: "column", md: "row" }}>
          {links.map(({ label, path }) => (
            <WrapItem key={path}>
              <NextLink passHref href={path}>
                <Link
                  aria-current={activePathname === path ? "page" : false}
                  borderBottomWidth={activePathname === path ? "1px" : "0px"}
                  borderColor="currentColor"
                >
                  {label}
                </Link>
              </NextLink>
            </WrapItem>
          ))}
        </Wrap>

        <SocialLinks size={6} />
      </Box>
    </Container>
  );
}
