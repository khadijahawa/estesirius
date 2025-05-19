/* eslint-disable react/no-unescaped-entities */
// src/pages/_app.js
import { useEffect } from "react";
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
