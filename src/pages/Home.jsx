import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../utils/animations';
import GridContainer from '../components/GridContainer';

function Home() {
  return (
    <motion.div 
      className="home-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <GridContainer />
    </motion.div>
  );
}

export default Home;
