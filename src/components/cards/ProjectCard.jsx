import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import IconButton from '../ui/IconButton';
import './ProjectCard.css';

function ProjectCard({ id, title, category, isTall, imageSrc, liveLink }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="card project-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', height: '100%' }}>
        <div 
          className="project-image-wrapper"
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
            justifyContent: 'center',
            cursor: imageSrc ? 'pointer' : 'default'
          }}
          onClick={() => imageSrc && setIsModalOpen(true)}
        >
          {imageSrc ? (
            <>
              <img src={imageSrc} alt={title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
              <div className="project-view-overlay">
                <span className="view-btn">View Full Image</span>
              </div>
            </>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="live-link-btn"
                onClick={(e) => e.stopPropagation()}
              >
                Live Link
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            )}
            {id ? (
              <Link to={`/works/${id}`}>
                <IconButton />
              </Link>
            ) : (
              <IconButton />
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="image-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <motion.img 
              src={imageSrc} 
              alt={title} 
              className="modal-image"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectCard;
