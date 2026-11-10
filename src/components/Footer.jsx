import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { Github, Linkedin, Instagram } from './Icons';
import { personalInfo } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#E6DFD6] dark:border-[#282C28] bg-white/40 dark:bg-[#131513]/60 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center space-y-6">
        
        {/* Elegant Script Signature */}
        <div className="space-y-1">
          <span 
            className="text-4xl sm:text-5xl text-[#2B2B2B] dark:text-[#EDECE8] font-normal tracking-wide block"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            {personalInfo.signature}
          </span>
          <p className="text-xs tracking-[0.18em] uppercase text-[#8FA892] dark:text-[#9DB4A0] font-semibold">
            {personalInfo.role} • {personalInfo.college}
          </p>
        </div>

        {/* Tagline */}
        <p className="text-xs sm:text-sm text-[#5E5E5A] dark:text-[#B5B5AF] italic max-w-md">
          "{personalInfo.tagline}"
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3 pt-1">
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="p-2.5 rounded-full border border-[#E6DFD6] dark:border-[#2F332F] bg-white dark:bg-[#1E211E] text-[#5E5E5A] dark:text-[#B5B5AF] hover:text-[#8FA892] hover:border-[#8FA892] transition-colors"
          >
            <Mail size={16} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-full border border-[#E6DFD6] dark:border-[#2F332F] bg-white dark:bg-[#1E211E] text-[#5E5E5A] dark:text-[#B5B5AF] hover:text-[#8FA892] hover:border-[#8FA892] transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-full border border-[#E6DFD6] dark:border-[#2F332F] bg-white dark:bg-[#1E211E] text-[#5E5E5A] dark:text-[#B5B5AF] hover:text-[#8FA892] hover:border-[#8FA892] transition-colors"
          >
            <Linkedin size={16} />
          </a>
          {personalInfo.instagram && (
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Profile"
              className="p-2.5 rounded-full border border-[#E6DFD6] dark:border-[#2F332F] bg-white dark:bg-[#1E211E] text-[#5E5E5A] dark:text-[#B5B5AF] hover:text-[#8FA892] hover:border-[#8FA892] transition-colors"
            >
              <Instagram size={16} />
            </a>
          )}
        </div>

        {/* Back to Top Floating / Centered Pill Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border border-[#E6DFD6] dark:border-[#2F332F] bg-white/80 dark:bg-[#1E211E] text-[#5E5E5A] dark:text-[#B5B5AF] hover:text-[#8FA892] hover:border-[#8FA892] transition-all hover:-translate-y-0.5 cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp size={13} />
        </button>

        {/* Copyright notice */}
        <div className="pt-4 border-t border-[#EDEDED] dark:border-[#282C28] w-full text-center">
          <p className="text-[11px] text-[#888882] dark:text-[#7D807A]">
            Designed & Engineered with care for Akshay Krishna K S • {new Date().getFullYear()} • Built with React, Tailwind & Vite
          </p>
        </div>

      </div>
    </footer>
  );
}

