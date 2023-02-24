import type { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";
import { getBlogPostPath, PATH_BLOG } from "../../constants/paths";
import uploadNotionImagesToCloudinary from "upload-notion-images-to-cloudinary";
import { fetchBlogPostBySlug } from "../../lib/notionClient";

type ErrorResponse = { error: string };
type SuccessResponse = { paths: string[] };

const { serverRuntimeConfig } = getConfig();

const handlePost = async (
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) => {
  const passcode = req.headers["x-revalidation-passcode"];
  if (!passcode || passcode !== serverRuntimeConfig.REVALIDATION_PASSCODE) {
    return res
      .status(400)
      .json({ error: "Invalid revalidation passcode header value" });
  }
  const blogPostPath = req.body.blog_post_path;
  if (typeof blogPostPath !== "string") {
    return res
      .status(400)
      .json({ error: "Invalid blog_post_path value, it must be a string" });
  }

  const slug = blogPostPath.replace(/^\/blog\//, "").replace(/^\//, "");

  const blogPost = await fetchBlogPostBySlug(slug);
  if (!blogPost) {
    return res.status(404).json({ error: "Blog post not found" });
  }

  await uploadNotionImagesToCloudinary({
    notionToken: serverRuntimeConfig.NOTION_TOKEN,
    notionPageId: blogPost.id,
    cloudinaryUrl: serverRuntimeConfig.CLOUDINARY_URL,
    cloudinaryUploadFolder: serverRuntimeConfig.CLOUDINARY_UPLOAD_FOLDER,
    logLevel: "debug",
  });

  const paths = [getBlogPostPath(slug), PATH_BLOG];
  await Promise.all([paths.map((path) => res.revalidate(path))]);

  return res.status(200).send({ paths });
};

// Extendable handler to easily separate per method
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const handlers: {
    [method: string]: (
      req: NextApiRequest,
      res: NextApiResponse
    ) => Promise<void>;
  } = {
    POST: handlePost,
  };
  try {
    return req.method && handlers[req.method]
      ? await handlers[req.method](req, res)
      : res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Internal error",
    });
  }
}
