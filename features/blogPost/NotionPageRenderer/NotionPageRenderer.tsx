import { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";
import { memo } from "react";
import addNumberedListItemCounters from "./utils/addNumberedListItemCounters";
import NotionBlock from "./NotionBlock";

function NotionPageRenderer({ blocks }: { blocks: GetBlockResponse[] }) {
  // this function iterates recursively all the page and mutates the structure
  // since we only view the page, not change it, this shouldn't actually re-render much
  const blocksWithNumberedListItemCounters =
    addNumberedListItemCounters(blocks);
  return (
    <>
      {blocksWithNumberedListItemCounters.map((block, index) => (
        <NotionBlock
          block={block}
          key={block.id}
          likelyAboveTheFold={index < 10}
        />
      ))}
    </>
  );
}

// We memo it so components around can change often without triggering expensive full page re-renders
export default memo(NotionPageRenderer);
