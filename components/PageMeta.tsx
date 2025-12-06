import Head from "next/head";
import truncateString from "../utils/truncateString";

const META_DESCRIPTION_LIMIT = 155;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";

// https://ogp.me/#types
type OgType = "website" | "article" | "profile";

type RobotsTag = "all" | "noindex" | "nofollow" | "none";

/**
 * Helper component to render SEO meta tags.
 *
 * Canonical: all pages should have a canonical link to avoid potential SEO issues with indexing duplicate pages
 */
export default function PageMeta({
  canonicalPath,
  description,
  title,
  ogType = "website",
  ogImageUrl,
  ogArticleTags,
  robots,
}: {
  canonicalPath: string;
  description: string;
  title: string;
  ogType?: OgType;
  ogImageUrl?: string;
  ogArticleTags?: {
    // https://ogp.me/#type_article
    published_time: string;
    modified_time?: string | null;
    author: string;
    tags: string[];
  };
  robots?: RobotsTag | RobotsTag[];
}) {
  const truncatedContent = truncateString(description, META_DESCRIPTION_LIMIT);
  const canonicalUrl = canonicalPath.length > 0 ? `${siteUrl}${canonicalPath}` : `${siteUrl}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={truncatedContent} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={truncatedContent} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={truncatedContent} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
      {ogArticleTags &&
        Object.entries(ogArticleTags)
          .filter(([key, value]) => value !== undefined)
          .map(([key, value]) =>
            Array.isArray(value) ? (
              value.map((singleValue) => (
                <meta key={key} property={`og:article:${key}`} content={singleValue} />
              ))
            ) : (
              <meta key={key} property={`og:article:${key}`} content={value} />
            ),
          )}
      <meta property="og:site_name" content="Guillermo de la Puente" />

      {robots && (
        <meta name="robots" content={typeof robots === "string" ? robots : robots.join(", ")} />
      )}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@guillermodlpa" />
    </Head>
  );
}
