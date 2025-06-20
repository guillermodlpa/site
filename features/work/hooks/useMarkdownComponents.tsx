import { Box, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { useMemo } from "react";

export default function useMarkdownComponents({
  colors = {
    body: undefined,
    accent: undefined,
    accentHightlighted: undefined,
    accentHightlightedForeground: undefined,
  },
}: {
  colors?: {
    body: string;
    accent: string;
    accentHightlighted: string;
    accentHightlightedForeground: string;
  };
} = {}) {
  const markdownComponents = useMemo(
    () => ({
      p: (props) => <Text mb={4} fontSize="md" color={colors.body} {...props} />,
      ul: (props) => <UnorderedList {...props} ml={1} />,
      li: (props) => <ListItem fontSize="md" mb={1} color={colors.body} {...props} />,
      a: (props) => (
        <Link
          isExternal={props.href && !props.href.startsWith("/") && !props.href.startsWith("#")}
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
      blockquote: (props) => (
        <Box as="blockquote" ml={2} pl={4} borderLeftWidth={"2px"} {...props} />
      ),
    }),
    [colors.body, colors.accent, colors.accentHightlighted, colors.accentHightlightedForeground],
  );
  return markdownComponents;
}
