import {
  Box,
  Flex,
  Link,
  LinkBox,
  LinkOverlay,
  Skeleton,
  Text,
  Image as ChakraImage,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

type RequestStatus = "iddle" | "loading" | "success" | "error";

type UrlData = {
  title: string;
  description: string | null;
  favicon: string | null;
  imageSrc: string | null;
};

function useUnfurlUrl(url: string) {
  const [status, setStatus] = useState<RequestStatus>("iddle");
  const [data, setData] = useState<null | UrlData>(null);
  useEffect(() => {
    setStatus("loading");
    const encoded = encodeURIComponent(url);
    fetch(`/api/bookmark/${encoded}`)
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          setData(data);
          setStatus("success");
        } else {
          setStatus("error");
        }
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  }, [url]);

  return { status, data };
}

function ErrorFallback({ url }: { url: string }) {
  return (
    <Box display="flex" mb={4} backgroundColor={"callout-background"} p={3}>
      <Text wordBreak="break-word">
        <Link isExternal href={url}>
          {url}
        </Link>
      </Text>
    </Box>
  );
}

function LoadingSkeleton() {
  return (
    <Skeleton
      height="124px"
      mb={4}
      startColor="blackAlpha.100"
      endColor="blackAlpha.300"
    />
  );
}

function UnfurledUrlPreview({
  url,
  urlData,
}: {
  url: string;
  urlData: UrlData;
}) {
  return (
    <LinkBox>
      <Box
        mb={4}
        backgroundColor={"callout-background"}
        p={0}
        borderRadius="sm"
        data-url={url}
        overflow="hidden"
        _hover={{ backgroundColor: "callout-background-focused" }}
        transitionProperty="background"
        transitionDuration="fast"
        transitionTimingFunction="ease-in-out"
        display="flex"
        flexDirection="row-reverse"
        border="1px"
        borderColor="border"
      >
        {urlData.imageSrc && (
          <Box position="relative" flexGrow={1}>
            {/* we don't use next/image because we don't know the origin domain ahead of time */}
            <ChakraImage
              src={urlData.imageSrc}
              objectFit="cover"
              position="absolute"
              height="100%"
              width="100%"
              alt="Website preview"
              loading="lazy"
              fallback={null}
              fallbackStrategy="onError"
            />
          </Box>
        )}

        <Flex
          flexDirection="column"
          gap={1}
          p={3}
          width={urlData.imageSrc ? "66%" : "100%"}
        >
          {urlData.title && (
            <Text
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
              fontSize="md"
            >
              {urlData.title}
            </Text>
          )}
          {urlData.description && (
            <Text
              variant="secondaryText"
              fontSize="sm"
              overflow="hidden"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
              }}
            >
              {urlData.description}
            </Text>
          )}

          <Flex gap={2} alignItems="center" overflow="hidden" width="100%">
            {urlData.favicon && (
              <ChakraImage
                src={urlData.favicon}
                width={4}
                height={4}
                objectFit="cover"
                alt="Website icon"
              />
            )}
            <Text
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
              fontSize="md"
            >
              <Link isExternal href={url} as={LinkOverlay}>
                {url}
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </LinkBox>
  );
}

export default function BookmarkBlock({ url }: { url: string }) {
  const { data, status } = useUnfurlUrl(url);

  if (status === "error") {
    return <ErrorFallback url={url} />;
  }
  if (status === "success") {
    return <UnfurledUrlPreview url={url} urlData={data} />;
  }
  return <LoadingSkeleton />;
}
