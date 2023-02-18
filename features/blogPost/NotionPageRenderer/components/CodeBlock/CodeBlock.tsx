import { Box, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { createContext, useContext, useRef } from "react";
import useHasBeenInViewport from "../../utils/useHasBeenInViewport";
import NotionRichText from "../NotionRichText";
import LightPreformattedBlock from "./LightPreformattedBlock";

const CodeBlockContext = createContext("");

const HeavyHighlightedBlock = dynamic(() => import("./HeavyHighlightedBlock"), {
  // use ssr false to not load the heavy syntax highlighter on the initial server render
  ssr: false,
  loading: function LoadingComponent() {
    // this is a trick to get the placeholder to render while loading. Otherwise nothing renders.
    const value = useContext(CodeBlockContext);
    return <LightPreformattedBlock>{value}</LightPreformattedBlock>;
  },
});

export default function CodeBlock({
  language,
  children,
  captionRichTextItems,
}: {
  language: string;
  children: string;
  captionRichTextItems: RichTextItem[] | null;
}) {
  const ref = useRef();
  const renderHighlighter = useHasBeenInViewport(ref);

  return (
    <Box as="figure" mb={6} ref={ref}>
      <CodeBlockContext.Provider value={children}>
        {/* we don't want to render the highlighted code on the server
          because it makes the Lighthouse score much worse */}
        {renderHighlighter ? (
          <HeavyHighlightedBlock language={language}>
            {children}
          </HeavyHighlightedBlock>
        ) : (
          <LightPreformattedBlock>{children}</LightPreformattedBlock>
        )}
      </CodeBlockContext.Provider>

      {captionRichTextItems && captionRichTextItems.length > 0 && (
        <Text as="figcaption" variant="caption" mt={2}>
          <NotionRichText richTextItems={captionRichTextItems} />
        </Text>
      )}
    </Box>
  );
}
