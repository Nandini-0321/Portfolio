import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedWord,
  subtitle,
  center = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : 'text-left'} ${className}`}>
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-700/60 text-xs font-black uppercase tracking-widest mb-4 select-none shadow-sm"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
        {badge}
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-black text-graphite dark:text-white tracking-tight leading-tight"
      >
        {title}{' '}
        {highlightedWord && (
          <span className="relative inline-block text-cyan-600 dark:text-cyan-400">
            {highlightedWord}
            <span
              className="absolute -bottom-1 left-0 right-0 h-1 bg-cyan-500/30 dark:bg-cyan-400/40 rounded-full"
              aria-hidden="true"
            />
          </span>
        )}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-sm md:text-base text-graphite-secondary dark:text-slate-300 max-w-2xl font-medium leading-relaxed ${
            center ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
