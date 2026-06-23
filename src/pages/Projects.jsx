import React from 'react';
import './Projects.css';
import ProjectCard from '../components/cards/ProjectCard';

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-grid">
        
        {/* Tall Card on the Left */}
        <div className="proj-tall">
          <ProjectCard 
            title="BOG PRO" 
            category="ENTERPRISE SOLUTION" 
            isTall={true} 
            imageSrc="/holcim/main (1).png"
          />
        </div>

        {/* Heading spanning right two columns */}
        <div className="proj-heading">
          <h1 style={{ fontSize: '4.5rem', fontWeight: 700, letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '1.5rem', margin: '2rem 0' }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--text-secondary)', opacity: 0.4 }}>
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
            </svg>
            ALL PROJECTS
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--text-secondary)', opacity: 0.4 }}>
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
            </svg>
          </h1>
        </div>

        {/* Two Square Cards */}
        <div className="proj-square-1">
          <ProjectCard 
            title="Banking ERP" 
            category="FINTECH PLATFORM" 
            isTall={false} 
          />
        </div>

        <div className="proj-square-2">
          <ProjectCard 
            title="eduTracker ERP" 
            category="MANAGEMENT SYSTEM" 
            isTall={false} 
          />
        </div>

      </div>
    </div>
  );
}

export default Projects;
