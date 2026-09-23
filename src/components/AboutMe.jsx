import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

const AboutMe = () => {
  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section id="about-me" className="about-me-section">
      <div className="container">
        <div className="about-me-layout">

          {/* Left: Portrait */}
          <motion.div className="about-me-portrait" {...fadeUp(0)}>
            <div className="portrait-frame">
              <img 
                src="/images/tushar_singhal.jpg" 
                alt="Tushar Singhal" 
                className="portrait-img"
              />
            </div>
          </motion.div>

          {/* Right: Text content */}
          <div className="about-me-text">
            <motion.h2 className="about-me-title" {...fadeUp(0)}>
              A few words
            </motion.h2>
            <motion.h2 className="about-me-title faded" {...fadeUp(0.1)}>
              about myself
            </motion.h2>

            <motion.p className="about-me-body" {...fadeUp(0.15)}>
              Hey, I'm <strong>Tushar Singhal</strong> — a full-stack developer and designer based in Jaipur, Rajasthan. I'm currently finishing up my B.Tech at Manipal University Jaipur, but I've been building for real clients since long before graduation.
            </motion.p>

            <motion.p className="about-me-body" {...fadeUp(0.25)}>
              I'm not just a developer — I'm a partner. I sit at the intersection of design and technology, which means I don't just write code, I think about how your brand <em>feels</em> when someone lands on it. I obsess over making catalogues effortless to browse, ensuring every page tells a story, and making sure your identity stays unique in a sea of template websites.
            </motion.p>

            <motion.p className="about-me-body" {...fadeUp(0.35)}>
              Right now, I'm working on a SaaS product for the catering industry — a complete Catering Management System. Outside of that, I've shipped websites across fashion, food, jewellery, and tech. Every project teaches me something new, and I bring that experience to the next one.
            </motion.p>

            <motion.div className="about-me-stats" {...fadeUp(0.45)}>
              <div className="stat-item">
                <span className="stat-number">7+</span>
                <span className="stat-label">Live websites</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Industries served</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1</span>
                <span className="stat-label">SaaS in progress</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
