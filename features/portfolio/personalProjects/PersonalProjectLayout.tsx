import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRef } from "react";
import personalProjects from "./personalProjects";
import DevicePreviews from "../DevicePreviews";
import useParallax from "../hooks/useParallax";
import Technologies from "../Technologies";
import { MDXProvider } from "@mdx-js/react";
import useMarkdownComponents from "../hooks/useMarkdownComponents";

export default function PersonalProjectLayout({
  name,
  type,
  anchorId,
  date,
  logo,
  logoAlt,
  subheadline,
  technologies,
  colors,
  buttons,
  desktopImage,
  mobileImage,
  Description,
  backgroundImage,
  backgroundOverlay,
}: typeof personalProjects[0]) {
  const buttonBrandProps = {
    color: colors.accentForeground,
    backgroundColor: colors.accent,
    borderWidth: "1px",
    borderColor: colors.accent,
    _hover: {
      backgroundColor: colors.accentHightlighted,
      color: colors.accentHightlightedForeground,
      borderColor: colors.accentHightlightedForeground,
    },
    _focus: {
      backgroundColor: colors.accentHightlighted,
      color: colors.accentHightlightedForeground,
      borderColor: colors.accentHightlightedForeground,
    },
  };

  const buttonSecondaryBrandProps = {
    color: colors.accent,
    backgroundColor: colors.accentForeground,
    borderWidth: "1px",
    borderColor: colors.accent,
    _hover: {
      backgroundColor: colors.accentHightlightedForeground,
      color: colors.accentHightlighted,
      borderColor: colors.accentHightlighted,
    },
    _focus: {
      backgroundColor: colors.accentHightlightedForeground,
      color: colors.accentHightlighted,
      borderColor: colors.accentHightlighted,
    },
  };

  const markdownComponents = useMarkdownComponents({ colors });

  const sectionRef = useRef<HTMLDivElement>();
  const backgroundRef = useRef<HTMLDivElement>();
  useParallax(sectionRef, backgroundRef);

  return (
    <Box
      as="section"
      px={4}
      py={20}
      position="relative"
      overflow="hidden"
      id={anchorId}
      backgroundColor={colors.background}
      width={{ base: "100%", md: "33.333%" }}
      ref={sectionRef}
    >
      {backgroundImage && (
        <Box
          role="presentation"
          position="absolute"
          userSelect="none"
          {...backgroundImage.styles}
          ref={backgroundRef}
        >
          <Image
            src={backgroundImage.src}
            alt="Background"
            layout={backgroundImage.layout}
            objectFit="cover"
          />
        </Box>
      )}
      {backgroundOverlay && (
        <Box
          role="presentation"
          position="absolute"
          userSelect="none"
          top={0}
          left={0}
          width="100%"
          height="100%"
        >
          <Box
            background={backgroundOverlay}
            width="full"
            height="full"
            position="absolute"
            top={0}
            left={0}
          />
        </Box>
      )}
      <Flex
        as="header"
        alignItems="center"
        flexDirection="column"
        mb={8}
        position="relative" // sticky headers for mobile?
        zIndex={1}
      >
        <Box position={"static"} top={"auto"} right={"auto"} mb={"6"}>
          <Text color={colors.subheadline} fontSize="sm" opacity={0.75}>
            {date}
          </Text>
        </Box>
        <Box
          width="12rem"
          mb={8}
          height="5rem"
          overflow="hidden"
          position="relative"
          as="h3"
        >
          {/* for SEO, so these headers are indexed even though we show only the image */}
          <Text as="span" display="none">
            {name}
          </Text>
          <Image
            src={logo}
            alt={logoAlt}
            layout="fill"
            objectFit="scale-down"
          />
        </Box>
        <Text as="h4" textAlign="center" color={colors.subheadline}>
          {subheadline}
        </Text>
        <Box position={"static"} top={"auto"} right={"auto"} mb={"6"}>
          <Text color={colors.subheadline} fontSize="sm" opacity={0.75}>
            {`(${type})`}
          </Text>
        </Box>
      </Flex>
      <DevicePreviews
        desktopImage={desktopImage}
        mobileImage={mobileImage}
        mobileAppBarColor={colors.mobileAppBar}
        mb={8}
      />
      <Box mb={8} zIndex={1} position="relative">
        <MDXProvider components={markdownComponents}>
          <Box mb={10}>
            <Description />
          </Box>
        </MDXProvider>
      </Box>
      <Technologies
        technologies={technologies}
        borderColor={colors.accent}
        bodyColor={colors.body}
        alignment="center"
      />
      {buttons && (
        <Flex
          justifyContent={"center"}
          flexDirection="column"
          gap={2}
          alignItems="center"
          zIndex={1}
          position="relative"
        >
          {buttons.map((button) => (
            <Button
              key={button.url}
              as={Link}
              href={button.url}
              isExternal
              {...(button.secondary
                ? buttonSecondaryBrandProps
                : buttonBrandProps)}
            >
              {button.label}
            </Button>
          ))}
        </Flex>
      )}
    </Box>
  );
}
