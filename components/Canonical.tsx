import getConfig from "next/config";
import Head from "next/head";

const { publicRuntimeConfig } = getConfig();

/**
 * Helper component to render a next/head and a <link> tag with canonical inside
 * All pages should have a canonical link to avoid potential SEO issues with indexing duplicate pages
 */
export default function Canonical({ path }: { path: string }) {
  return (
    <Head>
      <link
        rel="canonical"
        href={
          path.length > 0
            ? `${publicRuntimeConfig.SITE_URL}${path}`
            : `${publicRuntimeConfig.SITE_URL}`
        }
      />
    </Head>
  );
}
