import { Heading } from "@chakra-ui/react";
import { useMemo } from "react";
import MagicalDivider from "../../../../components/MagicalDivider";
import getPlainText from "../utils/getPlainText";
import makeAnchorId from "../utils/makeAnchorId";
import NotionRichText from "./NotionRichText";

export default function Heading2Block({
  richTextItems,
}: {
  richTextItems: RichTextItem[];
}) {
  const anchorId = useMemo(
    () => makeAnchorId(getPlainText(richTextItems)),
    [richTextItems]
  );

  return (
    <>
      <MagicalDivider height={"2px"} width="25%" mt={12} mb={12} />
      <Heading as="h2" size="lg" mb={8} id={anchorId}>
        <NotionRichText richTextItems={richTextItems} />
      </Heading>
    </>
  );
}
