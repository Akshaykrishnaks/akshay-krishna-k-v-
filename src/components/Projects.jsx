import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FolderGit2, Sparkles, Layers } from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/content';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AI / ML', 'Web App', 'Algorithm'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8FA892]/15 dark:bg-[#8FA892]/20 text-[#648168] dark:text-[#9DB4A0] text-xs font-semibold tracking-wider uppercase mb-3">
            <FolderGit2 size={13} />
            <span>Featured Portfolio</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-normal text-[#2B2B2B] dark:text-[#EDECE8] tracking-tight leading-snug"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Curated Projects & Explorations
          </h2>
          <p className="text-sm sm:text-base text-[#5E5E5A] dark:text-[#B5B5AF] mt-3">
            Real applications, machine learning experiments, and algorithmic implementations created during my academic journey.
          </p>
          <div className="w-16 h-0.5 bg-[#8FA892] mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-[#8FA892] text-white shadow-xs font-semibold'
                  : 'bg-white/70 dark:bg-[#202320]/70 text-[#5E5E5A] dark:text-[#B5B5AF] border border-[#E6DFD6] dark:border-[#2F332F] hover:border-[#8FA892]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-[24px] bg-white/80 dark:bg-[#1D201D]/80 border border-[#E6DFD6] dark:border-[#2E332E] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#8FA892]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header / Visual Thumbnail */}
                  <div className={`h-48 sm:h-52 w-full bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden border-b border-[#E6DFD6]/60 dark:border-[#2E332E]`}>
                    {/* Decorative ambient dots */}
                    <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/40 dark:bg-white/5 blur-xl pointer-events-none" />

                    <div className="flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 dark:bg-[#151715]/90 text-[#2B2B2B] dark:text-[#EDECE8] backdrop-blur-sm border border-[#E6DFD6] dark:border-[#353A35]">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#8FA892] text-white">
                          <Sparkles size={11} />
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="z-10 mt-auto">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#648168] dark:text-[#9DB4A0] block">
                        {project.subtitle}
                      </span>
                      <h3 
                        className="text-xl sm:text-2xl font-serif text-[#2B2B2B] dark:text-[#EDECE8] mt-0.5 group-hover:text-[#648168] dark:group-hover:text-[#9DB4A0] transition-colors"
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <p className="text-sm text-[#5E5E5A] dark:text-[#B5B5AF] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((t) => (
                        <span 
                          key={t}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#F2EFE9] dark:bg-[#252825] text-[#5E5E5A] dark:text-[#C4C4BE] border border-[#E6DFD6]/60 dark:border-[#323632]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#EDEDED] dark:border-[#282C28] text-xs">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-[#5E5E5A] dark:text-[#B5B5AF] hover:text-[#8FA892] dark:hover:text-[#9DB4A0] transition-colors"
                  >
                    <Github size={14} />
                    <span>View Repository</span>
                  </a>

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#8FA892]/15 dark:bg-[#8FA892]/25 text-[#648168] dark:text-[#9DB4A0] font-medium hover:bg-[#8FA892] hover:text-white transition-all duration-200"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note on upcoming projects */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#888882] dark:text-[#7D807A]">
            More AI research and web experiments are actively in development on my{' '}
            <a 
              href="https://github.com/akshaykrishnaks" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#8FA892] font-medium underline underline-offset-4 hover:text-[#648168]"
            >
              GitHub profile
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
}

