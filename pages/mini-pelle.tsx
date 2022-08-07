import type { NextPage } from 'next';
import Link from 'next/link';
import Header from '../components/HeaderInner';
import Footer from '../components/Footer';
import Bottom from '../components/Bottom';
import Head from 'next/head';
import Image from 'next/image';
import Banner from "../shared/assets/img/mentions-legales/banner.png";
import MiniPelle from "../shared/assets/img/home/home-mini-pelle.png";
import Img2 from "../shared/assets/img/home/bois.jpg";
import PictoSafely from "../shared/assets/img/home/protection.png";
import PictoReactivite from "../shared/assets/img/home/fusee.png";
import PictoCroissance from "../shared/assets/img/home/sauver-la-nature.png";
import PhoneRight from "../components/PhoneRight";
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='wrapper'>
      <Head>
        <title>FJ Elagage - Elagage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <PhoneRight phone={'0688674630'} phoneString={'06 88 67 46 30'} />
      <Header />

      <div className='inner-banner' style={{ background: "no-repeat center / cover url('/img/mentions-legales/banner.png')" }}>
        <h1>Mini-pelle</h1>
      </div>

      <div className="main">
        <div className="container-fluid py-m pt-xl">
          <div className="container row align-items-stretch justify-content-center">
            <h2>Éditeur du site</h2>
            <p>Le site fj-elagage.fr est édité par :</p>
            <p>Fg Elagage<br></br>1120 route du bourg neuf<br></br>40400 Meilhan - France<br></br>Tél. :<a href="tel:0648182936"> 06 25 52 32 31</a></p>
            <p>Responsable de la publication : Cécile Robillard</p>
            <h2>Réalisation et hébergement</h2>
            <p>Zukah - Agence Digitale<br></br>27 rue du trouilh<br></br>40400 Meilhan<br></br>Tél :<a href="tel:0648182936"> 06 48 18 29 36</a> </p>
            <h2>Propriété intellectuelle</h2>
            <p>
              Le contenu de ce site internet est protégé par les droits de propriété intellectuelle et notamment par le droit d’auteur. Toute reproduction de ces contenus est conditionnée à un accord explicite préalable, en vertu de l'article L.122-4 du Code de la Propriété Intellectuelle.
            </p>
            <p>
              Pour toute demande d'autorisation ou d'information, veuillez nous contacter.
              </p>
            <h2>Informations et exclusions</h2>
            <p>
              L’éditeur de ce site met en œuvre tous les moyens dont il dispose pour assurer une information fiable et une mise à jour des contenus. Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations auprès de l’éditeur et signaler toutes modifications du site qu’il jugerait utile. L’éditeur du site n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.
              </p>
            <p>Les photos sont non contractuelles.</p>
            <p>
              Les liens hypertextes mis en place dans le cadre du présent site internet en direction d’autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de l’éditeur de ce site.
              </p>
            <h2>Données personnelles</h2>
            <p>
              L’éditeur de ce site s'engage à ce que les traitements de données personnelles qui y sont effectués soient conformes au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
              </p>
            <p>Pour en savoir plus, consultez la page Protection des données personnelles.</p>
          </div>
        </div>
      </div>
      <Footer />
      <Bottom />
    </div>
  )
}

export default Home
