import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import './Header.css';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="header flex-between">
      <div className="logo">
        <Link to="/">Grid<span>X</span></Link>
      </div>
      
      <nav className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/works" className={location.pathname === '/works' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Works</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </nav>
      <Link to="/contact">
        <button className="talk-btn">Let's talk</button>
      </Link>
      

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>
    </header>
  );
}

export default Header;
