import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  FormControl,
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
        {`This is a utility to publish changes made the blog posts in Notion.`}
      </Text>
      <Text mb={4}>
        {`Technically speaking, this utility triggers the on-demand revalidation of statically generated pages, like the blog and each blog post.`}
      </Text>
      <Text
        mb={4}
      >{`You can only use it if you have the secret passcode.`}</Text>

      <form onSubmit={handleSubmit}>
        <Flex flexDirection="row" alignItems="flex-end" gap={4}>
          <FormControl width="fit-content" isRequired>
            <FormLabel requiredIndicator={<></>}>Secret Passcode</FormLabel>
            <Input
              type="password"
              name="blog_revalidation_passcode"
              value={passcode}
              onChange={(event) => setPasscode(event.target.value)}
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
