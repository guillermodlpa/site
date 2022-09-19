import { ListItem, ResponsiveValue, UnorderedList } from "@chakra-ui/react";

export default function Technologies({
  technologies,
  borderColor,
  backgroundColor,
  alignment,
}: {
  technologies: string[];
  borderColor: string;
  backgroundColor: string;
  alignment: ResponsiveValue<"center" | "flex-end" | "flex-start">;
}) {
  return (
    <UnorderedList
      styleType="none"
      m={0}
      p={0}
      mb={10}
      display="flex"
      rowGap={2}
      columnGap={2}
      flexWrap="wrap"
      justifyContent={alignment}
      zIndex={1}
      position="relative"
    >
      {technologies.map((technology) => (
        <ListItem
          key={technology}
          borderRadius="1rem"
          borderWidth={1}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          px={3}
          fontSize="sm"
        >
          {technology}
        </ListItem>
      ))}
    </UnorderedList>
  );
}
