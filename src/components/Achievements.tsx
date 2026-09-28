import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../data';
import { Trophy, Award, Users } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { LightGlassCard } from './ui/LightGlassCard';
import { ClayBadge } from './ui/ClayBadge';

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />,
  Medal: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />,
  Users: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />,
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 sm:py-20 md:py-24 bg-canvas dark:bg-[#080D18] bg-micro-grid transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <SectionHeading
          badge="Honors & Recognition"
          title="Verified"
          highlightedWord="Achievements"
          subtitle="Notable accomplishments across competitive technical symposiums, hackathons, and campus leadership."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <LightGlassCard className="h-full flex flex-col justify-between p-5 sm:p-7">
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-surface dark:bg-[#111827] border border-border-subtle dark:border-slate-700/60 flex items-center justify-center shadow-neu-soft shrink-0">
                      {iconMap[item.iconName] || <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />}
                    </div>
                    <ClayBadge variant="default" size="sm">
                      {item.category}
                    </ClayBadge>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-graphite dark:text-white mb-1.5 sm:mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2.5 sm:mb-3">
                    {item.organization}
                  </p>

                  <p className="text-xs text-graphite-secondary dark:text-slate-300 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-5 mt-4 border-t border-border-subtle dark:border-slate-700/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-graphite-muted dark:text-slate-400">
                    Verified Credential
                  </span>
                </div>
              </LightGlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
