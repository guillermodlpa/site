import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { PATH_BLOG, PATH_CONTACT, PATH_WORK } from "../../constants/paths";
import OpacitySlideFade from "../OpacitySlideFade";
import useScrollThreshold from "./useScrollThreshold";

const ASIDE_WIDTH = 150;

const links = [
  { label: "Home", path: "/" },
  { label: "Work", path: PATH_WORK },
  { label: "Blog", path: PATH_BLOG },
  { label: "Contact", path: PATH_CONTACT },
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
      <Flex flexDirection="column" alignItems="stretch" pt={8} position="sticky" top={0}>
        <OpacitySlideFade in={visible}>
          <Text mb={2} fontSize="sm" textAlign="right" color="chakra-body-text-secondary">
            {"Guillermo de la Puente"}
          </Text>
          <Text mb={2} fontSize="sm" textAlign="right">
            {"Freelance Software Engineer & Manager"}
          </Text>

          {links.map(({ label, path }) => (
            <Text key={path} fontSize="sm" textAlign="right" mb={1}>
              <Link as={NextLink} href={path}>
                {label}
              </Link>
            </Text>
          ))}
        </OpacitySlideFade>
      </Flex>
    </Box>
  );
}
