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

export type Project = {
  name: string;
  anchorId: string;
  slug: string;
  date: string;
  backgroundImage: {
    src: StaticImageData;
    alt: string;
    fill?: boolean;
    width?: number;
    height?: number;
    style?: { [key: string]: string | number };
  } | null;
  backgroundColor: null | string;
  logoImage: {
    src: { dark: StaticImageData; light: StaticImageData };
    alt: string;
    fill?: boolean;
    width?: number;
    height?: number;
    style?: { [key: string]: string | number };
  } | null;
  mobileImage: StaticImageData;
  desktopImage: StaticImageData;
  mobileAppBarColor: string;
};
