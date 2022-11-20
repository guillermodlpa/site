export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  datePublished: string;
  dateUpdated: string | null;
  tags: string[];
  imageSrc: string | null;
};

export type Categories = "all" | "development" | "management" | "remote work";
