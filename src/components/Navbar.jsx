import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/navbar.css';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map(i => i.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 160) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="navbar-bg" />
      <div className="navbar-content">
        <a href="#hero" className="nav-logo" data-text="AN" onClick={(e) => handleNav(e, '#hero')}>
          AN
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={active === item.href.replace('#', '') ? 'active' : ''}
                onClick={(e) => handleNav(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Ahmed Naeem Resume - Software copy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="nav-right">
          <a
            href="https://github.com/ahmed-naeem99"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-abdullah-naeem"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-icon"
          >
            <FaLinkedin />
          </a>
          <button
            className="nav-social-icon"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" style={{ display: menuOpen ? 'none' : 'block' }}>
              <rect width="20" height="2" rx="1" fill="currentColor" />
              <rect y="6" width="14" height="2" rx="1" fill="currentColor" />
              <rect y="12" width="20" height="2" rx="1" fill="currentColor" />
            </svg>
            {menuOpen && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
