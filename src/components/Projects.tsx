import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data';
import { Project } from '../types';
import { Search, ExternalLink, Github, ArrowRight, Sparkles, Code2, Eye } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { LightGlassCard } from './ui/LightGlassCard';
import { ClayBadge } from './ui/ClayBadge';
import { NeumorphicButton } from './ui/NeumorphicButton';
import ProjectModal from './ProjectModal';

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI / ML', 'Full Stack', 'Data Science', 'Web Development'];

  // Identify featured project
  const featuredProject = useMemo(() => {
    return projectsData.find((p) => p.featured) || projectsData[0];
  }, []);

  // Filter regular project list
  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All' || p.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-canvas dark:bg-[#080D18] bg-micro-grid transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Portfolio Showcase"
          title="Featured Engineering"
          highlightedWord="Projects"
          subtitle="Explore 11+ production-grade applications, deep learning neural models, computer vision systems, and full-stack software."
        />

        {/* ── 1. FEATURED FLAGSHIP SHOWCASE (Large Horizontal Showcase) ── */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <div className="liquid-glass rounded-3xl p-5 sm:p-7 md:p-10 border border-white/90 dark:border-slate-700/60 shadow-xl overflow-hidden relative">
              {/* Background ambient lighting */}
              <div 
                className="pointer-events-none absolute -top-20 -right-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-cyan-500/10 blur-3xl" 
                aria-hidden="true" 
              />
              <div 
                className="pointer-events-none absolute -bottom-20 -left-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-cyan-500/5 blur-3xl" 
                aria-hidden="true" 
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
                {/* Left Info Column */}
                <div className="lg:col-span-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <ClayBadge variant="cyan" size="sm" icon={<Sparkles size={12} />}>
                      Featured Flagship
                    </ClayBadge>
                    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                      {featuredProject.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-graphite dark:text-white tracking-tight leading-tight">
                    {featuredProject.title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-graphite-secondary dark:text-slate-300 font-medium leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                    {featuredProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 sm:px-3 py-1 rounded-pill bg-surface dark:bg-[#111827] text-graphite dark:text-slate-300 text-[11px] sm:text-xs font-bold shadow-neu-soft border border-border-subtle dark:border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-3 sm:pt-4">
                    <NeumorphicButton
                      variant="primary"
                      size="md"
                      onClick={() => setSelectedProject(featuredProject)}
                      icon={<Eye size={16} />}
                      className="w-full sm:w-auto"
                    >
                      Project Case Study
                    </NeumorphicButton>

                    <NeumorphicButton
                      variant="secondary"
                      size="md"
                      href={featuredProject.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      icon={<Github size={16} />}
                      className="w-full sm:w-auto"
                    >
                      GitHub
                    </NeumorphicButton>
                  </div>
                </div>

                {/* Right Visual Column */}
                <div className="lg:col-span-6">
                  <div 
                    onClick={() => setSelectedProject(featuredProject)}
                    className="relative rounded-2xl overflow-hidden shadow-neu-raised cursor-pointer group h-52 sm:h-64 lg:h-80 bg-surface dark:bg-[#111827]"
                  >
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1170&auto=format&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 dark:from-black/85 via-transparent to-transparent opacity-90 group-hover:opacity-95 transition-opacity flex items-end p-4 sm:p-6">
                      <span className="text-white text-xs font-bold flex items-center gap-1.5 drop-shadow">
                        Click to expand case study & architecture <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── 2. NEUMORPHIC SEARCH & CATEGORY FILTERS ── */}
        <div className="mb-8 sm:mb-10 space-y-4 sm:space-y-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
            
            {/* Neumorphic Inset Search Field */}
            <div className="relative w-full md:w-80">
              <Search 
                size={16} 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-graphite-muted dark:text-slate-400 pointer-events-none" 
              />
              <input
                type="text"
                placeholder="Search projects by tech, title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface dark:bg-[#111827] text-graphite dark:text-white placeholder-graphite-muted/60 dark:placeholder-slate-500 text-xs font-medium rounded-pill py-2.5 sm:py-3 pl-10 pr-8 outline-none shadow-neu-inset border border-black/5 dark:border-slate-700/60 transition-all focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 dark:focus:border-cyan-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-graphite-muted dark:text-slate-400 hover:text-graphite dark:hover:text-white font-bold px-2"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 overflow-x-auto py-1 max-w-full">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold rounded-pill transition-all duration-200 select-none shrink-0 ${
                      isActive
                        ? 'clay-pill-cyan shadow-clay-cyan scale-105'
                        : 'clay-pill text-graphite-secondary dark:text-slate-300 dark:bg-[#1D2A3D] dark:border-slate-700/60 hover:text-cyan-600 dark:hover:text-cyan-400'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── 3. RESPONSIVE PROJECT CARDS GRID ── */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 sm:py-16 neu-soft rounded-3xl p-6 sm:p-8 max-w-md mx-auto">
            <p className="text-sm font-bold text-graphite dark:text-white mb-2">
              No projects found matching "{searchQuery}"
            </p>
            <p className="text-xs text-graphite-muted dark:text-slate-400 mb-4">
              Try adjusting your search terms or selecting 'All' categories.
            </p>
            <NeumorphicButton
              variant="secondary"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Reset Filters
            </NeumorphicButton>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <LightGlassCard
                    onClick={() => setSelectedProject(project)}
                    className="h-full flex flex-col p-0 overflow-hidden cursor-pointer group"
                  >
                    {/* Image Area */}
                    <div className="relative h-40 sm:h-44 overflow-hidden bg-surface dark:bg-[#111827]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1170&auto=format&fit=crop';
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <ClayBadge variant="cyan" size="sm">
                          {project.category}
                        </ClayBadge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-base sm:text-lg font-black text-graphite dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-1 mb-1.5 sm:mb-2">
                          {project.title}
                        </h4>
                        <p className="text-xs text-graphite-secondary dark:text-slate-300 leading-relaxed line-clamp-2 mb-3 sm:mb-4 font-medium">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
                          {project.tech.slice(0, 4).map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded-md bg-surface dark:bg-[#111827] text-graphite-secondary dark:text-slate-300 text-[10px] font-bold border border-border-subtle dark:border-slate-700/60"
                            >
                              {t}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="px-1.5 py-0.5 text-[10px] font-bold text-graphite-muted dark:text-slate-400">
                              +{project.tech.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-3 border-t border-border-subtle dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-cyan-600 dark:text-cyan-400">
                        <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          View Details <ArrowRight size={13} />
                        </span>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg text-graphite-muted dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                          aria-label="View source code on GitHub"
                        >
                          <Github size={15} />
                        </a>
                      </div>
                    </div>
                  </LightGlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Modal Case Study Display */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
