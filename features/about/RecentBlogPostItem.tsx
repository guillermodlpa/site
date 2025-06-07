import { Box, Flex, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { getBlogPostPath } from "../../constants/paths";
import type { BlogPost } from "../../types/types";
import capitalizeString from "../../utils/capitalizeString";
import formatDateForAttribute from "../../utils/formatDateForAttribute";
import formatDateInUTCForUser from "../../utils/formatDateInUTCForUser";
import generateImageSizesProp from "../../utils/generateImageSizesProp";

export default function RecentBlogPostItem({
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
      py={2}
    >
      <Flex gap={6} flexDirection={["column", undefined, "row"]}>
        {imageSrc && (
          <Box
            sx={{
              position: "relative",
              flexShrink: 0,
              width: { base: "50%", md: "15%" },
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
                base: "95vw",
                sm: "25vw",
                lg: "15vw",
              })}
            />
          </Box>
        )}
        <Flex flexDirection="column" gap={2} flexGrow={1} py={3}>
          <Heading as="h3" size="sm">
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

          <Text fontSize="sm">
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
        </Flex>
      </Flex>
    </LinkBox>
  );
}
