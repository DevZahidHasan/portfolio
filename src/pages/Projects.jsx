import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../utils/animations';
import './Projects.css';
import ProjectCard from '../components/cards/ProjectCard';
import ScrollReveal from '../components/ui/ScrollReveal';

function Projects() {
  return (
    <motion.div 
      className="projects-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="projects-grid">
        
        {/* Tall Card on the Left */}
        <ScrollReveal className="proj-tall" delay={0.1}>
          <ProjectCard 
            id="bog-pro"
            title="BOG PRO" 
            category="ENTERPRISE SOLUTION" 
            isTall={true} 
            imageSrc="/holcim/main (1).png"
          />
        </ScrollReveal>

        {/* Heading spanning right two columns */}
        <ScrollReveal className="proj-heading" delay={0.2}>
          <h1 style={{ fontSize: '4.5rem', fontWeight: 700, letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '1.5rem', margin: '2rem 0' }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--text-secondary)', opacity: 0.4 }}>
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
            </svg>
            ALL PROJECTS
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--text-secondary)', opacity: 0.4 }}>
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
            </svg>
          </h1>
        </ScrollReveal>

        {/* Two Square Cards */}
        <ScrollReveal className="proj-square-1" delay={0.3}>
          <ProjectCard 
            id="banking-erp"
            title="Banking ERP" 
            category="FINTECH PLATFORM" 
            isTall={false} 
            imageSrc="/cculb/main.png"
          />
        </ScrollReveal>

        <ScrollReveal className="proj-square-2" delay={0.4}>
          <ProjectCard 
            id="edutracker"
            title="eduTracker ERP" 
            category="MANAGEMENT SYSTEM" 
            isTall={false} 
            imageSrc="/edutracker/main.png"
          />
        </ScrollReveal>

      </div>
    </motion.div>
  );
}

export default Projects;
