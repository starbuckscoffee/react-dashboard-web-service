import React from 'react';

const Home = () => {
  return (
    <div className="page">
      <h1>Home</h1>
      <div className="page-content">
        <p>Welcome to the Dashboard Web Service!</p>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p className="stat-number">1,234</p>
          </div>
          <div className="stat-card">
            <h3>Active Sessions</h3>
            <p className="stat-number">89</p>
          </div>
          <div className="stat-card">
            <h3>System Status</h3>
            <p className="stat-status online">Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;