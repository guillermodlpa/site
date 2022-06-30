import { Box, Divider, Heading, Link, ListItem, Text } from "@chakra-ui/react";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

function wrapWithLink(content: string, href: string) {
  return (
    <Link
      href={href}
      isExternal={
        !href.startsWith("/") && !href.startsWith(publicRuntimeConfig.SITE_URL)
      }
    >
      {content}
    </Link>
  );
}

function renderRichText(richTextItems): JSX.Element[] {
  return richTextItems.map((richText, index) => (
    <Text
      key={`${index}`}
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
      fontWeight={richText.annotations.bold ? "bold" : "normal"}
      fontStyle={richText.annotations.italic ? "italic" : "normal"}
      variant={richText.annotations.code ? "code" : undefined}
    >
      {richText.text.link?.url
        ? wrapWithLink(richText.text.content, richText.text.link.url)
        : richText.text.content}
    </Text>
  ));
}

const PARAGRAPH_SPACING = 4;

export default function NotionBlock({ block }) {
  const { type } = block;
  const value = block[type];

  console.log(block.type, block);
  switch (type) {
    case "paragraph":
      return (
        <Text mb={PARAGRAPH_SPACING}>{renderRichText(value.rich_text)}</Text>
      );
    case "heading_2":
    case "heading_3":
      return (
        <Heading
          as={
            {
              heading_1: "h1",
              heading_2: "h2",
              heading_3: "h3",
            }[type]
          }
          mb={PARAGRAPH_SPACING}
        >
          {renderRichText(value.rich_text)}
        </Heading>
      );
    case "bulleted_list_item":
      return <li>{renderRichText(value.rich_text)}</li>;
    case "numbered_list_item":
      return <li>{renderRichText(value.rich_text)}</li>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption?.[0]?.plain_text ?? "";
      return (
        <Box display="flex" justifyContent="center" mb={PARAGRAPH_SPACING * 2}>
          <figure>
            <img src={src} alt={caption} />
            {caption && (
              <Text as="figcaption" variant="secondaryText" fontSize="sm">
                {caption}
              </Text>
            )}
          </figure>
        </Box>
      );
    case "divider":
      return <Divider mt={PARAGRAPH_SPACING * 2} mb={PARAGRAPH_SPACING * 2} />;
    default:
      return (
        <>
          {`❌ Unsupported block (${
            type === "unsupported" ? "unsupported by Notion API" : type
          })`}
        </>
      );
  }
}
