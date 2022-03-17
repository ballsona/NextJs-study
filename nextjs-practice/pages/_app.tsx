import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  console.log(session);
  return (
    <>
      <SessionProvider session={session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
