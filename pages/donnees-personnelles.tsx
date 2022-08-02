import type { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bottom from '../components/Bottom';
import Head from 'next/head';
import Image from 'next/image';
import wood from "../shared/assets/img/home/elagage1.png";
import MiniPelle from "../shared/assets/img/home/home-mini-pelle.png";
import Img2 from "../shared/assets/img/home/bois.jpg";
import PictoSafely from "../shared/assets/img/home/protection.png";
import PictoReactivite from "../shared/assets/img/home/fusee.png";
import PictoCroissance from "../shared/assets/img/home/sauver-la-nature.png";
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
      <div className='home-banner'>
        <Image src={wood} alt="..." layout="responsive" objectFit="cover" objectPosition="center" />
        <h1><span>élagage abattage</span><br /> c'est notre métier !</h1>
        {/* <div className="banner-title">
          <h1><span>élagage abattage</span><br /> c'est notre métier !</h1>
          <p>20 ans d’expérience à votre service</p>
          <a href="#" className="btn btn-primary">En savoir plus</a>
        </div> */}

      </div>
      <a href="#">
        <div className="container-fluid promotion ">
          Destockage bois de chauffage - Offre spéciale
        </div>
      </a>

      <div className="container-fluid py-m pt-xl">
        <div className="container row align-items-stretch justify-content-center">

          <div className="col-md-6 order-md-2 mb-m p-m d-flex flex-column justify-content-center">
            <h2>Elagage au coeur des Landes</h2>
            <p>L’élagage fait partie de l’entretien courant de votre jardin. Faire appel à une entreprise d‘élagage c’est avant tout <strong>assurer une bonne croissance de vos arbres et arbustes</strong>.<br />Spécialisé depuis 20 ans, en élagage et abatage d’arbres.<br />FJ Elagage vous apporte son savoir-faire. </p>
            <button type="button" className="btn btn-primary">En savoir plus</button>
          </div>
          <div className="col-md-6 order-md-1 mb-md-m pr-0 ">
            <Image src={wood} alt="..." layout="responsive" objectFit='contain' />
          </div>
        </div>
      </div>

      <div className="container-fluid py-m" style={{ backgroundColor: "white" }}>
        <div className="container row align-items-stretch justify-content-center">

          <div className="col-md-6 mb-m p-m d-flex flex-column justify-content-center">
            <h2>Du bois de chauffage livré toute l’année dans les Landes</h2>
            <p>En tant que professionnel du bois, nous fournissons du bois de chauffage toute l’année.<br />Livré chez vous gratuitement dans la mesure de la proximité.<br />Plusieurs tailles et essences disponibles</p>
            <button type="button" className="btn btn-primary">Consulter notre offre</button>
          </div>
          <div className="col-md-6 mb-md-m pl-0">
            <Image src={Img2} alt="..." layout="responsive" objectFit='contain' />
          </div>
        </div>
      </div>

      <div className="container-fluid ">
        {/* <div className="container-fluid" style={{backgroundColor: "rgba(67, 67, 67, 1)"}}> */}
        <div className="container pictos-container">
          <div className="col-md-4 picto-container"><Image className="picto" src={PictoSafely} alt="..." layout="responsive" objectFit='contain' /><span className="text">Sécurité</span></div>
          <div className="col-md-4 picto-container"><Image className="picto" src={PictoReactivite} alt="..." layout="responsive" objectFit='contain' /><span className="text">Sécurité</span></div>
          <div className="col-md-4 picto-container"><Image className="picto" src={PictoCroissance} alt="..." layout="responsive" objectFit='contain' /><span className="text">Sécurité</span></div>
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "white" }}>
        <div className="container row align-items-stretch justify-content-center">

          <div className="col-md-6 order-md-2 mb-m p-m d-flex flex-column justify-content-center">
            <h2>Prestation mini-pelle</h2>
            <p>L’élagage fait partie de l’entretien courant de votre jardin. Faire appel à une entreprise d‘élagage c’est avant tout <strong>assurer une bonne croissance de vos arbres et arbustes</strong>.<br />Spécialisé depuis 20 ans, en élagage et abatage d’arbres.<br />FJ Elagage vous apporte son savoir-faire. </p>
            <button type="button" className="btn btn-primary">En savoir plus</button>
          </div>
          <div className="col-md-6 order-md-1 mb-md-m pr-0 ">
            <Image src={MiniPelle} alt="..." layout="responsive" objectFit='contain' />
          </div>
        </div>
      </div>

      <Footer />
      <Bottom />
      {/* <div className="nav"></div> */}
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home