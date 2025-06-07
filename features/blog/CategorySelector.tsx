import { Button, ButtonGroup } from "@chakra-ui/react";
import NextLink from "next/link";
import blogPostCategories, { type BlogPostCategoryName } from "../../utils/blogPostCategories";

export default function CategorySelector({
  categoryName,
  setCategoryName,
}: {
  categoryName: BlogPostCategoryName;
  setCategoryName: (categoryName: BlogPostCategoryName) => void;
}) {
  return (
    <ButtonGroup isAttached size="md" flexWrap="wrap" data-selected-category-name={categoryName}>
      {blogPostCategories.map((categoryButton) => (
        <Button
          key={categoryButton.name}
          fontWeight="normal"
          data-category-name={categoryButton.name}
          aria-selected={categoryName === categoryButton.name}
          variant={categoryName === categoryButton.name ? "solid" : "outline"}
          mt={"-1px"}
          as={NextLink}
          shallow
          href={categoryButton.path}
          onClick={(event) => {
            setCategoryName(categoryButton.name);
          }}
          px={{ base: 2, md: 3 }}
        >
          {categoryButton.label}
        </Button>
      ))}
    </ButtonGroup>
  );
}
