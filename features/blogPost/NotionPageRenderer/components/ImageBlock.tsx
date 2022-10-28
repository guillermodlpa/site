import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import generateImageSizesProp from "../../../../utils/generateImageSizesProp";
import getPlainText from "../utils/getPlainText";
import NotionRichText from "./NotionRichText";

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
  return (
    <Box display="flex" justifyContent="center" mb={8}>
      <figure>
        {dimensions ? (
          <Image
            src={src}
            layout="intrinsic"
            width={dimensions.width}
            height={dimensions.height}
            alt={alt}
            priority={priority}
            sizes={generateImageSizesProp({
              base: "95vw",
              md: "75vw",
              xl: "50vw",
            })}
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
