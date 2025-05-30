import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiJavascript, 
  SiPython, 
  SiWordpress,
  SiNodedotjs,

} from 'react-icons/si';
import '../styles/techstack.css';

const TechStack = () => {
  const technologies = [
    { name: 'React', icon: <SiReact size={30} />, level: 90 },
    { name: 'JavaScript', icon: <SiJavascript size={30} />, level: 85 },
    { name: 'Python', icon: <SiPython size={30} />, level: 80 },
    { name: 'Node.js', icon: <SiNodedotjs size={30} />, level: 80 },
    { name: 'WordPress', icon: <SiWordpress size={30} />, level: 85 }
  ];

  return (
    <section id="techstack" className="techstack-section">
      <div className="section-header">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Technical <span className="gold-text">Arsenal</span>
        </motion.h2>
        <p className="section-subtitle">Tools and technologies I wield with expertise</p>
      </div>

      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="tech-item"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="tech-icon">{tech.icon}</div>
            <div className="tech-info">
              <h3>{tech.name}</h3>
              <div className="skill-level">
                <div 
                  className="skill-progress" 
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;