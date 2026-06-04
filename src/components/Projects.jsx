import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import '../styles/projects.css';

const PROJECTS = [
  {
    id: 1,
    title: 'AI Stock Investment Strategist Agent',
    type: 'AI / Quantitative Finance',
    year: '2024',
    desc: 'A quantitative analysis tool using Python to aggregate and interpret complex financial datasets. Implements statistical algorithms to automate risk assessment and generate actionable investment insights.',
    longDesc: 'Built a fully automated investment strategist that ingests real-time and historical market data, processes it with statistical models, and generates structured buy/sell/hold signals. The system leverages Pandas and NumPy for data pipelines and uses algorithmic approaches to portfolio risk management.',
    features: [
      <>Developed quantitative analysis pipelines using <strong>Python (Pandas, NumPy)</strong> to aggregate complex financial datasets</>,
      <>Implemented statistical algorithms for automated <strong>risk assessment</strong> and portfolio optimization</>,
      <>Generated actionable investment insights through <strong>algorithmic signal processing</strong></>,
      <>Integrated <strong>yfinance</strong> for real-time market data ingestion and backtesting workflows</>,
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'yfinance', 'Data Analysis', 'Algorithms'],
    github: 'https://github.com/ahmed-naeem99/personal-ai-stock-analyst',
    image: '/assets/pj-stock.png',
    icon: '📈',
  },
  {
    id: 2,
    title: 'NASA FIRMS Fire Tracker Alert System',
    type: 'Data Engineering / Geospatial',
    year: '2024',
    desc: 'An automated data ingestion pipeline processing live satellite feeds (JSON) from NASA FIRMS to feed a real-time hazard detection system with 96% accuracy geospatial filtering.',
    longDesc: 'Designed and built an end-to-end pipeline that consumes live NASA FIRMS satellite fire data, processes it through a custom geospatial proximity algorithm, and identifies high-priority wildfire threat zones. The system filters noise with 96% accuracy and generates real-time hazard alerts.',
    features: [
      <>Developed an automated <strong>data ingestion pipeline</strong> processing live satellite feeds (JSON) from NASA FIRMS API</>,
      <>Designed a <strong>geospatial proximity algorithm</strong> in Python to filter noise and identify high-priority threat zones</>,
      <>Achieved <strong>96% accuracy</strong> in wildfire threat zone classification</>,
      <>Built real-time <strong>hazard detection system</strong> feeding alert notifications on fire events</>,
    ],
    tags: ['Python', 'NASA FIRMS API', 'Geospatial', 'Data Pipelines', 'JSON'],
    github: 'https://github.com/ahmed-naeem99/Out-of-this-World',
    image: '/assets/pj-nasa.png',
    icon: '🔥',
  },
  {
    id: 3,
    title: 'Augmented Reality Quest (ARG)',
    type: 'Full-Stack / Game Platform',
    year: 'Feb 2025',
    desc: 'Interactive alternate reality game platform blending digital and physical worlds. Delivered seamless in-game experiences to 150+ concurrent users with secure JWT auth, AWS S3, and 1,500+ API queries/day.',
    longDesc: 'Built a full-stack ARG (Alternate Reality Game) platform that bridges physical and digital puzzle experiences. The platform handles real-time user state management, secure authentication, file storage, and a RESTful backend capable of high query throughput. Demoed at a university hackathon with 150+ simultaneous players.',
    features: [
      <>Delivered seamless experiences to <strong>150+ concurrent users</strong> with real-time state sync</>,
      <>Implemented secure <strong>NextAuth JWT</strong> authentication with session management</>,
      <>Integrated <strong>AWS S3</strong> for scalable media storage and delivery</>,
      <>Built a <strong>RESTful API</strong> handling 1,500+ queries/day for game state and user tasks</>,
      <>Designed cross-platform puzzle mechanics bridging <strong>physical and digital</strong> worlds</>,
    ],
    tags: ['React', 'Node.js', 'Neon DB', 'Firebase', 'NextAuth', 'AWS S3', 'REST API'],
    github: 'https://github.com/ahmed-naeem99/IAW25-ARG',
    image: '/assets/pj-arg.png',
    icon: '🎮',
  },
  {
    id: 4,
    title: 'Yusr Funeral Financial Aid Platform',
    type: 'SaaS / CRM',
    year: 'Jan 2024 – Present',
    desc: 'Self-hosted funeral financial assistance platform with containerized CRM, vision LLM for OCR, and n8n automation pipelines. Serving the Muslim community across Canada.',
    longDesc: 'As co-founder and lead engineer, built the entire technical stack: a Next.js 15 frontend with PostgreSQL/Prisma backend, self-hosted on Hetzner with Docker Compose and Coolify. Added AI-powered ID document processing with a private FastAPI + Ollama (Qwen2-VL) service for OCR, and automated all back-office workflows with n8n.',
    features: [
      <>Self-hosted <strong>containerized CRM</strong> on Hetzner VPS using Docker Compose and Coolify</>,
      <>Private <strong>FastAPI + Ollama (Qwen2-VL)</strong> OCR service for ID document processing</>,
      <><strong>n8n</strong> automation connecting Stripe webhooks, Resend, and Mailchimp</>,
      <><strong>Next.js 15 + PostgreSQL/Prisma</strong> with magic-link JWT and cron jobs</>,
    ],
    tags: ['Next.js 15', 'FastAPI', 'Docker', 'Ollama', 'n8n', 'PostgreSQL', 'Prisma', 'Stripe'],
    live: 'https://yusr.ca',
    image: '/assets/pj-yusr.png',
    icon: '🕌',
  },
  {
    id: 5,
    title: 'Reality Quest – Muslim Fest ARG',
    type: 'Event / Interactive Experience',
    year: '2024',
    desc: 'A large-scale alternate reality game experience built for Muslim Fest. Players solved puzzles combining physical clues and digital challenges across the event grounds.',
    longDesc: 'Designed and built the technical infrastructure for a Muslim Fest event-wide ARG experience. Players received physical QR codes and digital clues that led them through a multi-stage puzzle narrative combining React web interfaces, real-time leaderboards, and Firebase for user state.',
    features: [
      <>Built a <strong>multi-stage puzzle platform</strong> for a large-scale event</>,
      <>React + Firebase for <strong>real-time leaderboards</strong> and player state</>,
      <>Designed QR-code-triggered puzzle flows with <strong>time-gated progression</strong></>,
    ],
    tags: ['React', 'Firebase', 'Node.js', 'QR Integration'],
    github: 'https://github.com/ahmed-naeem99/rq-muslimfest',
    image: null,
    icon: '🧩',
  },
  {
    id: 6,
    title: 'AI Magic Trick',
    type: 'AI / Interactive Web',
    year: 'Mar 2025',
    desc: 'Web-based magic experience with an AI prediction engine that reads minds. Built with React + Flask for the real-time card selection and prediction system.',
    longDesc: 'An interactive web magic trick where users think of a card, and the AI "reads their mind" using a prediction algorithm built in Flask. The experience is designed to feel genuinely magical, with a smooth React frontend that guides the user through the illusion.',
    features: [
      <><strong>React</strong> frontend with smooth animated card selection interface</>,
      <><strong>Flask</strong> backend powering the AI prediction engine</>,
      <>Real-time prediction with seamless <strong>API communication</strong></>,
    ],
    tags: ['React', 'Flask', 'Python', 'AI/ML'],
    github: 'https://github.com/ahmed-naeem99/Magic-Trick',
    image: null,
    icon: '🪄',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

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
          <button className="modal-close" onClick={onClose}>
            <FaTimes size={14} />
          </button>

          <div className="modal-header-img">
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <div className="modal-header-img-fallback">
                <span style={{ position: 'relative', zIndex: 1 }}>{project.icon}</span>
              </div>
            )}
          </div>

          <div className="modal-body">
            <div className="modal-type">{project.type}</div>
            <h2 className="modal-title">{project.title}</h2>
            <div className="modal-year">{project.year}</div>
            <p className="modal-desc">{project.longDesc}</p>

            <div className="modal-section-title">Key Features</div>
            <ul className="modal-features">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className="modal-section-title">Tech Stack</div>
            <div className="modal-tags">
              {project.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <div className="modal-actions">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <FaGithub style={{ marginRight: '0.4rem' }} />
                  View on GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <FaExternalLinkAlt style={{ marginRight: '0.4rem' }} />
                  Live Demo
                </a>
              )}
            </div>
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
            From AI-powered infrastructure to game platforms and data pipelines — click any card to see the full story.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
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
              <span className="project-number">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="project-preview">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-preview-fallback">
                    <span className="project-preview-icon">{project.icon}</span>
                  </div>
                )}
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
                      <FaGithub /> GitHub
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
      </section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};

export default Projects;
