import { Box, Text, useToken } from "@chakra-ui/react";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import getPlainText from "../utils/getPlainText";
import NotionRichText from "./NotionRichText";

function useGetRenderedWidth(originalWidth: number | undefined) {
  const contentMaxWidth = parseInt(useToken("sizes", "container.md"), 10);
  const [renderedWidth, setRenderedWidth] = useState(
    Math.min(originalWidth, contentMaxWidth)
  );
  useEffect(() => {
    function checkWindowWidth() {
      if (
        typeof window !== "undefined" &&
        window.innerWidth < contentMaxWidth &&
        window.innerWidth < originalWidth
      ) {
        setRenderedWidth(window.innerWidth);
      } else {
        setRenderedWidth(Math.min(originalWidth, contentMaxWidth));
      }
    }
    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);
    return () => window.removeEventListener("resize", checkWindowWidth);
  }, [contentMaxWidth, originalWidth]);
  return renderedWidth;
}

export default function ImageBlock({
  src,
  dimensions,
  priority,
  captionRichTextItems,
}: {
  src: string;
  dimensions: { width: number; height: number } | undefined;
  priority: boolean;
  captionRichTextItems: RichTextItem[] | null;
}) {
  const alt = captionRichTextItems
    ? getPlainText(captionRichTextItems)
    : "Blog post image";

  const renderedWidth = useGetRenderedWidth(dimensions?.width);
  const renderedHeight = (dimensions.height / dimensions.width) * renderedWidth;
  return (
    <Box display="flex" justifyContent="center" mb={8}>
      <figure>
        {dimensions ? (
          <Image
            src={src}
            layout="intrinsic"
            width={renderedWidth}
            height={renderedHeight}
            alt={alt}
            priority={priority}
          />
        ) : (
          // If we don't have dimensions because image probbing failed, we fall back to regular image
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} />
        )}
        {captionRichTextItems && (
          <Text as="figcaption" variant="caption" mt={2}>
            <NotionRichText richTextItems={captionRichTextItems} />
          </Text>
        )}
      </figure>
    </Box>
  );
}
