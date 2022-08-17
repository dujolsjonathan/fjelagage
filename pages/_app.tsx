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
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
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
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <PhoneRight phone={'0688674630'} phoneString={'06 88 67 46 30'} />
      <GoogleReCaptchaProvider
        reCaptchaKey="6Ldf82whAAAAAM9_P9P210GBv1hba8O0059YmEa_"
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
        <Component {...pageProps} />
      </GoogleReCaptchaProvider>

      <Footer />
      <Bottom />
    </>
  );
}



export default MyApp
