import "styles/globals.css";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "app/store";

export default function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <Provider store={store}>
      <AnyComponent {...pageProps} />
    </Provider>
  );
}
