import Root from "@/components/layout/Root";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const APP_TITLE = "CleanHelp";
  const APP_DESCRIPTION = "Transparencia y trazabilidad";

  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Root Component={Component} pageProps={pageProps} />
    </>
  );
}
