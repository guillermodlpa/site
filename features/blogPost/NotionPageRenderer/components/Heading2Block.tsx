import { Heading } from "@chakra-ui/react";
import MagicalDivider from "../../../../components/MagicalDivider";
import NotionRichText from "./NotionRichText";

export default function Heading2Block({
  richTextItems,
}: {
  richTextItems: RichTextItem[];
}) {
  return (
    <>
      <MagicalDivider height={"2px"} width="25%" mt={12} mb={12} />
      <Heading as="h2" size="lg" mb={8}>
        <NotionRichText richTextItems={richTextItems} />
      </Heading>
    </>
  );
}
