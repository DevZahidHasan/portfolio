import React from 'react';
import './IconButton.css';

function IconButton({ className = '', ...props }) {
  return (
    <button className={`icon-button ${className}`} {...props}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'all var(--transition-speed) ease' }}>
        {/* Precise partial circle with tight gap */}
        <path className="icon-circle" d="M 10.3 21 A 14 14 0 1 1 10.3 27" stroke="currentColor" opacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
        {/* Horizontal line entering the gap */}
        <path className="icon-line" d="M 4 24 L 18 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Sharp bezier sparkle at the center */}
        <path className="icon-star" d="M 24 18 C 24 22 22 24 18 24 C 22 24 24 26 24 30 C 24 26 26 24 30 24 C 26 24 24 22 24 18 Z" fill="currentColor" />
      </svg>
    </button>
  );
}

export default IconButton;
