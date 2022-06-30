export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  datePublished: string;
  tags: string[];
  imageSrc: string | null;
};
