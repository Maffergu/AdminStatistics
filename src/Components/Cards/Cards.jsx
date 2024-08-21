import React from 'react';
import './Cards.css'; // Import the CSS file

const Cards = ({ data }) => {
  return (
    <div className="dashboard">
      <div className="card">
        <h2 className="card-title">Total Revenue</h2>
        <p className="card-value">{data.totalRevenue}</p>
        <p className="card-description">Corresponds to the revenue since app first launched</p>
      </div>
      <div className="card">
        <h2 className="card-title">Total Users</h2>
        <p className="card-value">{data.totalUsers}</p>
        <p className="card-description">Total quantity of users registered</p>
      </div>
      <div className="card">
        <h2 className="card-title">Active Users</h2>
        <p className="card-value">{data.activeUsers}</p>
        <p className="card-description">Users on an active session live</p>
      </div>
    </div>
  );
};

export default Cards;
