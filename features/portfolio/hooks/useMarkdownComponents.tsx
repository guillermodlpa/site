import { Link, Text } from "@chakra-ui/react";
import { useMemo } from "react";

export default function useMarkdownComponents({
  colors,
}: {
  colors: {
    body: string;
    accent: string;
    accentHightlighted: string;
    accentHightlightedForeground: string;
  };
}) {
  const markdownComponents = useMemo(
    () => ({
      p: (props) => (
        <Text mb={4} fontSize="sm" color={colors.body} {...props} />
      ),
      a: (props) => (
        <Link
          isExternal
          color={colors.accent}
          _hover={{
            color: colors.accentHightlighted,
            backgroundColor: colors.accentHightlightedForeground,
          }}
          _focused={{
            color: colors.accentHightlighted,
            backgroundColor: colors.accentHightlightedForeground,
          }}
          borderRadius="3px"
          {...props}
        />
      ),
    }),
    [
      colors.body,
      colors.accent,
      colors.accentHightlighted,
      colors.accentHightlightedForeground,
    ]
  );
  return markdownComponents;
}
