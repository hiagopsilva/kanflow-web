import { AppProps } from 'next/app';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (

    <main>
      <h1>HELLO WORLD</h1>
      <Component {...pageProps} />
    </main>
  );
}
