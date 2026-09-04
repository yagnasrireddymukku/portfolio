import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/50 shadow-lg shadow-black/10 transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none"
      aria-label="Scroll back to top"
      title="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
