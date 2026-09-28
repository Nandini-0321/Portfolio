import React from 'react';
import { motion } from 'framer-motion';

interface ClayStatProps {
  value: string;
  label: string;
  subtext?: string;
  icon?: React.ReactNode;
  accent?: 'coral' | 'cyan';
  className?: string;
}

export const ClayStat: React.FC<ClayStatProps> = ({
  value,
  label,
  subtext,
  icon,
  accent = 'cyan',
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
      className={`liquid-glass rounded-3xl p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 select-none border border-white/90 dark:border-slate-700/60 shadow-neu-soft hover:shadow-neu-floating transition-all duration-300 ${className}`}
    >
      {icon && (
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-cyan-100 text-cyan-600 dark:bg-cyan-950/60 dark:text-cyan-300 shadow-sm border border-cyan-200/50 dark:border-cyan-700/60"
        >
          {icon}
        </div>
      )}
      <div className="min-w-0">
        <div className="text-2xl sm:text-3xl font-black tracking-tight text-graphite dark:text-white leading-none">
          {value}
        </div>
        <div className="text-xs font-bold text-graphite-secondary dark:text-slate-200 uppercase tracking-wider mt-1">
          {label}
        </div>
        {subtext && (
          <div className="text-[11px] text-graphite-muted dark:text-slate-400 truncate mt-0.5 font-medium">
            {subtext}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ClayStat;
