import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import getConfig from "next/config";
import { FormEvent, useState } from "react";
import NextLink from "next/link";
import { PATH_BLOG } from "../../constants/paths";

const { publicRuntimeConfig } = getConfig();

enum FormStatus {
  IDDLE,
  SUBMITTING,
  ERROR,
  SUBMITTED,
}

// FormBold fails with a server error when we send an empty value for a key
function removeEmptyValues(params: { [key: string]: string }): {
  [key: string]: string;
} {
  const filteredParams = {};
  Object.entries(params).forEach(([key, value]) => {
    if (value.trim() !== "") {
      filteredParams[key] = value;
    }
  });
  return filteredParams;
}

export default function SubscribeToNewsletterForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>(FormStatus.IDDLE);

  const [data, setData] = useState({
    name: "",
    email: "",
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (formStatus === FormStatus.SUBMITTING) {
      return;
    }

    setFormStatus(FormStatus.SUBMITTING);
    fetch(publicRuntimeConfig.FORMBOLD_NEWSLETTER_FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(removeEmptyValues(data)),
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
    <Box onSubmit={handleSubmit} as="form" mt={8}>
      {formStatus === FormStatus.SUBMITTED ? (
        <Alert status="success" variant="subtle">
          <AlertIcon />
          <Box>
            <AlertTitle fontSize="lg" mb={4} mt={2}>
              Subscribed
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              <Text mb={2}>{`Thank you! I'll be in touch.`}</Text>
              <Text mb={1}>{`Your submission:`}</Text>

              <UnorderedList listStyleType="none" ml={0} mb={4}>
                <ListItem fontSize="sm">{data.name}</ListItem>
                <ListItem fontSize="sm">{data.email}</ListItem>
              </UnorderedList>

              <Text mb={2}>
                <NextLink href={PATH_BLOG} passHref legacyBehavior>
                  <Link>Check out my blog</Link>
                </NextLink>
              </Text>
            </AlertDescription>
          </Box>
        </Alert>
      ) : (
        <Flex
          gap={4}
          width="fit-content"
          mx="auto"
          alignItems="flex-end"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="flex-end"
          flexWrap="wrap"
        >
          <FormControl isRequired width="fit-content">
            <FormLabel requiredIndicator={<></>}>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={data.name}
              onChange={(event) =>
                setData((data) => ({ ...data, name: event.target.value }))
              }
            />
          </FormControl>
          <FormControl isRequired width="fit-content">
            <FormLabel requiredIndicator={<></>}>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={data.email}
              onChange={(event) =>
                setData((data) => ({ ...data, email: event.target.value }))
              }
            />
          </FormControl>

          <Button
            flexShrink={0}
            type="submit"
            colorScheme="primary"
            isLoading={formStatus === FormStatus.SUBMITTING}
          >
            Subscribe
          </Button>
        </Flex>
      )}

      {formStatus === FormStatus.ERROR && (
        <FormControl isInvalid>
          <FormErrorMessage
            textAlign="center"
            width="full"
            display="block"
          >{`There's been an error. Try again later`}</FormErrorMessage>
        </FormControl>
      )}
    </Box>
  );
}
