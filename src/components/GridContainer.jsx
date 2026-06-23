import React from 'react';
import './GridContainer.css';

import HeroCard from './cards/HeroCard';
import MarqueeCard from './cards/MarqueeCard';
import CredentialsCard from './cards/CredentialsCard';
import ProjectsCard from './cards/ProjectsCard';
import BlogCard from './cards/BlogCard';
import ServicesCard from './cards/ServicesCard';
import ProfilesCard from './cards/ProfilesCard';
import StatsCard from './cards/StatsCard';
import ContactCard from './cards/ContactCard';

function GridContainer() {
  return (
    <div className="bento-grid">
      <div className="grid-item hero" style={{ padding: 0 }}><HeroCard /></div>
      <div className="grid-item marquee" style={{ padding: 0 }}><MarqueeCard /></div>
      <div className="grid-item credentials" style={{ padding: 0 }}><CredentialsCard /></div>
      <div className="grid-item projects" style={{ padding: 0 }}><ProjectsCard /></div>
      <div className="grid-item blog" style={{ padding: 0 }}><BlogCard /></div>
      <div className="grid-item services" style={{ padding: 0 }}><ServicesCard /></div>
      <div className="grid-item profiles" style={{ padding: 0 }}><ProfilesCard /></div>
      <div className="grid-item stats" style={{ padding: 0 }}><StatsCard /></div>
      <div className="grid-item contact" style={{ padding: 0 }}><ContactCard /></div>
    </div>
  );
}

export default GridContainer;
