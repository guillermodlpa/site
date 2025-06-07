import { Box, Heading, LinkBox, LinkOverlay, Text, useColorModeValue } from "@chakra-ui/react";
import NextImage, { type StaticImageData } from "next/image";
import NextLink from "next/link";
import { getWorkProjectPath } from "../../constants/paths";
import type { Project } from "../../types/types";
import generateImageSizesProp from "../../utils/generateImageSizesProp";
import DevicePreviews from "./DevicePreviews";

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
    logoImage?.src?.light,
  );

  return (
    <LinkBox
      borderWidth="1px"
      borderRadius="base"
      boxShadow="md"
      as="article"
      py={6}
      px={6}
      height="100%"
      position="relative"
      _hover={{
        boxShadow: "lg",
        transform: "translateY(-2px)",
      }}
      background={backgroundColor}
      cursor="pointer"
      transitionProperty="common"
      transitionDuration="normal"
      sx={{
        "a::before": {
          zIndex: 10,
        },
      }}
      overflow="hidden"
    >
      <Heading as="h1" fontSize="2xl">
        <LinkOverlay
          as={NextLink}
          href={getWorkProjectPath(slug)}
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
      </Heading>
      <Text color="chakra-body-text-secondary">{date}</Text>

      <DevicePreviews
        mobileImage={mobileImage}
        desktopImage={desktopImage}
        mobileAppBarColor={mobileAppBarColor}
        mt={6}
        mb={4}
        sizes={generateImageSizesProp({ base: "75vw", md: "250px" })}
      />

      {backgroundImage && (
        <Box
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
