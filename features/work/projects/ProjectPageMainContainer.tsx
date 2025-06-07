import { Container } from "@chakra-ui/react";

export default function ProjectPageMainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container maxWidth="container.md" mt={12} mb={10}>
      {children}
    </Container>
  );
}
