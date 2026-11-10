import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  FileCode, 
  Database, 
  Binary, 
  Cpu, 
  BarChart3, 
  Brain, 
  Layout, 
  Palette, 
  Atom, 
  Smartphone, 
  GitBranch, 
  Monitor, 
  BookOpen, 
  Sparkles,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/content';

// Dynamic icon resolver
const iconMap = {
  Code2,
  Terminal,
  FileCode,
  Database,
  Binary,
  Cpu,
  BarChart3,
  Brain,
  Layout,
  Palette,
  Atom,
  Smartphone,
  GitBranch,
  Monitor,
  BookOpen,
  CommandLine: Terminal
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#F2EFE9]/40 dark:bg-[#181B18]/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8FA892]/15 dark:bg-[#8FA892]/20 text-[#648168] dark:text-[#9DB4A0] text-xs font-semibold tracking-wider uppercase mb-3">
            <Layers size={13} />
            <span>Technical Capabilities</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-normal text-[#2B2B2B] dark:text-[#EDECE8] tracking-tight leading-snug"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Skills & Core Toolset
          </h2>
          <p className="text-sm sm:text-base text-[#5E5E5A] dark:text-[#B5B5AF] mt-3">
            A balanced foundation of low-level programming, web interfaces, and emerging AI technologies.
          </p>
          <div className="w-16 h-0.5 bg-[#8FA892] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              className="p-6 sm:p-8 rounded-[24px] bg-white/80 dark:bg-[#1D201D]/80 border border-[#E6DFD6] dark:border-[#2E332E] shadow-xs hover:border-[#8FA892]/40 transition-all duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif text-[#2B2B2B] dark:text-[#EDECE8]">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-[#888882] dark:text-[#7D807A] mt-0.5">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills in Category */}
              <div className="mt-6 space-y-4">
                {cat.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div key={skill.name} className="space-y-1.5 group">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-2 text-[#2B2B2B] dark:text-[#EDECE8] font-medium">
                          <span className="p-1.5 rounded-lg bg-[#E2ECE4] dark:bg-[#252A25] text-[#648168] dark:text-[#9DB4A0] group-hover:scale-110 transition-transform">
                            <IconComponent size={14} />
                          </span>
                          <span>{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#F7F6F3] dark:bg-[#282D28] border border-[#E6DFD6] dark:border-[#383E38] text-[#5E5E5A] dark:text-[#A0A09B]">
                            {skill.badge}
                          </span>
                          <span className="font-mono text-xs text-[#8FA892] dark:text-[#9DB4A0] font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="h-2 w-full bg-[#EDEDED] dark:bg-[#272B27] rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-[#8FA892] to-[#648168] rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                        />
                      </div>

                      {/* Small context note */}
                      <div className="text-[11px] text-[#888882] dark:text-[#7D807A] pl-7">
                        {skill.note}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

