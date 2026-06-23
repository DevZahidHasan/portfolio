import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

function ScrollReveal({ children, delay = 0, className = '', style = {} }) {
  // Randomly assign direction: -1 (left) or 1 (right)
  const dir = useMemo(() => (Math.random() > 0.5 ? -1 : 1), []);
  
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 50, x: 50 * dir }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
