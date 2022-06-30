import {
  Box,
  Divider,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import getConfig from "next/config";
import * as BLOCK_TYPES from "./blockTypes";
import { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";

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

export default function NotionBlock({ block }: { block: GetBlockResponse }) {
  const type = "type" in block ? block.type : null;
  const value = block[type];

  const renderBlock = () => {
    switch (type) {
      case BLOCK_TYPES.PARAGRAPH:
        return (
          <Text mb={PARAGRAPH_SPACING}>{renderRichText(value.rich_text)}</Text>
        );
      case BLOCK_TYPES.HEADING_1:
      case BLOCK_TYPES.HEADING_2:
      case BLOCK_TYPES.HEADING_3:
        return (
          <Heading
            as={
              {
                [BLOCK_TYPES.HEADING_1]: "h1",
                [BLOCK_TYPES.HEADING_2]: "h2",
                [BLOCK_TYPES.HEADING_3]: "h3",
              }[type] as "h1" | "h2" | "h3"
            }
            mb={PARAGRAPH_SPACING}
          >
            {renderRichText(value.rich_text)}
          </Heading>
        );
      case BLOCK_TYPES.BULLETED_LIST_ITEM:
        return (
          <UnorderedList mb={PARAGRAPH_SPACING}>
            <ListItem>{renderRichText(value.rich_text)}</ListItem>
          </UnorderedList>
        );
      case BLOCK_TYPES.NUMBERED_LIST_ITEM:
        return (
          <OrderedList start={value.counter} mb={PARAGRAPH_SPACING}>
            <ListItem>{renderRichText(value.rich_text)}</ListItem>
          </OrderedList>
        );
      case BLOCK_TYPES.IMAGE:
        const src =
          value.type === "external" ? value.external.url : value.file.url;
        const caption = value.caption?.[0]?.plain_text ?? "";
        return (
          <Box
            display="flex"
            justifyContent="center"
            mb={PARAGRAPH_SPACING * 2}
          >
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
      case BLOCK_TYPES.DIVIDER:
        return (
          <Divider mt={PARAGRAPH_SPACING * 2} mb={PARAGRAPH_SPACING * 2} />
        );
      default:
        return (
          <>
            {`❌ Unsupported block (${
              type === "unsupported" ? "unsupported by Notion API" : type
            })`}
          </>
        );
    }
  };

  return (
    <>
      {renderBlock()}

      {value.children?.length > 0 && (
        <Box ml={8}>
          {value.children.map((child) => (
            <NotionBlock key={child.id} block={child} />
          ))}
        </Box>
      )}
    </>
  );
}
