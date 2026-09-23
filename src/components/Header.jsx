import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="header-container">
        <a href="/" className="logo">
          <span className="logo-text">TS</span>
        </a>
        
        <nav className="nav-desktop">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
          
          <div className="energy-pill" onClick={toggleTheme}>
            <span className="energy-label">Energy usage</span>
            <div className="energy-tag-parent">
              <span className={`energy-tag ${theme === 'light' ? 'active' : ''}`}>High</span>
              <span className={`energy-tag ${theme === 'dark' ? 'active' : ''}`}>Low</span>
            </div>
          </div>
        </nav>

        <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#about" className="mobile-link" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" className="mobile-link" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact</a>
            <div className="mobile-energy" onClick={toggleTheme}>
              <span>Dark Mode</span>
              <div className={`theme-switch ${theme}`}>
                <div className="switch-thumb"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
