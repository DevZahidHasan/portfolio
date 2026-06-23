import React from 'react';
import './IconButton.css';

function IconButton({ className = '', ...props }) {
  return (
    <button className={`icon-button ${className}`} {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

export default IconButton;
