import React from 'react';
import IconButton from '../ui/IconButton';

function CredentialsCard() {
  return (
    <div className="card flex-between" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: '1rem' }}>
        {/* Placeholder for Signature */}
        <svg width="150" height="60" viewBox="0 0 150 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 40C30 20 50 50 70 30C90 10 110 50 140 20" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="flex-between" style={{ width: '100%', alignItems: 'flex-end' }}>
        <div>
          <p className="text-sm">MORE ABOUT ME</p>
          <h2 className="text-lg">Credentials</h2>
        </div>
        <IconButton />
      </div>
    </div>
  );
}

export default CredentialsCard;
