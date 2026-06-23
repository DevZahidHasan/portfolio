import React from 'react';
import IconButton from '../ui/IconButton';

function ProjectCard({ title, category, isTall, imageSrc }) {
  return (
    <div className="card project-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', height: '100%' }}>
      <div 
        style={{ 
          width: '100%', 
          flexGrow: 1, 
          borderRadius: '20px', 
          overflow: 'hidden', 
          backgroundColor: 'var(--card-bg-hover)', 
          marginBottom: '1.5rem',
          minHeight: isTall ? '400px' : '200px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {imageSrc ? (
          <img src={imageSrc} alt={title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>
            {/* Subtle placeholder icon for project image */}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </div>
        )}
      </div>
      
      <div className="flex-between" style={{ alignItems: 'flex-end', width: '100%' }}>
        <div>
          <p className="text-sm" style={{ marginBottom: '0.25rem' }}>{category}</p>
          <h3 className="text-lg" style={{ fontSize: '1.5rem' }}>{title}</h3>
        </div>
        <IconButton />
      </div>
    </div>
  );
}

export default ProjectCard;
