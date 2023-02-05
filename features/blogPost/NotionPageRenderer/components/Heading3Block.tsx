import { Heading } from "@chakra-ui/react";
import { useMemo } from "react";
import getPlainText from "../utils/getPlainText";
import makeAnchorId from "../utils/makeAnchorId";
import NotionRichText from "./NotionRichText";

export default function Heading3Block({
  richTextItems,
}: {
  richTextItems: RichTextItem[];
}) {
  const anchorId = useMemo(
    () => makeAnchorId(getPlainText(richTextItems)),
    [richTextItems]
  );

  return (
    <Heading as="h3" size="md" fontWeight={"bold"} my={8} id={anchorId}>
      <NotionRichText richTextItems={richTextItems} />
    </Heading>
  );
}
