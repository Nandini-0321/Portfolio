import React from 'react';
import { motion } from 'framer-motion';

interface LightGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  hoverable?: boolean;
}

export const LightGlassCard: React.FC<LightGlassCardProps> = ({
  children,
  className = '',
  elevated = true,
  hoverable = true,
  onClick,
  ...rest
}) => {
  return (
    <motion.div
      onClick={onClick}
      {...(rest as any)}
      whileHover={hoverable ? { y: -4, transition: { duration: 0.25, ease: 'easeOut' } } : undefined}
      whileTap={hoverable ? { scale: 0.98 } : undefined}
      className={`relative rounded-3xl liquid-glass p-6 sm:p-7 transition-all duration-300 ${
        elevated ? 'shadow-neu-soft hover:shadow-neu-floating' : 'shadow-sm'
      } ${className}`}
    >
      {/* Specular soft corner glow */}
      <div 
        className="pointer-events-none absolute top-0 left-0 w-28 h-28 rounded-tl-3xl bg-gradient-to-br from-white/80 via-white/20 to-transparent opacity-90 dark:opacity-10" 
        aria-hidden="true" 
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default LightGlassCard;
