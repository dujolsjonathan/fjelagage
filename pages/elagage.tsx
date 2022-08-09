import type { NextPage } from 'next';
import Header from '../components/HeaderInner';
import Footer from '../components/Footer';
import Bottom from '../components/Bottom';
import Head from 'next/head';
import Link from 'next/link';
import Elagage1 from "../shared/assets/img/elagage/elagage1.webp";
import Elagage2 from "../shared/assets/img/elagage/elagage2.webp";
import Professionnel from "../shared/assets/img/elagage/professionnel.png";
import Image from 'next/image';
// import Banner from "../shared/assets/img/bois-de-chauffage/banner.png";
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
      <Header />

      <div className='inner-banner' style={{ background: "no-repeat center / cover url('/img/bois-de-chauffage/banner.png')" }}>
        <h1>Elagage / Abattage</h1>
      </div>

      <div className="main mt-5">

        <div className="container row justify-content-center">
          <div className="col-md-12 order-md-2 p-s d-flex flex-column justify-content-center">
            <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus dolor dui. In sit amet ipsum odio. Vestibulum sapien lorem, aliquet ac porttitor sit amet, ultrices in risus. Pellentesque ac gravida risus. Proin euismod nisl at tortor placerat rhoncus. Pellentesque sed accumsan justo. Nam nec turpis non dolor dapibus sodales eleifend vel massa.</p>
            {/* <Link href="/elagage"><button type="button" className="btn btn-secondary">En savoir plus</button></Link> */}
          </div>
        </div>

        <div className="container-fluid py-md-3 ">
          <div className="container row align-items-stretch justify-content-center">
            <div className="col-md-8 order-md-2 mb-m ps-md-5 d-flex flex-column justify-content-center">
              <h2>Pourquoi faire appel à un professionnel ?</h2>
              <p>Se lancer seul dans une opération d’élagage peut s’avérer <strong>complexe et dangereux</strong>. Spécialement outillé, <Link href="/">FJ Elagage</Link> apporte son savoir faire de manière <strong>sécurisé</strong>. Entretien régulier, arbre difficile d’accès ou menaçant... nous mettons à votre service nos <strong>20 ans d’expérience</strong>. En fonction de la situation, il est possible d’utiliser soit une <strong>nacelle</strong>, ou bien directement à la <strong>grimpe</strong>.</p>
              <p>Le choix de la période est cruciale. Un professionnel vous orientera rapidement sur la période la plus propice à la bonne défense de l’arbre. </p>
              <p>L’abattage, lui, se pratique toute l’année.</p>
              <Link href="/contact"><button type="button" className="btn btn-secondary">Nous contacter</button></Link>
            </div>
            <div className="col-md-4 order-md-1 mb-md-m pr-0 ">
              <Image src={Professionnel} alt="..." width="100%" height="100%" layout="responsive" objectFit='cover' />
              {/* <PictoPro /> */}
            </div>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="container row align-items-center justify-content-center">
            <div className="col-md-6 order-md-1 mb-m pe-md-5 d-flex flex-column justify-content-center">
              <h2>Pour les particuliers</h2>
              <p>Nous intervenons principalement chez les particuliers. </p>
              <p>Difficulté d’accès, câble électrique, clôture… on s’adapte… c’est notre métier !</p>
              <p>Eliminer les branches mortes qui présentent un danger constitue un <strong>gage de sécurité</strong>.</p>
              <p>La pousse de l’arbre a sont importance. Un <strong>arbre en bonne santé</strong> doit présenter une forme harmonieuse. Les branches affaiblies, entremêlées doivent donc être retirées pour améliorer le dynamisme de l’arbre et <strong>redonner au houppier son potentiel</strong>.</p>
              <p>Dans le cas d’arbre âgé, supprimer une partie du houppier permettra de le <strong>revitaliser</strong>, et par conséquence de <strong>relancer sa croissance</strong>. Du fait de la diminution de sa prise au vent, la sécurité n’en sera qu’améliorée.</p>
              {/* <Link href="/contact"><button type="button" className="btn btn-secondary">Nous contacter</button></Link> */}
            </div>
            <div className="col-md-6 order-md-2 mb-md-m pr-0 ">
              <Image src={Elagage1} alt="..." width="100%" height="75%" layout="responsive" objectFit='cover' />
              {/* <PictoPro /> */}
            </div>
          </div>
        </div>
        <div className="container-fluid py-md-3">
          <div className="container row align-items-center justify-content-center">
            <div className="col-md-7 order-md-2 mb-m ps-md-5 d-flex flex-column justify-content-center">
              <h2>Pour les entreprises et services publics</h2>
              <p>FJ Elagage intervient rapidement en urgence.</p>
              <p>Bord de route, ripisilve ou bien travaux sur parcelle, nous sommes outillés pour agir directement sur des terrains plus hostiles. </p>
              <p>De l’abattage au débardage, Fj Elagage est autonome et répondra toujours dans le respect de vos conditions.</p>
              <p>Également équipé d’une <Link href='/mini-pelle'>pelle mécanique</Link>, il est possible de croiser différentes demandes :</p>
              <ul>
                <li>renforcement de digue</li>
                <li>DEMANDER a jrm</li>
              </ul>
              {/* <Link href="/contact"><button type="button" className="btn btn-secondary">Nous contacter</button></Link> */}
            </div>
            <div className="col-md-5 order-md-1 mb-md-m pr-0 ">
              <Image src={Elagage2} alt="..." width="100%" height="70%" layout="responsive" objectFit='cover' />
              {/* <PictoPro /> */}
            </div>
          </div>
        </div>

        <div className="container-fluid ">
          <div className="container row align-items-stretch justify-content-center">
            <div className="col-md-12 order-md-2  mb-m d-flex flex-column justify-content-center">
              <h2>Tarifs</h2>
              <p>En raison de la particularité de cette activité, nous ne sommes pas en mesure d’afficher de prix fixes. <br></br><strong>Chaque chantier est unique</strong>. <br></br>Chaque arbre doit être analysé au plus prêt de ce qu’il mérite. <br></br>Nous nous déplaçons pour effectuer avec vous un <strong>devis gratuit</strong>. </p>
              <Link href="/contact"><button type="button" className="btn btn-secondary">Nous contacter</button></Link>
            </div>
  
          </div>
        </div>


      </div>
    </div>
  )
}

export default Home
