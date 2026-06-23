import React from 'react';
import './About.css';
import AboutImageCard from '../components/cards/AboutImageCard';
import SummaryCard from '../components/cards/SummaryCard';
import ExperienceCard from '../components/cards/ExperienceCard';
import EducationCard from '../components/cards/EducationCard';
import ProfilesCard from '../components/cards/ProfilesCard';
import ContactCard from '../components/cards/ContactCard';
import CredentialsCard from '../components/cards/CredentialsCard';

function About() {
  return (
    <div className="about-page">
      <div className="about-grid">
        
        {/* Row 1 */}
        <div className="about-row-1">
          <div className="about-img-container">
            <AboutImageCard />
          </div>
          <div className="about-summary-container">
            <SummaryCard />
          </div>
        </div>

        {/* Row 2 */}
        <div className="about-row-2">
          <div className="about-half">
            <ExperienceCard />
          </div>
          <div className="about-half">
            <EducationCard />
          </div>
        </div>

        {/* Row 3 - Matches Homepage Bottom */}
        <div className="bento-grid">
          <div className="grid-item profiles" style={{ padding: 0 }}><ProfilesCard /></div>
          <div className="grid-item contact" style={{ padding: 0 }}><ContactCard /></div>
          <div className="grid-item credentials" style={{ padding: 0 }}><CredentialsCard /></div>
        </div>

      </div>
    </div>
  );
}

export default About;
