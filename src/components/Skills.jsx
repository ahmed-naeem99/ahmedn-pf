import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/skills.css';

const CATEGORIES = [
  {
    icon: '💻',
    name: 'Languages',
    sub: 'Core Proficiency',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'JavaScript / TypeScript', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'Java', level: 78 },
      { name: 'C / C++', level: 72 },
      { name: 'C#', level: 68 },
    ],
  },
  {
    icon: '⚡',
    name: 'Frameworks & Runtime',
    sub: 'Web + Backend',
    skills: [
      { name: 'Next.js 15 / React', level: 92 },
      { name: 'Node.js', level: 88 },
      { name: 'FastAPI / Flask', level: 85 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Prisma + PostgreSQL', level: 82 },
    ],
  },
  {
    icon: '🤖',
    name: 'AI & Data',
    sub: 'Machine Learning + LLMs',
    skills: [
      { name: 'Ollama + Local LLMs', level: 85 },
      { name: 'RAG / Agentic Workflows', level: 82 },
      { name: 'Pandas + NumPy', level: 88 },
      { name: 'OpenCV', level: 72 },
      { name: 'LLM Prompt Engineering', level: 88 },
    ],
  },
  {
    icon: '🛠️',
    name: 'DevOps & Tools',
    sub: 'Infrastructure + Automation',
    skills: [
      { name: 'Docker / Docker Compose', level: 85 },
      { name: 'Git + CI/CD', level: 90 },
      { name: 'n8n (Workflow Automation)', level: 80 },
      { name: 'Coolify / Vercel', level: 82 },
      { name: 'Jupyter Notebooks', level: 85 },
    ],
  },
];

const CERTS = [
  {
    icon: '🔒',
    name: 'Microsoft SC-900: Security, Compliance & Identity Fundamentals',
    issuer: 'Microsoft Certified · Jan 2026',
  },
  {
    icon: '🤖',
    name: 'AI Driven Fintech Transformation Skills',
    issuer: 'Ontario Tech University',
  },
];

const SkillBar = ({ skill, animate }) => {
  return (
    <div className="skill-row">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-pct">{skill.level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill ${animate ? 'animate' : ''}`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-header">
        <div className="section-label">Technical Arsenal</div>
        <h2 className="section-title">
          Skills & <span className="accent">Stack</span>
        </h2>
        <p className="section-subtitle">
          Languages, frameworks, and tools I use to ship production systems.
        </p>
      </div>

      <div className="skills-layout">
        {CATEGORIES.map((cat, i) => (
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
              {cat.skills.map((s) => (
                <SkillBar key={s.name} skill={s} animate={visible} />
              ))}
            </div>
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
