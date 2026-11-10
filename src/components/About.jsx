import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, GraduationCap, MapPin, Sparkles, BookOpen, Heart } from 'lucide-react';
import { aboutData, personalInfo } from '../data/content';

// Simple lightweight count-up hook
function Counter({ value, suffix = '', duration = 1.6 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;

    const totalSteps = 40;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-serif">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8FA892]/15 dark:bg-[#8FA892]/20 text-[#648168] dark:text-[#9DB4A0] text-xs font-semibold tracking-wider uppercase mb-3">
            <User size={13} />
            <span>{aboutData.badge}</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-normal text-[#2B2B2B] dark:text-[#EDECE8] tracking-tight leading-snug"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {aboutData.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#8FA892] mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-Column About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Bio Text Column */}
          <motion.div 
            className="lg:col-span-7 space-y-5"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-7 sm:p-9 rounded-[22px] bg-white/70 dark:bg-[#1E211E]/70 backdrop-blur-md border border-[#E6DFD6] dark:border-[#2F332F] shadow-sm space-y-5">
              
              {/* Bio Header with Portrait Avatar */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-1">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-md border-2 border-white dark:border-[#2C302C] shrink-0 bg-[#E2ECE4] group">
                  <img
                    src={personalInfo.photoUrl}
                    alt="Portrait of Akshay Krishna K S"
                    loading="lazy"
                    className="w-full h-full object-cover object-[center_top] transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] dark:text-[#EDECE8]">
                    Pioneering My Path in Computer Science & AI
                  </h3>
                  <div className="text-xs text-[#8FA892] dark:text-[#9DB4A0] font-medium mt-1">
                    {personalInfo.name} • {personalInfo.role}
                  </div>
                </div>
              </div>
              
              {aboutData.bioParagraphs.map((para, idx) => (
                <p 
                  key={idx} 
                  className="text-sm sm:text-base text-[#5E5E5A] dark:text-[#B5B5AF] leading-relaxed"
                >
                  {para}
                </p>
              ))}

              <div className="pt-2 flex items-center gap-4 text-xs text-[#8FA892] dark:text-[#9DB4A0] font-medium">
                <span className="flex items-center gap-1">
                  <GraduationCap size={15} />
                  <span>Thejus Engg College</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin size={15} />
                  <span>Thrissur, Kerala</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Facts Grid */}
          <motion.div 
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {aboutData.quickFacts.map((fact, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-white/50 dark:bg-[#1C1F1C]/60 border border-[#E6DFD6]/80 dark:border-[#2C302C] hover:border-[#8FA892]/40 transition-all duration-200"
              >
                <div className="text-[11px] uppercase tracking-wider font-semibold text-[#8FA892] dark:text-[#9DB4A0]">
                  {fact.label}
                </div>
                <div className="text-sm font-medium text-[#2B2B2B] dark:text-[#EDECE8] mt-0.5">
                  {fact.value}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Animated Count-Up Numbers Bar */}
        <motion.div 
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {aboutData.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-[20px] bg-white/80 dark:bg-[#1C1F1C]/80 border border-[#E6DFD6] dark:border-[#2F332F] text-center shadow-xs hover:border-[#8FA892]/40 hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#8FA892] dark:text-[#9DB4A0] mb-1">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#5E5E5A] dark:text-[#B5B5AF]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

