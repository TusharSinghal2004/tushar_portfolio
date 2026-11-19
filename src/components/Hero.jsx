import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  });

  const imgFade = (delay) => ({
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text-wrapper">
          <motion.h1 className="title-line" {...fadeUp(1.3)}>
            I build websites
          </motion.h1>
          <motion.h1 className="title-line text-fade stagger-1" {...fadeUp(1.45)}>
            that are modern,
          </motion.h1>
          <motion.h1 className="title-line text-fade stagger-2" {...fadeUp(1.6)}>
            and dynamic, to
          </motion.h1>
          <motion.h1 className="title-line text-fade stagger-3" {...fadeUp(1.75)}>
            fit your brand
          </motion.h1>
          
          <motion.p className="hero-slogan" {...fadeUp(2.0)}>
            Full-Stack Developer &amp; Designer
          </motion.p>
          <motion.div className="hero-actions" {...fadeUp(2.1)}>
            <a href="#projects" className="btn_pm">Explore my work</a>
            <a href="#contact" className="btn_sc">Let's talk</a>
          </motion.div>
        </div>

        <div className="hero-image-grid">
          <motion.div className="hero-img pos-1" {...imgFade(1.5)}>
            <img src="/images/aeromarus.png" alt="Aeromar" />
          </motion.div>
          <motion.div className="hero-img pos-2" {...imgFade(1.7)}>
            <img src="/images/desirelytics.png" alt="Desirelytics" />
          </motion.div>
          <motion.div className="hero-img pos-3" {...imgFade(1.9)}>
            <img src="/images/jewelssphere.png" alt="Jewels Sphere website" />
          </motion.div>
          <motion.div className="hero-img pos-4" {...imgFade(2.1)}>
            <img src="/images/priyancakhanna.png" alt="Priyanca Khanna" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
