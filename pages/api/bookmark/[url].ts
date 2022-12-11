import type { NextApiRequest, NextApiResponse } from "next";
import { unfurl } from "unfurl.js";
import createApiEndpointHandler from "../../../utils/createApiEndpointHandler";

type ErrorResponse = { error: string };
type SuccessResponse = {
  title: string;
  description: string | null;
  favicon: string | null;
  imageSrc: string | null;
};

const CACHE_RESULT_SECONDS = 60 * 60 * 24; // 1 day

const handleGet = async (
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) => {
  const url = req.query.url;
  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "A valid URL string is required" });
  }

  return unfurl(url)
    .then((unfurlResponse) => {
      const response = {
        title: unfurlResponse.title ?? null,
        description: unfurlResponse.description ?? null,
        favicon: unfurlResponse.favicon ?? null,
        imageSrc: unfurlResponse.open_graph?.images?.[0]?.url ?? null,
      };
      return res
        .setHeader("Cache-Control", `public, s-maxage=${CACHE_RESULT_SECONDS}`)
        .json(response);
    })
    .catch((error) => {
      if (error?.code === "ENOTFOUND") {
        return res.status(404).json({ error: "Not found" });
      }
      console.error(error);
      throw new Error(error);
    });
};

export default createApiEndpointHandler({
  GET: handleGet,
});
