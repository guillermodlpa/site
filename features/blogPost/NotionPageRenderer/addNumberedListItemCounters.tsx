import { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";
import { NUMBERED_LIST_ITEM } from "./blockTypes";

/**
 * Adds a `counter` property in the numbered list items, so we can have number indexes with them
 * The Notion API doesn't return the info about the index to use for the list item
 */
export default function addNumberedListItemCounters(
  blocks: GetBlockResponse[]
): GetBlockResponse[] {
  let counter = 0;
  const blocksWithCounters = blocks.map((block) => {
    if ("type" in block && block.type === NUMBERED_LIST_ITEM) {
      counter += 1;
      return {
        ...block,
        [NUMBERED_LIST_ITEM]: {
          ...block[NUMBERED_LIST_ITEM],
          counter,
        },
      };
    }
    counter = 0;
    return block;
  });

  const blocksWithChildrenWithCounter = blocksWithCounters.map((block) => {
    if (!("type" in block)) {
      return block;
    }
    if (
      "children" in block[block.type] &&
      // @ts-ignore
      block[block.type].children.length > 0
    ) {
      return {
        ...block,
        [block.type]: {
          ...block[block.type],
          // @ts-ignore
          children: addNumberedListItemCounters(block[block.type]?.children),
        },
      };
    }
    return block;
  });

  return blocksWithChildrenWithCounter;
}
