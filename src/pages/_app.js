// src/pages/_app.js
import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import IconManager from "../components/IconManager";

// Import the icon directly
import faviconUrl from "../../public/ico/Estesirius_logo.ico";

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
  const router = useRouter();
  const { locale = 'en', defaultLocale = 'en' } = router || {};
  
  // Geçerli locale kontrol ediliyor, eğer yoksa defaultLocale veya 'en' kullanılıyor
  const currentLocale = locale || defaultLocale || 'en';
  
  // Geçerli mesajlar kontrol ediliyor, eğer locale için mesaj yoksa en kullanılıyor
  const currentMessages = messages[currentLocale] || messages['en'];

  return (
    <>
      <Head>
        <title>Estesirius</title>
        <html lang={currentLocale} dir={getDirection(currentLocale)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <IconManager iconUrl={faviconUrl} />
      <IntlProvider 
        locale={currentLocale} 
        defaultLocale="en" 
        messages={currentMessages}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </>
  );
}
