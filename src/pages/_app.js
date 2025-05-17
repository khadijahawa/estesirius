/* eslint-disable react/no-unescaped-entities */
// src/pages/_app.js
import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import IconManager from "../components/IconManager";

import faviconUrl from "../../public/ico/Estesirius_logo.ico";

import en from "../lang/en.json";
import ar from "../lang/ar.json";

const messages = {
  en,
  ar
};

function getDirection(locale) {
  if (locale === "en") {
    return "ltr";
  }

  return "rtl";
}
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>Estesirius</title>
        <html lang={locale} dir={getDirection(locale)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Snap Pixel Code */}
        <script type="text/javascript">
          {(function (e, t, n) {
            if (e.snaptr) return;
            var a = (e.snaptr = function () {
              a.handleRequest
                ? a.handleRequest.apply(a, arguments)
                : a.queue.push(arguments);
            });
            a.queue = [];
            var s = "script";
            var r = t.createElement(s);
            r.async = !0;
            r.src = n;
            var u = t.getElementsByTagName(s)[0];
            u.parentNode.insertBefore(r, u);
          })(window, document, "https://sc-static.net/scevent.min.js")}
          snaptr('init', '6f5ff748-d361-453c-b897-561b08028264', {});
          snaptr('track', 'PAGE_VIEW');
        </script>
        {/* End Snap Pixel Code */}
      </Head>
      <IconManager iconUrl={faviconUrl} />
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </>
  );
}
