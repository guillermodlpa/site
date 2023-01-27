import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import {
  PATH_BLOG,
  PATH_CONTACT,
  PATH_NEWSLETTER,
  PATH_PORTFOLIO,
} from "../../constants/paths";
import OpacitySlideFade from "../../features/portfolio/OpacitySlideFade";
import useScrollThreshold from "./useScrollThreshold";

const ASIDE_WIDTH = 150;

const links = [
  { label: "Home", path: "/" },
  { label: "Blog", path: PATH_BLOG },
  { label: "Portfolio", path: PATH_PORTFOLIO },
  { label: "Contact", path: PATH_CONTACT },
  { label: "Newsletter", path: PATH_NEWSLETTER },
];

export default function AuthorAside() {
  const visible = useScrollThreshold(100);

  return (
    <Box
      as="aside"
      position="absolute"
      top={0}
      right={0}
      width={ASIDE_WIDTH}
      height="100%"
      transform="translateX(100%)"
    >
      <Flex
        flexDirection="column"
        alignItems="stretch"
        pt={8}
        position="sticky"
        top={0}
      >
        <OpacitySlideFade in={visible}>
          <Text
            mb={2}
            fontSize="sm"
            textAlign="right"
            color="chakra-body-text-secondary"
          >{`Guillermo de la Puente`}</Text>
          <Text
            mb={2}
            fontSize="sm"
            textAlign="right"
          >{`Freelance Software Engineer & Manager`}</Text>

          {links.map(({ label, path }) => (
            <Text key={path} fontSize="sm" textAlign="right" mb={1}>
              <NextLink passHref legacyBehavior href={path}>
                <Link>{label}</Link>
              </NextLink>
            </Text>
          ))}
        </OpacitySlideFade>
      </Flex>
    </Box>
  );
}
