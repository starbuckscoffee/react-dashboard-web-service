import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Home from './pages/Home';
import Register from './pages/Register';
import About from './pages/About';
import Version from './pages/Version';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/version" element={<Version />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
