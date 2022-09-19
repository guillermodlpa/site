import { Text } from "@chakra-ui/react";
import NotionRichText from "./NotionRichText";

export default function ParagraphBlock({
  richTextItems,
}: {
  richTextItems: RichTextItem[];
}) {
  return (
    <Text mb={4} fontSize="md">
      <NotionRichText richTextItems={richTextItems} />
    </Text>
  );
}
