import type { NextPage } from 'next';
import { useState } from "react";
import Link from 'next/link';
import Header from '../components/HeaderInner';
import Footer from '../components/Footer';
import Bottom from '../components/Bottom';
import Head from 'next/head';
import PhoneRight from "../components/PhoneRight";
import ContactModal from "../components/ContactModal";
const Home: NextPage = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSentEmail, setIsSentEmail] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const submitContact = async (event: SubmitEvent) => {

    event.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_MAIL_SERVER}/api/fjelagage/contact`, {
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          phone,
          message
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
    } catch (error) {
      if (error) {
        console.log(error);
        setIsSentEmail(false)
        return;
      }
    }
    setIsOpenModal(true)
  };

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

      {isOpenModal && (
        <ContactModal
          phone={'0688674630'}
          phoneString={'06 88 67 46 30'}
          isSentEmail={isSentEmail}
          closeModal={() => setIsOpenModal(false)}
        />
      )}

      <Header />

      <div className='inner-banner' style={{ background: "no-repeat center / cover url('/img/mentions-legales/banner.png')" }}>
        <h1>Contact</h1>
        <i className="fas fa-home"></i>
      </div>

      <div className="main">
        <div className="container-fluid py-m pt-xl">
          <div className="container row align-items-flex-start justify-content-center">
            <div className="col-md-4 px-0 mb-m d-flex flex-column justify-content-flex-start">
              <h3>FJ Elagage</h3>
              <p>1120 route du bourg neuf<br></br>40400 Meilhan</p>
              <Link href="tel:0688674630"><button type="button" className="btn btn-secondary">06 88 67 46 30</button></Link>
              <span>Email: <Link href="mailto:jeremiefaure@gmail.com">jeremiefaure@gmail.com</Link></span>
            </div>
            <div className="col-md-8 p-m mb-md-m px-0">
              <form className="d-flex flex-column" onSubmit={submitContact}>
                <label htmlFor="lastname" className="mb-1 italic">Nom<span>*</span></label>
                <input
                  className="mb-4 p-xs border-b-2"
                  id="lastname"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => {
                    setLastname(e.target.value)
                  }}
                  type="text"
                  autoComplete="lastname"
                  required
                />
                <label htmlFor="firstname" className="mb-1 italic">Prénom<span>*</span></label>
                <input
                  className="mb-4 p-xs border-b-2"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value)
                  }}
                  type="text"
                  autoComplete="firstname"
                  required
                />
                <label htmlFor="email" className="mb-1 italic">Email<span>*</span></label>
                <input
                  className="mb-4 p-xs border-b-2"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  type="email"
                  autoComplete="email"
                  required
                />
                <label htmlFor="phone" className="mb-1 italic">Téléphone<span>*</span></label>
                <input
                  className="mb-4 p-xs border-b-2"
                  id="phone"
                  name="phone"
                  type="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                  }}
                  autoComplete="phone"
                  required
                />
                <label htmlFor="message" className="mb-1 italic">Message<span>*</span></label>
                <input
                  className="mb-4 p-xs border-b-2"
                  id="message"
                  name="message"
                  type="textarea"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                  }}
                  autoComplete="message"
                  required
                />
                <div className="checkbox-container d-flex align-items-start">
                  <input
                    className="mt-1 p-xs border-b-2"
                    id="checkbox"
                    name="checkbox"
                    type="checkbox"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value)
                    }}

                    // autoComplete="message"
                    required
                  />
                  <label htmlFor="checkbox" className=" pl-xs italic">En soumettant ce formulaire, j'accepte que les informations saisies dans ce formulaire soient utilisées, exploitées, traitées pour permettre de me recontacter.<br></br>Consulter notre <Link href="/mentions-legales">politique de confidentialité</Link></label>
                </div>

                <button
                  type="submit"
                  className="btn btn-secondary"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Bottom />
    </div>
  )
}

export default Home
