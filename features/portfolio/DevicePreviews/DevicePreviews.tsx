import { Box } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

import iphoneFrame from "./iphone.png"; // https://www.pngwing.com/en/free-png-vahlq
import macFrame from "./macpro.png"; // https://www.pngwing.com/en/free-png-njmbh

const TENTATIVE_INITIAL_HEIGHT = 340; // relevant for mobile

export default function DevicePreviews({
  mobileImage,
  desktopImage,
  mobileAppBarColor,
  mb,
}: {
  mobileImage?: StaticImageData;
  desktopImage?: StaticImageData;
  mobileAppBarColor: string;
  mb?: any;
}) {
  const desktopFramePositioning =
    desktopImage && mobileImage
      ? { top: "20%", left: "30%" }
      : { top: "0%", left: "0%" };
  const mobileFramePositioning =
    desktopImage && mobileImage
      ? { width: "30%", left: "30%", top: "50%" }
      : { width: "40%", left: "50%", top: "50%" };

  const mobileContainerRef = useRef<HTMLDivElement>();
  const desktopContainerRef = useRef<HTMLDivElement>();
  const [devicesContainerHeight, setDevicesContainerHeight] = useState<number>(
    TENTATIVE_INITIAL_HEIGHT
  );
  useEffect(() => {
    function apply() {
      const mobileBoundingRect =
        mobileContainerRef.current?.getBoundingClientRect();
      const desktopBoundingRect =
        desktopContainerRef.current?.getBoundingClientRect();
      const top = Math.min(
        ...[mobileBoundingRect?.top, desktopBoundingRect?.top].filter(
          (value) => value != undefined
        )
      );
      const bottom = Math.max(
        ...[mobileBoundingRect?.bottom, desktopBoundingRect?.bottom].filter(
          (value) => value != undefined
        )
      );
      const height = Math.ceil(bottom - top);
      setDevicesContainerHeight(height);
    }
    apply();
    window.addEventListener("resize", apply);
    return function cleanUp() {
      window.removeEventListener("resize", apply);
    };
  }, [mobileContainerRef, desktopContainerRef]);

  return (
    <Box position="relative" height={devicesContainerHeight} mb={mb}>
      {desktopImage && (
        <Box
          position="absolute"
          {...desktopFramePositioning}
          ref={desktopContainerRef}
          transform="scale(1)"
          transition="transform 0.25s ease"
          _hover={{
            transform: `scale(1.2)`,
            zIndex: 1,
          }}
        >
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
            <Image src={desktopImage} alt="screenshot" />
          </Box>
          <Image src={macFrame} alt="laptop frame" />
        </Box>
      )}

      {mobileImage && (
        <Box
          position="absolute"
          {...mobileFramePositioning}
          transform="translate(-50%, -50%) scale(1)"
          ref={mobileContainerRef}
          transition="transform 0.25s ease"
          _hover={{
            transform: `translate(-50%, -50%) scale(1.2)`,
            zIndex: 1,
          }}
        >
          <Box
            height="3%"
            width="85%"
            position="absolute"
            left="49.8%"
            transform="translate(-50%, 0)"
            top="3.2%"
            backgroundColor={mobileAppBarColor}
            borderTopLeftRadius="1rem"
            borderTopRightRadius="1rem"
          />
          <Box
            position="absolute"
            top="50%"
            left="49.8%"
            transform="translate(-50%, -50%)"
            borderBottomLeftRadius="1rem"
            borderBottomRightRadius="1rem"
            overflow="hidden"
            height="88.5%"
            width="85%"
          >
            <Image src={mobileImage} alt="screenshot" />
          </Box>
          <Image src={iphoneFrame} alt="phone frame" />
        </Box>
      )}
    </Box>
  );
}
