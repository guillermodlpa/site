import { Box, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import MagicalDivider from "../../components/MagicalDivider";
import SocialLinks from "../../components/SocialLinks";
import { PATH_BLOG } from "../../constants/paths";

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
            {`Freelance Software Engineer & Manager`}
          </Heading>
          <Text variant="secondaryText" size="md" mb={6}>
            TypeScript, React, Node
          </Text>

          <Text mb={8} fontSize="xl">
            <NextLink href={PATH_BLOG} passHref>
              <Link>Blog</Link>
            </NextLink>
          </Text>

          <SocialLinks />
        </Box>

        <MagicalDivider as="div" />
      </Box>
    </Box>
  );
}

export default Home;
