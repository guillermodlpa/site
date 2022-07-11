import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import MagicalDivider from "../../components/MagicalDivider";
import { getBlogPostPath } from "../../constants/paths";
import { BlogPost } from "../../types/types";
import formatDateForAttribute from "../../utils/formatDateForAttribute";
import formatDateForUser from "../../utils/formatDateForUser";

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
}: BlogPost & { preloadImage: boolean }) {
  return (
    <Box
      mb={[12, undefined, 24]}
      opacity={isNotPublishedYet(datePublished) ? 0.25 : undefined}
    >
      <Box my={8}>
        <Heading as="h2" size="xl" mb={2}>
          <NextLink href={getBlogPostPath(slug)}>
            <Link variant="inheritColorKeepHover">{title}</Link>
          </NextLink>
        </Heading>
        <MagicalDivider height="2px" />
      </Box>

      <Flex gap={8} flexDirection={["column", undefined, "row"]}>
        {imageSrc && (
          <Box
            sx={{
              position: "relative",
              flexShrink: 0,
              width: ["100%", undefined, "25%"],
              height: ["50vw", undefined, "auto"],
            }}
          >
            <Image
              src={imageSrc}
              layout="fill"
              objectFit="contain"
              alt={"Blog post thumbnail"}
              priority={preloadImage}
            />
          </Box>
        )}
        {/* // <Box
        //   sx={{
          //     height: ["50vw", undefined, "auto"],
          //     width: ["100%", undefined, "25%"],
          //     backgroundImage: `url(${imageSrc})`,
          //     backgroundSize: ["cover", undefined, "contain"],
          //     backgroundPosition: "top center",
          //     backgroundRepeat: "no-repeat",
          //     flexShrink: 0,
          //   }}
        // /> */}
        <Box>
          <Text>
            <Text
              as="time"
              variant="secondaryText"
              dateTime={formatDateForAttribute(datePublished)}
            >
              {formatDateForUser(datePublished)}
            </Text>
            <Text as="span" variant="secondaryText">{` / `}</Text>
            {excerpt}{" "}
            <NextLink href={getBlogPostPath(slug)} passHref>
              <Link>Read more</Link>
            </NextLink>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
