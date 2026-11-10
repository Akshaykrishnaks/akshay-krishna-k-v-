import React from 'react';

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Top Left Soft Sage Blob */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 sm:w-[480px] sm:h-[480px] rounded-full bg-[#8FA892]/15 dark:bg-[#8FA892]/10 blur-3xl animate-float-slow" 
      />

      {/* Top Right Warm Cream / Rose Blob */}
      <div 
        className="absolute top-10 -right-24 w-80 h-80 sm:w-[520px] sm:h-[520px] rounded-full bg-[#E6DFD6]/50 dark:bg-[#2A2E2A]/40 blur-3xl animate-float-reverse" 
      />

      {/* Subtle Botanical SVG Motif - Top Right */}
      <svg
        className="absolute top-6 right-6 sm:top-12 sm:right-16 w-32 h-32 sm:w-48 sm:h-48 text-[#8FA892]/20 dark:text-[#8FA892]/15 pointer-events-none"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M40,160 C70,120 120,110 160,40 C140,80 110,130 40,160 Z" />
        <path d="M100,100 C125,75 145,55 160,40 C140,75 125,95 100,100 Z" opacity="0.6" />
        <path d="M70,130 C90,110 110,95 130,85 C115,110 95,125 70,130 Z" opacity="0.5" />
      </svg>

      {/* Middle Floating Organic Shape */}
      <div 
        className="absolute top-[45%] -left-40 w-80 h-80 rounded-full bg-[#E2ECE4]/40 dark:bg-[#8FA892]/5 blur-3xl animate-float-reverse" 
      />

      {/* Bottom Right Warm Accent Blob */}
      <div 
        className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-[#E6DFD6]/40 dark:bg-[#242824]/40 blur-3xl animate-float-slow" 
      />
    </div>
  );
}

