/**
 * This endpoint returns the cover image corresponding to the Notion page ID passed
 * The Notion page needs to be part of the Notion database that was made accessible for the integration
 *
 * We use this technique to proxy images from Notion, as it returns URLs that expire in the API
 * but for Next.js image optimization we need a stable endpoint. This is the stable endpoint, as it's cached
 *
 * TODO:
 * - Make this statically generated on build time and revalidation, to not depend on Notion's state when the Vercel Edge Network cache expires
 */

import { GetServerSideProps } from "next";
import { fetchBlogPostByPageId } from "../../../../lib/notionClient";

function getContentTypeByExtension(url: string) {
  const extensionToMimeType = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".apng": "image/apng",
    ".avif": "image/avif",
    ".tiff": "image/tiff",
    ".svg": "image/svg+xml",
  };
  for (const [extension, mimeType] of Object.entries(extensionToMimeType)) {
    if (url.endsWith(extension)) {
      return mimeType;
    }
  }
  return undefined;
}

const cacheMaxAge = 1209600; // 14 days (max supported is 31 days)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pageId = ctx.params.pageId;
  if (!pageId || typeof pageId !== "string") {
    ctx.res.statusCode = 400;
    ctx.res.setHeader("Content-Type", "application/json");
    ctx.res.write(
      JSON.stringify({
        error: "A valid pageId string is required",
      })
    );
    ctx.res.end();
    return { props: {} };
  }

  const { originalNotionImageSrc } = await fetchBlogPostByPageId(pageId);

  if (!originalNotionImageSrc) {
    ctx.res.statusCode = 400;
    ctx.res.setHeader("Content-Type", "application/json");
    ctx.res.write(
      JSON.stringify({
        error: "Not found",
      })
    );
    ctx.res.end();
    return { props: {} };
  }

  await fetch(originalNotionImageSrc, {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-encoding": "gzip, deflate, br",
      "cache-control": "max-age=0",
    },
  })
    .then(async (imageResponse) => {
      if (!imageResponse.ok) {
        ctx.res.statusCode = imageResponse.status;
        ctx.res.setHeader("Content-Type", "application/json");
        ctx.res.write(
          JSON.stringify({
            error: `Download error: ${imageResponse.statusText}`,
          })
        );
        ctx.res.end();
        return;
      }

      const contentType =
        imageResponse.headers.get("content-type") ||
        getContentTypeByExtension(originalNotionImageSrc);
      const contentLength = imageResponse.headers.get("content-length");

      ctx.res.writeHead(200, {
        "content-type": contentType,
        "content-length": contentLength,
        "cache-control": `public, max-age=${cacheMaxAge}`,
      });
      const readableStream =
        imageResponse.body as unknown as NodeJS.ReadableStream;

      await new Promise(function (resolve) {
        readableStream.pipe(ctx.res);
        readableStream.on("end", resolve);
      });
    })
    .catch((error: Error) => {
      console.error(error);
      ctx.res.statusCode = 500;
      ctx.res.setHeader("Content-Type", "application/json");
      ctx.res.write(
        JSON.stringify({
          error: `${error.name}: ${error.message}`,
        })
      );
      ctx.res.end();
    });

  return { props: {} };
};

// Default export to prevent next.js errors
export default function NotionResourcePageCover() {}
