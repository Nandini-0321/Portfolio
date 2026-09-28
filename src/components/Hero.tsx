import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, heroData } from '../data';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MessageSquare,
  Terminal, 
  Cpu, 
  Sparkles, 
  FolderKanban, 
  Briefcase, 
  GraduationCap, 
  Layers,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { NeumorphicButton } from './ui/NeumorphicButton';
import { ClayBadge } from './ui/ClayBadge';
import { ClayStat } from './ui/ClayStat';

const Hero: React.FC = () => {
  const floatingTech = [
    'Python',
    'TensorFlow',
    'PyTorch',
    'OpenCV',
    'React',
    'Next.js',
    'FastAPI',
  ];

  const defaultMsg = personalInfo.defaultContactMessage || 
    "Hi Nandini, I visited your portfolio and would like to connect with you regarding an opportunity / project collaboration!";
  const defaultSubject = personalInfo.defaultContactSubject || "Portfolio Inquiry — Let's Connect";
  const cleanPhone = personalInfo.phone.replace(/[^0-9]/g, '');

  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(defaultSubject)}&body=${encodeURIComponent(defaultMsg)}`;
  const whatsappLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden bg-canvas dark:bg-[#080D18] bg-micro-grid transition-colors duration-500"
    >
      {/* Subtle Ambient Radial Lighting Bleeds (Cyan Glows) */}
      <div 
        className="pointer-events-none absolute top-[-10%] right-[-10%] w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] rounded-full ambient-glow-cyan blur-3xl opacity-70" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-[-10%] left-[-10%] w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] rounded-full ambient-glow-cyan blur-3xl opacity-50" 
        aria-hidden="true" 
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* ── LEFT COLUMN: Value Proposition & Intent ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Availability Clay Badge */}
            <ClayBadge 
              variant="cyan" 
              size="md" 
              icon={<Sparkles size={13} className="text-white animate-spin-slow" />}
              className="mb-4 sm:mb-6 tracking-wider uppercase text-[10px] sm:text-[11px] shadow-md"
            >
              {heroData.statusBadge}
            </ClayBadge>

            {/* Name Subtitle */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm md:text-base font-bold text-graphite-secondary dark:text-slate-300">
                Hello, I am
              </span>
              <span className="text-xs sm:text-sm md:text-base font-black text-cyan-600 dark:text-cyan-400">
                {personalInfo.name}
              </span>
              <span className="w-6 sm:w-8 h-[2px] bg-cyan-500/50 rounded-full" />
            </div>

            {/* Hero Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-graphite dark:text-white tracking-tight leading-[1.12] mb-4 sm:mb-6">
              Building <span className="text-cyan-600 dark:text-cyan-400 underline decoration-cyan-300 dark:decoration-cyan-400/50 decoration-4 underline-offset-4 sm:underline-offset-8">Intelligent Software</span> for Real-World Problems.
            </h1>

            {/* Pitch Subtext */}
            <p className="text-sm sm:text-base lg:text-lg text-graphite-secondary dark:text-slate-300 max-w-xl mb-6 sm:mb-8 leading-relaxed font-medium">
              {heroData.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
              <NeumorphicButton
                variant="primary"
                size="lg"
                href="#projects"
                icon={<ArrowRight size={18} />}
                className="w-full sm:w-auto justify-center"
              >
                Explore Projects
              </NeumorphicButton>

              <NeumorphicButton
                variant="secondary"
                size="lg"
                href="#contact"
                icon={<Mail size={18} className="text-cyan-600 dark:text-cyan-400" />}
                className="w-full sm:w-auto justify-center"
              >
                Let's Connect
              </NeumorphicButton>

              <NeumorphicButton
                variant="glass"
                size="lg"
                href={personalInfo.resumeUrl}
                download="Nandini_R_Resume.pdf"
                icon={<Download size={18} className="text-cyan-600 dark:text-cyan-400" />}
                className="w-full sm:w-auto justify-center"
              >
                Resume
              </NeumorphicButton>
            </div>

            {/* Tactile Social Badges */}
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              <span className="text-[11px] sm:text-xs font-bold text-graphite-muted dark:text-slate-400 uppercase tracking-wider mr-1 sm:mr-2">
                Quick Connect
              </span>
              
              {/* WhatsApp direct */}
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-surface-elevated dark:bg-[#1D2A3D] border border-border-subtle dark:border-slate-700/60 shadow-neu-soft flex items-center justify-center text-graphite dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 dark:hover:border-emerald-400/50 transition-colors"
                aria-label="Chat with Nandini R on WhatsApp"
                title="Send WhatsApp message with prefilled template"
              >
                <MessageSquare size={17} />
              </motion.a>

              {/* Email direct */}
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={mailtoLink}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-surface-elevated dark:bg-[#1D2A3D] border border-border-subtle dark:border-slate-700/60 shadow-neu-soft flex items-center justify-center text-graphite dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 dark:hover:border-cyan-400/50 transition-colors"
                aria-label="Email Nandini R with prefilled subject"
                title="Draft email with prefilled subject"
              >
                <Mail size={17} />
              </motion.a>

              {/* GitHub */}
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-surface-elevated dark:bg-[#1D2A3D] border border-border-subtle dark:border-slate-700/60 shadow-neu-soft flex items-center justify-center text-graphite dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 dark:hover:border-cyan-400/50 transition-colors"
                aria-label="Nandini R. GitHub"
              >
                <Github size={17} />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-surface-elevated dark:bg-[#1D2A3D] border border-border-subtle dark:border-slate-700/60 shadow-neu-soft flex items-center justify-center text-graphite dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 dark:hover:border-cyan-400/50 transition-colors"
                aria-label="Nandini R. LinkedIn"
              >
                <Linkedin size={17} />
              </motion.a>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Elevated Floating Glass Profile Card & Rounded Statistics ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6 relative flex flex-col space-y-4"
          >
            {/* 1. DEDICATED FLOATING GLASS PROFILE CARD */}
            <div className="liquid-glass-hero rounded-3xl p-5 sm:p-7 relative z-10 overflow-hidden">
              
              {/* Profile Card Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 sm:pb-5 border-b border-black/5 dark:border-slate-700/60">
                <div className="flex items-center gap-3.5">
                  {/* Monogram Avatar with Cyan Halo */}
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 text-white flex items-center justify-center font-black text-xl sm:text-2xl shadow-clay-cyan border border-white/40">
                      N
                    </div>
                    {/* Live Online Pulse Beacon */}
                    <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-emerald-500 border-2 border-white dark:border-[#172235]" />
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-black text-graphite dark:text-white leading-tight">
                        {personalInfo.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 text-[10px] font-bold border border-cyan-200/50 dark:border-cyan-700/60">
                        B.E. CSE
                      </span>
                    </div>
                    <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mt-0.5 truncate">
                      {personalInfo.title}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-graphite-muted dark:text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin size={11} className="text-cyan-500 shrink-0" />
                      <span className="truncate">Beary's Institute of Technology (BIT) • Mangalore</span>
                    </p>
                  </div>
                </div>

                {/* Quick Status Pill */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 text-xs font-bold border border-cyan-200/60 dark:border-cyan-700/60 self-start sm:self-center shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open to Roles</span>
                </div>
              </div>

              {/* Developer Telemetry & Live AI Pipeline Snippet */}
              <div className="mt-4 rounded-2xl bg-surface dark:bg-[#0B1120] p-3 sm:p-3.5 font-mono text-[11px] sm:text-xs text-graphite dark:text-slate-200 shadow-neu-inset space-y-1 border border-black/5 dark:border-slate-700/60 overflow-hidden">
                <div className="flex items-center justify-between text-graphite-muted dark:text-slate-400 text-[10px] sm:text-[11px] pb-1 border-b border-black/5 dark:border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <Terminal size={12} className="text-cyan-500" />
                    <span className="text-slate-600 dark:text-slate-300 font-semibold">neural_engine.py</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={11} /> 94% Model Accuracy
                  </span>
                </div>
                <div className="pt-1 text-[10px] sm:text-[11px] leading-relaxed text-graphite-secondary dark:text-slate-300 overflow-x-auto">
                  <p>
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold">from</span> models <span className="text-cyan-600 dark:text-cyan-400 font-bold">import</span> BrainTumorCNN, YOLOv8
                  </p>
                  <p className="text-graphite dark:text-slate-200">
                    inference = model.predict(scan, latency=<span className="text-cyan-600 dark:text-cyan-300 font-bold">"&lt;25ms"</span>)
                  </p>
                </div>
              </div>

              {/* Interactive Core Stacks */}
              <div className="mt-4">
                <div className="text-[10px] font-bold text-graphite-muted dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Cpu size={12} className="text-cyan-500" />
                  <span>Core Technical Stacks</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {floatingTech.map((tech) => (
                    <span
                      key={tech}
                      className="clay-pill text-[11px] sm:text-xs font-semibold px-2.5 py-1 text-graphite dark:text-slate-200 dark:bg-[#1D2A3D] dark:border-slate-700/60 transition-all hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. 4 ROUNDED STATISTICS CARDS */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 relative z-20">
              <ClayStat
                value="11+"
                label="Projects"
                subtext="AI & Full-Stack"
                icon={<FolderKanban size={18} />}
                accent="cyan"
              />
              <ClayStat
                value="3"
                label="Internships"
                subtext="Industry Roles"
                icon={<Briefcase size={18} />}
                accent="cyan"
              />
              <ClayStat
                value="9.34"
                label="CGPA"
                subtext="B.E. Comp Sci (BIT)"
                icon={<GraduationCap size={18} />}
                accent="cyan"
              />
              <ClayStat
                value="9+"
                label="Certifications"
                subtext="Verified Credentials"
                icon={<Layers size={18} />}
                accent="cyan"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
