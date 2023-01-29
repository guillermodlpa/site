import { PATH_BLOG } from "./../constants/paths";
export type BlogPostCategoryName =
  | "all"
  | "development"
  | "management"
  | "digital nomad"
  | "others";

const blogPostCategories: {
  name: BlogPostCategoryName;
  label: string;
  path: string;
}[] = [
  { name: "all", label: "All", path: `${PATH_BLOG}` },
  {
    name: "development",
    label: "Development",
    path: `${PATH_BLOG}/category/development`,
  },
  {
    name: "management",
    label: "Management",
    path: `${PATH_BLOG}/category/management`,
  },
  {
    name: "digital nomad",
    label: "Digital Nomad",
    path: `${PATH_BLOG}/category/digital+nomad`,
  },
  { name: "others", label: "Others", path: `${PATH_BLOG}/category/others` },
];

export default blogPostCategories;
