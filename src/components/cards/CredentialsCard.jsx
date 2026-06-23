import React from 'react';
import { useNavigate } from 'react-router';
import IconButton from '../ui/IconButton';

function CredentialsCard() {
  const navigate = useNavigate();
  return (
    <div className="card flex-between" style={{ flexDirection: 'column', alignItems: 'flex-start', cursor: 'pointer' }} onClick={() => navigate('/credentials')}>
      <div className="flex-center" style={{ flexGrow: 1, width: '100%', marginBottom: '1.5rem' }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ opacity: 0.5 }}>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      </div>
      
      <div className="flex-between" style={{ alignItems: 'flex-end', width: '100%' }}>
        <div>
          <p className="text-sm" style={{ marginBottom: '0.25rem' }}>MORE ABOUT ME</p>
          <h3 className="text-lg">Credentials</h3>
        </div>
        <IconButton />
      </div>
    </div>
  );
}

export default CredentialsCard;
