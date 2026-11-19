import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 1.25 + delay },
  });

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-text-wrapper">
          <motion.p className="hero-eyebrow" {...reveal()}>Tushar Singhal / Developer &amp; Designer</motion.p>
          <motion.h1 id="hero-title" className="hero-title" {...reveal(0.1)}>
            Websites with<br />
            <span>purpose.</span><br />
            Built for you.
          </motion.h1>
          <motion.p className="hero-slogan" {...reveal(0.2)}>
            I turn your brand into a thoughtful digital experience — from distinctive storefronts to custom web applications.
          </motion.p>
          <motion.div className="hero-actions" {...reveal(0.3)}>
            <a href="#projects" className="btn_pm">Explore my work</a>
            <a href="#contact" className="hero-contact-link">Let's talk</a>
          </motion.div>
          <motion.div className="hero-specialties" {...reveal(0.4)}>
            <span>Design &amp; development</span><span>E-commerce</span><span>React</span>
          </motion.div>
        </div>

        <motion.div className="hero-showcase" {...reveal(0.25)}>
          <div className="hero-showcase-heading"><span>A few things I've built</span><a href="#projects">View projects</a></div>
          <a className="hero-featured" href="https://aeromarus.com" target="_blank" rel="noreferrer" aria-label="Visit the Aeromar website">
            <div className="hero-browser"><span className="hero-browser-dots" aria-hidden="true"><i /><i /><i /></span><span>aeromarus.com</span></div>
            <img src="/images/aeromarus.png" alt="Aeromar global logistics website" width="1917" height="865" fetchPriority="high" />
            <div className="hero-project-caption"><strong>Aeromar</strong><span>Corporate website</span></div>
          </a>
          <div className="hero-secondary-projects">
            <a className="hero-project-small" href="https://jewelssphere.com" target="_blank" rel="noreferrer">
              <img src="/images/jewelssphere.png" alt="Jewels Sphere gemstone storefront" width="1440" height="1000" />
              <div className="hero-project-caption"><strong>Jewels Sphere</strong><span>E-commerce</span></div>
            </a>
            <a className="hero-project-small" href="https://priyancakhanna.com" target="_blank" rel="noreferrer">
              <img src="/images/priyancakhanna.png" alt="Priyanca Khanna fashion storefront" width="1911" height="869" />
              <div className="hero-project-caption"><strong>Priyanca Khanna</strong><span>Fashion</span></div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
