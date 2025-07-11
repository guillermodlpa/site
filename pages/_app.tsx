import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { type NextRouter, useRouter } from "next/router";
import theme from "../constants/theme";

function getPageTransitionKey(router: NextRouter) {
  if (router.pathname === "/blog/category/[categoryName]") {
    // exception here for not showing page transition animation when changing
    // the selected blog category
    return "/blog";
  }
  return router.asPath;
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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

      <ChakraProvider theme={theme}>
        <AnimatePresence initial={false} mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Component {...pageProps} key={getPageTransitionKey(router)} />
        </AnimatePresence>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
