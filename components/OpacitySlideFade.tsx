import { Box } from "@chakra-ui/react";
import type React from "react";

export default function OpacitySlideFade({
  children,
  in: isOpen,
}: {
  children: React.ReactNode;
  in: boolean;
}) {
  return (
    <Box
      opacity={isOpen ? 1 : 0}
      transform={isOpen ? "translateY(0)" : "translateY(20px)"}
      transition="opacity 0.25s ease, transform 0.25s ease"
    >
      {children}
    </Box>
  );
}
