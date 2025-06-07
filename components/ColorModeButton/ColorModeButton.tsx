import { IconButton, useColorMode } from "@chakra-ui/react";
import { DarkModeIcon } from "./DarkModeIcon";
import { LightModeIcon } from "./LightModeIcon";

export default function ColorModeButton() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      variant="ghost"
      color="chakra-body-text-secondary"
      size="sm"
      icon={colorMode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      aria-label={colorMode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      flexShrink={0}
      onClick={toggleColorMode}
    />
  );
}
