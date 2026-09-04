import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUp, Download, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, GuviIcon } from './Icons';
import { PERSONAL_INFO } from '../../data/personal';
import { SOCIAL_LINKS } from '../../data/socialLinks';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon className="w-4 h-4" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-4 h-4" />;
      case 'Guvi':
        return <GuviIcon className="w-4 h-4" />;
      case 'Mail':
        return <Mail className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-surface/40 transition-colors">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h3>
            </Link>
            <p className="text-sm font-mono text-brand-600 dark:text-cyan-400 mb-3">
              {PERSONAL_INFO.primaryTitle}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md text-justified leading-relaxed mb-4">
              {PERSONAL_INFO.brandStatement}
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target={item.url.startsWith('http') ? '_blank' : undefined}
                  rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-cyan-400 hover:border-brand-500/40 transition-colors"
                  aria-label={item.name}
                >
                  {getSocialIcon(item.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-4">
              Explore
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-cyan-300 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-cyan-300 transition-colors">
                  Professional Experience
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-cyan-300 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-cyan-300 transition-colors">
                  Skills & Technologies
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-cyan-300 transition-colors">
                  Education Journey
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links & Actions */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-4">
              Resources & Contact
            </p>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <Link to="/certifications" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-cyan-300 transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/creative" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-cyan-300 transition-colors">
                  Creative Side (Resin Art)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-cyan-300 transition-colors">
                  Get In Touch
                </Link>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.cvPath}
                  download="YagnaSri-Reddy-Mukku-CV.pdf"
                  className="inline-flex items-center gap-1.5 text-brand-600 dark:text-cyan-400 hover:underline font-medium"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download CV (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-dark-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
            © 2026 {PERSONAL_INFO.name}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-brand-500 dark:hover:text-cyan-300 transition-colors p-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
