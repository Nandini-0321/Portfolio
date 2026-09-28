import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { LightGlassCard } from './ui/LightGlassCard';
import { ClayBadge } from './ui/ClayBadge';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-canvas dark:bg-[#080D18] bg-micro-grid transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <SectionHeading
          badge="Career Milestones"
          title="Professional Industry"
          highlightedWord="Journey"
          subtitle="3 industry internships spanning Machine Learning engineering, Artificial Intelligence research, and applied data science."
        />

        <div className="relative mt-8">
          {/* Subtle Vertical Timeline Line */}
          <div 
            className="absolute left-3.5 sm:left-4 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-border-subtle dark:bg-white/10 rounded-full" 
            aria-hidden="true" 
          />

          <div className="space-y-8 sm:space-y-10 relative z-10">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Card */}
                  <div className="w-full md:w-[46%] pl-8 sm:pl-10 md:pl-0">
                    <LightGlassCard className="p-4 sm:p-6 md:p-7">
                      
                      {/* Top Header: Role & Status */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-base sm:text-lg font-black text-graphite dark:text-white leading-tight">
                            {exp.role}
                          </h3>
                          <p className="text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400 mt-0.5">
                            {exp.company}
                          </p>
                        </div>

                        {exp.isCurrent && (
                          <ClayBadge variant="cyan" size="sm">
                            CURRENT
                          </ClayBadge>
                        )}
                      </div>

                      {/* Duration & Location Metadata */}
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-bold text-graphite-muted dark:text-slate-400 uppercase tracking-wider mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-black/5 dark:border-slate-700/60">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} className="text-cyan-500" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-cyan-500" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Key Responsibilities */}
                      <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-graphite-secondary dark:text-slate-300 leading-relaxed font-medium">
                            <CheckCircle2 size={13} className="text-cyan-500 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technology Pills */}
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-1.5 pt-1 sm:pt-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 sm:px-2.5 py-0.5 rounded-md bg-surface dark:bg-[#111827] text-graphite dark:text-slate-300 text-[10px] font-bold border border-black/5 dark:border-slate-700/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </LightGlassCard>
                  </div>

                  {/* Center Node Indicator */}
                  <div className="absolute left-3.5 sm:left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-surface-elevated dark:bg-[#1D2A3D] border-2 border-cyan-400 shadow-neu-soft flex items-center justify-center">
                      <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${exp.isCurrent ? 'bg-cyan-500 animate-pulse' : 'bg-cyan-500/70'}`} />
                    </div>
                  </div>

                  {/* Empty Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[46%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
