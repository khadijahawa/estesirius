// src/pages/_app.js
import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import IconManager from "../components/IconManager";

// Import the icon directly
import faviconUrl from "../utilities/ico/images/Estesirius_logo.ico";

import en from "../lang/en.json";
import ar from "../lang/ar.json";

const messages = {
  en,
  ar
};

function getDirection(locale) {
  if (locale === "ar") {
    return "rtl";
  }
  return "ltr";
}

export default function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>Estesirius</title>
        <html lang={locale} dir={getDirection(locale)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
