import { Box, Table, TableContainer, Tbody, Td, Th, Tr } from "@chakra-ui/react";
import type { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";
import * as BLOCK_TYPES from "./blockTypes";
import BookmarkBlock from "./components/BookmarkBlock";
import BulletedListItemBlock from "./components/BulletedListItemBlock";
import CalloutBlock from "./components/CalloutBlock";
import CodeBlock from "./components/CodeBlock";
import DividerBlock from "./components/DividerBlock";
import Heading1Block from "./components/Heading1Block";
import Heading2Block from "./components/Heading2Block";
import Heading3Block from "./components/Heading3Block";
import ImageBlock from "./components/ImageBlock";
import NotionRichText from "./components/NotionRichText";
import NumberedListItemBlock from "./components/NumberedListItemBlock";
import ParagraphBlock from "./components/ParagraphBlock";
import QuoteBlock from "./components/QuoteBlock";
import VideoBlock from "./components/VideoBlock";
import getPlainText from "./utils/getPlainText";

export default function NotionBlock({
  block,
  parentBlock,
  likelyAboveTheFold,
}: {
  block: GetBlockResponse;
  parentBlock: GetBlockResponse | undefined;
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
        return <NumberedListItemBlock richTextItems={value.rich_text} position={value.counter} />;
      case BLOCK_TYPES.QUOTE:
        return <QuoteBlock richTextItems={value.rich_text} />;
      case BLOCK_TYPES.IMAGE:
        return (
          <ImageBlock
            src={value.type === "external" ? value.external.url : value.file.url}
            priority={likelyAboveTheFold}
            dimensions={value.dim}
            captionRichTextItems={value.caption}
          />
        );
      case BLOCK_TYPES.DIVIDER:
        return <DividerBlock />;
      case BLOCK_TYPES.COLUMN_LIST:
      case BLOCK_TYPES.COLUMN:
      case BLOCK_TYPES.TABLE:
        // These are just wrappers over children
        return null;
      case BLOCK_TYPES.CALLOUT:
        return (
          <CalloutBlock richTextItems={value.rich_text} icon={value.icon}>
            {(value.children || []).map((child) => (
              <NotionBlock
                key={child.id}
                block={child}
                parentBlock={undefined}
                likelyAboveTheFold={false}
              />
            ))}
          </CalloutBlock>
        );
      case BLOCK_TYPES.BOOKMARK:
        return <BookmarkBlock url={value.url} />;
      case BLOCK_TYPES.CODE:
        return (
          <CodeBlock language={value.language} captionRichTextItems={value.caption}>
            {getPlainText(value.rich_text)}
          </CodeBlock>
        );
      case BLOCK_TYPES.VIDEO: {
        const url = value.external?.url || value.file?.url;
        return (
          <VideoBlock
            url={url}
            showWarning={process.env.NODE_ENV === "development" && value.type === "file"}
          />
        );
      }

      case BLOCK_TYPES.TABLE_ROW: {
        return (
          <Tr>
            {value.cells.map((cell, index) => {
              const hasRowHeader =
                parentBlock &&
                "type" in parentBlock &&
                parentBlock.type === "table_row" &&
                parentBlock.table_row.cells[0] === cell;
              const isRowHeader = hasRowHeader;
              const TableCell = isRowHeader ? Th : Td;
              return (
                <TableCell key={`${value.id}-cell-${index}`}>
                  <NotionRichText richTextItems={cell} />
                </TableCell>
              );
            })}
          </Tr>
        );
      }
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
              gridTemplateColumns: [undefined, undefined, children.map(() => "1fr").join(" ")],
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
      case BLOCK_TYPES.TABLE:
        // console.log(block);
        return (
          <TableContainer mb={8}>
            <Table size="sm" width="auto">
              <Tbody>{children}</Tbody>
            </Table>
          </TableContainer>
        );
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
              parentBlock={block}
              likelyAboveTheFold={likelyAboveTheFold}
            />
          )),
        )}
    </>
  );
}
