import React from 'react';
import './MarqueeCard.css';

function MarqueeCard() {
  return (
    <div className="marquee-card card">
      <div className="marquee-content">
        <span className="text-sm">LATEST WORK AND <strong>FEATURED</strong> * LATEST WORK AND <strong>FEATURED</strong> * LATEST WORK AND <strong>FEATURED</strong></span>
      </div>
    </div>
  );
}

export default MarqueeCard;
