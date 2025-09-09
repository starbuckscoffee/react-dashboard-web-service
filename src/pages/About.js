import React from 'react';

const About = () => {
  return (
    <div className="page">
      <h1>About</h1>
      <div className="page-content">
        <h2>Dashboard Web Service</h2>
        <p>
          This is a React.js Dashboard Web Service that provides an intuitive interface
          for managing web applications and services.
        </p>
        
        <h3>Features</h3>
        <ul>
          <li>Responsive design with sidebar navigation</li>
          <li>Top navigation bar with quick access links</li>
          <li>Dynamic content rendering</li>
          <li>User registration system</li>
          <li>Real-time dashboard statistics</li>
        </ul>

        <h3>Technologies Used</h3>
        <ul>
          <li>React.js - Frontend framework</li>
          <li>React Router - Navigation</li>
          <li>CSS3 - Styling and layout</li>
          <li>HTML5 - Structure</li>
        </ul>

        <h3>Development Team</h3>
        <p>Built with Claude Code assistance for rapid development and implementation.</p>
      </div>
    </div>
  );
};

export default About;