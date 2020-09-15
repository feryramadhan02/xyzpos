import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import { Login } from '../store/actions/auth';

import '../assets/style/HeaderNav.scss';
import '../assets/style/Modal.scss';

const HeaderNav = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const isAuthenticate = useSelector(state => state.auth.isAuthenticate)

    const openModal = () => setShow(true)
    const closeModal = () => setShow(false)

    const login = async (e) => {
        e.preventDefault()
        const data = {
            email, password
        }
        await dispatch(Login(data))
        console.log(data)
        if (isAuthenticate) {
            if (/[^a-zA-Z0-9]/.test(data.email) && /[^a-zA-Z0-9]/.test(data.password)) {
                alert("Input is not alphanumeric")
            }
            else if (email && password === "") {
                alert("Please input your email and password")
            }
            else if (email.length < 10 || password.length < 8) {
                alert("Please input correct")
            }
            else {
                history.push("/dashboard")
            }
        }
    }


    return (
        <div className="containers">
            <>
                <Modal show={show} onHide={closeModal} className="modal-login">
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        <div className="picture">
                            <img src={require('../assets/images/login-illustration.svg')} alt="" />
                        </div>
                        <div className="forms">
                            <h3>Masuk</h3>
                            <form>
                                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
                                    <label className="custom-control-label" for="defaultUnchecked">Ingat Saya</label>
                                </div>
                                <Button className="btn-signin" onClick={login}>Masuk</Button>
                                <p>Belum punya akun? <span>Daftar</span></p>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
            <nav className="navigation">
                <div className="navigation__logo">
                    <h3>xyz<span>POS</span></h3>
                </div>
                <div className="navigation__menu">
                    <ul>
                        <li><Link to="">Fitur</Link></li>
                        <li><Link to="">Berlangganan</Link></li>
                        <li><Button className="btn-login" onClick={openModal}>Masuk</Button></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default HeaderNav;