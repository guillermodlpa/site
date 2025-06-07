import { Link, Text } from "@chakra-ui/react";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

function wrapWithLink(content: string, href: string) {
  return (
    <Link
      href={href}
      isExternal={
        !href.startsWith("/") &&
        !href.startsWith("#") &&
        !href.startsWith(publicRuntimeConfig.SITE_URL)
      }
    >
      {content}
    </Link>
  );
}

function getColorName(color: string) {
  switch (color) {
    case "red":
    case "gray":
    case "green":
    case "orange":
    case "blue":
    case "pink":
    case "purple":
    case "yellow":
      return `${color}.500`;
    default:
      return color;
  }
}

export default function NotionRichText({
  richTextItems,
}: {
  richTextItems: RichTextItem[];
}) {
  return (
    <>
      {richTextItems
        .filter((richText) => richText.type === "text")
        .map((richText: RichTextItemText, index) => (
          <Text
            key={`${richText.plain_text}-${index}`}
            as={
              richText.annotations.code
                ? "code"
                : richText.annotations.bold
                  ? "strong"
                  : richText.annotations.italic
                    ? "i"
                    : "span"
            }
            fontSize="inherit"
            fontWeight={richText.annotations.bold ? "bold" : undefined}
            fontStyle={richText.annotations.italic ? "italic" : undefined}
            variant={richText.annotations.code ? "code" : undefined}
            color={
              richText.annotations.color ? getColorName(richText.annotations.color) : undefined
            }
            sx={{ whiteSpace: "pre-line" }}
          >
            {richText.text.link?.url
              ? wrapWithLink(richText.text.content, richText.text.link.url)
              : richText.text.content}
          </Text>
        ))}
    </>
  );
}
