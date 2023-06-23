import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import React from "react";
import theme from "theme/theme";

import "styles/Fonts.css";
import "styles/App.css";
import "styles/Contact.css";

import "react-calendar/dist/Calendar.css";
import "styles/MiniCalendar.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function (m, a, z, e) {
          var s, t;
          try {
            t = m.sessionStorage.getItem('maze-us');
          } catch (err) {}

          if (!t) {
            t = new Date().getTime();
            try {
              m.sessionStorage.setItem('maze-us', t);
            } catch (err) {}
          }

          s = a.createElement('script');
          s.src = z + '?t=' + t + '&apiKey=' + e;
          s.async = true;
          a.getElementsByTagName('head')[0].appendChild(s);
          m.mazeUniversalSnippetApiKey = e;
        })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', 'a5ebfa0c-5b47-49d5-88ed-a65b46515fc3');
      `,
          }}
        />
        <title>myITS Wali</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </ChakraProvider>
  );
}

export default MyApp;
