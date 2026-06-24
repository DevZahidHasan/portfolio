import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { pageVariants, pageTransition } from '../utils/animations';
import { projectsData } from '../data/projects';
import ScrollReveal from '../components/ui/ScrollReveal';
import './ProjectDetails.css';

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/works'); // Redirect if not found
    }
  }, [id, navigate]);

  if (!project) return null;

  // Destructure for easy access
  const { title, category, client, year, services, about, approach, images } = project;
  
  // Try to map images from the array. Fallbacks if they don't have exactly 6 images.
  const topBanner = images[0] || null;
  const gridImgs = images.slice(1, 5); // next 4
  const bottomBanner = images[5] || null;

  return (
    <>
      <motion.div 
        className="project-details-page"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {/* Header Section */}
        <ScrollReveal className="pd-header" delay={0.1}>
          <p className="text-sm" style={{ marginBottom: '1rem' }}>{category}</p>
          <h1 className="title" style={{ fontSize: '3rem', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--text-secondary)' }}>
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
            </svg>
            {title}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--text-secondary)' }}>
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
            </svg>
          </h1>
        </ScrollReveal>

        {/* Top Banner Image */}
        {topBanner && (
          <ScrollReveal className="pd-banner" delay={0.2}>
            <div className="pd-image-container" onClick={() => setModalImage(topBanner)}>
              <img src={topBanner} alt={`${title} overview`} />
              <div className="pd-hover-overlay">
                <span className="pd-view-btn">View Full Image</span>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* About & Approach Split */}
        <div className="pd-text-split">
          <ScrollReveal className="pd-text-block card" delay={0.1}>
            <h3 className="text-sm">ABOUT THE PROJECT</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.6 }}>{about}</p>
          </ScrollReveal>
          <ScrollReveal className="pd-text-block card" delay={0.2}>
            <h3 className="text-sm">APPROACH</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.6 }}>{approach}</p>
          </ScrollReveal>
        </div>

        {/* 2x2 Image Grid */}
        {gridImgs.length > 0 && (
          <div className="pd-image-grid">
            {gridImgs.map((imgSrc, index) => (
              <ScrollReveal key={index} className="pd-grid-item" delay={0.1 + (index * 0.1)}>
                <div className="pd-image-container" onClick={() => setModalImage(imgSrc)}>
                  <img src={imgSrc} alt={`${title} screenshot ${index + 1}`} />
                  <div className="pd-hover-overlay">
                    <span className="pd-view-btn">View Full Image</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Specs Card */}
        <ScrollReveal className="pd-specs-card card" delay={0.1}>
          <div className="specs-list">
            <div className="spec-item">
              <span className="spec-label text-sm">Year</span>
              <span className="spec-value">{year}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label text-sm">Client</span>
              <span className="spec-value">{client}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label text-sm">Services</span>
              <span className="spec-value">{services}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label text-sm">Project</span>
              <span className="spec-value">{title}</span>
            </div>
          </div>
          
          <div className="specs-description">
            <h3 className="text-sm" style={{ marginBottom: '1rem' }}>DESCRIPTION</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {about}
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {approach}
            </p>
            {project.technologies && (
              <>
                <h3 className="text-sm" style={{ marginBottom: '1rem', marginTop: '2rem' }}>TECHNOLOGIES</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 500 }}>
                  {project.technologies}
                </p>
              </>
            )}
          </div>
        </ScrollReveal>

        {/* Bottom Banner Image */}
        {bottomBanner && (
          <ScrollReveal className="pd-banner" delay={0.2}>
            <div className="pd-image-container" onClick={() => setModalImage(bottomBanner)}>
              <img src={bottomBanner} alt={`${title} showcase`} />
              <div className="pd-hover-overlay">
                <span className="pd-view-btn">View Full Image</span>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Next Project Button */}
        <ScrollReveal className="pd-next-action" delay={0.3}>
          <button className="card next-btn" onClick={() => navigate('/works')}>
            Next Project
          </button>
        </ScrollReveal>

      </motion.div>

      <AnimatePresence>
        {modalImage && (
          <motion.div 
            className="pd-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
          >
            <button className="pd-modal-close-btn" onClick={() => setModalImage(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <motion.img 
              src={modalImage} 
              alt="Fullscreen view" 
              className="pd-modal-image"
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

export default ProjectDetails;
