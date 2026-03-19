import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WhatIBuild from './components/WhatIBuild';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WhatIBuild />
      <Contact />
      <ChatBot />
    </div>
  );
}
