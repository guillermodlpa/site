import { Button, ButtonGroup } from "@chakra-ui/react";
import umami from "../../lib/umami";
import { Categories } from "../../types/types";

const categoryButtons = [
  { name: "all", label: "All" },
  { name: "development", label: "Development" },
  { name: "management", label: "Management" },
  { name: "remote work", label: "Remote Work" },
];

export default function CategorySelector({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: Categories;
  setSelectedCategory;
}) {
  return (
    <ButtonGroup isAttached size="sm">
      {categoryButtons.map((categoryButton) => (
        <Button
          key={categoryButton.name}
          fontWeight="normal"
          aria-selected={
            selectedCategory === categoryButton.name ? true : false
          }
          variant={selectedCategory === categoryButton.name ? "solid" : "ghost"}
          onClick={() => {
            setSelectedCategory(categoryButton.name);
            umami.trackEvent(`Apply filter: ${categoryButton.name}`);
          }}
        >
          {categoryButton.label}
        </Button>
      ))}
    </ButtonGroup>
  );
}
