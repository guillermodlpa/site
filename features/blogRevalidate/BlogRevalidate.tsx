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
      <Heading mb={6}>Blog Reload</Heading>
      <Text mb={4}>
        {`This is an internal utility to revalidate on-demand the pages that are statically
        rendered, which are the blog and the blog posts.`}
      </Text>
      <Text
        mb={4}
      >{`You can only use it if you have the secret passcode.`}</Text>

      <form onSubmit={handleSubmit}>
        <Flex flexDirection="row" alignItems="flex-end" gap={4}>
          <FormControl width="fit-content">
            <FormLabel>Passcode</FormLabel>
            <Input
              type="password"
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
