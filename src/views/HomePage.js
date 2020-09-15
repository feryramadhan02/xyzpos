import React from 'react';
import HomeHero from '../components/HomeHero';
import Berlangganan from '../components/Berlangganan';
import Footers from '../components/Footers';
import HeaderNav from '../components/HeaderNav';


const HomePage = () => {
    return (
        <div>
            <HeaderNav />
            <HomeHero />
            <Berlangganan />
            <Footers />
        </div>
    )
}

export default HomePage;