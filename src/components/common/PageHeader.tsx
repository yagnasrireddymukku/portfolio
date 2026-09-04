import React from 'react';
import { Badge } from './Badge';

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  className = '',
  children
}) => {
  return (
    <div className={`relative pt-4 pb-8 md:pb-12 border-b border-slate-200/80 dark:border-slate-800/80 ${className}`}>
      {/* Subtle ambient light glow behind title */}
      <div className="absolute top-0 left-1/4 -z-10 w-64 h-32 bg-brand-500/10 dark:bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-3xl">
        {badge && (
          <div className="mb-3">
            <Badge variant="brand">{badge}</Badge>
          </div>
        )}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2.5">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-5 flex flex-wrap items-center gap-3">{children}</div>}
      </div>
    </div>
  );
};
