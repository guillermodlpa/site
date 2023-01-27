import { AspectRatio, Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import MagicalDivider from "../../components/MagicalDivider";

function getResponsiveSpacing(mdSpacing: number) {
  return {
    base: `${mdSpacing / 1.5}vw`,
    md: mdSpacing,
  };
}

export default function BusinessCard() {
  return (
    <AspectRatio ratio={3.5 / 2} mb={8}>
      <Box
        width="full"
        height="full"
        boxShadow="md"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          textAlign="left"
          px={getResponsiveSpacing(6)}
          py={getResponsiveSpacing(8)}
          as="section"
          width="full"
          height="full"
        >
          <MagicalDivider mb={getResponsiveSpacing(6)} height={"3px"} />
          <Flex flexGrow={1} flexDirection="column" justifyContent="center">
            <Heading
              as="h1"
              fontSize={{ base: "5vw", md: "lg" }}
              mb={getResponsiveSpacing(4)}
            >
              Guillermo de la Puente
            </Heading>
            <Heading
              as="h2"
              fontSize={{ base: "4vw", md: "sm" }}
              mb={getResponsiveSpacing(1)}
            >
              Freelance Software Engineer & Manager
            </Heading>
            <Text
              fontSize={{ base: "3vw", md: "xs" }}
              variant="secondaryText"
              mb={getResponsiveSpacing(4)}
            >
              TypeScript, React, Node
            </Text>
            <Text fontSize={{ base: "3vw", md: "xs" }} variant="secondaryText">
              <NextLink href="/" passHref legacyBehavior>
                <Link>https://guillermodlpa.com</Link>
              </NextLink>
            </Text>
          </Flex>
          <MagicalDivider mt={getResponsiveSpacing(6)} height={"3px"} />
        </Flex>
      </Box>
    </AspectRatio>
  );
}
