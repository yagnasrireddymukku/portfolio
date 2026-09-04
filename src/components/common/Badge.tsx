import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'outline' | 'neutral' | 'accent' | 'emerald';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
  size = 'sm'
}) => {
  const sizeStyles = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  const variantStyles = {
    brand: 'bg-brand/10 text-brand-600 dark:text-brand-300 border border-brand/20 dark:border-brand-500/30',
    accent: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 dark:border-cyan-500/30',
    neutral: 'bg-slate-100 text-slate-750 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60',
    outline: 'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-transparent',
    emerald: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 dark:border-emerald-500/30'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 font-medium rounded-full font-mono tracking-wide ${sizeStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
