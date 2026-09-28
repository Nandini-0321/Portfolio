import React from 'react';

interface ClayBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'coral' | 'cyan' | 'outline' | 'current';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const ClayBadge: React.FC<ClayBadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon,
}) => {
  const sizeClasses = {
    sm: 'px-2.5 py-1 text-[11px]',
    md: 'px-3.5 py-1.5 text-xs',
  };

  const variantClasses = {
    default: 'clay-pill text-graphite dark:text-slate-200 font-semibold',
    coral: 'clay-pill-cyan font-bold text-white dark:text-slate-950',
    cyan: 'clay-pill-cyan font-bold text-white dark:text-slate-950',
    current: 'clay-pill-cyan font-bold text-white dark:text-slate-950 tracking-widest text-[10px] uppercase shadow-md',
    outline:
      'rounded-full border border-cyan-500/30 dark:border-cyan-500/50 bg-cyan-50/50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-300 font-bold',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 select-none transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default ClayBadge;
