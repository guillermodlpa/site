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
import MagicalDivider from "../MagicalDivider";
import SocialLinks from "../SocialLinks";

export default function AppFooter() {
  return (
    <Container py={4} maxWidth="container.md">
      <MagicalDivider />

      <Box py={4} display="flex" justifyContent="space-between" gap={4}>
        <Wrap>
          <WrapItem>
            <NextLink passHref href="/">
              <Link>Home</Link>
            </NextLink>
          </WrapItem>
        </Wrap>

        <SocialLinks size={6} />
      </Box>
    </Container>
  );
}
