import React from 'react';
import CustomCursor from './components/CustomCursor';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/global.css';
import './styles/hero.css';
import './styles/navbar.css';
import './styles/experience.css';
import './styles/projects.css';
import './styles/skills.css';
import './styles/about.css';
import './styles/contact.css';

function App() {
  return (
    <>
      <CustomCursor />
      <ParticleCanvas />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
