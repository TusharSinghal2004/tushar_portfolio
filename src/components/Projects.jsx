import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    industry: 'Food',
    name: 'Munch N Gut',
    url: 'munchngut.com',
    image: '/images/munchngut_mockup_1789980943975.png',
    description: 'Health and wellness food brand emphasizing organic visuals and a clean, modern layout.'
  },
  {
    industry: 'Jewellery',
    name: 'Intl Gems Inc',
    url: '#',
    image: '/images/intlgems_mockup_1789982652525.png',
    description: 'Luxurious and elegant e-commerce experience for a premium jewellery and diamond brand.'
  },
  {
    industry: 'Fashion',
    name: 'Priyanca Khanna',
    url: 'priyancakhanna.com',
    image: '/images/priyancakhanna.png',
    description: 'Sophisticated designer portfolio and store showcasing exclusive collections.'
  },
  {
    industry: 'Fashion',
    name: 'Cute Lemons',
    url: 'cutelemons.in',
    image: '/images/cutelemons.png',
    description: 'Vibrant and playful e-commerce brand with a fresh, modern aesthetic.'
  },
  {
    industry: 'React',
    name: 'Aeromar',
    url: 'aeromarus.com',
    image: '/images/aeromarus.png',
    description: 'A premium informational React website for a modern tech company, built for high performance and sleek interactions.'
  },
  {
    industry: 'React',
    name: 'Desirelytics',
    url: 'desirelytics.com',
    image: '/images/desirelytics.png',
    description: 'Informational analytics dashboard interface with a modern glassmorphism UI built in React.'
  }
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Food', 'Jewellery', 'Fashion', 'React'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.industry === filter);

  return (
    <section id="projects" className="product-section">
      <div className="container">

        <div className="projects-header">
          <div className="projects-title-wrap">
            <motion.h2
              className="section-title"
              {...fadeUp(0)}
              style={{ marginBottom: 0 }}
            >
              Selected Works
            </motion.h2>
          </div>

          <motion.div
            className="filter-buttons"
            {...fadeUp(0.1)}
          >
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="product-collection">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                className="product-card-container"
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                layout
              >
                <div className="product-card-parent">
                  <div className="product-card-model-viewer">
                    <div className="poster-parent">
                      <img src={project.image} alt={project.name} className="poster-src" />
                    </div>
                  </div>
                  <div className="product-card-info">
                    <div className="product-card-info-right">
                      <div className="product-card-label">
                        <p className="product-card-name">{project.name}</p>
                        <div className="product-card-price-parent">
                          <p className="product-card-price-text">{project.industry}</p>
                        </div>
                      </div>
                      <div className="product-card-description">
                        <p>{project.description}</p>
                      </div>
                    </div>
                    <div className="product-card-info-left">
                      <a href={`https://${project.url}`} target="_blank" rel="noreferrer" className="btn_sc">
                        Visit Site
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
