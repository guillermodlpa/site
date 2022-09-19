import { Text } from "@chakra-ui/react";
import NotionRichText from "./NotionRichText";

export default function QuoteBlock({
  richTextItems,
}: {
  richTextItems: RichTextItem[];
}) {
  return (
    <Text as="blockquote" mb={4} variant="quoteBlock" fontSize="md">
      <NotionRichText richTextItems={richTextItems} />
    </Text>
  );
}
