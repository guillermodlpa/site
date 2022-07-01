import getConfig from "next/config";
import Document, { Html, Head, Main, NextScript } from "next/document";

const { publicRuntimeConfig } = getConfig();

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

          <script
            async
            defer
            data-website-id={publicRuntimeConfig.UMAMI_WEBSITE_ID}
            data-domains="guillermodlpa.com,guillermodelapuente.com"
            src="https://umami-pvn48eb4t-guillermodlpa.vercel.app/umami.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
