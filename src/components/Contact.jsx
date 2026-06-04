import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
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
            Open to software engineering roles, interesting projects, and collaborations.
            Whether you want to build something great or just talk tech — my inbox is open.
          </p>
        </div>

        <a href="mailto:ahmednumber10@gmail.com" className="contact-email-display">
          <FaEnvelope />
          ahmednumber10@gmail.com
        </a>

        <div className="contact-actions">
          <motion.a
            href="mailto:ahmednumber10@gmail.com"
            className="btn btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Send an Email
          </motion.a>
          <motion.a
            href="/Ahmed Naeem Resume - Software copy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Download Resume
          </motion.a>
        </div>

        <div className="contact-socials">
          <a
            href="https://github.com/ahmed-naeem99"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-btn"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-abdullah-naeem"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-btn"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        <div className="portfolio-footer">
          <div className="footer-name">AN</div>
          <div className="footer-copy">© 2025 Ahmed Naeem · Built with React + Framer Motion</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
