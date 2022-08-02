import { Box, Text } from "@chakra-ui/react";
import NotionRichText from "./NotionRichText";

export default function CalloutBlock({
  richTextItems,
  icon,
}: {
  richTextItems: RichTextItem[];
  icon: { type: string; emoji?: string } | null;
}) {
  return (
    <Box
      as="aside"
      display="flex"
      mb={4}
      backgroundColor={"callout-background"}
      p={3}
      borderRadius="md"
    >
      <Text flexShrink={0} pl={1} pr={3} fontSize="xl">
        {icon.emoji ?? ""}
      </Text>
      <Text flexGrow={1}>
        <NotionRichText richTextItems={richTextItems} />
      </Text>
    </Box>
  );
}
