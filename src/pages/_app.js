import { LanguageProvider, useLanguage } from "../context/LanguageContext";

import { useEffect } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import IconManager from "../components/IconManager";
import en from "../lang/en.json";
import ar from "../lang/ar.json";
import faviconUrl from "../../public/ico/Estesirius_logo.ico";

import { Cairo /* or Tajawal */ } from "next/font/google";
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "700", "800"],
  variable: "--font-arabic"
});
const messages = { en, ar };

function getDirection(locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

function InnerApp({ Component, pageProps }) {
  const { locale } = useLanguage();

  return (
    <>
      <Head>
        <title>Estesirius</title>
        <html lang={locale} dir={getDirection(locale)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <IconManager iconUrl={faviconUrl} />
      <div className={cairo.className}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <Layout hideNav={Component.hideNav} hideFooter={Component.hideFooter}>
            <Component {...pageProps} />
          </Layout>
        </IntlProvider>
      </div>
    </>
  );
}

export default function MyApp(props) {
  return (
    <LanguageProvider>
      <InnerApp {...props} />
    </LanguageProvider>
  );
}
