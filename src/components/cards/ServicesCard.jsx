import React from 'react';
import IconButton from '../ui/IconButton';

function ServicesCard() {
  return (
    <div className="card flex-between" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div className="flex-center" style={{ gap: '2rem', flexGrow: 1, width: '100%', marginBottom: '1rem' }}>
        {/* Icons */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="8" width="18" height="12" rx="2" ry="2"></rect><path d="M16 8v-2a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2"></path><circle cx="12" cy="14" r="3"></circle></svg>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="8" cy="12" r="5"></circle><circle cx="16" cy="12" r="5"></circle></svg>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      </div>
      
      <div className="flex-between" style={{ width: '100%', alignItems: 'flex-end' }}>
        <div>
          <p className="text-sm">SPECIALIZATION</p>
          <h2 className="text-lg">Services Offering</h2>
        </div>
        <IconButton />
      </div>
    </div>
  );
}

export default ServicesCard;
