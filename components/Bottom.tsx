import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../shared/assets/img/logo.svg';

const Header = () => {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");

    /* for class fixed  */
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    return (
        <div className='bottom'>
            <div className='container'>
                <div className="row wrapper ">
                    <div className='col-md-10 bottom-left'>
                        <span className="element">{new Date().getFullYear()} © FJ Élagage</span>
                        <Link href="/mentions-legales"><a className="element">Mentions Légales</a></Link>
                        <Link href="/donnees-personnelles"><a className="element">Données Personnelles</a></Link>
                        <Link href="#"><a className="element">Gestion des cookies</a></Link>
                    </div>
                    <div className='col-md-2 bottom-right'>Zukah</div>
                </div>


            </div>
        </div>
    )
}

export default Header;