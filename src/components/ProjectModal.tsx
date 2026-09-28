import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, ShieldAlert, Sparkles, Cpu } from 'lucide-react';
import { Project } from '../types';
import { NeumorphicButton } from './ui/NeumorphicButton';
import { ClayBadge } from './ui/ClayBadge';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Soft Translucent Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-graphite/40 dark:bg-black/75 backdrop-blur-md transition-opacity"
        />

        {/* Large Light Liquid Glass Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl liquid-glass-modal rounded-3xl p-5 sm:p-7 md:p-8 max-h-[92vh] overflow-y-auto z-10 shadow-2xl border border-white/90 dark:border-slate-700/60"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/80 dark:bg-[#1D2A3D] text-graphite dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 border border-border-subtle dark:border-slate-700/60 flex items-center justify-center transition-transform hover:scale-105 z-20"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>

          {/* Header & Category */}
          <div className="mb-4 sm:mb-6 pr-8">
            <ClayBadge variant="cyan" size="sm" className="mb-2">
              {project.category}
            </ClayBadge>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-graphite dark:text-white tracking-tight leading-tight">
              {project.title}
            </h2>
            {project.role && (
              <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mt-1">
                Role: {project.role}
              </p>
            )}
          </div>

          {/* Image & Quick Overview */}
          <div className="rounded-2xl overflow-hidden mb-4 sm:mb-6 h-48 sm:h-64 md:h-72 bg-surface dark:bg-[#111827] shadow-neu-inset relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1170&auto=format&fit=crop';
              }}
            />
          </div>

          {/* Overview Description */}
          <div className="mb-5 sm:mb-6">
            <h3 className="text-xs sm:text-sm font-black text-graphite dark:text-white uppercase tracking-wider mb-2">
              Project Overview
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-graphite-secondary dark:text-slate-300 leading-relaxed font-medium">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grids if available */}
          {(project.problem || project.solution) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-5 sm:mb-6">
              {project.problem && (
                <div className="p-3.5 sm:p-4 rounded-2xl bg-surface dark:bg-[#111827] border border-border-subtle dark:border-slate-700/60 shadow-neu-soft">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider mb-1.5">
                    <ShieldAlert size={14} />
                    <span>The Challenge</span>
                  </div>
                  <p className="text-xs text-graphite-secondary dark:text-slate-300 leading-relaxed font-medium">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-3.5 sm:p-4 rounded-2xl bg-surface dark:bg-[#111827] border border-border-subtle dark:border-slate-700/60 shadow-neu-soft">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-1.5">
                    <Sparkles size={14} />
                    <span>Engineered Solution</span>
                  </div>
                  <p className="text-xs text-graphite-secondary dark:text-slate-300 leading-relaxed font-medium">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Architecture Pipeline if available */}
          {project.architecture && (
            <div className="mb-5 sm:mb-6 p-3.5 sm:p-4 rounded-2xl bg-surface dark:bg-[#111827] border border-border-subtle dark:border-slate-700/60 shadow-neu-inset">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
                <Cpu size={14} />
                <span>System Architecture Pipeline</span>
              </div>
              <p className="text-[11px] sm:text-xs font-mono text-graphite dark:text-slate-200 leading-relaxed break-words">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Features List */}
          {project.features && project.features.length > 0 && (
            <div className="mb-5 sm:mb-6">
              <h3 className="text-xs sm:text-sm font-black text-graphite dark:text-white uppercase tracking-wider mb-2.5 sm:mb-3">
                Key Features & Capabilities
              </h3>
              <div className="space-y-2">
                {project.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-graphite-secondary dark:text-slate-300 font-medium">
                    <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-[11px] sm:text-xs font-bold text-graphite-muted dark:text-slate-400 uppercase tracking-wider mb-2 sm:mb-2.5">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tech.map((t) => (
                <ClayBadge key={t} variant="default" size="sm">
                  {t}
                </ClayBadge>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4 border-t border-black/5 dark:border-slate-700/60">
            {project.projectUrl && project.projectUrl !== '#' && (
              <NeumorphicButton
                variant="primary"
                size="md"
                href={project.projectUrl}
                target="_blank"
                rel="noreferrer"
                icon={<ExternalLink size={16} />}
                className="w-full sm:w-auto"
              >
                View Live Demo
              </NeumorphicButton>
            )}

            <NeumorphicButton
              variant="secondary"
              size="md"
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              icon={<Github size={16} />}
              className="w-full sm:w-auto"
            >
              GitHub Repository
            </NeumorphicButton>

            <button
              onClick={onClose}
              className="sm:ml-auto text-xs font-bold text-graphite-muted dark:text-slate-400 hover:text-graphite dark:hover:text-white px-4 py-2 text-center"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
