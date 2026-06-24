import React from 'react';
import './GridContainer.css';
import HeroCard from './cards/HeroCard';
import MarqueeCard from './cards/MarqueeCard';
import CredentialsCard from './cards/CredentialsCard';
import ProjectsCard from './cards/ProjectsCard';
import ServicesCard from './cards/ServicesCard';
import ProfilesCard from './cards/ProfilesCard';
import StatsCard from './cards/StatsCard';
import ContactCard from './cards/ContactCard';
import ResumeCard from './cards/ResumeCard';
import ScrollReveal from './ui/ScrollReveal';

function GridContainer() {
  return (
    <div className="bento-grid">
      <ScrollReveal className="grid-item hero" style={{ padding: 0 }} delay={0.1}>
        <HeroCard />
      </ScrollReveal>
      <ScrollReveal className="grid-item marquee" style={{ padding: 0 }} delay={0.2}>
        <MarqueeCard />
      </ScrollReveal>
      <ScrollReveal className="grid-item credentials" style={{ padding: 0 }} delay={0.3}>
        <CredentialsCard />
      </ScrollReveal>
      <ScrollReveal className="grid-item projects" style={{ padding: 0 }} delay={0.4}>
        <ProjectsCard />
      </ScrollReveal>
      <ScrollReveal className="grid-item resume" style={{ padding: 0 }} delay={0.1}>
        <ResumeCard />
      </ScrollReveal>
      <ScrollReveal className="grid-item services" style={{ padding: 0 }} delay={0.2}>
        <ServicesCard />
      </ScrollReveal>
      <ScrollReveal className="grid-item profiles" style={{ padding: 0 }} delay={0.3}>
        <ProfilesCard />
      </ScrollReveal>
      <ScrollReveal className="grid-item stats" style={{ padding: 0 }} delay={0.4}>
        <StatsCard />
      </ScrollReveal>
      <ScrollReveal className="grid-item contact" style={{ padding: 0 }} delay={0.5}>
        <ContactCard />
      </ScrollReveal>
    </div>
  );
}

export default GridContainer;
