import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>ESTESIRIUS</title>
      </Head>
      <Header />
      <main className="mainLayout flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
