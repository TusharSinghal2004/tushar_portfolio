import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-grid">
          <motion.div 
            className="glass-panel experience"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="panel-title">My Approach & Expertise</h3>
            <div className="expertise-content">
              <p className="highlight-text">
                I am a partner in design and development, dedicated to making things look effective and ensuring your brand remains unique.
              </p>
              <ul className="expertise-list">
                <li><strong>Catalogue & Browsing:</strong> Crafting intuitive user journeys so customers can effortlessly browse catalogues and understand product value instantly.</li>
                <li><strong>Unique Brand Identity:</strong> Blending modern aesthetics with strong technical foundations to ensure your brand stands out in a crowded market.</li>
                <li><strong>End-to-End Solutions:</strong> Bringing ideas to life seamlessly using Web Design, Shopify, React, and modern tech stacks.</li>
              </ul>
            </div>

            <h3 className="panel-title" style={{ marginTop: '3rem' }}>Recent Work</h3>
            <div className="job">
              <div className="job-header">
                <h4>SaaS for Catering Businesses (CMS)</h4>
                <span className="date">Present</span>
              </div>
              <p>Currently building a robust Catering Management System designed to streamline operations, manage events, and handle client catalogs efficiently.</p>
            </div>
            <div className="job">
              <div className="job-header">
                <h4>Multi-Tenant CRM & Event Management SaaS</h4>
              </div>
              <p>Built a scalable SaaS CRM using React 19, Supabase (PostgreSQL), and TailwindCSS with Row-Level Security for per-tenant isolation.</p>
            </div>
            <div className="job">
              <div className="job-header">
                <h4>Freelance Full-Stack Developer</h4>
                <span className="date">May 2026 – Present</span>
              </div>
              <p>Design, develop, and deploy responsive full-stack apps for various live clients.</p>
            </div>
            <div className="job">
              <div className="job-header">
                <h4>Android Development Intern</h4>
                <span className="company">Netleon Technologies</span>
              </div>
              <p>Rebuilt real-time stock ticker and news feed rendering, cutting UI latency by 25%. Integrated 5+ financial APIs.</p>
            </div>
          </motion.div>

          <motion.div 
            className="glass-panel skills"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="panel-title">Technical Skills</h3>
            <div className="skills-category">
              <h5>Frontend & E-commerce</h5>
              <p>Web Design, React.js, Next.js, Shopify, WordPress</p>
            </div>
            <div className="skills-category">
              <h5>Languages</h5>
              <p>JavaScript, Python, SQL, Dart, C++, Java</p>
            </div>
            <div className="skills-category">
              <h5>Backend & APIs</h5>
              <p>Node.js, FastAPI, REST APIs, PostgreSQL</p>
            </div>
            <div className="skills-category">
              <h5>AI / ML</h5>
              <p>LLMs, RAG Architecture, LangChain, NLP, Scikit-Learn</p>
            </div>
          </motion.div>

          <motion.div 
            className="glass-panel education"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="panel-title">Education</h3>
            <div className="edu-item">
              <h4>Manipal University Jaipur</h4>
              <p>B.Tech, Computer and Communication Engineering</p>
              <span className="date">2022 – 2026</span>
              <p className="cgpa">CGPA: 8.47</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
