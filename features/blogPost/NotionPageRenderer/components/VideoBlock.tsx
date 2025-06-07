import { Box } from "@chakra-ui/react";
import { useMemo } from "react";

function getExtensions(url: string) {
  const extensions = ["mp4", "webm"];
  const extension = url.split(".").pop();

  const mp4 = extensions.includes(extension) ? url : url.replace(extension, "mp4");

  const webm = extensions.includes(extension) ? url : url.replace(extension, "webm");

  return { mp4, webm };
}

export default function VideoBlock({
  url,
  showWarning,
}: {
  url: string;
  showWarning: boolean;
}) {
  const { mp4, webm } = useMemo(() => getExtensions(url), [url]);

  return (
    <Box mb={4}>
      <video controls>
        <source src={mp4} type="video/mp4" />
        <source src={webm} type="video/webm" />
        <track kind="captions" src="" label="English" />
      </video>

      {showWarning && "Heads up, this video is hosted on Notion. It won't work with SSG"}
    </Box>
  );
}
