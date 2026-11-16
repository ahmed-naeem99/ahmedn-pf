import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, CERTS } from '../data/content';
import '../styles/skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <div className="section-label">Technical Arsenal</div>
        <h2 className="section-title">
          Skills &amp; <span className="accent">Stack</span>
        </h2>
        <p className="section-subtitle">
          No percentage bars. These are the tools I've shipped production systems with,
          and what I used each of them for.
        </p>
      </div>

      <div className="skills-layout">
        {SKILLS.map((cat, i) => (
          <motion.div
            key={cat.name}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <div className="skill-category-header">
              <span className="skill-category-icon">{cat.icon}</span>
              <div>
                <div className="skill-category-name">{cat.name}</div>
                <div className="skill-category-sub">{cat.sub}</div>
              </div>
            </div>
            <div className="skill-items">
              {cat.items.map((s) => (
                <span key={s} className="tag skill-pill">{s}</span>
              ))}
            </div>
            <p className="skill-note">{cat.note}</p>
          </motion.div>
        ))}
      </div>

      <div className="certs-section">
        <div className="certs-title">Certifications</div>
        <div className="certs-grid">
          {CERTS.map((cert) => (
            <motion.div
              key={cert.name}
              className="cert-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="cert-icon">{cert.icon}</span>
              <div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
