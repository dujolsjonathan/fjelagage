import Head from "next/head";
import Script from "next/script"
import '../styles/globals.css'
// import '../shared/icons/font-awesome/css/font-awesome.min.css'
import '../shared/stylesheets/main.scss';
import PhoneRight from "../components/PhoneRight";
import Footer from '../components/Footer';
import Bottom from '../components/Bottom';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700&family=Open+Sans:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous" />
        <PhoneRight phone={'0688674630'} phoneString={'06 88 67 46 30'} />
      <Component {...pageProps} />
      <Footer />
      <Bottom />
    </>
  );
}

export default MyApp
