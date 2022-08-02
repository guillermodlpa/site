import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import NotionRichText from "./NotionRichText";

export default function BulletedListItemBlock({
  richTextItems,
}: {
  richTextItems: RichTextItem[];
}) {
  return (
    <UnorderedList mb={4}>
      <ListItem>
        <Text>
          <NotionRichText richTextItems={richTextItems} />
        </Text>
      </ListItem>
    </UnorderedList>
  );
}
