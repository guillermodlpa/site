import { Link, Wrap, WrapItem } from "@chakra-ui/react";
import LinkedInLogo from "./icons/LinkedInLogo";
import GitHubLogo from "./icons/GitHubLogo";
import InstagramLogo from "./icons/InstagramLogo";
import TwitterLogo from "./icons/TwitterLogo";

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

function SocialLinks({ size = 8 }: { size?: number }) {
  return (
    <Wrap spacing={Math.round(size / 2)}>
      {socialLinks.map(({ href, label, Icon }) => (
        <WrapItem key={href}>
          <Link href={href} aria-label={label} isExternal>
            <Icon boxSize={size} />
          </Link>
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default SocialLinks;
