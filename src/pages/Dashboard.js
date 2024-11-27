import React from 'react';
import './Dashboard.css'; // Import the CSS file
import logo from '../assets/images/logo.png';


export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <img src={logo} alt="Shi Shi Kokoro Logo" className="dashboard-logo" />
            <h1 className="dashboard-title">Welcome to Shi Shi Kokoro Property Management</h1>
            <p className="dashboard-subtitle">Your one-stop solution for property management.</p>

            <div className="dashboard-widgets">
                <div className="widget">
                    <h2 className="widget-title">Total Properties</h2>
                    <p className="widget-content">45</p>
                </div>
                <div className="widget">
                    <h2 className="widget-title">Active Tenants</h2>
                    <p className="widget-content">120</p>
                </div>
                <div className="widget">
                    <h2 className="widget-title">Pending Requests</h2>
                    <p className="widget-content">5</p>
                </div>
            </div>
        </div>
    );
}
