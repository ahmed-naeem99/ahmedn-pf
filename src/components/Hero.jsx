import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../styles/hero.css';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&'.split('');

const ScrambleText = ({ text, delay = 0 }) => {
  const [display, setDisplay] = useState(Array(text.length).fill('?'));
  const [done, setDone] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    let start = null;
    const duration = 800;
    const startDelay = delay;

    const tick = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start - startDelay;
      if (elapsed < 0) {
        timerRef.current = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const revealed = Math.floor(progress * text.length);
      setDisplay(text.split('').map((c, i) => {
        if (c === ' ') return ' ';
        if (i < revealed) return c;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }));
      if (progress < 1) {
        timerRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text.split(''));
        setDone(true);
      }
    };
    timerRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(timerRef.current);
  }, [text, delay]);

  return (
    <span style={{ fontFamily: done ? 'inherit' : 'var(--font-mono)' }}>
      {display.join('')}
    </span>
  );
};

const Hero = () => {
  const [showScan, setShowScan] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    const t1 = setTimeout(() => setShowScan(false), 1200);
    const t2 = setTimeout(() => setShowContent(true), 400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section id="hero" className="hero-wrapper">
      {/* Background elements */}
      <div className="hero-spotlight" />
      <div className="hero-grid-bg" />

      {/* Scan sweep */}
      {showScan && <div className="hero-scan-line" />}

      {showContent && (
        <div className="hero-content">
          {/* ── LEFT: TEXT ── */}
          <div className="hero-text">
            <div className="hero-system-tag">
              <span className="blink" />
              SYS_INIT // PORTFOLIO_LOADED // v2.0
            </div>

            <h1 className="hero-name">
              <span style={{ display: 'block', fontSize: '0.45em', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '0.3em', fontFamily: 'var(--font-mono)', letterSpacing: '0.2em' }}>
                AHMED
              </span>
              <span className="name-highlight">
                <ScrambleText text="NAEEM" delay={600} />
              </span>
            </h1>

            <div className="hero-role-line">
              <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)', fontSize: '0.9em' }}>$&gt;&nbsp;</span>
              <Typewriter
                words={[
                  'Full-Stack Engineer',
                  'AI Systems Builder',
                  'Co-Founder @ Yusr',
                  'Next.js + FastAPI Dev',
                  'LLM Integration Specialist',
                  'Agentic Workflow Architect',
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </div>

            <p className="hero-tagline">
              Toronto-based software engineer building AI-powered systems, containerized infrastructure,
              and high-performance web apps. Currently Co-Founder at{' '}
              <a href="https://yusr.ca" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Yusr</a>{' '}
              and pursuing Honours CS at Toronto Metropolitan University.
            </p>

            <div className="hero-actions">
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="/Ahmed Naeem Resume - Software copy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Download CV
              </motion.a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/ahmed-naeem99" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ahmed-abdullah-naeem" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
              <div className="divider-v" />
              <a href="mailto:ahmednumber10@gmail.com" className="email-link">
                <FaEnvelope style={{ marginRight: '0.4rem' }} />
                ahmednumber10@gmail.com
              </a>
            </div>

            <div className="hero-stats" ref={statsRef}>
              <div className="stat-item">
                <span className="stat-number">
                  {statsInView ? <CountUp end={2} duration={1.5} suffix="+" /> : '0+'}
                </span>
                <span className="stat-label">Years Building</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {statsInView ? <CountUp end={10} duration={1.8} suffix="+" /> : '0+'}
                </span>
                <span className="stat-label">Projects Shipped</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {statsInView ? <CountUp end={15} duration={2} suffix="+" /> : '0+'}
                </span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {statsInView ? <CountUp end={10000} duration={2} separator="," suffix="+" /> : '0+'}
                </span>
                <span className="stat-label">Users Served</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: VISUAL ── */}
          <div className="hero-visual">
            <div className="orbit-system">
              {/* Orbit rings */}
              <div className="orbit-ring orbit-ring-1">
                <div className="orbit-node" />
              </div>
              <div className="orbit-ring orbit-ring-2">
                <div className="orbit-node orbit-node-sm" />
              </div>
              <div className="orbit-ring orbit-ring-3">
                <div className="orbit-node orbit-node-sm" style={{ top: 'auto', bottom: '-2.5px' }} />
              </div>

              {/* Profile photo */}
              <div className="profile-hex">
                <div className="profile-glow-ring" />
                <div className="profile-glow-ring profile-glow-ring-2" />
                <div className="profile-hex-inner">
                  <img src="/assets/pic.png" alt="Ahmed Naeem" className="profile-img" />
                  <div className="profile-bracket bracket-tl" />
                  <div className="profile-bracket bracket-tr" />
                  <div className="profile-bracket bracket-bl" />
                  <div className="profile-bracket bracket-br" />
                </div>
              </div>

              {/* Floating chips */}
              <div className="hero-chips">
                <div className="hero-chip chip-1">
                  <span className="chip-dot" />
                  Toronto, ON 🇨🇦
                </div>
                <div className="hero-chip chip-2">
                  <span className="chip-dot" />
                  Open to Opportunities
                </div>
                <div className="hero-chip chip-3">
                  <span className="chip-dot" style={{ background: '#4ade80', boxShadow: '0 0 8px rgba(74,222,128,0.6)' }} />
                  Available for Work
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="scroll-line" />
        <span className="scroll-label">scroll</span>
      </div>
    </section>
  );
};

export default Hero;
