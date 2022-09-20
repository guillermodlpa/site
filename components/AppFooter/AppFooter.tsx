import { Box, Container, Link, Wrap, WrapItem } from "@chakra-ui/react";
import NextLink from "next/link";
import {
  PATH_ABOUT,
  PATH_BLOG,
  PATH_CONTACT,
  PATH_PORTFOLIO,
} from "../../constants/paths";
import MagicalDivider from "../MagicalDivider";
import SocialLinks from "../SocialLinks";

export default function AppFooter({
  fullWidth = false,
}: {
  fullWidth: boolean;
}) {
  return (
    <Container
      as="footer"
      py={4}
      maxWidth={fullWidth ? "full" : "container.md"}
    >
      <MagicalDivider as="div" />

      <Box py={4} display="flex" justifyContent="space-between">
        <Wrap spacing={4} direction={{ base: "column", md: "row" }}>
          <WrapItem>
            <NextLink passHref href="/">
              <Link>Home</Link>
            </NextLink>
          </WrapItem>
          <WrapItem>
            <NextLink passHref href={PATH_BLOG}>
              <Link>Blog</Link>
            </NextLink>
          </WrapItem>
          <WrapItem>
            <NextLink passHref href={PATH_PORTFOLIO}>
              <Link>Portfolio</Link>
            </NextLink>
          </WrapItem>
          <WrapItem>
            <NextLink passHref href={PATH_ABOUT}>
              <Link>About</Link>
            </NextLink>
          </WrapItem>
          <WrapItem>
            <NextLink passHref href={PATH_CONTACT}>
              <Link>Contact</Link>
            </NextLink>
          </WrapItem>
        </Wrap>

        <SocialLinks size={6} />
      </Box>
    </Container>
  );
}
