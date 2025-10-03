import { PlasmicRootProvider } from '@plasmicapp/react-web';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import '@/styles/globals.css';
import Layout from '@/components/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head} Link={Link}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlasmicRootProvider>
  );
}
