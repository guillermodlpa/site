import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import chakraUITheme from "../constants/theme";

function FaviconTags() {
  return (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#af6ae2" />
    </>
  );
}

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* @todo: consider adding a Google font */}
          {/* <link
            href={
              "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap"
            }
            rel="stylesheet"
          /> */}

          <FaviconTags />
          {process.env.NEXT_PUBLIC_VERCEL_ENV === "production" && (
            <script
              defer
              src="https://cloud.umami.is/script.js"
              data-website-id="576f528f-c9fe-4fce-9317-9cc710a8c9aa"
            />
          )}
        </Head>
        <body>
          <ColorModeScript initialColorMode={chakraUITheme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
