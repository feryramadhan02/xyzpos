import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import '../assets/style/Drawer.scss';


const Drawer = () => {
    const history = useHistory()
    const drawRef = useRef(null)
    const hideDrawer = () => {
        drawRef.current.style.marginLeft = `-250px`
        drawRef.current.style.transition = "all 300ms ease-out"
    }

    const Profile = useSelector(state => state.auth.profile)

    const logout = async () => {
        history.replace("/")
    }

    return (
        <div className="draw" ref={drawRef}>
            <div className="draw__btn-close">
                <Button className="close" onClick={hideDrawer}>X</Button>
            </div>
            <div className="draw__draws">
                <div className="draw__draws__profile"><img src={require('../assets/images/photo-profile.svg')} alt="" /></div>
                <div className="draw__draws__bio">
                    {Profile.map(item =>
                        <div>
                            <h5>{item.name}</h5>
                        </div>
                    )}
                    <p>abcd@gnail.com</p>
                    <Button className="out" onClick={logout}>Keluar</Button>
                </div>
            </div>
            <div className="draw__menu">
                <ul>
                    <li>
                        <Link to="/"><img src={require('../assets/images/home.svg')} alt="" />
                        Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/dashboard"><img src={require('../assets/images/product.svg')} alt="" />
                            Produk</Link>
                    </li>
                    <li>
                        <Link to="/dashboard"><img src={require('../assets/images/report.svg')} alt="" />
                            Laporan</Link>
                    </li>
                    <li>
                        <Link to="/dashboard"><img src={require('../assets/images/setting.svg')} alt="" />
                            Pengaturan</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Drawer;