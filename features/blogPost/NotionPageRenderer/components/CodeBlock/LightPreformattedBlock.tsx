import { Box } from "@chakra-ui/react";

/**
 * This is a placeholder version of the highlighted code block
 * It's used on SSR to make the Lighthouse score better
 */
export default function LightPreformattedBlock({
  children,
}: {
  children: string;
}) {
  return (
    <Box
      as="pre"
      overflow="auto"
      mb={6}
      fontSize="sm"
      borderRadius="md"
      // style properties from the react syntax highlighter final result
      backgroundColor="rgb(30, 30, 30)"
      color="rgb(212, 212, 212)"
      p="1em"
      m="0.5em 0px"
      lineHeight="1.5"
      fontFamily='Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace'
    >
      {children}
    </Box>
  );
}
