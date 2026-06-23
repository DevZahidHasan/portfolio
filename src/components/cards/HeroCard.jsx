import React from 'react';
import { Link } from 'react-router';
import './HeroCard.css';
import IconButton from '../ui/IconButton';

function HeroCard() {
  return (
    <div className="hero-card">
      <div className="hero-img-container">
        <img src="/main.jpg" alt="Zahid Hasan" className="hero-img" />
      </div>
      
      <div className="hero-content">
        <p className="text-sm">Software Engineer</p>
        <h1 className="title">Zahid<br/>Hasan.</h1>
        <p className="hero-desc">I am a Software Engineer based in Dhaka, Bangladesh.</p>
      </div>
      
      <div className="hero-action">
        <Link to="/about">
          <IconButton />
        </Link>
      </div>
    </div>
  );
}

export default HeroCard;
