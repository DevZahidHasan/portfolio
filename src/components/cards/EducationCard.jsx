import React from 'react';

function EducationCard() {
  return (
    <div className="card" style={{ height: '100%', padding: '2.5rem' }}>
      <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '2rem', letterSpacing: '1px' }}>EDUCATION</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="timeline-item">
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>2020</p>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>B.Sc. in Computer Science and Engineering</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>University of Asia Pacific</p>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
