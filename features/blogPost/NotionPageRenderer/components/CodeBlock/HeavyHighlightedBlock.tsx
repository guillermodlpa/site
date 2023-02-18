import { useToken } from "@chakra-ui/react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function HeavyHighlightedBlock({
  language,
  children,
}: {
  language: string;
  children: string;
}) {
  const fontSize = useToken("fontSizes", "sm");
  const borderRadius = useToken("radii", "md");

  return (
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
  );
}
