import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Layout from '../components/Layout';
import AppWrapper from './../utils/state';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
