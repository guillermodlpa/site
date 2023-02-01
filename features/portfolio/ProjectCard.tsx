import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextImage, { StaticImageData } from "next/image";
import NextLink from "next/link";
import { useRef } from "react";
import { getPortfolioProjectPath } from "../../constants/paths";
import { Project } from "../../types/types";
import DevicePreviews from "./DevicePreviews";
import useParallax from "./hooks/useParallax";

export default function ProjectCard({
  name,
  anchorId,
  date,
  backgroundImage,
  backgroundColor,
  mobileImage,
  desktopImage,
  logoImage,
  mobileAppBarColor,
  slug,
}: Project) {
  const logoImageSrc = useColorModeValue<StaticImageData, StaticImageData>(
    logoImage?.src?.dark,
    logoImage?.src?.light
  );

  const cardRef = useRef();
  const backgroundRef = useRef();
  useParallax(cardRef, backgroundRef);

  return (
    <LinkBox
      borderWidth="1px"
      borderRadius="base"
      boxShadow="md"
      as="article"
      py={6}
      px={6}
      position="relative"
      _hover={{
        boxShadow: "lg",
        transform: "translateY(-2px)",
      }}
      background={backgroundColor}
      cursor="pointer"
      transitionProperty="common"
      transitionDuration="normal"
      overflow="hidden"
      ref={cardRef}
    >
      <Heading as="h1" fontSize="2xl">
        <NextLink href={getPortfolioProjectPath(slug)} passHref legacyBehavior>
          <LinkOverlay
            color="inherit"
            transitionProperty="common"
            transitionDuration="normal"
            id={anchorId}
          >
            {logoImage && logoImageSrc ? (
              <>
                <NextImage {...logoImage} src={logoImageSrc} />
                <span style={{ display: "none" }}>{name}</span>
              </>
            ) : (
              name
            )}
          </LinkOverlay>
        </NextLink>
      </Heading>
      <Text color="chakra-body-text-secondary">{date}</Text>

      <DevicePreviews
        mobileImage={mobileImage}
        desktopImage={desktopImage}
        mobileAppBarColor={mobileAppBarColor}
        hoverScaleTransform={false}
        mt={6}
        mb={4}
      />

      {backgroundImage && (
        <Box
          ref={backgroundRef}
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          zIndex={-1}
          userSelect="none"
        >
          <NextImage
            {...backgroundImage}
            style={{
              position: "absolute",
              ...backgroundImage.style,
            }}
            alt="Background"
            placeholder="blur"
            sizes="100vw"
          />
        </Box>
      )}
    </LinkBox>
  );
}
