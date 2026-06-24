import React from 'react';
import IconButton from '../ui/IconButton';

function ResumeCard() {
  const handleDownload = () => {
    // Open resume PDF in new tab
    const link = document.createElement('a');
    link.href = '/Zahid_Hasan_Resume.pdf';
    link.download = 'Zahid_Hasan_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="card flex-between" style={{ flexDirection: 'column', alignItems: 'flex-start', cursor: 'pointer' }} onClick={handleDownload}>
      <div className="flex-center" style={{ flexGrow: 1, width: '100%', marginBottom: '1rem' }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      </div>
      
      <div className="flex-between" style={{ width: '100%', alignItems: 'flex-end' }}>
        <div>
          <p className="text-sm">DOWNLOAD</p>
          <h2 className="text-lg">Resume</h2>
        </div>
        <IconButton />
      </div>
    </div>
  );
}

export default ResumeCard;
