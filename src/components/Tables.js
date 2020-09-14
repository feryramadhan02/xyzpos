import React from 'react';
import Table from 'react-bootstrap/Table';
import { DataTable } from '../data/datatable';

import '../assets/style/Table.scss';
import { Button } from 'react-bootstrap';

const Tables = () => {
    return (
        <div className="table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Jam</th>
                        <th>Customer</th>
                        <th>Barang</th>
                        <th>Harga Barang</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {DataTable.map(item =>
                    <tbody >
                        <tr key={item.id}>
                            <td>{item.time}</td>
                            <td>{item.konten}</td>
                            <td>{item.barang}</td>
                            <td>{item.harga_barang}</td>
                            <td>{item.qty}</td>
                            <td>{item.total}</td>
                            <td><Button className="btn-detil"> Lihat Detail</Button></td>
                        </tr>
                    </tbody>
                )}
            </Table>
        </div>
    )
}

export default Tables;