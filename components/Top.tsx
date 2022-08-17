import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../shared/assets/img/footer/logo-footer.svg';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
const Top = () => {

    return (
        <div className="container-fluid top">
            <div className='container'>
                <div className="left ">
                    <a className="ps-md-2" href="tel:0688674630">
                        <FontAwesomeIcon
                            icon={faPhone}
                            style={{ fontSize: 16, color: "white", marginBottom: 2,marginLeft: 10, marginRight: 5 }}
                        />
                        06 88 67 46 30</a>
                </div>
                <div className="right">
                    <a className="" href="https://www.facebook.com/SARL-FAURE-417324348795353" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon
                            icon={faFacebookF}
                            style={{ fontSize: 20, color: "white", marginLeft: 3, marginRight: 10 }}
                        />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Top;