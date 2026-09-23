import React from 'react';
import { motion } from 'framer-motion';
import './Quote.css';

const Quote = () => {
  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  const imgPop = (delay) => ({
    initial: { opacity: 0, scale: 0.7 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section className="quote-section">
      <div className="container">

        {/* Desktop */}
        <div className="quote-line-parent desktop-quote">
          <motion.div className="quote-line" {...fadeUp(0)}>
            <p className="quote-text">I build apps</p>
            <motion.div className="quote-img-parent" {...imgPop(0.15)}>
              <img src="/images/cutelemons.png" alt="" className="quote-img" />
            </motion.div>
            <p className="quote-text">using React</p>
          </motion.div>

          <motion.div className="quote-line" {...fadeUp(0.12)}>
            <p className="quote-text">and scalable stores</p>
            <motion.div className="quote-img-parent" {...imgPop(0.25)}>
              <img src="/images/munchngut_mockup_1789980943975.png" alt="" className="quote-img" />
            </motion.div>
            <p className="quote-text">on</p>
          </motion.div>

          <motion.div className="quote-line" {...fadeUp(0.24)}>
            <p className="quote-text">Shopify,</p>
            <motion.div className="quote-img-parent" {...imgPop(0.35)}>
              <img src="/images/digitalclicks_mockup_1789980958212.png" alt="" className="quote-img" />
            </motion.div>
            <p className="quote-text">designed</p>
          </motion.div>

          <motion.div className="quote-line" {...fadeUp(0.36)}>
            <p className="quote-text">to perform</p>
            <motion.div className="quote-img-parent" {...imgPop(0.45)}>
              <img src="/images/ramoe_mockup_1789980701018.png" alt="" className="quote-img" />
            </motion.div>
            <p className="quote-text">perfectly.</p>
          </motion.div>
        </div>

        {/* Mobile */}
        <div className="quote-line-parent mobile-quote">
          <motion.div className="quote-line" {...fadeUp(0)}><p className="quote-text">I build apps</p></motion.div>
          <motion.div className="quote-line" {...fadeUp(0.1)}>
            <p className="quote-text">using</p>
            <div className="quote-img-parent"><img src="/images/cutelemons.png" alt="" className="quote-img" /></div>
            <p className="quote-text">React</p>
          </motion.div>
          <motion.div className="quote-line" {...fadeUp(0.2)}><p className="quote-text">and stores on</p></motion.div>
          <motion.div className="quote-line" {...fadeUp(0.3)}>
            <div className="quote-img-parent"><img src="/images/munchngut_mockup_1789980943975.png" alt="" className="quote-img" /></div>
            <p className="quote-text">Shopify,</p>
          </motion.div>
          <motion.div className="quote-line" {...fadeUp(0.4)}><p className="quote-text">designed to</p></motion.div>
          <motion.div className="quote-line" {...fadeUp(0.5)}>
            <p className="quote-text">perform</p>
            <div className="quote-img-parent"><img src="/images/ramoe_mockup_1789980701018.png" alt="" className="quote-img" /></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Quote;
