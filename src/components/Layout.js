import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const sidebarPages = [
    { name: 'Dashboard Overview', path: '/home' },
    { name: 'User Registration', path: '/register' },
    { name: 'About System', path: '/about' },
    { name: 'Version Info', path: '/version' }
  ];

  const [activeSidebarPage, setActiveSidebarPage] = useState(
    sidebarPages.find(page => page.path === location.pathname)?.name || 'Dashboard Overview'
  );

  const handleSidebarClick = (page) => {
    setActiveSidebarPage(page.name);
    navigate(page.path);
  };

  return (
    <div className="layout">
      <div className="sidebar">
        <h3>Pages</h3>
        <ul className="page-list">
          {sidebarPages.map((page) => (
            <li 
              key={page.name}
              className={activeSidebarPage === page.name ? 'active' : ''}
              onClick={() => handleSidebarClick(page)}
            >
              {page.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;