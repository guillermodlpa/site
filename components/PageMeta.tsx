import getConfig from "next/config";
import Head from "next/head";
import truncateString from "../utils/truncateString";

const { publicRuntimeConfig } = getConfig();

const META_DESCRIPTION_LIMIT = 155;

// https://ogp.me/#types
type ogType = "website" | "article" | "profile";

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
}: {
  canonicalPath: string;
  description: string;
  title: string;
  ogType?: ogType;
  ogImageUrl?: string;
  ogArticleTags?: {
    // https://ogp.me/#type_article
    published_time: string;
    modified_time?: string | null;
    author: string;
    tags: string[];
  };
}) {
  const truncatedContent = truncateString(description, META_DESCRIPTION_LIMIT);
  const canonicalUrl =
    canonicalPath.length > 0
      ? `${publicRuntimeConfig.SITE_URL}${canonicalPath}`
      : `${publicRuntimeConfig.SITE_URL}`;

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
          .filter(([key, value]) => value != undefined)
          .map(([key, value]) =>
            Array.isArray(value) ? (
              value.map((singleValue) => (
                <meta
                  key={key}
                  property={`og:article:${key}`}
                  content={singleValue}
                />
              ))
            ) : (
              <meta key={key} property={`og:article:${key}`} content={value} />
            )
          )}
      <meta property="og:site_name" content="Guillermo de la Puente" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@guillermodlpa" />
    </Head>
  );
}
