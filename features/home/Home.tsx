import { Box, Heading, Link, Text, Wrap, WrapItem } from "@chakra-ui/react";
import NextLink from "next/link";
import MagicalDivider from "../../components/MagicalDivider";
import SocialLinks from "../../components/SocialLinks";
import {
  PATH_BLOG,
  PATH_CONTACT,
  PATH_NEWSLETTER,
  PATH_PORTFOLIO,
} from "../../constants/paths";

function Home() {
  return (
    <Box
      width="full"
      maxWidth="full"
      py={8}
      px="5vw"
      // @ts-ignore
      minHeight={[["100vh", "fill-available"]]}
      display="flex"
      flexDirection="column"
    >
      <Box
        flexGrow={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        mb={[0, 0, 0, 0, 0, 20]}
      >
        <MagicalDivider as="div" />

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          my={"12.5vh"}
        >
          <Heading as="h1" size="3xl" mb={8}>
            Guillermo de la Puente
          </Heading>
          <Heading as="h2" size="lg" mb={2}>
            {`Freelance Frontend Engineer & Manager`}
          </Heading>
          <Text variant="secondaryText" size="md" mb={6}>
            TypeScript, React, Node
          </Text>

          <Wrap as="nav" spacing={4} mb={8}>
            <WrapItem>
              <NextLink href={PATH_BLOG} passHref legacyBehavior>
                <Link fontSize="xl">Blog</Link>
              </NextLink>
            </WrapItem>
            <WrapItem>
              <NextLink href={PATH_PORTFOLIO} passHref legacyBehavior>
                <Link fontSize="xl">Portfolio</Link>
              </NextLink>
            </WrapItem>
            <WrapItem>
              <NextLink href={PATH_CONTACT} passHref legacyBehavior>
                <Link fontSize="xl">Contact</Link>
              </NextLink>
            </WrapItem>
            <WrapItem>
              <NextLink href={PATH_NEWSLETTER} passHref legacyBehavior>
                <Link fontSize="xl">Newsletter</Link>
              </NextLink>
            </WrapItem>
          </Wrap>

          <SocialLinks />
        </Box>

        <MagicalDivider as="div" />
      </Box>
    </Box>
  );
}

export default Home;
