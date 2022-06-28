import { Box, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import MagicalDivider from "../../components/MagicalDivider";
import SocialLinks from "../../components/SocialLinks";

function Home() {
  return (
    <Box
      width="full"
      maxWidth="full"
      py={8}
      px="5vw"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Box
        flexGrow={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        mb={[0, 20]}
      >
        <MagicalDivider />

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          my={"12.5vh"}
        >
          <Heading as="h1" size="2xl" mb={8}>
            Guillermo de la Puente
          </Heading>
          <Heading as="h2" size="lg" mb={12}>
            Engineering manager. Software developer
          </Heading>

          <Text mb={8} fontSize="xl">
            <NextLink href="/blog" passHref>
              <Link>Blog</Link>
            </NextLink>
          </Text>

          <SocialLinks />
        </Box>

        <MagicalDivider />
      </Box>
    </Box>
  );
}

export default Home;
