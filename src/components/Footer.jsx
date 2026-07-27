import React from "react";
import "./Footer.css";
import { Link, useLocation } from "react-router";

function Footer() {
  const location = useLocation();
  return (
    <footer className="footer">
      <div className="footer-logo">
        <a href="/">
          Zahid<span> Hasan</span>
        </a>
      </div>

      <nav className="footer-nav">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About
        </Link>
        <Link
          to="/works"
          className={location.pathname === "/works" ? "active" : ""}
        >
          Works
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
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
