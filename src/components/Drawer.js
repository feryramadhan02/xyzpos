import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../assets/style/Drawer.scss';


const Drawer = () => {
    return (
        <div className="draw">
            <div className="draw__btn-close">
                <Button className="close">X</Button>
            </div>
            <div className="draw__draws">
                <div className="draw__draws__profile"><img src={require('../assets/images/photo-profile.svg')} alt="" /></div>
                <div className="draw__draws__bio">
                    <h5>Ahmad</h5>
                    <p>gagaga@gmail.com</p>
                    <Button className="out">Keluar</Button>
                </div>
            </div>
            <div className="draw__menu">
                <ul>
                    <li>
                        <Link to="/"><img src={require('../assets/images/home.svg')} alt="" />
                        Dashboard</Link>
                    </li>
                    <li>
                        <Link to=""><img src={require('../assets/images/product.svg')} alt="" />
                            Produk</Link>
                    </li>
                    <li>
                        <Link to=""><img src={require('../assets/images/report.svg')} alt="" />
                            Laporan</Link>
                    </li>
                    <li>
                        <Link to=""><img src={require('../assets/images/setting.svg')} alt="" />
                            Pengaturan</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Drawer;