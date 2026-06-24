import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router";

function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <footer className="footer">
      <div className="footer-logo">
        <a href="/">
          Zahid<span> Hasan</span>
        </a>
      </div>

      <nav className={`nav-links ${isMenuOpen ? "mobile-open" : ""}`}>
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/works"
          className={location.pathname === "/works" ? "active" : ""}
          onClick={() => setIsMenuOpen(false)}
        >
          Works
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>

      <div className="copyright" style={{ marginTop: "40px" }}>
        &copy; All rights reserved by <span>Zahid Hasan</span>
      </div>
    </footer>
  );
}

export default Footer;
