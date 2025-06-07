import { Box, Flex, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { getBlogPostPath } from "../../constants/paths";
import type { BlogPost } from "../../types/types";
import capitalizeString from "../../utils/capitalizeString";
import formatDateForAttribute from "../../utils/formatDateForAttribute";
import formatDateInUTCForUser from "../../utils/formatDateInUTCForUser";
import generateImageSizesProp from "../../utils/generateImageSizesProp";

// note: we should only see future posts in dev mode
function isNotPublishedYet(date: Date | string): boolean {
  if (process.env.NODE_ENV !== "development") {
    return false;
  }
  const dateObject = date instanceof Date ? date : new Date(date);
  const valid = !Number.isNaN(dateObject as unknown as number);
  return valid ? dateObject.getTime() > new Date().getTime() : false;
}

export default function BlogPostSummary({
  slug,
  title,
  imageSrc,
  datePublished,
  excerpt,
  preloadImage,
  tags,
}: BlogPost & { preloadImage: boolean }) {
  return (
    <LinkBox
      opacity={isNotPublishedYet(datePublished) ? 0.25 : undefined}
      as="article"
      transitionProperty="common"
      transitionDuration="faster"
      _hover={{
        "& a": { color: "secondary" },
      }}
      _active={{
        backgroundColor: "blackAlpha.50",
      }}
      px={2}
      mx={-2}
      py={5}
    >
      <Flex gap={8} flexDirection={["column", undefined, "row"]}>
        {imageSrc && (
          <Box
            sx={{
              position: "relative",
              flexShrink: 0,
              width: { base: "100%", md: "25%" },
              maxWidth: { base: "30rem", md: "none" },
              height: { base: "40vw", md: "auto" },
              margin: "0 auto",
            }}
          >
            <Image
              src={imageSrc}
              fill
              style={{ objectFit: "contain" }}
              alt={"Blog post thumbnail"}
              priority={preloadImage}
              sizes={generateImageSizesProp({
                base: "90vw",
                md: "200px",
              })}
            />
          </Box>
        )}
        <Flex flexDirection="column" gap={4} flexGrow={1}>
          <Heading as="h2" size="md">
            <LinkOverlay
              as={NextLink}
              href={getBlogPostPath(slug)}
              color="inherit"
              transitionProperty="common"
              transitionDuration="faster"
            >
              {title}
            </LinkOverlay>
          </Heading>

          <Text fontSize="md">
            <Text
              as="time"
              variant="secondaryText"
              fontSize="inherit"
              dateTime={formatDateForAttribute(datePublished)}
            >
              {formatDateInUTCForUser(datePublished)}
            </Text>
            {tags.length > 0 && (
              <Text as="span" variant="secondaryText" fontSize="inherit">
                {" / "}
                {tags.map(capitalizeString).join(", ")}
              </Text>
            )}
          </Text>

          <Text fontSize="md">{excerpt}</Text>
        </Flex>
      </Flex>
    </LinkBox>
  );
}
