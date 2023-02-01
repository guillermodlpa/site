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
import { getPortfolioProjectPath } from "../../constants/paths";
import { Project } from "../../types/types";
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
    logoImage?.src?.light
  );

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
      sx={{
        "a::before": {
          zIndex: 10,
        },
      }}
      overflow="hidden"
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
        mt={6}
        mb={4}
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
