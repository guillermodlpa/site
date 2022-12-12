import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { useState } from "react";
import MagicalDivider from "../../components/MagicalDivider";
import BookmarkBlock from "../blogPost/NotionPageRenderer/components/BookmarkBlock";
import BlogRevalidateDescription from "./blog-revalidate-description.mdx";

enum FormStatus {
  IDDLE,
  SUBMITTING,
  ERROR,
  SUBMITTED,
}

const markdownComponents = {
  p: (props) => <Text mb={4} fontSize="md" {...props} />,
  ul: (props) => <UnorderedList mb={4} {...props} />,
  li: (props) => <ListItem mb={2} {...props} />,
  a: (props) => (
    <Link
      isExternal={
        props.href && !props.href.startsWith("/") && !props.href.startsWith("#")
      }
      {...props}
    />
  ),
};

export default function BlogRevalidate() {
  const [passcode, setPasscode] = useState("");
  const [blogPostPath, setBlogPostSlug] = useState("");
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDDLE);

  function handleSubmit(event) {
    event.preventDefault();
    if (status === FormStatus.SUBMITTING) {
      return;
    }
    setStatus(FormStatus.SUBMITTING);
    fetch("/api/revalidate-blog", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-revalidation-passcode": passcode,
      },
      body: JSON.stringify({
        blog_post_path: blogPostPath,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setStatus(FormStatus.SUBMITTED);
        } else {
          setStatus(FormStatus.ERROR);
        }
      })
      .catch(() => {
        setStatus(FormStatus.ERROR);
      });
  }
  return (
    <Box maxWidth="container.md" mx="auto" px={4} py={16}>
      <Heading as="h1" mb={6}>
        Blog Revalidation
      </Heading>

      <MDXProvider components={markdownComponents}>
        <BlogRevalidateDescription />
      </MDXProvider>

      <form onSubmit={handleSubmit} id="blog_revalidation_form">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "flex-end" }}
          gap={4}
          mt={8}
        >
          <FormControl width="fit-content" isRequired>
            <FormLabel requiredIndicator={<></>}>Secret Passcode</FormLabel>
            <Input
              type="password"
              name="blog_revalidation_passcode"
              value={passcode}
              onChange={(event) => setPasscode(event.target.value)}
            />
          </FormControl>

          <FormControl width="fit-content" isRequired>
            <FormLabel requiredIndicator={<></>}>Blog Post Slug</FormLabel>
            <FormHelperText mb={2}>
              /blog will also be revalidated
            </FormHelperText>
            <Input
              name="blog_post_path"
              placeholder="/how-to-generate-rss-feed-with-next-js"
              value={blogPostPath}
              onChange={(event) => setBlogPostSlug(event.target.value)}
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="primary"
            isLoading={status === FormStatus.SUBMITTING}
          >
            Revalidate
          </Button>

          {status === FormStatus.SUBMITTED && (
            <Alert status="success" width="auto">
              <AlertIcon />
              <AlertTitle>Revalidated!</AlertTitle>
            </Alert>
          )}

          {status === FormStatus.ERROR && (
            <Alert status="error" width="auto">
              <AlertIcon />
              <AlertTitle>Error</AlertTitle>
            </Alert>
          )}
        </Flex>
      </form>

      <MagicalDivider mt={16} mb={16} height="2px" width="66%" />

      <Box as="section">
        <Text mb={4}>
          Check out the implementation of the revalidation endpoint:
        </Text>
        <BookmarkBlock
          url={
            "https://github.com/guillermodlpa/site/blob/main/pages/api/revalidate-blog.tsx"
          }
        />
      </Box>
    </Box>
  );
}
