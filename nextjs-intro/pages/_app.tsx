import { AppProps } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <div>Hello</div>
    </>
  );
}
