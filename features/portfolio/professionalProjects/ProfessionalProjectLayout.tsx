import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRef } from "react";
import { MDXProvider } from "@mdx-js/react";

import DevicePreviews from "../DevicePreviews";
import useInViewport from "../hooks/useInViewport";
import useParallax from "../hooks/useParallax";
import usePreviousValue from "../hooks/usePreviousValue";
import OpacitySlideFade from "../OpacitySlideFade";
import professionalProjects from "./professionalProjects";
import VideoPopupButton from "../VideoPopupButton";
import Technologies from "../Technologies";
import useMarkdownComponents from "../hooks/useMarkdownComponents";

export default function ProfessionalProjectLayout({
  logo,
  logoAlt,
  name,
  anchorId,
  subheadline,
  Description,
  technologies,
  url,
  buttonLabel,
  date,
  colors,
  mobileImage,
  desktopImage,
  video,
  backgroundImage,
  backgroundOverlay,
}: typeof professionalProjects[0]) {
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

  const markdownComponents = useMarkdownComponents({ colors });

  const sectionRef = useRef<HTMLDivElement>();
  const backgroundRef = useRef<HTMLDivElement>();
  useParallax(sectionRef, backgroundRef);

  const devicePreviewsContainerRef = useRef<HTMLDivElement>();
  const inViewport = useInViewport(devicePreviewsContainerRef);
  const shouldFadeIn = usePreviousValue(inViewport) || inViewport;

  return (
    <Box
      as="section"
      px={4}
      py={20}
      backgroundColor={colors.background}
      id={anchorId}
      position="relative"
      ref={sectionRef}
      overflow="hidden"
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
            layout="responsive"
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
        mb={16}
        position="relative"
      >
        <Box
          position={{ base: "static", md: "absolute" }}
          top={{ base: "auto", md: "0" }}
          right={{ base: "auto", md: "4" }}
          mb={{ base: "6", md: "0" }}
        >
          <Text color={colors.subheadline} fontSize="sm">
            {date}
          </Text>
        </Box>
        <Box
          width="12rem"
          mb={8}
          height="5rem"
          overflow="hidden"
          position="relative"
        >
          <Image src={logo} alt={logoAlt} layout="responsive" />
        </Box>
        <Text textAlign="center" color={colors.subheadline}>
          {subheadline}
        </Text>
      </Flex>

      <Flex flexDirection={{ base: "column", md: "row" }} gap={16}>
        <Box
          width={{ base: "100%", md: "50%" }}
          ref={devicePreviewsContainerRef}
        >
          <OpacitySlideFade in={shouldFadeIn}>
            <DevicePreviews
              mobileImage={mobileImage}
              desktopImage={desktopImage}
              mobileAppBarColor={colors.mobileAppBar}
            />
          </OpacitySlideFade>
          {video && (
            <Flex justifyContent="center" flexWrap="wrap" mt={8}>
              <VideoPopupButton
                {...buttonBrandProps}
                videoUrl={video.url}
                name={name}
              />
            </Flex>
          )}
        </Box>

        <Box width={{ base: "100%", md: "35%" }} zIndex={1}>
          <MDXProvider components={markdownComponents}>
            <Box mb={10}>
              <Description />
            </Box>
          </MDXProvider>

          <Technologies
            technologies={technologies}
            borderColor={colors.accent}
            bodyColor={colors.body}
            backgroundColor={colors.accentForeground}
            alignment={{ base: "center", md: "flex-end" }}
          />

          <Flex justifyContent={{ base: "center", md: "flex-end" }}>
            <Button as={Link} href={url} isExternal {...buttonBrandProps}>
              {buttonLabel}
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
