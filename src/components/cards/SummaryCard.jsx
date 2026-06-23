import React from 'react';

function SummaryCard() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ fontSize: '3.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '1.5rem', letterSpacing: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
        </svg>
        SELF-SUMMARY
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
        </svg>
      </h2>
      <div className="card" style={{ flexGrow: 1, padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 600 }}>Zahid Hasan</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
          I am a results-oriented Software Engineer with a strong background in full-stack development, specializing in building scalable enterprise-grade solutions. 
          I have experience architecting complex systems, including comprehensive banking and educational ERPs, and inventory management platforms utilizing modern 
          frameworks like Angular, React, Node.js, and TypeScript.
        </p>
      </div>
    </div>
  );
}

export default SummaryCard;
