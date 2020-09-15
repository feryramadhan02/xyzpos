import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import { Login, Regis } from '../store/actions/auth';


import '../assets/style/Berlangganan.scss';
import '../assets/style/Modal.scss';

const Berlangganan = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [show, setShow] = useState(false)
    const [showreg, setShowreg] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const isAuthenticate = useSelector(state => state.auth.isAuthenticate)
    const Pakets = useSelector(state => state.data.Paket)
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    const openModal1 = () => {
        setShow(true)
        setShowreg(false)
    }
    const closeModal1 = () => setShow(false)

    const login = async (e) => {
        e.preventDefault()
        const data = {
            email, password
        }
        await dispatch(Login(data))
        console.log(data)
        if (isAuthenticate) {
            if (email === "" || password === "") {
                alert("Please input your email and password")
            }
            else if (password.length < 8 || password.length > 20) {
                alert("Please input password min 8 char & max 20 char")
            }
            else {
                history.push("/dashboard")
            }
        }
    }

    const openModal2 = () => {
        setShowreg(true)
        setShow(false)
    }
    const closeModal2 = () => setShowreg(false)

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.id]: e.target.value
        })
    }

    const regis = async (e) => {
        e.preventDefault()
        await dispatch(Regis(input))
        if (isAuthenticate) {
            if (/[^a-zA-Z0-9]/.test(input.name)) {
                alert("Input name is not alphanumeric")
            }
            else if (input.email === "" || input.password === "") {
                alert("Please input your email and password")
            }
            else if (input.password.length < 8 || input.password.length > 20) {
                alert("Please input password min 8 char & max 20 char")
            }
            else {
                history.push("/dashboard")
            }
        }
    }

    return (
        <div className="langganan">
            <>
                <Modal show={show} onHide={closeModal1} className="modal-login">
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
                                <p>Belum punya akun? <span onClick={openModal2}>Daftar</span></p>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
            <>
                <Modal show={showreg} onHide={closeModal2} className="modal-login">
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        <div className="picture">
                            <img src={require('../assets/images/login-illustration.svg')} alt="" />
                        </div>
                        <div className="forms">
                            <h3>Buat Akun</h3>
                            <form>
                                <input type="text" id="name" value={input.name} onChange={handleInput} placeholder="Name" />
                                <input type="email" id="email" value={input.email} onChange={handleInput} placeholder="Email" />
                                <input type="password" id="password" value={input.password} onChange={handleInput} placeholder="Password" />
                                <Button className="btn-signin" onClick={regis}>Daftar</Button>
                                <p>Sudah punya akun? <span onClick={openModal1}>Masuk</span></p>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
            <h2 className="langganan__daftar">Daftar sekarang dan nikmati fiturnya!</h2>
            <div className="langganan__cards">
                {Pakets.map(item =>
                    <>
                        {item.id === 2 ?
                            <div key={item.id} className="langganan__cards__best-seller">
                                <h6>Best Seller</h6>
                                <div className="langganan__cards__best-seller__kontens">
                                    <h5>{item.title}</h5>
                                    <p>Rp <span>{item.price.toLocaleString()}</span> /Bulan</p>
                                    <ul>
                                        <li><img src={require('../assets/images/check.svg')} alt="" /><p>{item.list1}</p></li>
                                        <li><img src={require('../assets/images/check.svg')} alt="" /><p>{item.list2}</p></li>
                                        <li><img src={require('../assets/images/check.svg')} alt="" /><p>{item.list3}</p></li>
                                    </ul>
                                    <Button className="btn-akumau-best" onClick={openModal2}>Aku mau!</Button>
                                </div>
                            </div>
                            :
                            <div key={item.id} className="langganan__cards__konten">
                                <h5>{item.title}</h5>
                                <p>Rp <span>{item.price.toLocaleString()}</span> /Bulan</p>
                                <ul>
                                    <li><img src={require('../assets/images/check.svg')} alt="" /><p>{item.list1}</p></li>
                                    <li><img src={require('../assets/images/check.svg')} alt="" /><p>{item.list2}</p></li>
                                    <li><img src={require('../assets/images/check.svg')} alt="" /><p>{item.list3}</p></li>
                                </ul>
                                <Button className="btn-akumau" onClick={openModal2}>Aku mau!</Button>
                            </div>
                        }
                    </>
                )}
            </div>
        </div>
    )
}

export default Berlangganan;