import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img 
              src={logo} 
              alt="Logo" 
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain'
              }}
            />
            <span>aadi</span>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><Link to="/cp" className="nav-link">CP Profiles</Link></li>
            <li><Link to="/resume" className="nav-link">Resume</Link></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </header>
  );
  
};

export default Header; 