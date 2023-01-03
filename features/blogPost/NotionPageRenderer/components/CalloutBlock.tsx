import { Box, Flex, Text } from "@chakra-ui/react";
import NotionRichText from "./NotionRichText";

export default function CalloutBlock({
  richTextItems,
  icon,
  children,
}: {
  richTextItems: RichTextItem[];
  icon: { type: string; emoji?: string } | null;
  children: React.ReactNode;
}) {
  return (
    <Box
      as="aside"
      mb={4}
      backgroundColor={"callout-background"}
      p={3}
      borderRadius="md"
    >
      <Flex pb={3}>
        <Text flexShrink={0} pl={1} pr={3} fontSize="xl" as="span">
          {icon.emoji ?? ""}
        </Text>
        <Text flexGrow={1} fontSize="md">
          <NotionRichText richTextItems={richTextItems} />
        </Text>
      </Flex>

      <Box ml={9}>{children}</Box>
    </Box>
  );
}
