import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { MobileNav } from './MobileNav';
import { YrmMonogram } from './Icons';
import { PERSONAL_INFO } from '../../data/personal';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Education', path: '/education' },
  { name: 'Certificates', path: '/certifications' },
  { name: 'Creative', path: '/creative' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-dark-bg/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-dark-border/80 shadow-lg shadow-black/5'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-lg py-1"
            aria-label="YagnaSri Reddy Mukku Home"
          >
            <YrmMonogram size="sm" />
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-cyan-400 transition-colors">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                AI & Python Full-Stack
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with animated gliding active pill */}
          <nav
            className="hidden xl:flex items-center gap-1 bg-slate-100/80 dark:bg-dark-surface/60 border border-slate-200/80 dark:border-dark-border/80 p-1.5 rounded-full shadow-inner backdrop-blur-md"
            aria-label="Desktop Navigation"
          >
            {NAV_LINKS.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className="relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 z-10"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-white dark:bg-dark-card border border-slate-200 dark:border-cyan-500/30 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-20 ${
                      isActive
                        ? 'text-brand-600 dark:text-cyan-300 font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                  </span>
                </NavLink>
              );
            })}
          </nav>

          {/* Medium screen navigation condensed */}
          <nav
            className="hidden md:flex xl:hidden items-center gap-1"
            aria-label="Medium Navigation"
          >
            {NAV_LINKS.slice(0, 5).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-2.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isActive
                      ? 'bg-brand-500/10 text-brand-600 dark:text-cyan-300 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right-Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <Button
                href={PERSONAL_INFO.cvPath}
                download="YagnaSri-Reddy-Mukku-CV.pdf"
                variant="glow"
                size="sm"
                icon={<Download className="w-3.5 h-3.5" />}
                ariaLabel="Download Curriculum Vitae (PDF)"
              >
                Download CV
              </Button>
            </div>

            {/* Mobile Hamburger Button with 48px touch target and animated morphing bars */}
            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="xl:hidden w-11 h-11 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 z-50 cursor-pointer"
              aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav-dialog"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                    isMobileOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-200 ${
                    isMobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                    isMobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        navItems={NAV_LINKS}
      />
    </>
  );
};
