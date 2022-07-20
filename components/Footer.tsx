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
        <div className='footer'>
            <div className='container'>
                <div className="custom-shape-divider-top-1658315789">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className=" row wrapper">
                    <div className="col-md-3 block">
                        {/* <Logo className='logo' width='100%' height='100%' /> */}
                        <h1 style={{ color: "green" }}> FJ Elagage</h1>
                    </div>
                    <div className="col2 col-md-4 d-flex flex-column block">
                        <h5>Contact</h5>
                        <div className='d-flex '>
                            <a className="d-flex" href='https://www.google.fr/maps/place/1120+Rte+du+Bourg+Neuf,+40400+Meilhan/@43.8461799,-0.6958117,17z/data=!3m1!4b1!4m5!3m4!1s0xd542941d5e1b029:0x549662e401e34dc6!8m2!3d43.8461799!4d-0.693623' target='blank'>
                            <i className="fas fa-map-marker-alt mr-xs ml-xxxs"></i>
                            <div className='d-flex flex-column'>
                                <span>1120 route du bourg neuf</span>
                                <span>40400 Meilhan</span>
                            </div>
                            </a>
                        </div>
                        <div className='d-flex align-items-center'>
                            <a href="tel:0688674630"><i className="fas fa-mobile-alt mr-xs ml-xxxs"></i><span>06 88 67 46 30</span></a>
                        </div>
                        <div className='d-flex align-items-center'>
                        <a href="mailto:jeremiefaure@gmail.com"><i className="far fa-envelope mr-xs"></i><span>jeremiefaure@gmail.com</span></a>
                        </div>
                    </div>

                    <div className="col-md-3 d-flex flex-column  block">
                        <h5>Liens</h5>
                        <Link href="/elagage"><a>Élagage</a></Link>
                        <Link href="/bois-de-chauffage"><a>Bois de chauffage</a></Link>
                        <Link href="/mini-pelle"><a>Mini-pelle</a></Link>
                    </div>
                    <div className="col-md-2 d-flex flex-column align-items-end block">
                        <h5>Suivez-nous</h5>
                        <a href="https://www.facebook.com/search/top?q=sarl%20faure" target='blank'><i className="fab fa-facebook-f fa-2xl"></i></a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Header;