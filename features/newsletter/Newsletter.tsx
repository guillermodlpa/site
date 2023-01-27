import { Box, Heading, Text } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import NewsletterContent from "./newsletter-content.mdx";
import SubscribeToNewsletterForm from "./SubscribeToNewsletterForm";

const markdownComponents = {
  h1: (props) => <Heading as="h1" size="xl" mb={6} mt={2} {...props} />,
  h2: (props) => <Heading as="h2" size="md" mb={6} mt={2} {...props} />,
  h3: (props) => <Heading as="h3" size="sm" mb={6} mt={2} {...props} />,
  p: (props) => <Text mb={4} fontSize="md" {...props} />,
};

export default function Newsletter() {
  return (
    <Box
      px={4}
      py={16}
      position="relative"
      overflow="hidden"
      maxWidth="container.md"
      margin="0 auto"
    >
      <MDXProvider components={markdownComponents}>
        <NewsletterContent />
      </MDXProvider>

      <SubscribeToNewsletterForm />
    </Box>
  );
}
