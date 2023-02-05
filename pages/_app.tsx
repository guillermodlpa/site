import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Script from "next/script";
import theme from "../constants/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        {/* todo: add favicon */}
        {/* <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" /> */}

        <meta name="robots" content="all" />
      </Head>

      {/* Not happy to add Google tracking, but I'm making experiments with Google Ads and this is necessary to track conversions */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11079551803"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-11079551803');`}
      </Script>

      <ChakraProvider theme={theme}>
        <AnimatePresence initial={false} mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
