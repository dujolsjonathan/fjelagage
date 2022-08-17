import type { NextPage } from 'next';
import { useState, useCallback } from "react";
import Link from 'next/link';
import Header from '../components/HeaderInner';
import Head from 'next/head';
import ContactModal from "../components/ContactModal";
import BackgroundIcon from "../shared/assets/img/icon.svg";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";


const Home: NextPage = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [isSentEmail, setIsSentEmail] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  //Verify recaptcha
  const handleSumitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        const target = e.target as HTMLFormElement;
        const data = {
          firstname: target.firstname.value,
          lastname: target.lastname.value,
          email: target.email.value,
          phone: target.phone.value,
          message: target.message.value,
          gReCaptchaToken
        }
        submitContact(data);
      });
    },
    [executeRecaptcha]
  );

  const submitContact = async (data: any) => {

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_MAIL_SERVER}/api/fjelagage/contact`, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      if (res.ok == false) {
        setIsSentEmail(false);
      } else {
        setIsSentEmail(true);
      }
    } catch (error) {
      if (error) {
        console.log(error);
        setIsSentEmail(false)
        return;
      }
    }
    setIsOpenModal(true)
  };

  const resetForm = () => {
    setFirstname('');
    setLastname('');
    setEmail('');
    setPhone('');
    setMessage('');
    setCheckbox(false);
  }
  return (
    <GoogleReCaptchaProvider
        reCaptchaKey="6Ldf82whAAAAAM9_P9P210GBv1hba8O0059YmEa_"
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
      {isOpenModal && (
        <ContactModal
          phone={'0688674630'}
          phoneString={'06 88 67 46 30'}
          isSentEmail={isSentEmail}
          closeModal={() => {setIsOpenModal(false); resetForm()}}
        />
      )}
      <div className='wrapper'>
        <Head>
          <title>FJ Élagage - Élagage</title>
          <meta name="robots" content="index,follow"></meta>
          <meta name="description" content="Contacter Fj Elagage" />
        </Head>



        <Header />
        <BackgroundIcon className="background-icon contact" />
        <div className='inner-banner' style={{ background: "no-repeat center / cover url('/img/contact/fjelagage-contact-banner.png')" }}>
          <h1>Contact</h1>
        </div>

        <div className="main">
          <div className="container-fluid py-m pt-xl">
            <div className="container row align-items-flex-start justify-content-center">
              <div className="col-md-4 px-0 mb-m d-flex flex-column justify-content-flex-start">
                <h3>FJ Élagage</h3>
                <span>1120 route du bourg neuf<br></br>40400 Meilhan</span>
                <Link href="tel:0688674630"><button type="button" className="btn btn-secondary">06 88 67 46 30</button></Link>
                <span>Email: <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>{process.env.NEXT_PUBLIC_EMAIL}</Link></span>
              </div>
              <div className="col-md-8 p-m mb-md-m px-0">
                <form className="d-flex flex-column" onSubmit={handleSumitForm}>
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
                  <textarea
                    className="mb-4 p-xs border-b-2"
                    id="message"
                    name="message"
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
                      checked = {checkbox}
                      onChange={() => {
                        setCheckbox(!checkbox)
                      }}
                      required
                    />
                    <label htmlFor="checkbox" className=" pl-xs italic">En soumettant ce formulaire, j&apos;accepte que les informations saisies dans ce formulaire soient utilisées, exploitées, traitées pour permettre de me recontacter.</label>
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
      </div>
      </GoogleReCaptchaProvider>
  )
}

export default Home
