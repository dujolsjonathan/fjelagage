import type { NextPage } from 'next';
import Link from 'next/link';
import Header from '../components/HeaderInner';
import Head from 'next/head';
import Image from 'next/image';
import wood from "../shared/assets/img/home/elagage1.png";
import Desouchage from "../shared/assets/img/mini-pelle/fjelagage-mini-pelle-desouchage.jpg";
import Granulats from "../shared/assets/img/mini-pelle/fjelagage-mini-pelle-granulats.jpg";
import MiniPelle from "../shared/assets/img/mini-pelle/fjelagage-mini-pelle.jpg";
import PictoPelle2 from "../shared/assets/img/mini-pelle/excavatrice.svg";
import Banner from "../shared/assets/img/mentions-legales/banner.png";
// import MiniPelle from "../shared/assets/img/home/home-mini-pelle.png";
import Img2 from "../shared/assets/img/home/bois.jpg";
import PictoSafely from "../shared/assets/img/home/protection.png";
import PictoReactivite from "../shared/assets/img/home/fusee.png";
import PictoCroissance from "../shared/assets/img/home/sauver-la-nature.png";
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='wrapper'>
      <Head>
        <title>FJ Elagage - Prestation Mini-pelle</title>
        <meta name="robots" content="index,follow"></meta>
        <meta name="description" content="Fj Elagage vous propose la prestation de travaux avec mini-pelle dans les Landes. Disponible à la location, ou bien en prestation de service, la mini-pelle permets le désouchage, l'excavation, les travaux de fondation, le remblayage, le terrassement, la pose de cloture ... " />
      </Head>
      <Header />
      <div className='inner-banner' style={{ background: "no-repeat center / cover url('/img/mini-pelle/fjelagage-mini-pelle-banner.png')" }}>
        <h1>Prestation Mini-pelle dans les Landes</h1>
      </div>

      <div className="main mt-5">
        {/* Intro */}
        <div className="container row justify-content-center">
          <div className="col-md-12 order-md-2 p-s d-flex flex-column justify-content-center">
            <p className="intro"><strong>Pratique et rapide</strong>, la mini pelle permets d’exécuter une <strong>multitude de taches</strong> pour un <strong>gain de temps conséquent</strong>.<br></br>A la location ou en prestation, Fj Elagage mets à disposition ses engins pour le bonheur de votre jardin</p>
            {/* <Link href="/elagage"><button type="button" className="btn btn-secondary">En savoir plus</button></Link> */}
          </div>
        </div>

        <div className="container-fluid py-md-3">
          <div className="container row align-items-center justify-content-center">
            <div className="col-md-6 order-md-1 mb-m pe-md-5 d-flex flex-column justify-content-center">
              <h2>Désouchage</h2>
              <p>Après l’abattage d’un arbre, la souche représente un ensemble de contraintes. La retirer ne vous apportera que des bénéfices. <strong>Son extraction libérera de l’espace dans votre jardin</strong>, ce ne sera que mieux pour son entretien. </p>
              <p>La mini pelle <Link href="https://www.wackerneuson.fr/" ><a target="_blank">Wacker Neuson</a></Link> permettra de retirer la souche et les racines et par la même occasion de niveler et <strong>homogénéiser votre terrain</strong>. </p>
              <p>Vous pourrez ainsi <strong>replanter en toutes sérénité</strong>.</p>
              {/* <Link href="/elagage"><button type="button" className="btn btn-secondary">En savoir plus</button></Link> */}
            </div>
            <div className="col-md-6 order-md-2 mb-md-m pr-0 ">
              <div className='image-container'>
                <Image src={Desouchage} alt="..." width="100%" height="60%" layout="responsive" objectFit='cover' />

              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-md-4">
          <div className="container row align-items-center justify-content-center">

            <div className="col-md-6 order-md-2 mb-m ps-md-5  d-flex flex-column justify-content-center">
              <h2>Travaux TP dans les Landes</h2>
              <p>De par sa conception et sa mobilité, la mini pelle <strong>facilite la réalisation de différents travaux</strong> dans votre propriété:</p>
              <ul>
                <li>excavation</li>
                <li>travaux de fondation</li>
                <li>remblayage</li>
                <li>terrasement</li>
                <li>cloture</li>
                <li>…</li>
              </ul>
              <p>Autant d’exemples qui vous permettrons un <strong>énorme gain de temps et de confort</strong>.</p>
              <p>Disponible à la <strong>location</strong>, <Link href="/">Fj Élagage</Link> vous propose également <strong>son expérience pour des travaux nécessitant plus de précision et de savoir faire</strong>.</p>
              {/* <Link href="/elagage"><button type="button" className="btn btn-secondary">En savoir plus</button></Link> */}
            </div>
            <div className="col-md-6 order-md-1 mb-md-m pr-0 ">
              <div className='image-container'>
                <Image src={MiniPelle} alt="..." width="100%" height="80%" layout="responsive" objectFit='cover' />
              </div>
              {/* <PictoPelle2 style={{height: "150px"}}/> */}
            </div>
          </div>
        </div>
        <div className="container-fluid py-md-3">
          <div className="container row align-items-center justify-content-center">

            <div className="col-md-6 order-md-1 mb-m pe-md-5  d-flex flex-column justify-content-center">
              <h2>Livraison de granulats</h2>
              <p>Travaux de maconnerie ? Allée carrossable ?<br></br>Nous proposons par la même occasion la <strong>livraison de différents types de granulats</strong>. </p>
            </div>
            <div className="col-md-6 order-md-2 mb-md-m pr-0 ">
              <div className='image-container'>
                <Image src={Granulats} alt="..." width="100%" height="60%" layout="responsive" objectFit='cover' />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-md-3 " id="tarifs-bois">
          <div className="container row align-items-stretch justify-content-start pb-m">

            <div className="col-md-12 order-md-1 d-flex flex-column justify-content-center">
              <h2>Tarifs</h2>
            </div>
            <div className="col-md-6 order-md-1 px-m pt-0 pb-m d-flex flex-column justify-content-flex-start">

              <h3>A la location</h3>
              <table className="tarifs">
                <thead>
                  <tr>
                    <th>Prix (TTC)</th>
                    <th>Demi-journée</th>
                    <th>Journée</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>En 33cm</td>
                    <td>75€</td>
                    <td>65€</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6 order-md-1  ps-md-5  d-flex flex-column justify-content-center">
              <h3>Prestation</h3>
              <p>Pour une prestation, merci de <Link href="/contact">nous contacter</Link>.</p>
              <p>Nous effectuons avec vous un <strong>devis gratuit</strong>.</p>
              {/* <p>Pour plus d’infos, merci de <Link href="/contact">nous contacter</Link></p> */}
              <Link href="/contact"><button type="button" className="btn btn-secondary">Nous contacter</button></Link>
            </div>
          </div>
        </div>



      </div>


    </div>
  )
}

export default Home
