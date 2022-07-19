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
            <div className="wrapper">
                <div className='bottom-left'>
                <span className="element">{new Date().getFullYear()} © FJ Elagage</span>
                <a href="#" className="element">Mentions Légales</a>
                <a href="#" className="element">Données Personnelles</a>
                <a href="#" className="element">Gestion des cookies</a>
                </div>
                <div className='bottom-right'>Zukah</div>
            </div>


        </div>
    )
}

export default Header;