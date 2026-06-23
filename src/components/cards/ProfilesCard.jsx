import React from 'react';
import IconButton from '../ui/IconButton';

function ProfilesCard() {
  return (
    <div className="card flex-between" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div className="flex-center" style={{ gap: '1rem', flexGrow: 1, width: '100%', marginBottom: '1rem' }}>
        <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>
        </div>
        <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
        </div>
      </div>
      
      <div className="flex-between" style={{ width: '100%', alignItems: 'flex-end' }}>
        <div>
          <p className="text-sm">STAY WITH ME</p>
          <h2 className="text-lg">Profiles</h2>
        </div>
        <IconButton />
      </div>
    </div>
  );
}

export default ProfilesCard;
