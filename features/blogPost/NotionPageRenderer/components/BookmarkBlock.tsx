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

enum Status {
  IDLE = "idle",
  LOADING = "loading",
  LOADED = "loaded",
  ERROR = "error",
}

type BookmarkData = {
  title: string;
  description: string | null;
  favicon: string | null;
  imageSrc: string | null;
};

export default function BookmarkBlock({ url }) {
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [bookmarkData, setBookmarkData] = useState<null | BookmarkData>(null);
  useEffect(() => {
    setStatus(Status.LOADING);
    const encoded = encodeURIComponent(url);
    fetch(`/api/bookmark/${encoded}`)
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          setBookmarkData(data);
          setStatus(Status.LOADED);
        } else {
          setStatus(Status.ERROR);
        }
      })
      .catch((error) => {
        console.error(error);
        setStatus(Status.ERROR);
      });
  }, [url]);

  if (status === Status.ERROR) {
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

  if (status === Status.LOADED) {
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
          {bookmarkData.imageSrc && (
            <Box position="relative" flexGrow={1}>
              {/* we don't use next/image because we don't know the origin domain ahead of time */}
              <ChakraImage
                src={bookmarkData.imageSrc}
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
            width={bookmarkData.imageSrc ? "66%" : "100%"}
          >
            {bookmarkData.title && (
              <Text
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                overflow="hidden"
                fontSize="md"
              >
                {bookmarkData.title}
              </Text>
            )}
            {bookmarkData.description && (
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
                {bookmarkData.description}
              </Text>
            )}

            <Flex gap={2} alignItems="center" overflow="hidden" width="100%">
              {bookmarkData.favicon && (
                <ChakraImage
                  src={bookmarkData.favicon}
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
  return (
    <Skeleton
      height="124px"
      mb={4}
      startColor="blackAlpha.100"
      endColor="blackAlpha.300"
    />
  );
}
