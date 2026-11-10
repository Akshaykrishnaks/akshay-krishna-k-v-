import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Compass, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { journeyTimeline } from '../data/content';

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#F2EFE9]/40 dark:bg-[#181B18]/40">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8FA892]/15 dark:bg-[#8FA892]/20 text-[#648168] dark:text-[#9DB4A0] text-xs font-semibold tracking-wider uppercase mb-3">
            <Compass size={13} />
            <span>Academic Milestones</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-normal text-[#2B2B2B] dark:text-[#EDECE8] tracking-tight leading-snug"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Education & Journey
          </h2>
          <p className="text-sm sm:text-base text-[#5E5E5A] dark:text-[#B5B5AF] mt-3">
            The foundation, pivotal learning chapters, and aspirations shaping my engineering path.
          </p>
          <div className="w-16 h-0.5 bg-[#8FA892] mx-auto mt-4 rounded-full" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[#8FA892]/30 dark:border-[#8FA892]/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {journeyTimeline.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              {/* Timeline Marker Dot with subtle pulsing ring */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#8FA892] ring-4 ring-[#F7F6F3] dark:ring-[#151715] group-hover:scale-125 transition-transform" />
              </div>

              {/* Timeline Entry Card */}
              <div className="p-6 sm:p-7 rounded-[22px] bg-white/85 dark:bg-[#1D201D]/85 border border-[#E6DFD6] dark:border-[#2E332E] shadow-xs group-hover:border-[#8FA892]/40 group-hover:shadow-md transition-all duration-300">
                
                {/* Period & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8FA892] dark:text-[#9DB4A0]">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#E2ECE4] dark:bg-[#252B25] text-[#4A634E] dark:text-[#9DB4A0] border border-[#8FA892]/20">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Institution */}
                <h3 className="text-lg sm:text-xl font-serif text-[#2B2B2B] dark:text-[#EDECE8]">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#648168] dark:text-[#9DB4A0] font-medium mt-1">
                  <Building2 size={13} />
                  <span>{item.institution}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#5E5E5A] dark:text-[#B5B5AF] mt-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-[#EDEDED] dark:border-[#272B27] space-y-1.5">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-[#5E5E5A] dark:text-[#A0A09B]">
                        <CheckCircle2 size={13} className="text-[#8FA892] mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

