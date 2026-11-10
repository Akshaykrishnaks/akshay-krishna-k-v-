import React from 'react';
import { useTheme } from './utils/useTheme';
import ScrollProgress from './components/ScrollProgress';
import BackgroundBlobs from './components/BackgroundBlobs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#F7F6F3] dark:bg-[#151715] text-[#2B2B2B] dark:text-[#EDECE8] transition-colors duration-300">
      {/* Scroll indicator bar */}
      <ScrollProgress />

      {/* Ambient background organic shapes */}
      <BackgroundBlobs />

      {/* Main navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Page Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
