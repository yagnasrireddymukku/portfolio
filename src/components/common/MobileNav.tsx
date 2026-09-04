import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { YrmMonogram } from './Icons';
import { PERSONAL_INFO } from '../../data/personal';

interface NavItem {
  name: string;
  path: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navItems
}) => {
  // Prevent body scrolling when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow || 'unset';
      };
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 xl:hidden flex justify-end" id="mobile-navigation-portal">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
          />

          {/* Sliding Drawer Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
            id="mobile-nav-dialog"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-full max-w-xs sm:max-w-sm h-full bg-white dark:bg-[#0B1020] border-l border-slate-200 dark:border-slate-800/80 shadow-2xl flex flex-col p-6 z-10 overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800/80 mb-4">
              <div className="flex items-center gap-3">
                <YrmMonogram size="sm" />
                <div>
                  <p className="font-bold text-sm text-slate-900 dark:text-white leading-tight">
                    {PERSONAL_INFO.shortName}
                  </p>
                  <p className="text-[11px] text-brand-600 dark:text-cyan-400 font-mono">
                    AI & Python Full-Stack
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700/60 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Close navigation menu"
              >
                  <X className="w-5 h-5" />
                </button>
            </div>

            {/* Navigation Links with Staggered Entrance */}
            <nav className="flex-1 py-2 flex flex-col gap-1" aria-label="Mobile Routes">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.03, duration: 0.25 }}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between min-h-[44px] px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-brand-500/10 text-brand-600 dark:text-cyan-300 font-bold border-l-4 border-cyan-400 pl-3'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                      }`
                    }
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="pt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-3">
              <Button
                href={PERSONAL_INFO.cvPath}
                download="YagnaSri-Reddy-Mukku-CV.pdf"
                variant="glow"
                size="md"
                icon={<Download className="w-4 h-4" />}
                className="w-full justify-center"
                ariaLabel="Download Curriculum Vitae (PDF)"
              >
                Download CV
              </Button>

              <p className="text-center text-xs text-slate-400 dark:text-slate-500 pt-1 font-mono">
                © 2026 {PERSONAL_INFO.name}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
