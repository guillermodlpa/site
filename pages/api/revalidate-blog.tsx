import type { NextApiRequest, NextApiResponse } from "next";
import uploadNotionImagesToCloudinary from "upload-notion-images-to-cloudinary";
import { PATH_BLOG, getBlogPostPath } from "../../constants/paths";
import { fetchBlogPostBySlug } from "../../lib/notionClient";

type ErrorResponse = { error: string };
type SuccessResponse = { paths: string[] };

const revalidationPasscode = process.env.REVALIDATION_PASSCODE;
const notionToken = process.env.NOTION_TOKEN;
const cloudinaryUrl = process.env.CLOUDINARY_URL;
const cloudinaryUploadFolder = process.env.CLOUDINARY_UPLOAD_FOLDER;

const handlePost = async (
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>,
) => {
  if (!revalidationPasscode || !notionToken || !cloudinaryUrl || !cloudinaryUploadFolder) {
    return res.status(500).json({ error: "Missing server configuration" });
  }
  const passcode = req.headers["x-revalidation-passcode"];
  if (!passcode || passcode !== revalidationPasscode) {
    return res.status(400).json({ error: "Invalid revalidation passcode header value" });
  }
  const blogPostPath = req.body.blog_post_path;
  if (typeof blogPostPath !== "string") {
    return res.status(400).json({ error: "Invalid blog_post_path value, it must be a string" });
  }

  const slug = blogPostPath.replace(/^\/blog\//, "").replace(/^\//, "");

  const blogPost = await fetchBlogPostBySlug(slug);
  if (!blogPost) {
    return res.status(404).json({ error: "Blog post not found" });
  }

  await uploadNotionImagesToCloudinary({
    notionToken,
    notionPageId: blogPost.id,
    cloudinaryUrl,
    cloudinaryUploadFolder,
    logLevel: "debug",
  });

  const paths = [getBlogPostPath(slug), PATH_BLOG];
  await Promise.all([paths.map((path) => res.revalidate(path))]);

  return res.status(200).send({ paths });
};

// Extendable handler to easily separate per method
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const handlers: {
    [method: string]: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
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
