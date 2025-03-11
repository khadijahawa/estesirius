// src/pages/_app.js
import "../styles/globals.css";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
    </Layout>
  );
}
