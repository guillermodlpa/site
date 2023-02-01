import { Flex, FlexProps, Tag } from "@chakra-ui/react";

export default function TagCloud({
  tags,
  ...rest
}: { tags: string[] } & FlexProps) {
  return (
    <Flex
      as="section"
      flexDirection="row"
      wrap="wrap"
      gap={2}
      justifyContent="center"
      {...rest}
    >
      {tags.map((tag) => (
        <Tag key={tag} variant="outline" width="auto">
          {tag}
        </Tag>
      ))}
    </Flex>
  );
}
