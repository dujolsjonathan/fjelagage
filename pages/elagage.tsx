import type { NextPage } from 'next';
import Header from '../components/HeaderInner';
import Head from 'next/head';
import Link from 'next/link';
import Elagage1 from "../shared/assets/img/elagage/elagage1.jpg";
import Elagage2 from "../shared/assets/img/elagage/elagage2.jpg";
import Professionnel from "../shared/assets/img/elagage/professionnel.png";
import Image from 'next/image';
import BackgroundIcon from "../shared/assets/img/logo-arbre-ombre-2.svg";

const Home: NextPage = () => {
  return (
    <div className='wrapper'>
      <Head>
        <title>FJ Élagage - Élagage</title>
        <meta name="robots" content="index,follow"></meta>
        <meta name="description" content="Spécialisé dans l'élagage et l'abattage d'arbre, nous vous apportons notre savoir faire dans les Landes. Nous proposone également du bois de chauffage toute l'année." />
      </Head>
      <Header />

      <div className='inner-banner' style={{ background: "no-repeat center / cover url('/img/elagage/fgelagage-elagage-banner.png')" }}>
        <h1>Élagage / Abattage</h1>
      </div>

      <div className="main mt-5">

        <div className="container row justify-content-center">
          <div className="col-md-12 order-md-2 p-s d-flex flex-column justify-content-center">
            <p className="intro"><strong>Élagage, abattage</strong> d&apos;arbres ou arbustes pour <strong>la sécurité ou l&apos;esthétique</strong> ?<br></br>Nous mettons nos services à votre disposition. </p>
          </div>
        </div>

        <div className="container-fluid py-md-3 ">
          <div className="container row align-items-stretch justify-content-center">
            <div className="col-md-8 order-md-2 mb-xs ps-md-5 d-flex flex-column justify-content-center">
              <h2>Pourquoi faire appel à un professionnel ?</h2>
              <p>Se lancer seul dans une opération d’élagage peut s’avérer <strong>complexe et dangereux</strong>. Spécialement outillé, <Link href="/">FJ Élagage</Link> apporte son savoir faire de manière <strong>sécurisé</strong>. Entretien régulier, arbre difficile d’accès ou menaçant... nous mettons à votre service nos <strong>20 ans d’expérience</strong>. En fonction de la situation, il est possible d’utiliser soit une <strong>nacelle</strong>, ou bien directement à la <strong>grimpe</strong>.</p>
              <p>Le choix de la période est cruciale. <strong>Un professionnel vous orientera rapidement sur la période la plus propice à la bonne défense de l’arbre</strong>. </p>
              <p><strong>L’abattage se pratique toute l’année</strong>.</p>
              <Link href="/contact"><button type="button" className="btn btn-secondary">Nous contacter</button></Link>
            </div>
            <div className="col-md-4 order-md-1 mt-s mb-s pr-0 ">
              <Image src={Professionnel} alt="Picto professionnel fjelagage.fr" width="100%" height="100%" layout="responsive" objectFit='cover' />
            </div>
          </div>
        </div>

        <div className="container-fluid ">
          <div className="container row align-items-center justify-content-center">
            <div className="col-md-6 order-md-1 mb-xs pe-md-5 d-flex flex-column justify-content-center">
              <h2>Pour les particuliers</h2>
              <p>Nous intervenons principalement chez les particuliers. </p>
              <p>Difficulté d’accès, câble électrique, clôture… on s’adapte… c’est notre métier !</p>
              <p>Eliminer les branches mortes qui présentent un danger constitue un <strong>gage de sécurité</strong>.</p>
              <p>La pousse de l’arbre a sont importance. Un <strong>arbre en bonne santé</strong> doit présenter une forme harmonieuse. Les branches affaiblies, entremêlées doivent donc être retirées pour améliorer le dynamisme de l’arbre et <strong>redonner au houppier son potentiel</strong>.</p>
              <p>Dans le cas d’arbre âgé, supprimer une partie du houppier permettra de le <strong>revitaliser</strong>, et par conséquence de <strong>relancer sa croissance</strong>. Du fait de la diminution de sa prise au vent, la sécurité n’en sera qu’améliorée.</p>
            </div>
            <div className="col-md-6 order-md-2 mt-s mb-s pr-0 ">
              <div className='image-container'>
                <Image src={Elagage1} alt="Élagage pour les particuliers fjelagage.fr" width="100%" height="75%" layout="responsive" objectFit='cover' />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid position-relative py-md-3">
        <BackgroundIcon className="background-icon elagage"/>
          <div className="container row align-items-center justify-content-center">
            <div className="col-md-7 order-md-2 mb-xs ps-md-5 d-flex flex-column justify-content-center">
              <h2>Pour les entreprises et services publics</h2>
              <p>FJ Élagage intervient rapidement en urgence.</p>
              <p><strong>Bord de route, ripisilve ou bien travaux sur parcelle</strong>, nous sommes outillés pour agir directement sur des terrains plus hostiles. </p>
              <p>De l’<strong>abattage</strong> au <strong>débardage</strong>, Fj Élagage est autonome et répondra toujours dans le <strong>respect de vos conditions</strong>.</p>
              <p>Également équipé d’une <Link href='/mini-pelle'>pelle mécanique</Link>, il est possible de croiser différentes demandes :</p>
              <ul>
                <li>renforcement de digue</li>
                <li>evacuation des branches</li>
                <li>désouchage</li>
                <li>terrassement</li>
              </ul>
            </div>
            <div className="col-md-5 order-md-1 mt-s mb-s pr-0 ">
              <div className='image-container'>
                <Image src={Elagage2} alt="Élagage pour les entreprises fjelagage.fr" width="100%" height="90%" layout="responsive" objectFit='cover' />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid ">
          <div className="container row align-items-stretch justify-content-center">
            <div className="col-md-12 order-md-2 xs d-flex flex-column justify-content-center">
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
