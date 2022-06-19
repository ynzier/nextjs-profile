import "styles/globals.css";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "app/store";
import { fetchPorts } from "features/portfolio/portfolioSlice";
import Head from "next/head";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  useEffect(() => {
    store.dispatch(fetchPorts());
    return () => {};
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <AnyComponent {...pageProps} />
    </Provider>
  );
}
