import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { PATH_ABOUT } from "../../constants/paths";
import OpacitySlideFade from "../../features/portfolio/OpacitySlideFade";
import useScrollThreshold from "./useScrollThreshold";

const ASIDE_WIDTH = 150;

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
          >{`Freelance Frontend Engineer & Manager`}</Text>
          <Text fontSize="sm" textAlign="right" mb={1}>
            <NextLink passHref href={PATH_ABOUT}>
              <Link>Portfolio</Link>
            </NextLink>
          </Text>
          <Text fontSize="sm" textAlign="right">
            <NextLink passHref href={PATH_ABOUT}>
              <Link>About</Link>
            </NextLink>
          </Text>
        </OpacitySlideFade>
      </Flex>
    </Box>
  );
}
