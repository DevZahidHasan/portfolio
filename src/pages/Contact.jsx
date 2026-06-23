import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../utils/animations';
import ScrollReveal from '../components/ui/ScrollReveal';
import './Contact.css';

function Contact() {
  return (
    <motion.div 
      className="contact-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="contact-layout">
        
        {/* Left Sidebar Info */}
        <div className="contact-sidebar">
          
          <ScrollReveal delay={0.1}>
            <h3 className="contact-heading">CONTACT INFO</h3>
            
            <div className="info-block">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="info-text">
                <span className="info-label">MAIL US</span>
                <span className="info-value">zahidhasan19932023@gmail.com</span>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="info-text">
                <span className="info-label">CONTACT US</span>
                <span className="info-value">+8801855520123</span>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="info-text">
                <span className="info-label">LOCATION</span>
                <span className="info-value">Dhaka, Bangladesh</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} style={{ marginTop: '3rem' }}>
            <h3 className="contact-heading">SOCIAL INFO</h3>
            
            <div className="social-icons">
              <a href="https://github.com/DevZahidHasan" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/zahid-hasan-2434a0279/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://www.facebook.com/zahid.hasan.437885/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </ScrollReveal>

        </div>

        {/* Right Form Container */}
        <ScrollReveal delay={0.3} className="contact-form-container card">
          <div className="contact-form-header">
            <h2>Let's work <span>together.</span></h2>
            <svg className="sparkle-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Name *" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email *" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Your Subject *" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message *" rows="6" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </ScrollReveal>
        
      </div>
    </motion.div>
  );
}

export default Contact;
