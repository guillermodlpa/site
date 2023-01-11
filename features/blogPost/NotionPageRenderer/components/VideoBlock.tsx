import { Box } from "@chakra-ui/react";

export default function VideoBlock({ url }: { url: string }) {
  return (
    <Box mb={4}>
      <video controls>
        <source src={url} />
      </video>
    </Box>
  );
}
