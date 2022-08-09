import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../shared/assets/img/footer/logo-footer.svg';

const Top = () => {

    return (
        <div className="container-fluid top">
            <div className='container'>
                <div className="left ">
                    <a className="ps-md-2" href="tel:0688674630"><i className="fa fa-phone"></i>06 88 67 46 30</a>
                </div>
                <div className="right">
                    <a className="" href="https://www.facebook.com/SARL-FAURE-417324348795353"><i className="fab fa-facebook-f fa-2xl"></i></a>
                </div>
            </div>
        </div>

    )
}

export default Top;