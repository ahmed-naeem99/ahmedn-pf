import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { PROFILE } from '../data/content';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className="contact-header">
          <div className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</div>
          <h2 className="section-title">
            Let's <span className="accent">Connect</span>
          </h2>
          <p className="contact-tagline">
            I'm looking for a Summer 2027 software engineering internship, and I'm always
            happy to talk about payments, real-time systems, or transit data with anyone
            who finds those as interesting as I do.
          </p>
        </div>

        <a href={`mailto:${PROFILE.email}`} className="contact-email-display">
          <FaEnvelope />
          {PROFILE.email}
        </a>

        <div className="contact-actions">
          <motion.a
            href={`mailto:${PROFILE.email}`}
            className="btn btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Send an Email
          </motion.a>
          <motion.a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Resume (software)
          </motion.a>
        </div>

        <div className="contact-resumes">
          <a href={PROFILE.resumeData} target="_blank" rel="noopener noreferrer" className="contact-alt-link">
            Also available: data engineering resume ↗
          </a>
        </div>

        <div className="contact-socials">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-btn"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-btn"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        <div className="portfolio-footer">
          <div className="footer-name">AN</div>
          <div className="footer-copy">© 2026 Ahmed Naeem · Built with React + Framer Motion · Toronto, ON</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
