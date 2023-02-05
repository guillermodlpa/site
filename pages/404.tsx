import { Center, Heading, Link, Text } from "@chakra-ui/react";
import { PATH_BLOG } from "../constants/paths";
import NextLink from "next/link";
import Layout from "../layouts/Layout";

function NotFoundPage() {
  return (
    <Layout>
      <Center py={10} flexDirection="column" gap={5}>
        <Heading>Not found</Heading>
        <Text>This page could not be found.</Text>
        <Text>
          <NextLink href={PATH_BLOG} passHref legacyBehavior>
            <Link>Go to blog</Link>
          </NextLink>
        </Text>
      </Center>
    </Layout>
  );
}

export default NotFoundPage;
