import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Dashboard</h2>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link 
            to="/home" 
            className={`nav-link ${location.pathname === '/' || location.pathname === '/home' ? 'active' : ''}`}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/register" 
            className={`nav-link ${location.pathname === '/register' ? 'active' : ''}`}
          >
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/version" 
            className={`nav-link ${location.pathname === '/version' ? 'active' : ''}`}
          >
            Version
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;