import Link from 'next/link';

interface Props {
    phone: string;
    phoneString: string;
    isSentEmail: boolean;
    closeModal(): any;
}

const ContactModal = ({ phone, phoneString, isSentEmail, closeModal }: Props) => {
    return (
        <div className="contact-modal" onClick={closeModal}>
            {isSentEmail ? (
                <div className="body">
                    <p>Nous avons bien reçu vôtre message.</p>
                    <p>Nous y répondrons dans les plus brefs délais</p>
                    <div className="d-flex">
                        <Link href="/"><button type="button" className="btn btn-secondary mr-s"><i className="fas fa-home mr-xs"></i>Accueil</button></Link>
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Fermer</button>
                    </div>
                </div>
            ) : (
                <div className="body">
                    <p className="error">Une erreur s&apos;est produite</p>
                    <p>Nous nous en excusons.</p>
                    <p>Vous pouvez nous joindre au <a href={`tel:${phone}`}>{phoneString}</a></p>
                    <div className="d-flex">
                        <button type="button" className="btn btn-secondary mr-s" onClick={closeModal}>Fermer</button>
                        <Link href="/"><button type="button" className="btn btn-secondary"><i className="far fa-map-marker-alt mr-xs"></i>Accueil</button></Link>

                    </div>
                </div>
            )}
        </div>
    )
}

export default ContactModal;