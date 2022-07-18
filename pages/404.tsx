import { Center, Heading, Link, Text } from "@chakra-ui/react";
import { PATH_BLOG } from "../constants/paths";
import BlogLayout from "../layouts/BlogLayout";
import NextLink from "next/link";

function NotFoundPage() {
  return (
    <Center py={10} flexDirection="column" gap={5}>
      <Heading>Not found</Heading>
      <Text>This page could not be found.</Text>
      <Text>
        <NextLink href={PATH_BLOG} passHref>
          <Link>Go to blog</Link>
        </NextLink>
      </Text>
    </Center>
  );
}

NotFoundPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

export default NotFoundPage;
