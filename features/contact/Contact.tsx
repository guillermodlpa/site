import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  ListItem,
  Text,
  Textarea,
  UnorderedList,
} from "@chakra-ui/react";
import getConfig from "next/config";
import NextLink from "next/link";
import { type FormEvent, useState } from "react";
import { PATH_BLOG } from "../../constants/paths";

const { publicRuntimeConfig } = getConfig();

// FormBold fails with a server error when we send an empty value for a key
function filterEmptyParams(params: Record<string, string>) {
  const filteredParams = {};
  for (const [key, value] of Object.entries(params)) {
    if (value.trim() !== "") {
      filteredParams[key] = value;
    }
  }
  return filteredParams;
}

enum FormStatus {
  IDDLE = 0,
  SUBMITTING = 1,
  ERROR = 2,
  SUBMITTED = 3,
}

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus>(FormStatus.IDDLE);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formStatus === FormStatus.SUBMITTING) {
      return;
    }

    setFormStatus(FormStatus.SUBMITTING);
    fetch(publicRuntimeConfig.FORMBOLD_CONTACT_FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filterEmptyParams(data)),
    })
      .then((response) => {
        if (!response.ok) {
          setFormStatus(FormStatus.ERROR);
          return;
        }
        setFormStatus(FormStatus.SUBMITTED);
      })
      .catch((error) => {
        setFormStatus(FormStatus.ERROR);
      });
  }

  return (
    <Container py={10} as="main">
      <Heading mb={2} as="h1" size="xl">
        Get in touch
      </Heading>
      <Text mb={6}>
        {`Send a general message or details of a project you'd like me to be a
        part of. I'll get back to you as soon as possible.`}
      </Text>

      {formStatus === FormStatus.SUBMITTED ? (
        <Alert status="success" variant="subtle">
          <AlertIcon />
          <Box>
            <AlertTitle fontSize="lg" mb={4} mt={2}>
              Form Submitted
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              <Text mb={2}>{`Thank you. I'll get back to you soon.`}</Text>
              <Text mb={1}>{"Your submission:"}</Text>

              <UnorderedList listStyleType="none" ml={0} mb={4}>
                <ListItem fontSize="sm">{data.name}</ListItem>
                <ListItem fontSize="sm">{data.email}</ListItem>
                <ListItem fontSize="sm">{data.website || "-"}</ListItem>
                <ListItem fontSize="sm" whiteSpace="pre-line">
                  {data.message}
                </ListItem>
              </UnorderedList>

              <Text mb={2}>
                <Link as={NextLink} href={PATH_BLOG}>
                  Check out my blog
                </Link>
              </Text>
            </AlertDescription>
          </Box>
        </Alert>
      ) : (
        <form onSubmit={handleSubmit}>
          <FormControl isRequired mb={4}>
            <FormLabel>Your name</FormLabel>
            <Input
              type="text"
              name="name"
              size={{ base: "lg", md: "md" }}
              value={data.name}
              onChange={(event) => setData((data) => ({ ...data, name: event.target.value }))}
            />
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              size={{ base: "lg", md: "md" }}
              value={data.email}
              onChange={(event) => setData((data) => ({ ...data, email: event.target.value }))}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel mb={1}>
              Your website{" "}
              <Text as="span" color="chakra-body-text-secondary">
                (optional)
              </Text>
            </FormLabel>
            <Input
              type="text"
              name="website"
              size={{ base: "lg", md: "md" }}
              value={data.website}
              onChange={(event) => setData((data) => ({ ...data, website: event.target.value }))}
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              rows={5}
              fontSize={{ base: "lg", md: "md" }}
              value={data.message}
              onChange={(event) => setData((data) => ({ ...data, message: event.target.value }))}
            />
          </FormControl>

          {formStatus === FormStatus.ERROR && (
            <FormControl isInvalid>
              <FormErrorMessage>{`There's been an error. Try again later`}</FormErrorMessage>
            </FormControl>
          )}

          <Flex justifyContent="center" mt={6}>
            <Button
              type="submit"
              colorScheme="primary"
              isLoading={formStatus === FormStatus.SUBMITTING}
            >
              Send
            </Button>
          </Flex>
        </form>
      )}
    </Container>
  );
}
