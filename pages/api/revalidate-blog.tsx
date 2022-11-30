import type { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";
import { getBlogPostPath, PATH_BLOG } from "../../constants/paths";
import uploadNotionImagesToCloudinary from "upload-notion-images-to-cloudinary";

type ErrorResponse = { error: string };

const { serverRuntimeConfig } = getConfig();

const handlePost = async (
  req: NextApiRequest,
  res: NextApiResponse<{ paths: string[] } | ErrorResponse>
) => {
  const passcode = req.headers["x-revalidation-passcode"];
  if (!passcode || passcode !== serverRuntimeConfig.REVALIDATION_PASSCODE) {
    return res
      .status(400)
      .json({ error: "Invalid revalidation passcode header value" });
  }
  const blogPostSlug = req.body.blog_post_slug;
  if (typeof blogPostSlug !== "string") {
    return res
      .status(400)
      .json({ error: "Invalid blog_post_slug value, it must be a string" });
  }

  // await uploadNotionImagesToCloudinary({
  //   notionToken: serverRuntimeConfig.NOTION_TOKEN,
  //   notionDatabaseId: serverRuntimeConfig.NOTION_BLOG_DATABASE_ID,
  //   cloudinaryUrl: serverRuntimeConfig.CLOUDINARY_URL,
  //   cloudinaryUploadFolder: serverRuntimeConfig.CLOUDINARY_UPLOAD_FOLDER,
  //   logLevel: "debug",
  // });

  // const blogPosts = await fetchBlogPosts();

  const paths = [
    getBlogPostPath(blogPostSlug.replace(/^\/blog\//, "").replace(/^\//, "")),
    PATH_BLOG,
  ];

  for (const path of paths) {
    await res.revalidate(path);
  }

  return res.status(200).send({ paths });
};

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