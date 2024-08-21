import React, { useState } from 'react';
import Cards from "../../Components/Cards/Cards";
import ApexChart from "../../Components/Chart/Chart";
import Navbar from "../../Components/NavBar/Navbar";
import PieChart from "../../Components/Piechart/Piechart";
import Loading from '../../Components/Loading/Loading';
import './Dashboard.css'; 

const generateRandomData = () => {
  const totalUsers = Math.floor(Math.random() * 10000); // Random users between 0 and 9999
  const activeUsers = Math.floor(Math.random() * totalUsers); // Random active users between 0 and totalUsers
  return {
    totalRevenue: `$${(Math.random() * 10000).toFixed(2)}`, // Random revenue between $0 and $10000
    totalUsers,
    activeUsers,
  };
};

const AdminPage = () => {
  const [data, setData] = useState(generateRandomData());
  const [isLoading, setIsLoading] = useState(false); // State to control loading spinner visibility
  const [dataKey, setDataKey] = useState(0);
  
  const handleRefresh = () => {
    setIsLoading(true); // Show the loading spinner
    setTimeout(() => { // Simulate a shorter delay for loading data
      setData(generateRandomData());
      setDataKey(prevKey => prevKey + 1); // Trigger re-render
      setIsLoading(false); // Hide the loading spinner
    }, 500); // 0.5 seconds delay
  };

  return (
    
    <div className="admin-page">
      <Navbar />
      <div className="header-container">
        <h1>Statistics today, right now</h1>
        <button className="refresh-button" onClick={handleRefresh}>
          Refresh Data
        </button>
      </div>
      {isLoading && <Loading />} {/* Show loading spinner when loading */}
      <Cards key={dataKey} data={data} />
      <div className="charts-container">
        <div className="chart-box">
          <ApexChart key={dataKey} />
        </div>
        <div className="card pie-chart-card">
          <h2 className="card-title">Pie Chart</h2>
          <PieChart 
            key={dataKey} 
            activeUsers={data.activeUsers} 
            totalUsers={data.totalUsers} 
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
