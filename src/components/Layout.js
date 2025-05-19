import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, hideNav = false }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>ESTESIRIUS</title>
      </Head>
      {!hideNav && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>
      )}
      {!hideNav && <div className="h-[72px]" />}{" "}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
