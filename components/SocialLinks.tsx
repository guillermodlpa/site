import { Link, Wrap, WrapItem, type WrapProps } from "@chakra-ui/react";
import GitHubLogo from "./icons/GitHubLogo";
import LinkedInLogo from "./icons/LinkedInLogo";

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
];

function SocialLinks({ size = 7, ...rest }: { size?: number } & WrapProps) {
  return (
    <Wrap spacing={Math.round(size / 2)} {...rest}>
      {socialLinks.map(({ href, label, Icon }) => (
        <WrapItem key={href} width={size} height={size}>
          <Link href={href} aria-label={label} isExternal>
            <Icon boxSize={size} />
          </Link>
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default SocialLinks;
