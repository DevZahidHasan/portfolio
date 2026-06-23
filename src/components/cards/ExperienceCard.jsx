import React from 'react';

function ExperienceCard() {
  return (
    <div className="card" style={{ height: '100%', padding: '2.5rem' }}>
      <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '2rem', letterSpacing: '1px' }}>EXPERIENCE</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="timeline-item">
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Aug 2024 - Present</p>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Junior Software Engineer</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>ImplevistaBD</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem' }}>Projects: BOG PRO (Holcim Limited), Banking ERP (CCULB)</p>
        </div>
        
        <div className="timeline-item">
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Feb 2024 - Aug 2024</p>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Software Engineering Intern</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>ImplevistaBD</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
