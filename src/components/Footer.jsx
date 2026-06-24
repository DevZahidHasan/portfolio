import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <a href="/">Zahid<span>Hasan</span></a>
      </div>
      
      <nav className="footer-nav">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#works">WORKS</a>
        <a href="#contact">CONTACT</a>
      </nav>
      
      <div className="copyright">
        &copy; All rights reserved by <span>WordPressRiver</span>
      </div>
    </footer>
  );
}

export default Footer;
