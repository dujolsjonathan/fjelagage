import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Logo from '../shared/assets/img/logo-test.png';

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-absolute">
            <div className="container">
                {/* <Logo className='logo' /> */}
                <Image className='logo' src={Logo} alt="..." width="150%" height="100%"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ms-auto navbar-nav-scroll">
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">Élagage</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Bois de chauffage
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Les essences</a></li>
                                <li><a className="dropdown-item" href="#">Livraison</a></li>
                                {/* <li><hr className="dropdown-divider"></li> */}
                                <li><a className="dropdown-item" href="#">Tarifs</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mini-pelle
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Location</a></li>
                                <li><a className="dropdown-item" href="#">Travaux</a></li>
                                {/* <li><hr className="dropdown-divider"></li> */}
                                <li><a className="dropdown-item" href="#">Tarifs</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        
                        {/* <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
                    </ul>
                    {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button clclassNameass="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                </div>
            </div>
        </nav>
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