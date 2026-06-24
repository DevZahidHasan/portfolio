import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { pageVariants, pageTransition } from '../utils/animations';
import ScrollReveal from '../components/ui/ScrollReveal';
import './Credentials.css';

function Credentials() {
  return (
    <motion.div 
      className="credentials-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="cred-layout">
        
        {/* Sidebar Profile */}
        <div className="cred-sidebar">
          <ScrollReveal className="card cred-profile-card" delay={0.1}>
            <div className="cred-profile-img-container">
              <img src="/main.jpg" alt="Zahid Hasan" className="cred-profile-img" />
            </div>
            <h2 className="cred-name">Zahid Hasan</h2>
            <p className="cred-handle">@zahidhasan</p>
            
            <div className="cred-socials">
              <a href="https://github.com/DevZahidHasan" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/zahid-hasan-2434a0279/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://www.facebook.com/zahid.hasan.437885/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
            
            <Link to="/contact" className="contact-btn" style={{ textDecoration: 'none', textAlign: 'center' }}>Contact Me</Link>
          </ScrollReveal>
        </div>

        {/* Main Content */}
        <div className="cred-main">
          
          <ScrollReveal delay={0.2} className="cred-section">
            <h3 className="section-title">ABOUT ME</h3>
            <p className="section-text">
              I am a dedicated Full Stack Developer with a passion for building robust enterprise systems and sleek fintech platforms. 
              With over 2 years of experience working on large-scale ERP solutions using technologies like React, Angular, Node.js, and PostgreSQL, 
              I strive to create scalable, user-centric applications that solve complex business problems.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="cred-section">
            <h3 className="section-title">EXPERIENCE</h3>
            <div className="timeline-item">
              <span className="timeline-date">Aug 2024 - Present</span>
              <h4 className="timeline-role">Junior Software Engineer</h4>
              <span className="timeline-company">ImplevistaBD</span>
              <p className="section-text">
                Developing robust ERP and fintech solutions such as BOG PRO (Holcim Limited) and Core Banking Software - CBS (CCULB). Focused on delivering high-performance full-stack features, inventory control modules, and intuitive admin dashboards.
              </p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">Feb 2024 - Aug 2024</span>
              <h4 className="timeline-role">Software Engineering Intern</h4>
              <span className="timeline-company">ImplevistaBD</span>
              <p className="section-text">
                Contributed to the development lifecycle of enterprise platforms, migrating legacy features and building performant APIs using Node.js and PostgreSQL.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="cred-section">
            <h3 className="section-title">EDUCATION</h3>
            <div className="timeline-item">
              <span className="timeline-date">2020</span>
              <h4 className="timeline-role">B.Sc. in Computer Science and Engineering</h4>
              <span className="timeline-company">University of Asia Pacific</span>
              <p className="section-text">
                Completed coursework in algorithms, database design, software engineering methodologies, and advanced web development.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="cred-section">
            <h3 className="section-title">SKILLS</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-percent">95%</span>
                <h4 className="skill-name">JavaScript, TypeScript & C#</h4>
                <p className="skill-desc">Programming Language</p>
              </div>
              <div className="skill-item">
                <span className="skill-percent">90%</span>
                <h4 className="skill-name">React, Next.js, Angular 18+ & Ionic</h4>
                <p className="skill-desc">Enterprise Frontends</p>
              </div>
              <div className="skill-item">
                <span className="skill-percent">90%</span>
                <h4 className="skill-name">Node.js,Dotnet</h4>
                <p className="skill-desc">Backend Services & APIs</p>
              </div>
              <div className="skill-item">
                <span className="skill-percent">80%</span>
                <h4 className="skill-name">PostgreSQL, msSql, MongoDB</h4>
                <p className="skill-desc">Database Design & Opt.</p>
              </div>
              <div className="skill-item">
                <span className="skill-percent">85%</span>
                <h4 className="skill-name">Firestore</h4>
                <p className="skill-desc">NoSQL & Realtime DB</p>
              </div>
              <div className="skill-item">
                <span className="skill-percent">95%</span>
                <h4 className="skill-name">TailwindCSS</h4>
                <p className="skill-desc">Responsive UI Styling</p>
              </div>
              <div className="skill-item">
                <span className="skill-percent">85%</span>
                <h4 className="skill-name">ORMs (Prisma, Drizzle)</h4>
                <p className="skill-desc">Type-safe queries</p>
              </div>
            </div>
          </ScrollReveal>

        </div>
        
      </div>
    </motion.div>
  );
}

export default Credentials;
