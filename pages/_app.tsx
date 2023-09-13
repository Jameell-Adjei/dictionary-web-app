import type { AppProps } from "next/app";
import "../styles/app.scss";
import store from "@/reducers/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
