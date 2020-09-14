import React from 'react';

import '../assets/style/HomeHero.scss';
import { Button } from 'react-bootstrap';

const HomeHero = () => {
    return (
        <div className="hero">
            <div className="hero__advertise">
                <h3>Solusi terbaik untuk <span>mengelola usaha </span>kamu!</h3>
                <div className="hero__advertise__buttons">
                    <Button className="primmary">Daftar Sekarang</Button>
                    <Button className="secondary">Pelajari Dulu</Button>
                </div>
            </div>
            <div className="hero__picture">
                <img src={require('../assets/images/hero-section-illustration.svg')} alt="" />
            </div>
        </div>
    )
}

export default HomeHero;