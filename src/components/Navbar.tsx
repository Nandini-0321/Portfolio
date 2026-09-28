import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight, FileText } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const scrollPosition = window.scrollY + 140;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 py-2.5 sm:py-4 pointer-events-none">
      {/* Scroll Progress Bar at very top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 to-cyan-600 origin-left z-50 shadow-sm"
        style={{ scaleX }}
      />

      {/* Floating Light Liquid Glass Navbar Capsule */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-6 px-3 sm:px-6 py-2 sm:py-3 rounded-pill transition-all duration-300 max-w-full ${
          scrolled
            ? 'liquid-glass-nav shadow-lg'
            : 'liquid-glass shadow-md'
        }`}
      >
        {/* Brand Initial Capsule */}
        <a
          href="#home"
          className="flex items-center gap-2 group cursor-pointer focus:outline-none shrink-0"
          aria-label={`${personalInfo.name} Homepage`}
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 text-white flex items-center justify-center font-black text-sm sm:text-base shadow-clay-cyan transition-transform duration-200 group-hover:scale-105 border border-white/40">
            N
          </div>
          <span className="hidden sm:inline text-xs sm:text-sm font-black tracking-tight text-graphite dark:text-white">
            Nandini<span className="text-cyan-500">.</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-bold rounded-pill transition-colors duration-200 select-none ${
                  isActive
                    ? 'text-white'
                    : 'text-graphite-secondary dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavCapsule"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-pill shadow-clay-cyan -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Resume Quick Action */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-pill text-xs font-bold text-graphite dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 border border-border-subtle dark:border-slate-700/60 bg-white/70 dark:bg-[#1D2A3D]/80 transition-all duration-200 shadow-sm hover:shadow dark:hover:border-cyan-400/50"
            aria-label="View Resume"
          >
            <FileText size={13} className="text-cyan-500" />
            <span>Resume</span>
            <ArrowUpRight size={11} className="opacity-60" />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-white/80 dark:bg-[#1D2A3D] text-graphite-secondary dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-border-subtle dark:border-slate-700/60 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 dark:hover:border-cyan-400/50 shrink-0"
            aria-label="Toggle light/dark theme"
          >
            {theme === 'light' ? (
              <Moon size={15} className="text-graphite-secondary" />
            ) : (
              <Sun size={15} className="text-cyan-400" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-white/80 dark:bg-[#1D2A3D] text-graphite dark:text-slate-200 border border-border-subtle dark:border-slate-700/60 transition-all shadow-sm dark:hover:border-cyan-400/50 shrink-0"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto lg:hidden absolute top-14 sm:top-16 left-3 right-3 sm:left-4 sm:right-4 liquid-glass-modal rounded-3xl p-4 sm:p-5 shadow-2xl z-50 border border-white/80 dark:border-slate-700/60 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-clay-cyan'
                      : 'text-graphite dark:text-slate-200 hover:bg-white/60 dark:hover:bg-white/10 hover:text-cyan-600 dark:hover:text-cyan-400'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-border-subtle dark:border-slate-700/60 flex gap-2">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 text-center py-2.5 rounded-xl bg-white dark:bg-[#1D2A3D] text-graphite dark:text-white font-bold text-xs border border-border-subtle dark:border-slate-700/60 shadow-sm"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 text-center py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold text-xs shadow-clay-cyan"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
