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
  const { locale = 'en' } = useRouter();
  
  // Ensure a valid locale is used (fallback to 'en' if needed)
  const currentLocale = messages[locale] ? locale : 'en';

  return (
    <>
      <Head>
        <title>Estesirius</title>
        <html lang={currentLocale} dir={getDirection(currentLocale)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <IconManager iconUrl={faviconUrl} />
      <IntlProvider locale={currentLocale} messages={messages[currentLocale] || messages.en}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </>
  );
}
