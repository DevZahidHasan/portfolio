import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Credentials from './pages/Credentials';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Projects />} />
        <Route path="/works/:id" element={<ProjectDetails />} />
        <Route path="/credentials" element={<Credentials />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
