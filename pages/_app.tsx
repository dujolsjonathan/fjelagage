import Head from "next/head";
import Script from "next/script"
import '../styles/globals.css'
// import '../shared/icons/font-awesome/css/font-awesome.min.css'
import '../shared/stylesheets/main.scss';
import PhoneRight from "../components/PhoneRight";
import Footer from '../components/Footer';

import Bottom from '../components/Bottom';
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
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
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700&family=Open+Sans:wght@300;500;700&display=swap" rel="stylesheet" />

      </Head>

     
      <Script
        id="axeptio"
        dangerouslySetInnerHTML={{
          __html: `
            window.axeptioSettings = {
              clientId: "62f8b4b0e1e8bf2ea04c679e",
              cookiesVersion: "fjelagage-fr",
            };
            
            (function(d, s) {
              var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
              e.async = true; e.src = "//static.axept.io/sdk.js";
              t.parentNode.insertBefore(e, t);
            })(document, "script");
          `
        }}
      />
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
