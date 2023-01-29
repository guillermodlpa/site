import { Button, ButtonGroup } from "@chakra-ui/react";
import umami from "../../lib/umami";
import blogPostCategories, {
  BlogPostCategoryName,
} from "../../utils/blogPostCategories";
import NextLink from "next/link";

export default function CategorySelector({
  categoryName,
  setCategoryName,
}: {
  categoryName: BlogPostCategoryName;
  setCategoryName: (categoryName: BlogPostCategoryName) => void;
}) {
  return (
    <ButtonGroup
      isAttached
      size="md"
      flexWrap="wrap"
      data-selected-category-name={categoryName}
    >
      {blogPostCategories.map((categoryButton) => (
        <Button
          key={categoryButton.name}
          fontWeight="normal"
          data-category-name={categoryButton.name}
          aria-selected={categoryName === categoryButton.name ? true : false}
          variant={categoryName === categoryButton.name ? "solid" : "outline"}
          mt={"-1px"}
          as={NextLink}
          shallow
          href={categoryButton.path}
          onClick={(event) => {
            setCategoryName(categoryButton.name);
            umami.trackEvent(`Apply filter: ${categoryButton.name}`);
          }}
          px={{ base: 2, md: 3 }}
        >
          {categoryButton.label}
        </Button>
      ))}
    </ButtonGroup>
  );
}
