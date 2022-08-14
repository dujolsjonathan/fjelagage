import type { NextPage } from 'next';
import Link from 'next/link';
import Header from '../components/HeaderInner';
import Head from 'next/head';
import Image from 'next/image';
import Desouchage from "../shared/assets/img/mini-pelle/fjelagage-mini-pelle-desouchage.jpg";
import Granulats from "../shared/assets/img/mini-pelle/fjelagage-mini-pelle-granulats.jpg";
import MiniPelle from "../shared/assets/img/mini-pelle/fjelagage-mini-pelle.jpg";

const Home: NextPage = () => {
  return (
    <div className='wrapper'>
      <Head>
        <title>FJ Élagage - Prestation Mini-pelle</title>
        <meta name="robots" content="index,follow"></meta>
        <meta name="description" content="Fj Élagage vous propose la prestation de travaux avec mini-pelle dans les Landes. Disponible à la location, ou bien en prestation de service, la mini-pelle permets le désouchage, l'excavation, les travaux de fondation, le remblayage, le terrassement, la pose de cloture ... " />
      </Head>
      <Header />
      <div className='inner-banner' style={{ background: "no-repeat center / cover url('/img/mini-pelle/fjelagage-mini-pelle-banner.png')" }}>
        <h1>Prestation Mini-pelle dans les Landes</h1>
      </div>

      <div className="main mt-5">
        {/* Intro */}
        <div className="container row justify-content-center">
          <div className="col-md-12 order-md-2 pl-m pr-m d-flex flex-column justify-content-center">
            <p className="intro"><strong>Pratique et rapide</strong>, la mini pelle permets d’exécuter une <strong>multitude de tâches</strong> pour un <strong>gain de temps conséquent</strong>.<br></br>A la location ou en prestation, Fj Élagage met à disposition ses engins pour le bonheur de votre jardin.</p>
          </div>
        </div>

        <div className="container-fluid py-md-3">
          <div className="container row align-items-center justify-content-center">
            <div className="col-md-6 order-md-1 mb-xs pe-md-5 d-flex flex-column justify-content-center">
              <h2>Désouchage</h2>
              <p>Après l’abattage d’un arbre, la souche représente un ensemble de contraintes. La retirer ne vous apportera que des bénéfices. <strong>Son extraction libérera de l’espace dans votre jardin</strong>, ce ne sera que mieux pour son entretien. </p>
              <p>La mini pelle <Link href="https://www.wackerneuson.fr/" ><a target="_blank">Wacker Neuson</a></Link> permettra de retirer la souche et les racines et par la même occasion de niveler et <strong>homogénéiser votre terrain</strong>. </p>
              <p>Vous pourrez ainsi <strong>replanter en toute sérénité</strong>.</p>
            </div>
            <div className="col-md-6 order-md-2 mt-s mb-s pr-0 ">
              <div className='image-container'>
                <Image src={Desouchage} alt="Désouchage fjelagage.fr" width="100%" height="60%" layout="responsive" objectFit='cover' />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-md-4">
          <div className="container row align-items-center justify-content-center">
            <div className="col-md-6 order-md-2 mb-xs ps-md-5  d-flex flex-column justify-content-center">
              <h2>Travaux TP dans les Landes</h2>
              <p>De par sa conception et sa mobilité, la mini pelle <strong>facilite la réalisation de différents travaux</strong> dans votre propriété:</p>
              <ul>
                <li>excavation</li>
                <li>travaux de fondation</li>
                <li>remblayage</li>
                <li>terrasement</li>
                <li>clôture</li>
                <li>…</li>
              </ul>
              <p>Autant d’exemples qui vous permettrons un <strong>énorme gain de temps et de confort</strong>.</p>
              <p>Disponible à la <strong>location</strong>, <Link href="/">Fj Élagage</Link> vous propose également <strong>son expérience pour des travaux nécessitant plus de précision et de savoir faire</strong>.</p>
            </div>
            <div className="col-md-6 order-md-1 mt-s mb-s pr-0 ">
              <div className='image-container'>
                <Image src={MiniPelle} alt="Travaux tp mini-pelle fjelagage.fr" width="100%" height="80%" layout="responsive" objectFit='cover' />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-md-3">
          <div className="container row align-items-center justify-content-center">

            <div className="col-md-6 order-md-1 mb-xs pe-md-5  d-flex flex-column justify-content-center">
              <h2>Livraison de granulats</h2>
              <p>Travaux de maconnerie ? Allée carrossable ?<br></br>Nous proposons par la même occasion la <strong>livraison de différents types de granulats</strong>. </p>
            </div>
            <div className="col-md-6 order-md-2 mt-s mb-s pr-0 ">
              <div className='image-container'>
                <Image src={Granulats} alt="Livraison de granulats fjelagage.fr" width="100%" height="60%" layout="responsive" objectFit='cover' />
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
                    <th>Journée</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mini-pelle</td>
                    <td>200€</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6 order-md-1  ps-md-5  d-flex flex-column justify-content-center">
              <h3>Prestation</h3>
              <p>Pour une prestation, merci de <Link href="/contact">nous contacter</Link>.</p>
              <p>Nous effectuons avec vous un <strong>devis gratuit</strong>.</p>
              <Link href="/contact"><button type="button" className="btn btn-secondary">Nous contacter</button></Link>
            </div>
          </div>
        </div>



      </div>


    </div>
  )
}

export default Home
