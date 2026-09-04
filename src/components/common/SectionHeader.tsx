import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
  className = ''
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-8 sm:mb-10 max-w-2xl ${alignClass} ${className}`}>
      {badge && (
        <div className="mb-2.5">
          <Badge variant="brand">{badge}</Badge>
        </div>
      )}
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
