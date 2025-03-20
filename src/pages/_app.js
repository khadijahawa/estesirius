// src/pages/_app.js
import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en from "../lang/en.json";
import ar from "../lang/ar.json";

const messages = {
  en,
  ar
};

function getDirection(locale) {
  if (locale === "en") {
    return "rtl";
  }
  return "ltr";
}

export default function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href="/images/ico/Estesirius_logo.ico" />
        <title>Estesirius</title>
      </Head>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </>
  );
}
