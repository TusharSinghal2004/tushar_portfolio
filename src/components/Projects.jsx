import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    industry: 'Food',
    name: 'Munch N Gut',
    url: 'munchngut.com',
    image: null,
    description: 'Health and wellness food brand emphasizing organic visuals and a clean, modern layout.'
  },
  {
    industry: 'Jewellery',
    name: 'Jewels Sphere',
    url: 'jewelssphere.com',
    image: '/images/jewelssphere.png',
    description: 'A gemstone and jewellery storefront with a detailed, easy-to-explore product catalog.'
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
    description: 'A corporate website presenting global logistics, procurement, and supply chain services.'
  },
  {
    industry: 'React',
    name: 'Desirelytics',
    url: 'desirelytics.com',
    image: '/images/desirelytics.png',
    description: 'A digital marketing website presenting SEO services and an approach to organic growth.'
  },
  {
    industry: 'Agency',
    name: 'Digital Clicks Lucknow',
    url: 'digitalclickslucknow.com',
    image: '/images/digitalclickslucknow.png',
    description: 'A digital agency website showcasing marketing services for businesses.'
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
  const categories = ['All', 'Food', 'Jewellery', 'Fashion', 'React', 'Agency'];
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
            <p className="projects-intro">A selection of storefronts and websites, built around each brand.</p>
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
                aria-pressed={filter === cat}
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
                    <div className="project-browser-bar" aria-hidden="true"><span className="browser-controls"><i /><i /><i /></span><span>{project.url}</span></div>
                    <div className="poster-parent">
                      {project.image ? (
                        <img src={project.image} alt={`${project.name} website screenshot`} className="poster-src" loading="lazy" decoding="async" width="1440" height="1000" />
                      ) : (
                        <div className="project-preview-pending"><strong>{project.name}</strong><span>Website preview coming soon</span></div>
                      )}
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
