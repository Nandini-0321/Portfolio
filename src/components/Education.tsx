import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { educationData, certificationsData } from '../data';
import {
  GraduationCap, Award, Calendar, BookOpen, ExternalLink,
  CheckCircle2, X, ZoomIn, FileText, Shield, Cpu, Code2,
  Trophy, Heart, Briefcase
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { LightGlassCard } from './ui/LightGlassCard';
import { ClayBadge } from './ui/ClayBadge';

// ── Category icon map ──────────────────────────────────────────────────────────
const categoryIcon: Record<string, React.ReactNode> = {
  'AI & Machine Learning': <Cpu size={12} />,
  'Generative AI': <Cpu size={12} />,
  'Cybersecurity': <Shield size={12} />,
  'Web Development': <Code2 size={12} />,
  'Internship': <Briefcase size={12} />,
  'Competitions': <Trophy size={12} />,
  'Community Service': <Heart size={12} />,
  'Professional Development': <BookOpen size={12} />,
};

const CATEGORY_COLORS: Record<string, string> = {
  'AI & Machine Learning': 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 border-cyan-200/50 dark:border-cyan-700/50',
  'Generative AI': 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50 border-violet-200/50 dark:border-violet-700/50',
  'Cybersecurity': 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200/50 dark:border-emerald-700/50',
  'Web Development': 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border-blue-200/50 dark:border-blue-700/50',
  'Internship': 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border-amber-200/50 dark:border-amber-700/50',
  'Competitions': 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 border-rose-200/50 dark:border-rose-700/50',
  'Community Service': 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/50 border-teal-200/50 dark:border-teal-700/50',
  'Professional Development': 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200/50 dark:border-indigo-700/50',
};

// Gradient banners for each category (used if image fails or missing)
const CARD_GRADIENTS: Record<string, string> = {
  'AI & Machine Learning': 'from-cyan-500 via-cyan-600 to-sky-700',
  'Generative AI': 'from-violet-500 via-purple-600 to-indigo-700',
  'Cybersecurity': 'from-emerald-500 via-teal-600 to-green-700',
  'Web Development': 'from-blue-500 via-blue-600 to-indigo-700',
  'Internship': 'from-amber-400 via-orange-500 to-yellow-600',
  'Competitions': 'from-rose-500 via-pink-600 to-red-700',
  'Community Service': 'from-teal-500 via-cyan-600 to-emerald-700',
  'Professional Development': 'from-indigo-500 via-purple-600 to-violet-700',
};

// ── Filter tabs ────────────────────────────────────────────────────────────────
const FILTERS = ['All', 'AI & Machine Learning', 'Generative AI', 'Cybersecurity', 'Web Development', 'Internship', 'Competitions', 'Community Service', 'Professional Development'];

// ── Certificate Viewer Modal ───────────────────────────────────────────────────
interface CertModalProps {
  cert: typeof certificationsData[0] | null;
  onClose: () => void;
}

const CertificateModal: React.FC<CertModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  const thumbnailSrc = cert.thumbnail || cert.previewImage;
  const pdfUrl = cert.pdf || cert.file;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 md:p-8"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
        aria-label={`Certificate: ${cert.title}`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/75 dark:bg-black/90 backdrop-blur-md" />

        {/* Modal panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          className="relative z-10 w-full max-w-3xl max-h-[92vh] bg-white dark:bg-[#111827] rounded-3xl shadow-2xl border border-white/90 dark:border-slate-700/60 flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-700/60 shrink-0">
            <div className="flex-1 min-w-0 pr-3">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                {cert.category && (
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${CATEGORY_COLORS[cert.category] ?? 'text-graphite-muted'}`}>
                    {categoryIcon[cert.category]}
                    {cert.category}
                  </span>
                )}
                {cert.date && (
                  <span className="text-[10px] font-bold text-graphite-muted dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Calendar size={10} /> {cert.date}
                  </span>
                )}
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-black text-graphite dark:text-white leading-snug line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mt-0.5">{cert.issuer}</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-graphite-secondary dark:text-slate-300 hover:bg-red-100 dark:hover:bg-red-950/40 hover:text-red-500 transition-all duration-200 shrink-0"
              aria-label="Close certificate viewer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Certificate image viewer */}
          <div className="flex-1 overflow-auto p-3 sm:p-5 min-h-0 flex flex-col items-center justify-center">
            {thumbnailSrc ? (
              <img
                src={thumbnailSrc}
                alt={`${cert.title} certificate — Nandini R`}
                className="w-full max-h-[62vh] rounded-xl border border-slate-200 dark:border-slate-700/60 object-contain shadow-sm"
                loading="eager"
              />
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-graphite-muted dark:text-slate-500">
                <FileText size={40} className="mb-3 opacity-40" />
                <p className="text-sm font-medium">Certificate preview available</p>
              </div>
            )}

            {/* Oracle badge accent if available */}
            {cert.badgeImage && (
              <div className="mt-3 w-full flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-[#1D2A3D] border border-slate-200 dark:border-slate-700/60">
                <img
                  src={cert.badgeImage}
                  alt={`${cert.issuer} badge`}
                  className="w-10 h-10 object-contain shrink-0"
                  loading="lazy"
                />
                <p className="text-xs text-graphite-secondary dark:text-slate-300 font-medium">
                  Official digital credential issued by <strong className="text-graphite dark:text-white">{cert.issuer}</strong>
                </p>
              </div>
            )}

            {/* Description */}
            {cert.description && (
              <p className="mt-3 w-full text-xs sm:text-sm text-graphite-secondary dark:text-slate-300 font-medium leading-relaxed">
                {cert.description}
              </p>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-4 sm:px-5 py-3 sm:py-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between gap-3 shrink-0">
            <div className="text-[11px] text-graphite-muted dark:text-slate-500 font-medium truncate">
              {cert.credentialId ? `Credential ID: ${cert.credentialId}` : 'Nandini R — Verified Certificate'}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 shadow-sm transition-all duration-200"
                  aria-label={`Open ${cert.title} PDF in new tab`}
                >
                  <FileText size={12} /> <span>Open PDF</span> <ExternalLink size={10} />
                </a>
              )}
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-700/60 hover:border-cyan-400 transition-all duration-200"
                  aria-label={`Verify ${cert.title}`}
                >
                  Verify <ExternalLink size={10} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ── Main Education Component ───────────────────────────────────────────────────
const Education: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCert, setSelectedCert] = useState<typeof certificationsData[0] | null>(null);
  const [selectedMarkcard, setSelectedMarkcard] = useState<{ image: string; title: string; score: string } | null>(null);

  const filteredCerts = activeFilter === 'All'
    ? certificationsData
    : certificationsData.filter(c => c.category === activeFilter);

  const openCert = useCallback((cert: typeof certificationsData[0]) => {
    setSelectedCert(cert);
  }, []);

  const closeCert = useCallback(() => {
    setSelectedCert(null);
  }, []);

  const openMarkcard = useCallback((image: string, title: string, score: string) => {
    setSelectedMarkcard({ image, title, score });
  }, []);

  const closeMarkcard = useCallback(() => {
    setSelectedMarkcard(null);
  }, []);

  return (
    <>
      <section id="education" className="py-16 sm:py-20 md:py-24 bg-canvas dark:bg-[#080D18] bg-micro-grid transition-colors duration-500">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <SectionHeading
            badge="Academic Qualifications"
            title="Education & Verified"
            highlightedWord="Credentials"
            subtitle="Formal computer science engineering foundation paired with certified specialized technical training."
          />

          {/* ── TOP: Education Timeline ───────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12 sm:mb-16">
            <div className="lg:col-span-12 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-300 flex items-center justify-center font-bold border border-cyan-200/50 dark:border-cyan-700/60 shrink-0">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-graphite dark:text-white">Academic Degrees</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <LightGlassCard className="p-5 sm:p-6 h-full flex flex-col">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h4 className="text-sm sm:text-base font-black text-graphite dark:text-white leading-tight">{edu.degree}</h4>
                        <ClayBadge variant="cyan" size="sm">{edu.score}</ClayBadge>
                      </div>
                      <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-1.5 text-xs text-graphite-muted dark:text-slate-400 font-bold mb-3">
                        <Calendar size={13} className="text-cyan-500" />
                        <span>{edu.duration}</span>
                      </div>
                      {edu.details && (
                        <ul className="space-y-1.5 pt-2 border-t border-border-subtle dark:border-slate-700/60 flex-1">
                          {edu.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs text-graphite-secondary dark:text-slate-300 font-medium">
                              <CheckCircle2 size={13} className="text-cyan-500 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Markcard action button */}
                      {edu.markcardImage && (
                        <div className="mt-4 pt-3 border-t border-border-subtle dark:border-slate-700/60">
                          <button
                            onClick={() => openMarkcard(edu.markcardImage!, edu.degree, edu.score)}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-700/60 bg-cyan-50/50 dark:bg-cyan-950/30 hover:bg-cyan-100 dark:hover:bg-cyan-950/60 hover:border-cyan-400 transition-all duration-200 cursor-pointer"
                          >
                            <ZoomIn size={14} /> View Results
                          </button>
                        </div>
                      )}
                    </LightGlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── BOTTOM: Certifications Gallery ───────────────────────── */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-2xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-300 flex items-center justify-center font-bold border border-cyan-200/50 dark:border-cyan-700/60 shrink-0">
                <Award size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-graphite dark:text-white">Certifications Gallery</h3>
              <span className="ml-auto text-xs font-bold text-graphite-muted dark:text-slate-400">
                {filteredCerts.length} credential{filteredCerts.length !== 1 ? 's' : ''}
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pb-2 overflow-x-auto max-w-full">
              {FILTERS.filter(f => f === 'All' || certificationsData.some(c => c.category === f)).map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-all duration-200 shrink-0 cursor-pointer ${
                    activeFilter === filter
                      ? 'bg-cyan-500 text-white border-cyan-500 shadow-sm'
                      : 'text-graphite-secondary dark:text-slate-300 border-border-subtle dark:border-slate-700/60 bg-white/60 dark:bg-[#1D2A3D]/60 hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400'
                  }`}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Certificates Grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              <AnimatePresence mode="popLayout">
                {filteredCerts.map((cert, index) => {
                  const thumbnailSrc = cert.thumbnail || cert.previewImage;
                  const pdfUrl = cert.pdf || cert.file;
                  const gradient = CARD_GRADIENTS[cert.category ?? ''] ?? 'from-cyan-500 via-cyan-600 to-sky-700';

                  return (
                    <motion.div
                      key={cert.title}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10, scale: 0.96 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <LightGlassCard
                        className="h-full flex flex-col overflow-hidden group cursor-pointer hover:border-cyan-400/60 dark:hover:border-cyan-400/50 hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)] transition-all duration-300 p-0"
                        onClick={() => openCert(cert)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e: React.KeyboardEvent) => e.key === 'Enter' && openCert(cert)}
                        aria-label={`View ${cert.title} certificate`}
                      >
                        {/* ── Visual Thumbnail Banner (Responsive Image Thumbnail) ── */}
                        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-2xl shrink-0 bg-slate-100 dark:bg-[#0B1120]">
                          {thumbnailSrc ? (
                            <img
                              src={thumbnailSrc}
                              alt={`${cert.title} certificate thumbnail`}
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                              loading={index === 0 ? "eager" : "lazy"}
                              onError={(e) => {
                                // Fallback to gradient banner if image fails
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  const fallback = parent.querySelector('.cert-fallback-banner');
                                  if (fallback) fallback.classList.remove('hidden');
                                }
                              }}
                            />
                          ) : null}

                          {/* Fallback gradient banner */}
                          <div className={`cert-fallback-banner ${thumbnailSrc ? 'hidden' : ''} absolute inset-0 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center overflow-hidden`}>
                            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/10" />
                            {cert.badgeImage ? (
                              <img src={cert.badgeImage} alt={`${cert.issuer} badge`} className="w-14 h-14 object-contain drop-shadow-lg mb-1 z-10" loading="lazy" />
                            ) : (
                              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-black text-2xl mb-1 z-10 border border-white/30 shadow-lg">
                                {cert.issuer.charAt(0)}
                              </div>
                            )}
                            <span className="z-10 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest border border-white/30">
                              Certificate
                            </span>
                          </div>

                          {/* Hover overlay with zoom icon */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all duration-300">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/25 backdrop-blur-md text-white text-xs font-bold border border-white/40 shadow-lg">
                              <ZoomIn size={13} /> View Certificate
                            </span>
                          </div>

                          {/* Category pill overlay */}
                          {cert.category && (
                            <div className="absolute top-2.5 right-2.5 z-10">
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border backdrop-blur-md shadow-sm ${CATEGORY_COLORS[cert.category] ?? 'text-graphite-muted'}`}>
                                {categoryIcon[cert.category]}
                                {cert.category}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* ── Card Body ── */}
                        <div className="p-4 sm:p-4.5 flex flex-col justify-between flex-1">
                          <div>
                            <h4 className="text-xs sm:text-sm font-black text-graphite dark:text-white leading-snug mb-1 line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                              {cert.title}
                            </h4>
                            <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400">{cert.issuer}</p>
                          </div>

                          {/* Card bottom */}
                          <div className="pt-3 mt-3 border-t border-border-subtle dark:border-slate-700/60 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-graphite-muted dark:text-slate-400 flex items-center gap-1">
                              {cert.date && <><Calendar size={10} /> {cert.date}</>}
                            </span>
                            
                            {pdfUrl ? (
                              <a
                                href={pdfUrl}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 border border-cyan-200/60 dark:border-cyan-800 transition-colors"
                                aria-label={`Open ${cert.title} PDF in new tab`}
                              >
                                <FileText size={11} />
                                <span>PDF</span>
                                <ExternalLink size={9} />
                              </a>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-cyan-600 dark:text-cyan-400">
                                <ZoomIn size={10} /> Image
                              </span>
                            )}
                          </div>
                        </div>
                      </LightGlassCard>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {filteredCerts.length === 0 && (
              <div className="text-center py-12 text-graphite-muted dark:text-slate-500">
                <BookOpen size={32} className="mx-auto mb-2 opacity-30" />
                <p className="text-sm font-medium">No certificates in this category</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <CertificateModal cert={selectedCert} onClose={closeCert} />
      )}

      {/* Markcard Viewer Modal */}
      <AnimatePresence>
        {selectedMarkcard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 md:p-8"
            onClick={closeMarkcard}
            aria-modal="true"
            role="dialog"
            aria-label={`Markcard: ${selectedMarkcard.title}`}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/75 dark:bg-black/90 backdrop-blur-md" />

            {/* Modal panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="relative z-10 w-full max-w-2xl max-h-[92vh] bg-white dark:bg-[#111827] rounded-3xl shadow-2xl border border-white/90 dark:border-slate-700/60 flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 border-b border-slate-100 dark:border-slate-700/60 shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <GraduationCap size={15} className="text-cyan-500" />
                    <h3 className="text-xs sm:text-sm font-black text-graphite dark:text-white">{selectedMarkcard.title}</h3>
                  </div>
                  <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400">Score: {selectedMarkcard.score}</p>
                </div>
                <button
                  onClick={closeMarkcard}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-graphite-secondary dark:text-slate-300 hover:bg-red-100 dark:hover:bg-red-950/40 hover:text-red-500 transition-all duration-200"
                  aria-label="Close markcard viewer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Image viewer */}
              <div className="flex-1 overflow-auto p-3 sm:p-4 min-h-0">
                <img
                  src={selectedMarkcard.image}
                  alt={`${selectedMarkcard.title} Markcard — Nandini R`}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700/60 object-contain shadow-sm"
                  style={{ maxHeight: '65vh' }}
                />
              </div>

              {/* Footer */}
              <div className="px-4 sm:px-5 py-3 sm:py-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between shrink-0">
                <p className="text-[11px] text-graphite-muted dark:text-slate-500 font-medium">Nandini R — Official Markcard</p>
                <a
                  href={selectedMarkcard.image}
                  download
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 shadow-sm transition-all duration-200"
                >
                  <FileText size={12} /> Download Markcard
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Education;
