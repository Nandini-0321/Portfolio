import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsCategories } from '../data';
import { 
  Code2, 
  Cpu, 
  Database, 
  Layout, 
  Server, 
  Eye, 
  BarChart3, 
  Cloud, 
  Wrench, 
  Layers, 
  Boxes 
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { LightGlassCard } from './ui/LightGlassCard';

const categoryIcons: Record<string, React.ReactNode> = {
  'AI / Machine Learning': <Cpu className="w-5 h-5 text-cyan-500" />,
  'Computer Vision': <Eye className="w-5 h-5 text-cyan-500" />,
  'Programming Languages': <Code2 className="w-5 h-5 text-cyan-500" />,
  'Web Development': <Layout className="w-5 h-5 text-cyan-500" />,
  'Frontend': <Layers className="w-5 h-5 text-cyan-500" />,
  'Backend': <Server className="w-5 h-5 text-cyan-500" />,
  'Databases': <Database className="w-5 h-5 text-cyan-500" />,
  'Data Science': <BarChart3 className="w-5 h-5 text-cyan-500" />,
  'Cloud / Deployment': <Cloud className="w-5 h-5 text-cyan-500" />,
  'Developer Tools': <Wrench className="w-5 h-5 text-cyan-500" />,
  'Other Technologies': <Boxes className="w-5 h-5 text-cyan-500" />,
};

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 bg-canvas dark:bg-[#080D18] bg-micro-grid transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Technical Proficiency"
          title="Curated Technology"
          highlightedWord="Catalog"
          subtitle="A structured domain overview of frameworks, languages, AI architectures, and infrastructure tools I work with."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillsCategories.map((category, idx) => {
            const hasSelected = selectedSkill && category.skills.includes(selectedSkill);

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <LightGlassCard
                  className={`h-full p-4 sm:p-6 transition-all duration-300 ${
                    hasSelected ? 'ring-2 ring-cyan-500/50 shadow-neu-floating' : ''
                  }`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 sm:gap-3.5 mb-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-surface dark:bg-[#111827] border border-border-subtle dark:border-slate-700/60 flex items-center justify-center shadow-neu-soft shrink-0">
                      {categoryIcons[category.name] || <Code2 className="w-5 h-5 text-cyan-500" />}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-graphite dark:text-white leading-tight">
                        {category.name}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-graphite-muted dark:text-slate-400 leading-tight mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                    {category.skills.map((skill) => {
                      const isSkillSelected = selectedSkill === skill;
                      return (
                        <button
                          key={skill}
                          onClick={() => setSelectedSkill(isSkillSelected ? null : skill)}
                          className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-pill transition-all duration-200 cursor-pointer ${
                            isSkillSelected
                              ? 'clay-pill-cyan shadow-clay-cyan scale-105'
                              : 'clay-pill text-graphite dark:text-slate-200 dark:bg-[#1D2A3D] dark:border-slate-700/60 hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400'
                          }`}
                        >
                          {skill}
                        </button>
                      );
                    })}
                  </div>
                </LightGlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Interactivity Hint */}
        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-xs font-bold text-graphite-muted dark:text-slate-400">
            Tip: Click any technology pill to highlight related domain categories
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
