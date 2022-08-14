import type { NextPage } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Head from 'next/head';
import Image from 'next/image';
import Banner from "../shared/assets/img/home/banner.jpg";
import Elagage from "../shared/assets/img/home/elagage.jpg";
import MiniPelle from "../shared/assets/img/home/home-mini-pelle.jpg";
import Wood from "../shared/assets/img/home/wood.jpg";
import PictoSafety from "../shared/assets/img/home/safety.svg";
import PictoReactivity from "../shared/assets/img/home/reactivity.svg";
import PictoGrow from "../shared/assets/img/home/grow.svg";
import BackgroundIcon1 from "../shared/assets/img/logo-J.svg";
import BackgroundIcon3 from "../shared/assets/img/logo-arbre-ombre-2.svg";

const Home: NextPage = ({ informations }: any) => {

  return (
    <div className='wrapper'>
      <Head>
        <title>FJ Élagage - Élagage - Abattage - Bois de chauffage</title>
        <meta name="robots" content="index,follow"></meta>
        <meta name="description" content="Spécialisé dans l'élagage et l'abattage d'arbre, nous vous apportons notre savoir faire dans les Landes. Nous proposone également du bois de chauffage toute l'année." />
      </Head>

      <Header />
      <div className='home-banner'>
        <Image src={Banner} alt="Bannière accueil Fjelagage.fr" layout="responsive" objectFit="contain" objectPosition="center" />
        <div className="banner-title">
          <h1><span>élagage abattage</span><br /> dans les landes</h1>
          <p>20 ans d’expérience à votre service</p>
          <Link href="/elagage"><button className="btn btn-primary">En savoir plus</button></Link>
        </div>

      </div>
      <Link href="/bois-de-chauffage#tarifs-bois">
        <a>
          <div className="container-fluid promotion ">
            Destockage bois de chauffage - Offre spéciale
          </div>
        </a>
      </Link>
      <div className="main my-5">
        <div className="containerrow justify-content-center">

          <div className="col-md-12 order-md-2 pl-m pr-m d-flex flex-column justify-content-center">
            <p className="intro">Spécialisé dans la filière du bois, nous vous apportons notre savoir faire dans les Landes ! <br></br>De l&apos;élagage/abattage à la livraison de bois de chauffage, nous sommes à votre écoute depuis deux décennies. </p>
          </div>
        </div>

        <div className="container-fluid  py-md-4"
        >
          <div className="container   row align-items-stretch justify-content-center">

            <div className="col-md-6 order-md-2 ps-md-5 d-flex flex-column justify-content-center">
              <h2>Élagage au coeur des Landes</h2>
              <p>L’élagage fait partie de l’entretien courant de votre jardin. Faire appel à une entreprise d‘élagage c’est avant tout <strong>assurer une bonne croissance de vos arbres et arbustes</strong>.<br />Spécialisé depuis 20 ans, en élagage et abatage d’arbres.<br />FJ Élagage vous apporte ses compétences. </p>
              <Link href="/elagage"><button type="button" className="btn btn-secondary">Je cherche un élagueur</button></Link>
            </div>
            <div className="col-md-6 order-md-1 mt-s mb-s pr-0 ">
              <div className='Élagage accueil fjelagage.fr'>
                <Image src={Elagage} alt="..." layout="responsive" objectFit='contain' />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid position-relative py-md-4">
          <div className="container row align-items-stretch justify-content-center">
            <div className="col-md-6 pe-md-5  d-flex flex-column justify-content-center">
              <BackgroundIcon3 className="background-icon arbre-index" />
              <h2>Du bois de chauffage livré toute l’année dans les Landes</h2>
              <p>En tant que professionnel du bois, nous fournissons du <strong>bois de chauffage toute l’année</strong>.<br /><strong>Livré chez vous gratuitement</strong> dans la mesure de la proximité.<br />Plusieurs tailles et essences disponibles</p>
              <Link href="/bois-de-chauffage"><button type="button" className="btn btn-secondary">J&apos;ai besoin de bois</button></Link>
            </div>
            <div className="col-md-6 mt-s mb-s pl-0">
              <div className='image-container'>
                <Image src={Wood} alt="Bois de chauffage accueil fjelagage.fr" layout="responsive" objectFit='contain' />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid d-flex position-relative flex-column py-md-4" >
        <BackgroundIcon1 className="background-icon j" />

          <div className="container pictos-wood">
            <div className="col-md-3 d-flex justify-content-center align-items-center picto-container"><PictoSafety className="picto" /><span className="text">Sécurité</span></div>
            <div className="col-md-3 d-flex justify-content-center align-items-center picto-container"><PictoReactivity className="picto" /><span className="text">Réactivité</span></div>
            <div className="col-md-3 d-flex justify-content-center align-items-center picto-container"><PictoGrow className="picto" /><span className="text">Croissance</span></div>
          </div>
        </div>

        <div className="container-fluid py-md-4" >
          <div className="container row align-items-stretch justify-content-center">
            <div className="col-md-6 order-md-2  ps-md-5  d-flex flex-column justify-content-center">
              <h2>Prestation mini-pelle</h2>
              <p>Un gain de temps dans vos travaux !<br></br>Nous proposons une gamme de prestations sur tous types de chantiers.<br></br><strong>Disponible à la location, livrée chez vous</strong> ou bien sur devis pour des travaux plus spécifiques</p>
              <Link href='/mini-pelle'><button type="button" className="btn btn-secondary">En savoir plus</button></Link>
            </div>
            <div className="col-md-6 order-md-1 mt-s mb-s pr-0 ">
              <Image src={MiniPelle} alt="Mini-pelle accueil fjelagage.fr" layout="responsive" objectFit='contain' />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:1337/api/information");
//   const informations = await res.json();
// console.log(informations)
//   return {
//     props: { informations },
//   };
// }

export default Home
