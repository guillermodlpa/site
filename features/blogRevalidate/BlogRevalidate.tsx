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
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

enum FormStatus {
  IDDLE,
  SUBMITTING,
  ERROR,
  SUBMITTED,
}

export default function BlogRevalidate() {
  const [passcode, setPasscode] = useState("");
  const [blogPostSlug, setBlogPostSlug] = useState("");
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
        blog_post_slug: blogPostSlug,
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
      <Heading mb={6}>Blog Revalidation</Heading>
      <Text mb={4}>
        {`This is a utility to publish changes made the blog posts in Notion. You can only use it if you have the secret passcode.`}
      </Text>
      <Text mb={4}>
        {`Technically speaking, this utility triggers the on-demand revalidation of statically generated pages, like the blog and each blog post. Doing a full revalidation can take over a minute, and since Vercel has execution limits on their functions, we have to split it.`}
      </Text>
      <Text mb={4}>
        {`In a client project, this view would be made more easy to use, listing all pages from Notion and letting the user select those that they wish to publish changes from.`}
      </Text>

      <form onSubmit={handleSubmit} id="blog_revalidation_form">
        <Flex flexDirection="row" alignItems="flex-end" gap={4} mt={8}>
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
              name="blog_post_slug"
              placeholder="/how-to-generate-rss-feed-with-next-js"
              value={blogPostSlug}
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
    </Box>
  );
}
