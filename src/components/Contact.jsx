import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-content">
            <motion.h2 className="contact-title" {...fadeUp(0)}>
              Ready to start a project?
            </motion.h2>
            <motion.p className="contact-text" {...fadeUp(0.1)}>
              Whether you need a new website, a custom web app, or just want to say hi, my inbox is always open. Let's create something great together.
            </motion.p>
            <motion.div className="contact-actions" {...fadeUp(0.2)}>
              <a href="mailto:singhalworks@gmail.com" className="btn_pm contact-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Email me at singhalworks@gmail.com
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
