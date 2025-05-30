import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/projects.css';

const Projects = () => {
  const projects = [
    { 
      title: 'Reality Quest ARG', 
      desc: 'Interactive alternate reality game platform blending digital and physical worlds',
      tags: ['React', 'Node.js', 'Neon DB', 'Firebase'],
      date: 'Feb 2025',
      features: [
        'Secure user authentication system',
        'Real-world game mechanics integration',
        'Cross-platform compatibility'
      ],
      link: 'https://github.com/ahmed-naeem99/IAW25-ARG',
      image: '/assets/pj1.png'
    },
    { 
      title: 'Yusr Funeral Aid', 
      desc: 'Financial assistance platform for funeral expenses',
      tags: ['WordPress', 'CSS', 'Custom APIs'],
      date: 'Dec 2024',
      features: [
        'Custom API payment system',
        '10,000+ visitors',
        'Program Registration feature'
      ],
      link: 'https://yusr.ca',
      image: '/assets/pj2.png'
    },
    { 
      title: 'AI Magic Trick', 
      desc: 'Web-based magic experience with AI prediction engine',
      tags: ['React', 'Flask', 'AI/ML'],
      date: 'Mar 2025 - Present',
      features: [
        'Card selection algorithm',
        'Real-time prediction system',
        'Interactive user flows'
      ],
      image: '/assets/pj3.png'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <motion.h2 
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          My <span className="gold-text">Innovations</span>
        </motion.h2>
        <p className="section-subtitle">Where technical expertise meets creative problem-solving</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <a 
              href={project.link || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-image-link"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
              />
              {project.link && <FaExternalLinkAlt className="project-link-icon" />}
            </a>
            
            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-date">{project.date}</div>
              </div>
              
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-features">
                {project.features.map((feature, i) => (
                  <div key={i} className="feature-item">
                    <div className="feature-marker"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;