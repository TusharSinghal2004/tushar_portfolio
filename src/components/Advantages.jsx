import React from 'react';
import { motion } from 'framer-motion';
import './Advantages.css';

const cards = [
  {
    id: '01',
    label: 'Web Design',
    fact: '7+ live client websites',
    description: 'Crafting intuitive browsing experiences so users can explore catalogues and fall in love with your brand instantly.',
  },
  {
    id: '02',
    label: 'Brand Identity',
    fact: 'Unique aesthetics, every time',
    description: 'I make sure each brand stands out with a distinct visual language — no cookie-cutter templates.',
  },
  {
    id: '03',
    label: 'Full-Stack Development',
    fact: 'React · Shopify · WordPress',
    description: 'From custom React apps to high-converting Shopify stores, I build end-to-end solutions that perform.',
  },
];

const Advantages = () => {
  return (
    <section className="advantages-section">
      <div className="container">
        <div className="advantages-title-wrap">
          <motion.h2
            className="advantages-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            What I bring
          </motion.h2>
          <motion.h2
            className="advantages-title faded"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            to the table
          </motion.h2>
        </div>

        <div className="cards-list">
          {cards.map((card, i) => (
            <motion.div
              className="advantage-card"
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="card-inner">
                <div className="card-top">
                  <div className="card-descriptor">
                    <div className="card-dot"></div>
                    <span className="card-label">{card.label}</span>
                  </div>
                  <div className="card-fact">
                    <p>{card.fact}</p>
                  </div>
                </div>
                <p className="card-description">{card.description}</p>
                <span className="card-id">{card.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
