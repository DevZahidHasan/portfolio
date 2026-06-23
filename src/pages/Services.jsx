import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../utils/animations';
import ScrollReveal from '../components/ui/ScrollReveal';
import './Services.css';

function Services() {
  return (
    <motion.div 
      className="services-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="srv-layout">
        
        {/* Sidebar Menu */}
        <div className="srv-sidebar">
          <ScrollReveal className="card srv-menu-card" delay={0.1}>
            <div className="srv-menu-list">
              <div className="srv-menu-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                </svg>
                <span>FRONTEND DEVELOPMENT</span>
              </div>
              <div className="srv-menu-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                <span>BACKEND APIS</span>
              </div>
              <div className="srv-menu-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span>ENTERPRISE ERP</span>
              </div>
              <div className="srv-menu-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <span>FULL-STACK APPS</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Main Content */}
        <div className="srv-main">
          
          {/* Header */}
          <ScrollReveal delay={0.2} className="srv-header">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="header-star">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
            </svg>
            <h1 className="title">MY OFFERINGS</h1>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="header-star">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
            </svg>
          </ScrollReveal>

          {/* Grid */}
          <div className="srv-grid">
            
            <ScrollReveal delay={0.3} className="card srv-card">
              <h3 className="srv-card-title">FRONTEND DEVELOPMENT</h3>
              <p className="srv-card-desc">
                Crafting pixel-perfect, highly responsive user interfaces using React, Next.js, and Angular. Focused on delivering premium aesthetics and smooth Framer Motion animations.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="card srv-card">
              <h3 className="srv-card-title">BACKEND APIS</h3>
              <p className="srv-card-desc">
                Designing robust, secure, and scalable RESTful APIs using Node.js and PostgreSQL. Ensuring fast data retrieval, secure authentication, and seamless third-party integrations.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5} className="card srv-card">
              <h3 className="srv-card-title">ENTERPRISE ERP SOLUTIONS</h3>
              <p className="srv-card-desc">
                Building complex, data-heavy enterprise resource planning systems (like Holcim BOG PRO). Expertise in inventory control, admin dashboards, and reporting tools.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.6} className="card srv-card">
              <h3 className="srv-card-title">FULL-STACK WEB APPS</h3>
              <p className="srv-card-desc">
                End-to-end web application development from database design to UI implementation. Delivering performant, production-ready applications tailored to solve unique business problems.
              </p>
            </ScrollReveal>

          </div>
        </div>
        
      </div>
    </motion.div>
  );
}

export default Services;
