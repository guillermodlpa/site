import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import MagicalDivider from "../../components/MagicalDivider";
import SocialLinks from "../../components/SocialLinks";
import { PATH_ABOUT, PATH_BLOG, PATH_PORTFOLIO } from "../../constants/paths";

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

          <Flex as="nav" mb={8} gap={3}>
            <NextLink href={PATH_BLOG} passHref>
              <Link fontSize="xl">Blog</Link>
            </NextLink>

            <NextLink href={PATH_PORTFOLIO} passHref>
              <Link fontSize="xl">Portfolio</Link>
            </NextLink>

            <NextLink href={PATH_ABOUT} passHref>
              <Link fontSize="xl">About</Link>
            </NextLink>
          </Flex>

          <SocialLinks />
        </Box>

        <MagicalDivider as="div" />
      </Box>
    </Box>
  );
}

export default Home;
