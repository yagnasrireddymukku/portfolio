import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  download,
  target,
  rel,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon,
  iconPosition = 'left',
  ariaLabel
}) => {
  const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'success'>('idle');

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs font-medium gap-1.5 rounded-lg',
    md: 'px-5 py-2.5 text-sm font-medium gap-2 rounded-xl',
    lg: 'px-6 py-3.5 text-base font-semibold gap-2.5 rounded-xl'
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-brand-600 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white shadow-md shadow-brand-600/25 border border-cyan-400/30 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none',
    glow:
      'bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 hover:from-brand-500 hover:via-cyan-500 hover:to-brand-400 text-white shadow-lg shadow-brand-500/30 hover:shadow-cyan-500/40 border border-white/20 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none',
    secondary:
      'bg-white/80 dark:bg-dark-card/90 hover:bg-slate-100 dark:hover:bg-dark-hover text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-dark-border shadow-sm backdrop-blur-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none',
    outline:
      'border border-slate-300 dark:border-dark-border hover:border-brand-500 dark:hover:border-cyan-400 text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-cyan-400 bg-transparent transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none',
    ghost:
      'bg-transparent hover:bg-slate-100 dark:hover:bg-dark-card/60 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none'
  };

  const baseStyles =
    'inline-flex items-center justify-center cursor-pointer select-none text-center disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed group';

  const handleDownloadClick = () => {
    if (download) {
      setDownloadState('loading');
      setTimeout(() => {
        setDownloadState('success');
        setTimeout(() => {
          setDownloadState('idle');
        }, 2200);
      }, 600);
    }
    if (onClick) onClick();
  };

  const content = (
    <>
      {downloadState === 'loading' ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
          <span>Preparing CV...</span>
        </>
      ) : downloadState === 'success' ? (
        <>
          <Check className="w-4 h-4 text-emerald-400" />
          <span>CV Downloaded!</span>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
              {icon}
            </span>
          )}
          <span>{children}</span>
          {icon && iconPosition === 'right' && (
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              {icon}
            </span>
          )}
        </>
      )}
    </>
  );

  if (to) {
    return (
      <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
        <Link
          to={to}
          className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
          aria-label={ariaLabel}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
        <a
          href={href}
          download={download}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : rel}
          onClick={handleDownloadClick}
          className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  );
};
