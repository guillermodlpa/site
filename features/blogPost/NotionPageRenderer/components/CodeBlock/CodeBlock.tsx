import { Box, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import {
  createContext,
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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

function useHasBeenInViewport(ref: MutableRefObject<HTMLElement>) {
  const [inViewport, setInViewport] = useState(false);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInViewport(true);
        }
      });
    };
    const observer = new IntersectionObserver(callback, {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0,
    });
    observer.observe(ref.current);

    return function cleanUp() {
      observer.disconnect();
    };
  }, [ref]);
  return inViewport;
}

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
