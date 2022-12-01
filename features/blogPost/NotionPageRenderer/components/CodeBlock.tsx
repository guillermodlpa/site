import { Box, Text, useToken } from "@chakra-ui/react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import NotionRichText from "./NotionRichText";

export default function CodeBlock({
  language,
  children,
  captionRichTextItems,
}: {
  language: string;
  children: string;
  captionRichTextItems: RichTextItem[] | null;
}) {
  const fontSize = useToken("fontSizes", "sm");
  const borderRadius = useToken("radii", "md");

  return (
    <Box as="figure" mb={6}>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          fontSize,
          borderRadius,
        }}
      >
        {children}
      </SyntaxHighlighter>
      {captionRichTextItems && captionRichTextItems.length > 0 && (
        <Text as="figcaption" variant="caption" mt={2}>
          <NotionRichText richTextItems={captionRichTextItems} />
        </Text>
      )}
    </Box>
  );
}
