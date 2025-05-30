import React from 'react';
import { motion } from 'framer-motion';
import '../styles/experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Full-Stack Developer Associate",
      company: "FluidAI Medical",
      period: "May 2025 - Present",
      location: "Remote",
      achievements: [
        "Designed and managed dynamic web experiences using modern tools",
        "Connected backend content systems with flexible front-end layouts",
        "Solved layout and data flow challenges across platforms"
      ]
    },
    {
      role: "Software Engineer",
      company: "Yusr Funeral Financial Aid",
      period: "Jan 2024 - Present",
      location: "Oakville, ON",
      achievements: [
        "Developed full-stack platform (yusr.ca) with WordPress, HTML/CSS, JS",
        "Optimized UX/UI leading to 100+ registrations and $6,000 in donations",
        "Implemented SEO strategies driving 4,000+ visitors in 6 months"
      ]
    },
    {
      role: "Co-founder",
      company: "Naeem Gifts Co",
      period: "Feb 2023 - Present",
      location: "Oakville, ON",
      achievements: [
        "Led e-commerce system development and logistics",
        "Improved efficiency by 20% through workflow automation",
        "Managed inventory and customer experience systems"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Professional <span className="gold-text">Journey</span>
        </motion.h2>
        <p className="section-subtitle">Where I've applied my skills in real-world scenarios</p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                <div className="company-period">
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <div className="location">{exp.location}</div>
              </div>
              
              <ul className="achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>
                    <div className="achievement-marker"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;