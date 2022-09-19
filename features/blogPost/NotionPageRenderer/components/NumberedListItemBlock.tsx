import { ListItem, Text, OrderedList } from "@chakra-ui/react";
import NotionRichText from "./NotionRichText";

export default function NumberedListItemBlock({
  richTextItems,
  position,
}: {
  richTextItems: RichTextItem[];
  position: number;
}) {
  return (
    <OrderedList start={position} mb={3}>
      <ListItem>
        <Text fontSize="md">
          <NotionRichText richTextItems={richTextItems} />
        </Text>
      </ListItem>
    </OrderedList>
  );
}
