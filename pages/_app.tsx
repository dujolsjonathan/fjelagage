import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from 'next/router'
import '../styles/globals.css'
// import '../shared/icons/font-awesome/css/font-awesome.min.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "bootstrap/dist/css/bootstrap.css"
import '../shared/stylesheets/main.scss';
import PhoneRight from "../components/PhoneRight";
import Footer from '../components/Footer';

import Bottom from '../components/Bottom';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"/>
        <meta property="og:title" content="FJ Élagage"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image:secure_url" content="https://fjelagage.fr/fjelagage-og.jpg"/>
        <meta property="og:image" content="https://fjelagage.fr/fjelagage-og.jpg"/>
        <meta property="og:description" content="Spécialiste élagage, abattage et bois de chauffage"/>
        <meta property="og:locale" content="fr_FR"/>
        <meta property="og:url" content="https://fjelagage.fr/"/>
      </Head>

      <PhoneRight phone={'0688674630'} phoneString={'06 88 67 46 30'} />
      
        <Component {...pageProps} />

      <Footer />
      <Bottom />
    </>
  );
}



export default MyApp
