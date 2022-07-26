import type { NextPage } from 'next';
import Link from 'next/link';
import Header from '../components/HeaderInner';
import Head from 'next/head';
import Image from 'next/image';
import FeuDeBois from "../shared/assets/img/bois-de-chauffage/bois-de-chauffage.jpg";
import Chene from "../shared/assets/img/bois-de-chauffage/chene.jpg";
import Melange from "../shared/assets/img/bois-de-chauffage/melange.jpg";
import PictoCourt from "../shared/assets/img/bois-de-chauffage/court.svg";
import PictoDurable from "../shared/assets/img/bois-de-chauffage/durable.svg";
import PictoLocal from "../shared/assets/img/bois-de-chauffage/local.svg";
import PictoRenouvelable from "../shared/assets/img/bois-de-chauffage/renouvelable.svg";
import BackgroundIcon1 from "../shared/assets/img/logo-J.svg";
import BackgroundIcon3 from "../shared/assets/img/logo-arbre-ombre-2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
const Home: NextPage = () => {
  return (
    <div className='wrapper'>
      <Head>
        <title>FJ Élagage - Élagage</title>
        <meta name="robots" content="index,follow"></meta>
        <meta name="description" content="FJ Elagage vous propose du bois de chauffage aux alentours de Mont de Marsan livré gratuitement" />
      </Head>

      <Header />

      <div className='inner-banner' style={{ background: "no-repeat center / cover url('/img/bois-de-chauffage/fjelagage-bois-banner.png')" }}>
        <h1>Chêne et mélange livré dans les Landes</h1>
      </div>

      <div className="main mt-5">
        {/* Intro */}
        <div className="container row justify-content-center">
          <div className="col-md-12 order-md-2 pl-m pr-m d-flex flex-column justify-content-center">
            <p className="intro">Le bois de chauffage reste à l&apos;heure actuelle l&apos;un des systèmes de chauffage les plus en vogue. FJ Elagage s&apos;engage à <strong>vous livrer dans les délais les plus court</strong>. Bien qu&apos;en stock la grande majorité de l&apos;année n&apos;attendez pas le dernier moment pour commander !<br></br><strong>Un hiver se prépare à l&apos;avance !</strong></p>
          </div>
        </div>

        <div className="container-fluid py-md-3">
          <div className="container row align-items-center justify-content-center">
            <div className="col-md-8 order-md-2 mb-xs ps-md-5 d-flex flex-column justify-content-center">
              <h2>Les avantages du bois de chauffage</h2>
              <p>Malgré une augmentation générale des prix, le bois de chauffage reste plus économique que le gaz, l’électrique ou le fioul. Le bois a le <strong>prix du combustible le plus bas du marché</strong>.</p>
              <p>La chaleur qu’il procure apporte un <strong>environnement plus chaleureux à votre foyer</strong>.
                De par sa simplicité d’utilisation, le chauffage au bois constitue le <strong>système de chauffage privilégié pour beaucoup de Français</strong>.</p>
              <p>En dépit de sa production de gaz carbonique lors de sa combustion, le chauffage au bois est plus écologique… le bois consomme de grande quantité de CO2 toute au long de sa croissance. Ce qui rapproche son bilan carbone de la neutralité.</p>
            </div>
            <div className="col-md-4 order-md-1 mt-s mb-s pr-0 ">
              <div className='image-container'>
                <Image src={FeuDeBois} alt="Bois de chauffage fjelagage.fr" width="100%" height="90%" layout="responsive" objectFit='cover' />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid d-flex flex-column position-relative py-m">
        <BackgroundIcon1 className="background-icon j" />
          <span style={{ textAlign: 'center', fontSize: '20px' }}>Le circuit est :</span>
          <div className="container pictos-wood">
            <div className="col-md-3 d-flex justify-content-center align-items-center picto-container"><PictoCourt className="picto" /><span className="text">Court</span></div>
            <div className="col-md-3 d-flex justify-content-center align-items-center picto-container"><PictoLocal className="picto" /><span className="text">Local</span></div>
            <div className="col-md-3 d-flex justify-content-center align-items-center picto-container"><PictoDurable className="picto" /><span className="text">Durable</span></div>
            <div className="col-md-3 d-flex justify-content-center align-items-center picto-container"><PictoRenouvelable className="picto" /><span className="text">Renouvelable</span></div>
          </div>
        </div>

        <div className="container-fluid py-md-3">
          <div className="container row align-items-center justify-content-center">

            <div className="col-md-6 order-md-2 mb-xs ps-md-5 d-flex flex-column justify-content-center">
           
              <h2>Le chêne</h2>
              <p>C’est l’<strong>essence noble de nos forêts</strong>. C’est également celle de nos cheminées !
                Particulièrement recherché pour alimenter nos foyers, le chêne a la réputation de <strong>se consommer plus lentement que les autres essences</strong>, ce qui lui confère un <strong>pouvoir calorifique important</strong>. </p>
            </div>
            <div className="col-md-6 order-md-1 mt-s mb-s pr-0 ">
              <div className='image-container'>
                <Image src={Chene} alt="Bois de chauffage chêne fjelagage.fr" width="100%" height="60%" layout="responsive" objectFit='cover' />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-md-3">
          <div className="container row align-items-center justify-content-center">

            <div className="col-md-6 order-md-1 mb-xs pe-md-5  d-flex flex-column justify-content-center">
              <h2>Le mélange</h2>
              <p><strong>Moins coûteux que le chêne mais tout aussi efficace</strong>, le mélange a la particularité de combiner différentes essences de bois.</p>

              <p>Cette particularité lui donne <strong>l’avantage d’utiliser différentes propriétés physique de chacune</strong>. Le chêne n’est pas un bon bois d’allumage. Couplé avec du bois blanc et du chataignier votre allumage sera plus homogène.</p>

              <p>Les essences de bois diffèrent suivant la saison.</p>
            </div>
            <div className="col-md-6 order-md-2 mt-s mb-s pr-0 ">
              <div className='image-container'>
                <Image src={Melange} alt="Bois de chauffage mélange fjelagage.fr" width="100%" height="60%" layout="responsive" objectFit='cover' />
              </div>
            </div>
          </div>
        </div>

        <div className="anchor" id="tarifs-bois"></div>
        <div className="container-fluid position-relative py-md-3">
        <BackgroundIcon3 className="background-icon arbre" />
          <div className="container row align-items-stretch justify-content-start">
            <div className="col-md-12 order-md-1 d-flex flex-column justify-content-center">
              <h2>Tarifs</h2>
            </div>
            <div className="col-md-6 order-md-1 px-m pt-0 pb-m d-flex flex-column justify-content-flex-start">
              <h3>Nos tarifs actuels</h3>
              <p>Les prix ne sont pas fixes et peuvent changer. Pour plus d&apos;informations merci de nous contacter.</p>

              <table className="tarifs">
                <thead>
                  <tr>
                    <th>Prix du stère (TTC)</th>
                    <th>Chêne</th>
                    <th>Mélange</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>En 33cm</td>
                    <td>80€</td>
                    <td>70€</td>
                  </tr>
                  <tr>
                    <td>En 40cm</td>
                    <td>80€</td>
                    <td>70€</td>
                  </tr>
                  <tr>
                    <td>En 50cm</td>
                    <td>80€</td>
                    <td>70€</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6 order-md-1  ps-md-5  d-flex flex-column justify-content-start">
              <h3>Livraison</h3>
              <p><strong>La livraison est gratuite</strong> dans un périmètre acceptable.</p>
              <p>Compte tenu des cours actuels, <strong>nous ne livrons pas moins de 5 stères</strong>.</p>
              <Link href="/contact"><button type="button" className="btn btn-secondary">Je réserve</button></Link>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="container row pb-m justify-content-center">
            <div className="col-md-6 order-md-1 pe-md-5 d-flex flex-column ">
              <h3>Calculer un stère de bois</h3>
              <p>Un stère correspond à 1m3 de bois coupé en 1m. <strong>Plus la taille des buches est petite, plus la taille du stère est petite</strong> car les bûches s’agencent mieux entre elle.</p>
              <p><strong>La quantité de bois reste la même</strong>.</p>
              <p>A titre d’exemple, un stère coupé en :</p>
              <ul>
                <li><FontAwesomeIcon icon={faChevronCircleRight}/>50 cm représente 0,8m3 (1 / 1,25)</li>
                <li><FontAwesomeIcon icon={faChevronCircleRight}/>40 cm représente 0,74m3 (1 / 1,36)</li>
                <li><FontAwesomeIcon icon={faChevronCircleRight}/>33 cm représente 0,7m3 (1 / 1,43)</li>
              </ul>
            </div>
            <div className="col-md-6 order-md-1 pt-m mb-m ps-md-5  d-flex flex-column justify-content-flex-start">
              <p>Tableau des coefficients</p>
              <table className="tarifs">
                <thead>
                  <tr>
                    <th>Longueur des bûches</th>
                    <th>Coefficient calculateur</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 Mètre</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>50 cm</td>
                    <td>1,25</td>
                  </tr>
                  <tr>
                    <td>45 cm</td>
                    <td>1,30</td>
                  </tr>
                  <tr>
                    <td>40 cm</td>
                    <td>1,36</td>
                  </tr>
                  <tr>
                    <td>33 cm</td>
                    <td>1,43</td>
                  </tr>
                  <tr>
                    <td>30 cm</td>
                    <td>1,52</td>
                  </tr>
                  <tr>
                    <td>25 cm</td>
                    <td>1,67</td>
                  </tr>
                  <tr>
                    <td>20 cm</td>
                    <td>1,76</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
