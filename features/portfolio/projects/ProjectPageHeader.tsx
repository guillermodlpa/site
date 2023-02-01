import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import NexImage, { StaticImageData } from "next/image";

export default function ProjectPageHeader({
  name,
  subheadline,
  logo,
}: {
  logo: {
    src: { light: StaticImageData; dark: StaticImageData };
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    style?: { [key: string]: string | number };
  } | null;
  name: string;
  subheadline: string;
}) {
  const logoSrc = useColorModeValue(logo?.src?.dark, logo?.src?.light);

  return (
    <Flex mb={{ base: 8, md: 16 }} flexDirection="column" alignItems="center">
      <Heading as="h1" fontSize="5xl" textAlign="center" mb={4}>
        {logo ? (
          <>
            <NexImage
              {...logo}
              src={logoSrc}
              style={{ margin: "0 auto", ...(logo.style || {}) }}
            />
            <Box as="span" display="none">
              {name}
            </Box>
          </>
        ) : (
          name
        )}
      </Heading>

      <Text maxWidth={{ base: "100%", md: "80%" }} textAlign="center">
        {subheadline}
      </Text>
    </Flex>
  );
}
