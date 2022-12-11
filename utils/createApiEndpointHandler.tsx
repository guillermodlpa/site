import { NextApiRequest, NextApiResponse } from "next";

type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export default function createApiEndpointHandler(handlers: {
  [method in Method]?: Handler;
}) {
  return async function handle(req: NextApiRequest, res: NextApiResponse) {
    try {
      return req.method && handlers[req.method]
        ? await handlers[req.method](req, res)
        : res.status(405).json({ error: "Method not allowed" });
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : "Internal error",
      });
    }
  };
}
