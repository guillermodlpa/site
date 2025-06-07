import { Center, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { PATH_BLOG } from "../constants/paths";
import Layout from "../layouts/Layout";

function NotFoundPage() {
  return (
    <Layout>
      <Center py={10} flexDirection="column" gap={5}>
        <Heading>Not found</Heading>
        <Text>This page could not be found.</Text>
        <Text>
          <Link as={NextLink} href={PATH_BLOG}>
            Go to blog
          </Link>
        </Text>
      </Center>
    </Layout>
  );
}

export default NotFoundPage;
