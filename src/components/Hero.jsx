import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Sparkles } from 'lucide-react';
import { Github, Linkedin, Instagram } from './Icons';
import { personalInfo } from '../data/content';

export default function Hero() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* LEFT COLUMN: Large portrait inside white frame with soft shadow & slight offset */}
        <motion.div 
          className="lg:col-span-5 flex justify-center order-2 lg:order-1 px-2 sm:px-0 w-full"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative group max-w-[260px] sm:max-w-xs md:max-w-sm w-full mx-auto">
            {/* Soft decorative offset backdrop layer */}
            <div 
              className="absolute -inset-2 sm:-inset-3 bg-[#E6DFD6] dark:bg-[#252825] rounded-[24px] transform -rotate-1 sm:-rotate-2 group-hover:-rotate-3 transition-transform duration-500 -z-10 shadow-sm"
              aria-hidden="true"
            />
            
            {/* Second subtle sage accent layer */}
            <div 
              className="absolute -inset-1 bg-[#8FA892]/20 dark:bg-[#8FA892]/15 rounded-[22px] transform rotate-1 group-hover:rotate-2 transition-transform duration-500 -z-10"
              aria-hidden="true"
            />

            {/* Main Portrait Frame with pure white border and soft drop shadow */}
            <div className="relative rounded-[22px] bg-white dark:bg-[#222522] p-3 sm:p-4 shadow-xl border border-[#E6DFD6]/80 dark:border-[#353A35] transition-transform duration-300 group-hover:scale-[1.01]">
              <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden bg-gradient-to-b from-[#F2EFE9] to-[#E2ECE4] dark:from-[#252A25] dark:to-[#1B1E1B]">
                <img
                  src={personalInfo.photoUrl}
                  alt="Portrait of Akshay Krishna K S"
                  onLoad={() => setIsImageLoaded(true)}
                  className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
                    isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  loading="eager"
                />

                {/* Status chip over portrait */}
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-[#181A18]/90 backdrop-blur-md shadow-sm border border-white/60 dark:border-white/10 text-[11px] font-medium text-[#2B2B2B] dark:text-[#EDECE8] z-10">
                  <span className="w-2 h-2 rounded-full bg-[#8FA892] animate-pulse" />
                  <span>Available for Projects</span>
                </div>

                {/* Bottom pill showing Akshay Krishna K S and degree */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#1C1F1C]/95 backdrop-blur-md shadow-md border border-white/80 dark:border-white/10 z-10 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#8FA892] shrink-0" />
                    <div className="truncate text-left min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-[#2B2B2B] dark:text-[#EDECE8] leading-tight truncate">
                        Akshay Krishna K S
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-medium text-[#648168] dark:text-[#9DB4A0] truncate">
                        B.Tech CS (AI) · Thejus Engineering College
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Script Name, Subtitle, Heading, Paragraph, CTA Buttons */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 space-y-5 sm:space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Script Name Greeting */}
          <motion.div variants={itemVariants} className="space-y-1.5 w-full">
            <span 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#8FA892] dark:text-[#9DB4A0] font-normal leading-tight block tracking-wide"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Akshay Krishna K S
            </span>
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-0.5">
              <span className="hidden sm:inline-block h-px w-5 bg-[#8FA892]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#5E5E5A] dark:text-[#B5B5AF]">
                {personalInfo.role}
              </span>
            </div>
          </motion.div>

          {/* College Tag Pill */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/80 dark:bg-[#202320]/80 border border-[#E6DFD6] dark:border-[#2F332F] text-[11px] sm:text-xs font-medium text-[#5E5E5A] dark:text-[#B5B5AF] shadow-xs">
              <Sparkles size={12} className="text-[#8FA892]" />
              <span>{personalInfo.college}, Thrissur</span>
            </div>
          </motion.div>

          {/* Big refined Serif Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2B2B2B] dark:text-[#EDECE8] leading-[1.22]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Let's build something <span className="italic text-[#8FA892] dark:text-[#9DB4A0] font-serif">meaningful</span> together.
          </motion.h1>

          {/* Short Bio Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-[#5E5E5A] dark:text-[#B5B5AF] leading-relaxed max-w-xl font-normal"
          >
            "{personalInfo.tagline}" — {personalInfo.heroSubheadline}
          </motion.p>

          {/* Dual Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
          >
            {/* Secondary filled button */}
            <a
              href="#contact"
              className="px-7 py-3 rounded-full text-sm font-semibold bg-[#8FA892] hover:bg-[#78957B] text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact Me
            </a>

            {/* Thin outlined button */}
            <a
              href="#projects"
              className="px-7 py-3 rounded-full text-sm font-medium border border-[#2B2B2B]/40 dark:border-white/30 text-[#2B2B2B] dark:text-[#EDECE8] hover:bg-[#8FA892]/10 hover:border-[#8FA892] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              View My Work
            </a>
          </motion.div>

          {/* Quick Social Bar */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-3 pt-3 text-[#5E5E5A] dark:text-[#B5B5AF]"
          >
            <span className="text-xs uppercase tracking-wider text-[#888882] dark:text-[#7D807A] mr-2">
              Connect:
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email Akshay Krishna"
              className="p-2 rounded-full border border-[#E6DFD6] dark:border-[#2F332F] bg-white/60 dark:bg-[#202320] hover:text-[#8FA892] hover:border-[#8FA892] transition-colors"
            >
              <Mail size={16} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-full border border-[#E6DFD6] dark:border-[#2F332F] bg-white/60 dark:bg-[#202320] hover:text-[#8FA892] hover:border-[#8FA892] transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-full border border-[#E6DFD6] dark:border-[#2F332F] bg-white/60 dark:bg-[#202320] hover:text-[#8FA892] hover:border-[#8FA892] transition-colors"
            >
              <Linkedin size={16} />
            </a>
            {personalInfo.instagram && (
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="p-2 rounded-full border border-[#E6DFD6] dark:border-[#2F332F] bg-white/60 dark:bg-[#202320] hover:text-[#8FA892] hover:border-[#8FA892] transition-colors"
              >
                <Instagram size={16} />
              </a>
            )}
          </motion.div>

        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#888882] dark:text-[#7D807A] opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-widest uppercase font-mono">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}

