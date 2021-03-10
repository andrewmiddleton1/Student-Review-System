import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import DashboardNewsCard from '../../DashboardNewsCard/DashboardNewsCard';
import './style.css';

function Roster() {
    return (
        <div className="container-fluid h-100 p-0 m-0">
            <Sidebar />
            <div className="content">
                <div className="dashboardCard card cardBackground">
                    <div className="card-body">
                        <h4 className="card-subtitle">Thank you for entering your feedback notes</h4>
                        <p className="card-text">Please remember to log out so your details are saved and can't be accessed by others</p>
                        <a href="/" className="card-link bottomLink">
                            More details
                </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Roster;
