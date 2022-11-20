import {
  Box,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { getBlogPostPath } from "../../constants/paths";
import { BlogPost } from "../../types/types";
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
  const valid = !isNaN(dateObject as unknown as number);
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
              layout="fill"
              objectFit="contain"
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
        <Flex flexDirection="column" gap={4}>
          <Heading as="h2" size="md">
            <NextLink href={getBlogPostPath(slug)} passHref>
              <LinkOverlay
                color="inherit"
                transitionProperty="common"
                transitionDuration="faster"
              >
                {title}
              </LinkOverlay>
            </NextLink>
          </Heading>

          <Text>
            <Text
              as="time"
              variant="secondaryText"
              fontSize="md"
              dateTime={formatDateForAttribute(datePublished)}
            >
              {formatDateInUTCForUser(datePublished)}
            </Text>
            {tags.length > 0 && (
              <>
                <Text as="span" variant="secondaryText" fontSize="md">
                  {` / `}
                  {tags.map(capitalizeString).join(", ")}
                </Text>
              </>
            )}
          </Text>

          <Text fontSize="md">{excerpt}</Text>
        </Flex>
      </Flex>
    </LinkBox>
  );
}
