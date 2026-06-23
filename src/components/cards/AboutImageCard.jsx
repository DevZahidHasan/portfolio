import React from 'react';

function AboutImageCard() {
  return (
    <div className="card" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ width: '100%', paddingTop: '100%', position: 'relative', borderRadius: '30px', overflow: 'hidden', backgroundColor: 'var(--card-bg-hover)' }}>
        <img 
          src="/main.jpg" 
          alt="Zahid Hasan" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
    </div>
  );
}

export default AboutImageCard;
