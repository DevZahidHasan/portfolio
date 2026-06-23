import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../utils/animations';
import './About.css';
import AboutImageCard from '../components/cards/AboutImageCard';
import SummaryCard from '../components/cards/SummaryCard';
import ExperienceCard from '../components/cards/ExperienceCard';
import EducationCard from '../components/cards/EducationCard';
import ProfilesCard from '../components/cards/ProfilesCard';
import ContactCard from '../components/cards/ContactCard';
import CredentialsCard from '../components/cards/CredentialsCard';
import ScrollReveal from '../components/ui/ScrollReveal';

function About() {
  return (
    <motion.div 
      className="about-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="about-grid">
        
        {/* Row 1 */}
        <div className="about-row-1">
          <ScrollReveal className="about-img-container" delay={0.1}>
            <AboutImageCard />
          </ScrollReveal>
          <ScrollReveal className="about-summary-container" delay={0.2}>
            <SummaryCard />
          </ScrollReveal>
        </div>

        {/* Row 2 */}
        <div className="about-row-2">
          <ScrollReveal className="about-experience-container" delay={0.1}>
            <ExperienceCard />
          </ScrollReveal>
          <ScrollReveal className="about-education-container" delay={0.2}>
            <EducationCard />
          </ScrollReveal>
        </div>

        {/* Row 3 - Profiles, Contact, Credentials */}
        <div className="about-row-1">
          <ScrollReveal className="about-profiles-container" delay={0.1}>
            <ProfilesCard />
          </ScrollReveal>
          <ScrollReveal className="about-contact-container" delay={0.2}>
            <ContactCard />
          </ScrollReveal>
          <ScrollReveal className="about-credentials-container" delay={0.3}>
            <CredentialsCard />
          </ScrollReveal>
        </div>

      </div>
    </motion.div>
  );
}

export default About;

// Forced HMR reload
