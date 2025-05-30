import React, { useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion, useScroll, useTransform } from 'framer-motion';
import MatrixRain from './MatrixRain';
import '../styles/hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const handleResize = () => {
      const canvas = document.querySelector('.matrix-canvas');
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Full-page background elements */}
      <div className="fullpage-bg">
        <MatrixRain color="#d4af37" opacity={0.15} />
        <motion.div 
          className="gold-gradient-bg"
          style={{ y: yBg }}
        />
      </div>

      <section id="hero" className="hero-section" ref={ref}>
        <div className="gold-accent top"></div>
        <div className="gold-accent bottom"></div>

        <div className="hero-content">
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hey, I'm <span className="highlight pulse">Ahmed Naeem</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="typewriter-wrapper"
            >
              <Typewriter
                words={[
                  'A Visionary First', 
                  'Software Engineer', 
                  'Web Developer', 
                  'Tech Strategist',
                  'Problem Solver',
                  'Innovation Enthusiast'
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.div>
          </div>

          <motion.div
            className="hero-img-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="image-frame">
              <img 
                src="/assets/pic.png" 
                alt="Ahmed Naeem" 
                className="hero-image" 
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;