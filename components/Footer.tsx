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
            <div className="wrapper">
                <div className="col1">
                    <Logo className='logo' width='100%' height='100%' />
                </div>
                <div className="col2">

                </div>
                <div className="col3">

                </div>
                <div className="col4">

                </div>
            </div>


        </div>
    )
}

export default Header;