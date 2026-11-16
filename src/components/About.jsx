import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_STATS, EDUCATION } from '../data/content';
import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-layout">
        <div>
          <div className="about-header">
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Builder at <span className="accent">Core</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              I'm <strong>Ahmed Naeem</strong>, a computer science co-op student at{' '}
              <strong>Toronto Metropolitan University</strong>. Most of what I've built
              is the unglamorous kind: payment flows, ride backends, data pipelines,
              support tooling — systems where being wrong costs someone real money.
            </p>
            <p>
              At <strong>SCOOTY Mobility</strong> I rebuilt the payment lifecycle on Stripe
              and cut annual fraud losses by 89%, then rearchitected the ride-platform
              backend in four weeks and migrated a 500-vehicle fleet onto it while it kept
              running. On the side I built <strong>RideGuide</strong>, a transit ML pipeline
              that has turned 41.1M prediction snapshots into 12.1M labeled training
              examples, and <strong>Trivial</strong>, a real-time quiz platform I still
              operate for live classrooms.
            </p>
            <p>
              I'm also <strong>Co-Founder &amp; Lead Engineer at Yusr Funeral Financial
              Aid</strong>, where I built and still run every part of the stack, including
              an on-premise vision model so families' identity documents never leave our
              hardware.
            </p>
            <p>
              The thread through all of it: I'd rather prove a system is correct than
              assume it. The load test I'm proudest of doesn't check that nothing crashed —
              it recomputes every player's score independently and diffs it against the
              server.
            </p>
          </div>

          <div className="edu-card">
            <div className="edu-label">Education</div>
            <div className="edu-school">{EDUCATION.school}</div>
            <div className="edu-program">{EDUCATION.program}</div>
            <div className="edu-period">{EDUCATION.period}</div>
            <div className="edu-courses">
              {EDUCATION.courses.map((c) => (
                <span key={c} className="tag">{c}</span>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="about-hex-grid">
            {ABOUT_STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="hex-stat"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                <div className="hex-stat-number">{s.number}</div>
                <div className="hex-stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
