import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import './styles/hero.css';
import './styles/experience.css';
import './styles/techstack.css';
import './styles/projects.css';
import './styles/global.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <TechStack />
    </div>
  );
}

export default App;