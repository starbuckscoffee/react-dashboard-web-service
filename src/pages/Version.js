import React from 'react';

const Version = () => {
  return (
    <div className="page">
      <h1>Version Information</h1>
      <div className="page-content">
        <div className="version-info">
          <h2>Dashboard Web Service</h2>
          <p><strong>Version:</strong> 1.0.0</p>
          <p><strong>Build Date:</strong> {new Date().toLocaleDateString()}</p>
          <p><strong>Environment:</strong> Development</p>
        </div>

        <h3>Dependencies</h3>
        <div className="dependencies-list">
          <div className="dependency">
            <strong>React:</strong> ^19.1.1
          </div>
          <div className="dependency">
            <strong>React DOM:</strong> ^19.1.1
          </div>
          <div className="dependency">
            <strong>React Router DOM:</strong> ^7.8.2
          </div>
          <div className="dependency">
            <strong>React Scripts:</strong> 5.0.1
          </div>
        </div>

        <h3>Changelog</h3>
        <div className="changelog">
          <div className="changelog-entry">
            <h4>v1.0.0 - Initial Release</h4>
            <ul>
              <li>Basic dashboard layout with sidebar and top navigation</li>
              <li>Home page with dashboard statistics</li>
              <li>User registration form</li>
              <li>About page with application information</li>
              <li>Version tracking and dependency information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Version;