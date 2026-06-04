import React from 'react';
import { motion } from 'framer-motion';
import '../styles/experience.css';

const EXPERIENCES = [
  {
    role: 'Lead Software Engineer & Co-Founder',
    company: 'Yusr Funeral Financial Aid',
    companyUrl: 'https://yusr.ca',
    period: 'Jan 2024 – Present',
    location: 'Oakville, ON',
    badge: 'Full-Time',
    achievements: [
      <>Designed and deployed a self-hosted, containerized <strong>CRM</strong> on a Hetzner VPS using <strong>Docker Compose</strong> and <strong>Coolify</strong></>,
      <>Engineered a private <strong>FastAPI</strong> microservice running a quantized vision <strong>LLM (Ollama + Qwen2-VL)</strong> to automate ID document data extraction (OCR) without exposing member data to third-party APIs</>,
      <>Integrated <strong>n8n</strong> to orchestrate webhook-driven pipelines connecting Next.js API routes, Stripe billing events, <strong>Resend</strong> transactional emails, and Mailchimp</>,
      <>Built a secure <strong>Next.js 15</strong> front-end and <strong>PostgreSQL/Prisma</strong> backend with magic-link JWT authentication, handling complex user states and automated scheduled <strong>cron jobs</strong></>,
    ],
    tags: ['Next.js 15', 'FastAPI', 'Docker', 'Ollama', 'PostgreSQL', 'Prisma', 'n8n', 'Coolify', 'Stripe'],
  },
  {
    role: 'Full-Stack Software Developer Associate',
    company: 'FluidAI Medical',
    period: 'May 2025 – Aug 2025',
    location: 'Remote',
    badge: 'Internship',
    achievements: [
      <>Developed full-stack features using <strong>Python (Flask)</strong>, React, and SQL, improving scalability of healthcare platforms by <strong>80%</strong></>,
      <>Built scalable <strong>ETL pipelines</strong> to synchronize data between model outputs and the frontend interface</>,
      <>Collaborated with cross-functional engineering teams in an <strong>Agile</strong> environment, applying version control (Git) and <strong>CI/CD workflows</strong> for rapid iteration</>,
      <>Implemented modular, object-oriented design patterns to improve code maintainability across complex data structures</>,
    ],
    tags: ['Python', 'Flask', 'React', 'SQL', 'ETL', 'Git', 'CI/CD', 'Agile'],
  },
  {
    role: 'ML Engineer',
    company: 'SCOOTY',
    period: 'May 2025 – Aug 2025',
    location: 'Remote',
    badge: 'Contract',
    achievements: [
      <>Mastered <strong>RAG</strong>, agentic workflows, and <strong>LLM</strong> prompt-based automation to build financial tech solutions achieving <strong>98% accuracy</strong> in data retrieval</>,
      <>Developed <strong>ML</strong> and <strong>DL models</strong> focused on industry challenges, completing a rigorous technical and soft-skills curriculum</>,
    ],
    tags: ['RAG', 'LLMs', 'Agentic AI', 'Python', 'ML/DL', 'FinTech'],
  },
];

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
          From self-hosted AI infrastructure to healthcare platforms and fintech automation.
        </p>
      </div>

      <div className="timeline">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
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
              <div className="tc-period">{exp.period}</div>
              <ul className="tc-achievements">
                {exp.achievements.map((a, j) => (
                  <li key={j}>{a}</li>
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
