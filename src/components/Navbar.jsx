import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo, navigationLinks } from '../data/content';

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Active section calculation
      const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 dark:bg-[#151715]/85 backdrop-blur-md shadow-sm border-b border-[#E6DFD6]/60 dark:border-[#2F332F]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo: Script Signature + Role Subtitle */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, '#hero')}
          className="group flex flex-col text-left transition-transform duration-200 hover:scale-[1.01] shrink-0"
        >
          <span 
            className="text-xl sm:text-2xl lg:text-3xl text-[#2B2B2B] dark:text-[#EDECE8] font-normal leading-tight tracking-wide"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            {personalInfo.signature}
          </span>
          <span className="text-[9px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-[#8FA892] dark:text-[#9DB4A0] -mt-0.5">
            AI & CS Scholar • Thejus
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navigationLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? 'text-[#2B2B2B] dark:text-[#FFFFFF] font-semibold'
                    : 'text-[#5E5E5A] dark:text-[#B5B5AF] hover:text-[#2B2B2B] dark:hover:text-[#FFFFFF]'
                }`}
              >
                {isActive && (
                  <span 
                    className="absolute inset-0 bg-[#8FA892]/15 dark:bg-[#8FA892]/25 rounded-full -z-10 transition-all duration-300"
                  />
                )}
                {link.name}
              </a>
            );
          })}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="p-2 ml-2 rounded-full border border-[#E6DFD6] dark:border-[#2F332F] bg-white/70 dark:bg-[#202320] text-[#5E5E5A] dark:text-[#EDECE8] hover:bg-[#8FA892]/15 hover:border-[#8FA892]/40 transition-colors duration-200"
          >
            {theme === 'dark' ? <Sun size={16} className="text-[#8FA892]" /> : <Moon size={16} className="text-[#5E5E5A]" />}
          </button>

          {/* Resume / Contact Button */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#8FA892] hover:bg-[#78957B] text-white shadow-sm hover:shadow transition-all duration-200"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={13} />
          </a>
        </nav>

        {/* Mobile Action Controls */}
        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-[#E6DFD6] dark:border-[#2F332F] bg-white/80 dark:bg-[#202320] text-[#5E5E5A] dark:text-[#EDECE8]"
          >
            {theme === 'dark' ? <Sun size={16} className="text-[#8FA892]" /> : <Moon size={16} />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open navigation menu"
            className="p-2 rounded-lg text-[#2B2B2B] dark:text-[#EDECE8] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E6DFD6] dark:border-[#2F332F] bg-white/95 dark:bg-[#181A18]/95 backdrop-blur-xl px-5 py-6 space-y-3 transition-all duration-200 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-1">
            {navigationLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#8FA892]/20 text-[#2B2B2B] dark:text-[#FFFFFF] font-semibold'
                      : 'text-[#5E5E5A] dark:text-[#B5B5AF] hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E6DFD6]/60 dark:border-[#2F332F] flex items-center justify-between">
            <span className="text-xs text-[#888882]">Thejus Engg College, Thrissur</span>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#8FA892] text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

