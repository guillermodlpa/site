import { Flex } from "@chakra-ui/react";

export default function ProjectPageButtonGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      flexWrap="wrap"
      gap={4}
      justifyContent="center"
      flexDirection={{ base: "column", md: "row-reverse" }}
      mb={{ base: 12, md: 20 }}
    >
      {children}
    </Flex>
  );
}
