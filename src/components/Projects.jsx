import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { PROJECTS, PROFILE } from '../data/content';
import { rich } from '../lib/rich';
import Schematic from './Schematic';
import '../styles/projects.css';

const FEATURED = PROJECTS.filter((p) => p.featured);

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const Preview = ({ project }) =>
  project.image ? (
    <img src={project.image} alt={project.title} />
  ) : (
    <Schematic steps={project.schematic} icon={project.icon} />
  );

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-container"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <FaTimes size={14} />
          </button>

          <div className="modal-header-img">
            <Preview project={project} />
          </div>

          <div className="modal-body">
            <div className="modal-type">{project.type}</div>
            <h2 className="modal-title">{project.title}</h2>
            <div className="modal-year">{project.year}</div>
            <p className="modal-desc">{project.longDesc}</p>

            <div className="modal-section-title">What it does</div>
            <ul className="modal-features">
              {project.features.map((f, i) => (
                <li key={i}>{rich(f)}</li>
              ))}
            </ul>

            <div className="modal-section-title">Tech Stack</div>
            <div className="modal-tags">
              {project.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {(project.github || project.live) && (
              <div className="modal-actions">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <FaGithub style={{ marginRight: '0.4rem' }} />
                    Source
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <FaExternalLinkAlt style={{ marginRight: '0.4rem' }} />
                    Open it
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="projects" className="projects-section">
        <div className="projects-header">
          <div className="section-label">Selected Work</div>
          <h2 className="section-title">
            What I've <span className="accent">Built</span>
          </h2>
          <p className="section-subtitle">
            Real-time systems, ML data pipelines, and platforms with people depending on
            them. Click any card for the full story.
          </p>
        </div>

        <div className="projects-grid projects-grid--three">
          {FEATURED.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, margin: '-50px' }}
              onClick={() => setSelected(project)}
            >
              <span className="project-number">{String(i + 1).padStart(2, '0')}</span>

              <div className="project-preview">
                <Preview project={project} />
                <div className="project-overlay">
                  <span className="project-overlay-text">View Details →</span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className="project-type">{project.type}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.slice(0, 4).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="tag">+{project.tags.length - 4}</span>
                  )}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: 'center', marginTop: '3.5rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <FaGithub />
            See everything on GitHub
          </a>
        </motion.div>
      </section>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
};

export default Projects;
