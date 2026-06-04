import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';

const STATS = [
  { number: '2+', label: 'Years Coding' },
  { number: '10+', label: 'Projects' },
  { number: '3', label: 'Internships' },
  { number: '15+', label: 'Technologies' },
  { number: '10K+', label: 'Users' },
  { number: '1', label: 'Startup' },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-layout">
        <div>
          <div className="about-header">
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Builder at <span className="accent">Core</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              I'm <strong>Ahmed Naeem</strong>, a computer science student at{' '}
              <strong>Toronto Metropolitan University</strong> and the{' '}
              <strong>Co-Founder & Lead Engineer at Yusr Funeral Financial Aid</strong> — a
              self-hosted SaaS platform serving the Canadian Muslim community.
            </p>
            <p>
              My work spans <strong>full-stack web development</strong>,{' '}
              <strong>AI/LLM systems</strong>, and <strong>containerized infrastructure</strong>.
              I've built private vision LLMs for OCR, n8n automation pipelines, and quantitative
              finance tools — all while shipping products that real people depend on.
            </p>
            <p>
              I believe the best engineering is invisible: systems so solid they just work,
              interfaces so intuitive users don't notice them.
            </p>
          </div>

          <div className="edu-card">
            <div className="edu-label">Education</div>
            <div className="edu-school">Toronto Metropolitan University</div>
            <div className="edu-program">Honours BSc, Computer Science</div>
            <div className="edu-period">Expected Graduation: May 2029 · Toronto, ON</div>
            <div className="edu-courses">
              {['Python', 'Java', 'Data Structures', 'Web Security', 'DB Systems', 'Discrete Math'].map((c) => (
                <span key={c} className="tag">{c}</span>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="about-hex-grid">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="hex-stat"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                <div className="hex-stat-number">{s.number}</div>
                <div className="hex-stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
