import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data/content';
import { rich } from '../lib/rich';
import '../styles/experience.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <div className="section-label">Professional Journey</div>
        <h2 className="section-title">
          Where I've <span className="accent">Built</span>
        </h2>
        <p className="section-subtitle">
          Payments and platform work at a transit-partnered mobility company, full-stack
          engineering in regulated healthcare, and a company I co-founded and still run.
        </p>
      </div>

      <div className="timeline">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={exp.company}
            className="timeline-item"
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="tc-header">
                <span className="tc-role">{exp.role}</span>
                <span className="tc-badge">{exp.badge}</span>
              </div>
              <div className="tc-company-row">
                <span className="tc-company">
                  {exp.companyUrl ? (
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                      {exp.company} ↗
                    </a>
                  ) : exp.company}
                </span>
                <span style={{ color: 'var(--border-bright)' }}>·</span>
                <span className="tc-location">{exp.location}</span>
              </div>
              <div className="tc-period">
                {exp.period}
                {exp.note && <span className="tc-note"> · {exp.note}</span>}
              </div>
              <ul className="tc-achievements">
                {exp.achievements.map((a, j) => (
                  <li key={j}>{rich(a)}</li>
                ))}
              </ul>
              <div className="tc-tags">
                {exp.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
