import React from 'react';
import { Button } from 'react-bootstrap';
import { Paket } from '../data/paket'

import '../assets/style/Berlangganan.scss';

const Berlangganan = () => {
    return (
        <div className="langganan">
            <h2 className="langganan__daftar">Daftar sekarang dan nikmati fiturnya!</h2>
            <div className="langganan__cards">
                {Paket.map(item =>
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
                                    <Button className="btn-akumau-best">Aku mau!</Button>
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
                                <Button className="btn-akumau">Aku mau!</Button>
                            </div>
                        }
                    </>
                )}
            </div>
        </div>
    )
}

export default Berlangganan;