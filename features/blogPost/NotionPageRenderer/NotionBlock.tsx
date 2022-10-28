import { Box } from "@chakra-ui/react";
import * as BLOCK_TYPES from "./blockTypes";
import { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";
import CodeBlock from "./components/CodeBlock";
import BookmarkBlock from "./components/BookmarkBlock";
import getPlainText from "./utils/getPlainText";
import ParagraphBlock from "./components/ParagraphBlock";
import Heading1Block from "./components/Heading1Block";
import Heading2Block from "./components/Heading2Block";
import Heading3Block from "./components/Heading3Block";
import BulletedListItemBlock from "./components/BulletedListItemBlock";
import NumberedListItemBlock from "./components/NumberedListItemBlock";
import QuoteBlock from "./components/QuoteBlock";
import ImageBlock from "./components/ImageBlock";
import DividerBlock from "./components/DividerBlock";
import CalloutBlock from "./components/CalloutBlock";

export default function NotionBlock({
  block,
  likelyAboveTheFold,
}: {
  block: GetBlockResponse;
  likelyAboveTheFold: boolean;
}) {
  const type = "type" in block ? block.type : null;
  const value = block[type];

  const renderBlock = () => {
    switch (type) {
      case BLOCK_TYPES.PARAGRAPH:
        return <ParagraphBlock richTextItems={value.rich_text} />;
      case BLOCK_TYPES.HEADING_1:
        return <Heading1Block />;
      case BLOCK_TYPES.HEADING_2:
        return <Heading2Block richTextItems={value.rich_text} />;
      case BLOCK_TYPES.HEADING_3:
        return <Heading3Block richTextItems={value.rich_text} />;
      case BLOCK_TYPES.BULLETED_LIST_ITEM:
        return <BulletedListItemBlock richTextItems={value.rich_text} />;
      case BLOCK_TYPES.NUMBERED_LIST_ITEM:
        return (
          <NumberedListItemBlock
            richTextItems={value.rich_text}
            position={value.counter}
          />
        );
      case BLOCK_TYPES.QUOTE:
        return <QuoteBlock richTextItems={value.rich_text} />;
      case BLOCK_TYPES.IMAGE:
        return (
          <ImageBlock
            src={
              value.type === "external" ? value.external.url : value.file.url
            }
            priority={likelyAboveTheFold}
            dimensions={value.dim}
            captionRichTextItems={value.caption}
          />
        );
      case BLOCK_TYPES.DIVIDER:
        return <DividerBlock />;
      case BLOCK_TYPES.COLUMN_LIST:
      case BLOCK_TYPES.COLUMN:
        // These are just wrappers over children
        return null;
      case BLOCK_TYPES.CALLOUT:
        return (
          <CalloutBlock richTextItems={value.rich_text} icon={value.icon}>
            {(value.children || []).map((child) => (
              <NotionBlock
                key={child.id}
                block={child}
                likelyAboveTheFold={false}
              />
            ))}
          </CalloutBlock>
        );
      case BLOCK_TYPES.BOOKMARK:
        return <BookmarkBlock url={value.url} />;
      case BLOCK_TYPES.CODE:
        return (
          <CodeBlock language={value.language}>
            {getPlainText(value.rich_text)}
          </CodeBlock>
        );
      default: {
        console.log("Unsupported block", block);
        return (
          <>
            {`❌ Unsupported block (${
              type === "unsupported" ? "unsupported by Notion API" : type
            })`}
          </>
        );
      }
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
      // The callout renders the children internally
      case BLOCK_TYPES.CALLOUT:
        return null;
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
            <NotionBlock
              key={child.id}
              block={child}
              likelyAboveTheFold={false}
            />
          ))
        )}
    </>
  );
}
