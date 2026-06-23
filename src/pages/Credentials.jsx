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
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
            
            <button className="contact-btn">Contact Me</button>
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
                Developing robust ERP solutions such as BOG PRO (Holcim Limited) and Banking ERP (CCULB). Focused on delivering high-performance full-stack features, inventory control modules, and intuitive admin dashboards.
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
