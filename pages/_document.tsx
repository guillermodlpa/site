import { ColorModeScript } from "@chakra-ui/react";
import getConfig from "next/config";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import chakraUITheme from "../constants/theme";

const { publicRuntimeConfig } = getConfig();

function FaviconTags() {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#af6ae2" />
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
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={chakraUITheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
