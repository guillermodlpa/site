import { Box, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import DevicePreviews from "./DevicePreviews";
import { Project } from "./projects/projects";

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
  path,
}: Project) {
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
      }}
      background={backgroundColor}
      cursor="pointer"
      transitionProperty="common"
      transitionDuration="normal"
      overflow="hidden"
    >
      <Heading>
        <NextLink href={path} passHref legacyBehavior>
          <LinkOverlay
            color="inherit"
            transitionProperty="common"
            transitionDuration="normal"
            id={anchorId}
          >
            {logoImage ? (
              <>
                <NextImage {...logoImage} />
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
        <NextImage
          {...backgroundImage}
          style={{
            userSelect: "none",
            zIndex: -1,
            position: "absolute",
            ...backgroundImage.style,
          }}
          alt="Background"
          placeholder="blur"
          sizes="100vw"
        />
      )}
    </LinkBox>
  );
}
