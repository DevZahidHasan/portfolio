import React from 'react';
import './ContactCard.css';
import IconButton from '../ui/IconButton';

function ContactCard() {
  return (
    <div className="contact-card card flex-between">
      <div>
        <h2 className="contact-title">
          Let's<br/>
          work <span>together.</span>
        </h2>
      </div>
      <IconButton />
      
      {/* Decorative sparkle */}
      <svg className="sparkle" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
      </svg>
    </div>
  );
}

export default ContactCard;
