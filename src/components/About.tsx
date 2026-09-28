import React from 'react';
import { motion } from 'framer-motion';
import { aboutData, personalInfo } from '../data';
import { CheckCircle2, Target, Languages, Award, Compass, ArrowRight } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { LightGlassCard } from './ui/LightGlassCard';
import { ClayBadge } from './ui/ClayBadge';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-canvas dark:bg-[#080D18] bg-micro-grid relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <SectionHeading
          badge="About Me"
          title="Engineering with"
          highlightedWord="Precision & Purpose"
          subtitle="A deeper look into my engineering philosophy, academic journey, and cross-functional technical capabilities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ── LEFT COLUMN: Professional Introduction & Highlights ── */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Main Summary Card */}
            <LightGlassCard className="p-5 sm:p-7 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-300 flex items-center justify-center font-black border border-cyan-200/50 dark:border-cyan-700/60 shrink-0">
                  <Compass size={20} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-graphite dark:text-white">
                    Professional Summary
                  </h3>
                  <p className="text-[11px] sm:text-xs font-bold text-graphite-muted dark:text-slate-400 uppercase tracking-wider">
                    Background & Foundation
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-graphite-secondary dark:text-slate-300 leading-relaxed font-medium mb-6">
                {aboutData.summary}
              </p>

              {/* Career Objective Inset Box */}
              <div className="rounded-2xl bg-surface dark:bg-[#111827] p-4 sm:p-5 shadow-neu-inset border border-black/5 dark:border-slate-700/60">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
                  <Target size={15} />
                  <span>Career Objective</span>
                </div>
                <p className="text-xs sm:text-sm text-graphite dark:text-slate-200 font-medium leading-relaxed italic">
                  "{aboutData.careerObjective}"
                </p>
              </div>
            </LightGlassCard>

            {/* Core Strengths Checklist Card */}
            <LightGlassCard className="p-5 sm:p-7 md:p-8">
              <h3 className="text-base sm:text-lg font-black text-graphite dark:text-white mb-4 sm:mb-5 flex items-center gap-2">
                <Award size={18} className="text-cyan-600 dark:text-cyan-400" />
                <span>Core Architectural Strengths</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {aboutData.strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-2.5 p-3 rounded-2xl bg-surface dark:bg-[#1D2A3D] border border-border-subtle dark:border-slate-700/60"
                  >
                    <CheckCircle2 size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-graphite dark:text-slate-200 leading-snug">
                      {strength}
                    </span>
                  </motion.div>
                ))}
              </div>
            </LightGlassCard>
          </motion.div>

          {/* ── RIGHT COLUMN: Elevated Glass Profile Card & Academic Snapshot ── */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Elevated Identity Card */}
            <div className="liquid-glass rounded-3xl p-5 sm:p-7 md:p-8 relative">
              <div className="flex items-center gap-3.5 sm:gap-4 mb-5 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 text-white flex items-center justify-center font-black text-xl sm:text-2xl shadow-clay-cyan border border-white/40 shrink-0">
                  N
                </div>
                <div className="min-w-0">
                  <h4 className="text-xl sm:text-2xl font-black text-graphite dark:text-white leading-tight">
                    {personalInfo.name}
                  </h4>
                  <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400 truncate">
                    {personalInfo.title}
                  </p>
                  <p className="text-[11px] text-graphite-muted dark:text-slate-400 mt-0.5 truncate">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Highlights Chips */}
              <div className="space-y-2 sm:space-y-2.5 mb-6">
                {aboutData.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-surface-elevated/80 dark:bg-[#1D2A3D] border border-border-subtle dark:border-slate-700/60 text-xs font-semibold text-graphite dark:text-slate-200 shadow-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Languages Section */}
              <div className="pt-4 sm:pt-5 border-t border-black/5 dark:border-slate-700/60">
                <div className="flex items-center gap-2 text-xs font-bold text-graphite-secondary dark:text-slate-300 uppercase tracking-wider mb-2.5 sm:mb-3">
                  <Languages size={14} className="text-cyan-600 dark:text-cyan-400" />
                  <span>Languages Spoken</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {aboutData.languages.map((lang) => (
                    <ClayBadge key={lang} variant="default" size="sm">
                      {lang}
                    </ClayBadge>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Contact Prompt Inset */}
            <div className="liquid-glass rounded-3xl p-5 sm:p-6 text-center border border-white/90 dark:border-slate-700/60 shadow-neu-soft">
              <p className="text-[11px] sm:text-xs font-bold text-graphite-muted dark:text-slate-400 uppercase tracking-wider mb-1">
                Collaboration Inquiries
              </p>
              <h5 className="text-sm sm:text-base font-black text-graphite dark:text-white mb-3">
                Interested in working together?
              </h5>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 underline decoration-2 underline-offset-4"
              >
                <span>Send a direct project inquiry</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
