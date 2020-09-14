import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../assets/style/HeaderNav.scss';


const HeaderNav = (props) => {

    const login = () => {
        props.history.push("/dashboard")
    }
    return (
        <div className="containers">
            <nav className="navigation">
                <div className="navigation__logo">
                    <h3>xyz<span>POS</span></h3>
                </div>
                <div className="navigation__menu">
                    <ul>
                        <li><Link to="">Fitur</Link></li>
                        <li><Link to="">Berlangganan</Link></li>
                        <li><Button className="btn-login" onClick={login}>Masuk</Button></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default HeaderNav;