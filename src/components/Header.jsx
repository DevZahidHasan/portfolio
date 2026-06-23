import React from 'react';
import { Link, useLocation } from 'react-router';
import './Header.css';

function Header() {
  const location = useLocation();
  
  return (
    <header className="header flex-between">
      <div className="logo">
        <Link to="/">Grid<span>X</span></Link>
      </div>
      
      <nav className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/works" className={location.pathname === '/works' ? 'active' : ''}>Works</Link>
        <a href="#contact">Contact</a>
      </nav>
      
      <button className="talk-btn">Let s talk</button>
    </header>
  );
}

export default Header;
