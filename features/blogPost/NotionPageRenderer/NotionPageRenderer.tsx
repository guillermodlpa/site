import { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";
import NotionBlock from "./NotionBlock";

export default function NotionPageRenderer({
  blocks,
}: {
  blocks: GetBlockResponse[];
}) {
  return (
    <>
      {blocks.map((block) => (
        <NotionBlock block={block} key={block.id} />
      ))}
    </>
  );
}
