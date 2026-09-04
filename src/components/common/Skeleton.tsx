import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  width,
  height
}) => {
  const variantClasses = {
    text: 'h-4 rounded-md',
    rectangular: 'rounded-xl',
    circular: 'rounded-full'
  };

  const style: React.CSSProperties = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div
      style={style}
      className={`relative overflow-hidden bg-slate-200/70 dark:bg-slate-800/50 skeleton-shimmer ${variantClasses[variant]} ${className}`}
      aria-hidden="true"
    />
  );
};
