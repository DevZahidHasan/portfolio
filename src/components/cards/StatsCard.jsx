import React from 'react';
import './StatsCard.css';

function StatsCard() {
  return (
    <div className="stats-card card flex-between">
      <div className="stat-item">
        <h2 className="title">2+</h2>
        <p className="text-sm">YEARS<br/>Professional EXPERIENCE</p>
      </div>
      
      <div className="stat-item">
        <h2 className="title">4</h2>
        <p className="text-sm">ENTERPRISE<br/>PROJECTS</p>
      </div>
      
      <div className="stat-item">
        <h2 className="title">10+</h2>
        <p className="text-sm">FRAMEWORKS<br/>& TOOLS</p>
      </div>
    </div>
  );
} 

export default StatsCard;
