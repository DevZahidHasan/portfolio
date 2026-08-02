import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../utils/animations';
import './Projects.css';
import ProjectCard from '../components/cards/ProjectCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import { projectsData } from '../data/projects';

function Projects() {
  const firstProject = projectsData[0];
  const secondProject = projectsData[1];
  const thirdProject = projectsData[2];
  const remainingProjects = projectsData.slice(3);

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
        
        {/* Tall Card on the Left (1st project) */}
        {firstProject && (
          <ScrollReveal className="proj-tall" delay={0.1}>
            <ProjectCard 
              id={firstProject.id}
              title={firstProject.title} 
              category={firstProject.category} 
              isTall={true} 
              imageSrc={firstProject.thumbnail}
              liveLink={firstProject.liveLink}
            />
          </ScrollReveal>
        )}

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

        {/* Square Card 1 (2nd project) */}
        {secondProject && (
          <ScrollReveal className="proj-square-1" delay={0.3}>
            <ProjectCard 
              id={secondProject.id}
              title={secondProject.title} 
              category={secondProject.category} 
              isTall={false} 
              imageSrc={secondProject.thumbnail}
              liveLink={secondProject.liveLink}
            />
          </ScrollReveal>
        )}

        {/* Square Card 2 (3rd project) */}
        {thirdProject && (
          <ScrollReveal className="proj-square-2" delay={0.4}>
            <ProjectCard 
              id={thirdProject.id}
              title={thirdProject.title} 
              category={thirdProject.category} 
              isTall={false} 
              imageSrc={thirdProject.thumbnail}
              liveLink={thirdProject.liveLink}
            />
          </ScrollReveal>
        )}

        {/* Remaining projects (dynamic grid flow starting from Row 3) */}
        {remainingProjects.map((project, index) => (
          <ScrollReveal key={project.id} className="proj-square-auto" delay={0.1 * ((index % 3) + 1)}>
            <ProjectCard 
              id={project.id}
              title={project.title} 
              category={project.category} 
              isTall={false} 
              imageSrc={project.thumbnail}
              liveLink={project.liveLink}
            />
          </ScrollReveal>
        ))}

      </div>
    </motion.div>
  );
}

export default Projects;
