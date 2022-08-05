import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Top from './Top';
import Logo from '../shared/assets/img/header/logo.svg';

const Header = () => {
    // const [show, setShow] = useState(false);
    // const [open, setOpen] = useState("home");

    // /* for class fixed  */
    // const [scroll, setScroll] = useState(false);
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         setScroll(window.scrollY > 50);
    //     });
    // }, []);
    const [scroll, setScroll] = useState(false);

    const checkScroll = () => {
        if (window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", checkScroll);
        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);
    return (
        <>
        <Top />
        <nav className={`navbar navbar-expand-lg navbar-light bg-light navbar-absolute ${scroll ? "stickyheader" : ""}`}>
            <div className="container">
                <Link href="/"><a><Logo className='logo' /></a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ms-auto navbar-nav-scroll">
                        <li className="nav-item">
                            <Link href="/elagage"><a className="nav-link" >Élagage</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/bois-de-chauffage"><a className="nav-link" >Bois de chauffage</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/mini-pelle"><a className="nav-link" >Mini-pelle</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact"><a className="nav-link" >Contact</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
        // <div className='container main-header'>
        //     <div className="row">
        //         <Logo className='logo' />
        //         <nav>
        //             <ul className='level1'>
        //                 <li><Link href="/"><a>Élagage</a></Link></li>
        //                 <li className={`${open === "services" ? "open" : ""} chevron`}><a onClick={() => setOpen("services")}><span>Bois de chauffage</span></a>
        //                     <ul className="level2 left">
        //                         <li><Link href="/services-2"><a>Les essences</a></Link></li>
        //                         <li><Link href="/services-details-2"><a>Livraison</a></Link></li>
        //                         <li><Link href="/services-details-2"><a>Tarifs</a></Link></li>
        //                     </ul>
        //                 </li>
        //                 <li className={`${open === "services" ? "open" : ""} chevron`}><a onClick={() => setOpen("services")}><span>Mini-pelle</span></a>
        //                     <ul className="level2 right">
        //                         <li><Link href="/services-2"><a>Location</a></Link></li>
        //                         <li><Link href="/services-details-2"><a>Travaux</a></Link></li>
        //                         <li><Link href="/services-details-2"><a>Tarifs</a></Link></li>
        //                     </ul>
        //                 </li>
        //                 <li><Link href="/"><a>Contact</a></Link></li>

        //             </ul>
        //         </nav>
        //     </div>
        // </div>
    )
}

export default Header;