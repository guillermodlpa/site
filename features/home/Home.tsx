import {
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
    <Container>
      <Heading as="h1" size="xl">
        Guillermo de la Puente
      </Heading>
      <Heading as="h2" size="lg">
        Engineering manager. Software developer.
      </Heading>

      <Text>
        <NextLink href="/blog" passHref>
          <Link>Blog</Link>
        </NextLink>
      </Text>

      <Wrap>
        {socialLinks.map(({ href, label, Icon }) => (
          <WrapItem key={href}>
            <Link href={href} aria-label={label}>
              <Icon />
            </Link>
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  );
}

export default Home;
