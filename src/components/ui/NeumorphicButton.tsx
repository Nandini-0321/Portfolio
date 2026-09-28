import React from 'react';
import { motion } from 'framer-motion';

interface NeumorphicButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  target,
  rel,
  download,
  icon,
  type = 'button',
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-semibold rounded-xl gap-1.5',
    md: 'px-5 py-2.5 text-sm font-bold rounded-xl gap-2',
    lg: 'px-7 py-3.5 text-base font-bold rounded-2xl gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white dark:from-cyan-400 dark:to-cyan-300 dark:text-slate-950 dark:font-black shadow-clay-cyan active:translate-y-0.5 border border-white/30 dark:border-cyan-200/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]',
    secondary:
      'bg-surface-elevated dark:bg-[#1D2A3D] text-graphite dark:text-white neu-raised hover:neu-soft hover:text-cyan-600 dark:hover:text-cyan-400 active:translate-y-0.5 active:shadow-neu-inset border border-border-subtle dark:border-slate-700/60 dark:hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]',
    outline:
      'bg-transparent hover:bg-cyan-50 dark:hover:bg-cyan-950/40 text-cyan-600 dark:text-cyan-300 border-2 border-cyan-500/40 dark:border-cyan-400/60 hover:border-cyan-500 dark:hover:border-cyan-400 active:translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]',
    glass:
      'liquid-glass text-graphite dark:text-white hover:bg-white/90 dark:hover:bg-[#1D2A3D] hover:text-cyan-600 dark:hover:text-cyan-400 active:translate-y-0.5 shadow-neu-soft dark:border-slate-700/60 dark:hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]',
  };

  const combinedClasses = `inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={combinedClasses}
        onClick={onClick}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={combinedClasses}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
};

export default NeumorphicButton;
