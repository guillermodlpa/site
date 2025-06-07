import { Box, type BoxProps } from "@chakra-ui/react";
import NextImage, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import generateImageSizesProp from "../../../utils/generateImageSizesProp";

import iphoneFrame from "./iphone.png"; // https://www.pngwing.com/en/free-png-vahlq
import macFrame from "./macpro.png"; // https://www.pngwing.com/en/free-png-njmbh

const TENTATIVE_INITIAL_HEIGHT = 340; // relevant for mobile

export default function DevicePreviews({
  mobileImage,
  desktopImage,
  mobileAppBarColor,
  sizes = generateImageSizesProp({ base: "100vw", md: "800px" }),
  ...rest
}: {
  mobileImage?: StaticImageData;
  desktopImage?: StaticImageData;
  mobileAppBarColor: string;
  sizes?: string;
} & BoxProps) {
  const desktopFramePositioning =
    desktopImage && mobileImage ? { top: "20%", left: "30%" } : { top: "0%", left: "0%" };
  const mobileFramePositioning =
    desktopImage && mobileImage
      ? { width: "30%", left: "30%", top: "50%" }
      : { width: "40%", left: "50%", top: "50%" };

  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const [devicesContainerHeight, setDevicesContainerHeight] =
    useState<number>(TENTATIVE_INITIAL_HEIGHT);
  useEffect(() => {
    function apply() {
      const mobileBoundingRect = mobileContainerRef.current?.getBoundingClientRect();
      const desktopBoundingRect = desktopContainerRef.current?.getBoundingClientRect();
      const top = Math.min(
        ...[mobileBoundingRect?.top, desktopBoundingRect?.top].filter(
          (value) => value !== undefined,
        ),
      );
      const bottom = Math.max(
        ...[mobileBoundingRect?.bottom, desktopBoundingRect?.bottom].filter(
          (value) => value !== undefined,
        ),
      );
      const height = Math.ceil(bottom - top);
      setDevicesContainerHeight(height);
    }
    apply();
    window.addEventListener("resize", apply);
    return function cleanUp() {
      window.removeEventListener("resize", apply);
    };
  }, []);

  return (
    <Box position="relative" height={devicesContainerHeight} {...rest}>
      {desktopImage && (
        <Box position="absolute" {...desktopFramePositioning} ref={desktopContainerRef}>
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            borderRadius="0.2rem"
            overflow="hidden"
            height="89%"
            width="76%"
          >
            <NextImage src={desktopImage} alt="screenshot" placeholder="blur" sizes={sizes} />
          </Box>
          <NextImage
            src={macFrame}
            alt="laptop frame"
            // this is so the frame shows above the absolute positioned images above
            style={{ transform: "translate(0, 0)" }}
            sizes={sizes}
          />
        </Box>
      )}

      {mobileImage && (
        <Box
          position="absolute"
          {...mobileFramePositioning}
          transform="translate(-50%, -50%)"
          ref={mobileContainerRef}
        >
          <Box
            height="91%"
            width="85%"
            position="absolute"
            left="49.8%"
            transform="translate(-50%, 0)"
            top="3.2%"
            backgroundColor={mobileAppBarColor}
            borderRadius="0.5rem"
          />
          <Box
            position="absolute"
            top="53%"
            left="49.8%"
            transform="translate(-50%, -50%)"
            borderBottomLeftRadius="0.5rem"
            borderBottomRightRadius="0.5rem"
            overflow="hidden"
            height="90%"
            width="85%"
          >
            <NextImage src={mobileImage} alt="screenshot" placeholder="blur" sizes={sizes} />
          </Box>
          <NextImage
            src={iphoneFrame}
            alt="phone frame"
            // this is so the frame shows above the absolute positioned images above
            style={{ transform: "translate(0, 0)" }}
            sizes={sizes}
          />
        </Box>
      )}
    </Box>
  );
}
