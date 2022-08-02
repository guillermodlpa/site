import { Heading } from "@chakra-ui/react";
import NotionRichText from "./NotionRichText";

export default function Heading3Block({
  richTextItems,
}: {
  richTextItems: RichTextItem[];
}) {
  return (
    <Heading as="h3" size="md" fontWeight={"bold"} my={8}>
      <NotionRichText richTextItems={richTextItems} />
    </Heading>
  );
}
