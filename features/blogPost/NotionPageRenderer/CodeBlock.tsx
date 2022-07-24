import { useTheme, useToken } from "@chakra-ui/react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({
  language,
  children,
}: {
  language: string;
  children: string;
}) {
  const marginBottom = useToken("space", 4);
  const backgroundColor = useToken("colors", "callout-background");

  return (
    <SyntaxHighlighter
      language={language}
      style={prism}
      customStyle={{
        marginBottom,
        background: backgroundColor,
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
