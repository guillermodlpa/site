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
import LinkedInLogo from "../../components/icons/LinkedInLogo";
import GitHubLogo from "../../components/icons/GitHubLogo";
import InstagramLogo from "../../components/icons/InstagramLogo";
import TwitterLogo from "../../components/icons/TwitterLogo";
import MagicalDivider from "../../components/MagicalDivider";

const socialLinks = [
  {
    href: "https://linkedin.com/in/guillermodlpa",
    label: "Guillermo's LinkedIn profile",
    Icon: LinkedInLogo,
  },
  {
    href: "https://github.com/guillermodlpa",
    label: "Guillermo's GitHub profile",
    Icon: GitHubLogo,
  },
  {
    href: "https://www.instagram.com/guillermodlpa",
    label: "Guillermo's Instagram profile",
    Icon: InstagramLogo,
  },
  {
    href: "https://twitter.com/guillermodlpa",
    label: "Guillermo's Twitter feed",
    Icon: TwitterLogo,
  },
];

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

          <Wrap spacing={4}>
            {socialLinks.map(({ href, label, Icon }) => (
              <WrapItem key={href}>
                <Link href={href} aria-label={label}>
                  <Icon boxSize={8} />
                </Link>
              </WrapItem>
            ))}
          </Wrap>
        </Box>

        <MagicalDivider />
      </Box>
    </Box>
  );
}

export default Home;
