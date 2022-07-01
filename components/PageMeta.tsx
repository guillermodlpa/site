import getConfig from "next/config";
import Head from "next/head";
import truncateString from "../utils/truncateString";

const { publicRuntimeConfig } = getConfig();

const META_DESCRIPTION_LIMIT = 155;

/**
 * Helper component to render SEO meta tags.
 *
 * Canonical: all pages should have a canonical link to avoid potential SEO issues with indexing duplicate pages
 */
export default function PageMeta({
  canonicalPath,
  description,
  title,
}: {
  canonicalPath: string;
  description: string;
  title: string;
}) {
  const truncatedContent = truncateString(description, META_DESCRIPTION_LIMIT);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={truncatedContent} />
      <link
        rel="canonical"
        href={
          canonicalPath.length > 0
            ? `${publicRuntimeConfig.SITE_URL}${canonicalPath}`
            : `${publicRuntimeConfig.SITE_URL}`
        }
      />
      <meta name="description" content={truncatedContent} />
    </Head>
  );
}
