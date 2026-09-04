import React from 'react';

export const TechBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* Tech grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 dark:opacity-40" />

      {/* Subtle ambient gradient spotlights */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-brand-500/10 via-brand-600/5 to-transparent blur-3xl rounded-full opacity-70" />
      <div className="absolute top-[45%] -right-40 w-[400px] h-[400px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 -left-40 w-[450px] h-[450px] bg-blue-600/5 dark:bg-indigo-600/10 blur-3xl rounded-full" />
    </div>
  );
};
