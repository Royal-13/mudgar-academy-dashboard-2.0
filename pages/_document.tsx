import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <title>Dashboard</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicon.ico"
        />
        <link rel="stylesheet" href="styles/css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          href="styles/plugins/fontawesome/css/fontawesome.min.css"
        />
        <link
          rel="stylesheet"
          href="styles/plugins/fontawesome/css/all.min.css"
        />
        <link rel="stylesheet" href="style/plugins/feather/feather.css" />
        <link rel="stylesheet" href="style/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/js/jquery-3.6.0.min.js" async></script>
        <script src="/js/bootstrap.bundle.min.js" async></script>
        <script src="/js/email-decode.min.js" async></script>

        <script src="/js/script.js" async></script>
      </body>
    </Html>
  );
}
