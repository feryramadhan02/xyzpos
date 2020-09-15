import React from 'react';
import { useSelector } from 'react-redux';
import Drawer from '../components/Drawer';
import Tables from '../components/Tables';


import '../assets/style/Dashboard.scss';

const Dashboard = () => {
    const Profile = useSelector(state => state.auth.profile)
    const Summaries = useSelector(state => state.data.Summary)

    // useEffect(() => {
    //     dispatch(Get())
    // }, [dispatch])

    return (
        <div className="dashboard">
            <Drawer />
            <div className="dashboard__layout">
                <div className="dashboard__layout__title">
                    <p>Dashboard</p>
                    <h4>Halo,
                    {Profile.map(item =>
                        <span>{item.name}</span>
                    )}
                    </h4>
                </div>
                <div className="dashboard__layout__based">
                    {Summaries.map(list =>
                        <>
                            {list.id === 4 ?
                                <div key={list.id} className="dashboard__layout__based__cards">
                                    <p>{list.title}</p>
                                    <p>Rp <span>{list.total.toLocaleString()}</span></p>
                                </div>
                                :
                                <div key={list.id} className="dashboard__layout__based__cards">
                                    <p>{list.title}</p>
                                    <h4>{list.total}</h4>
                                </div>
                            }
                        </>
                    )}
                </div>
                <div className="dashboard__layout__tables">
                    <h4>Penjualan Hari Ini</h4>
                    <p>Kamis, 13 Agustus 2020</p>
                    <Tables />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;