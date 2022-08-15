
import type { NextPage } from 'next';
import { useState, useCallback } from "react";
import Link from 'next/link';
import Header from '../components/HeaderInner';
import Head from 'next/head';
import ContactModal from "../components/ContactModal";
import BackgroundIcon from "../shared/assets/img/icon.svg";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>FJ Élagage - 404</title>
                <meta name="description" content="Page non trouvée" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                />
            </Head>

            <Header />
            <div className="wrapper">
                <div className="container404">
                    <h1>Page non trouvée</h1>
                    <p>La page que vous cherchez n&apos;existe pas</p>
                    <Link href="/"><button type="button" className="btn btn-secondary"><i className="far fa-map-marker-alt mr-xs"></i>Accueil</button></Link>




                </div>

            </div>
        </>
    );
}