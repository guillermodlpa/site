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
import Image from "next/image";
import MagicalDivider from "../../../components/MagicalDivider";

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
      fontWeight={richText.annotations.bold ? "bold" : undefined}
      fontStyle={richText.annotations.italic ? "italic" : undefined}
      variant={richText.annotations.code ? "code" : undefined}
    >
      {richText.text.link?.url
        ? wrapWithLink(richText.text.content, richText.text.link.url)
        : richText.text.content}
    </Text>
  ));
}

function getPlainText(richTextItems): string {
  return richTextItems.reduce(
    (memo, richText) => `${memo}${richText.plain_text}`,
    ""
  );
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
        return <>❌ No h1s allowed</>;
      case BLOCK_TYPES.HEADING_2:
        return (
          <>
            <Heading
              as="h2"
              size="lg"
              mt={PARAGRAPH_SPACING * 3}
              mb={PARAGRAPH_SPACING}
            >
              {renderRichText(value.rich_text)}
            </Heading>
            <MagicalDivider
              height={"2px"}
              as="div"
              mb={PARAGRAPH_SPACING * 2}
            />
          </>
        );
      case BLOCK_TYPES.HEADING_3:
        return (
          <Heading as="h3" size="md" my={PARAGRAPH_SPACING * 2}>
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
      case BLOCK_TYPES.QUOTE:
        return (
          <Text as="blockquote" mb={PARAGRAPH_SPACING} variant="quoteBlock">
            {renderRichText(value.rich_text)}
          </Text>
        );
      case BLOCK_TYPES.IMAGE:
        const src =
          value.type === "external" ? value.external.url : value.file.url;
        const alt = value.caption
          ? getPlainText(value.caption)
          : "Blog post image";
        return (
          <Box
            display="flex"
            justifyContent="center"
            mb={PARAGRAPH_SPACING * 2}
          >
            <figure>
              {value.dim ? (
                <Image
                  src={src}
                  layout="intrinsic"
                  width={value.dim.width}
                  height={value.dim.height}
                  alt={alt}
                />
              ) : (
                // If we don't have dimensions because image probbing failed, we fall back to regular image
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt={alt} />
              )}
              {value.caption && (
                <Text as="figcaption" variant="caption" mt={2}>
                  {renderRichText(value.caption)}
                </Text>
              )}
            </figure>
          </Box>
        );
      case BLOCK_TYPES.DIVIDER:
        return (
          <Divider mt={PARAGRAPH_SPACING * 2} mb={PARAGRAPH_SPACING * 2} />
        );
      case BLOCK_TYPES.COLUMN_LIST:
      case BLOCK_TYPES.COLUMN:
        // These are just wrappers over children
        return null;
        return;
      case BLOCK_TYPES.CALLOUT:
        console.log(block);
        return (
          <Box
            as="aside"
            display="flex"
            mb={PARAGRAPH_SPACING}
            backgroundColor={"callout-background"}
            p={3}
            borderRadius="md"
          >
            <Text flexShrink={0} pl={1} pr={3} fontSize="xl">
              {value.icon?.type === "emoji" ? value.icon.emoji : ""}
            </Text>
            <Text flexGrow={1}>{renderRichText(value.rich_text)}</Text>
          </Box>
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

  const renderChildrenWrapper = (children) => {
    switch (type) {
      case BLOCK_TYPES.COLUMN_LIST:
        return (
          <Box
            sx={{
              display: ["block", "block", "grid"],
              gridTemplateColumns: [
                undefined,
                undefined,
                children.map(() => "1fr").join(" "),
              ],
              gap: [4, 4, null],
            }}
          >
            {children}
          </Box>
        );
      case BLOCK_TYPES.COLUMN:
        return <Box>{children}</Box>;
      default: {
        return <Box ml={8}>{children}</Box>;
      }
    }
  };

  return (
    <>
      {renderBlock()}

      {value.children?.length > 0 &&
        renderChildrenWrapper(
          value.children.map((child) => (
            <NotionBlock key={child.id} block={child} />
          ))
        )}
    </>
  );
}
