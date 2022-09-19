import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import NotionRichText from "./NotionRichText";

export default function BulletedListItemBlock({
  richTextItems,
}: {
  richTextItems: RichTextItem[];
}) {
  return (
    <UnorderedList mb={3}>
      <ListItem>
        <Text fontSize="md">
          <NotionRichText richTextItems={richTextItems} />
        </Text>
      </ListItem>
    </UnorderedList>
  );
}
