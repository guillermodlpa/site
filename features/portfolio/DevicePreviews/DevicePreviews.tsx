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
}: {
  mobileImage: StaticImageData;
  desktopImage: StaticImageData;
  mobileAppBarColor: string;
}) {
  const mobileContainerRef = useRef<HTMLDivElement>();
  const desktopContainerRef = useRef<HTMLDivElement>();
  const [devicesContainerHeight, setDevicesContainerHeight] = useState<number>(
    TENTATIVE_INITIAL_HEIGHT
  );
  useEffect(() => {
    function apply() {
      const mobileBoundingRect =
        mobileContainerRef.current.getBoundingClientRect();
      const desktopBoundingRect =
        desktopContainerRef.current.getBoundingClientRect();
      const top = Math.min(mobileBoundingRect.top, desktopBoundingRect.top);
      const bottom = Math.max(
        mobileBoundingRect.bottom,
        desktopBoundingRect.bottom
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
    <Box position="relative" height={devicesContainerHeight}>
      <Box position="absolute" top="10vh" left="15vw" ref={desktopContainerRef}>
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

      <Box
        position="absolute"
        top="0"
        left="0"
        width="60%"
        ref={mobileContainerRef}
      >
        <Box
          height="3%"
          width="43%"
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
          width="43%"
        >
          <Image src={mobileImage} alt="screenshot" />
        </Box>
        <Image src={iphoneFrame} alt="phone frame" />
      </Box>
    </Box>
  );
}
