import React from 'react';
import { personalInfo } from '../data';
import { ArrowUp, Github, Linkedin, Mail, MessageSquare, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const defaultMsg = personalInfo.defaultContactMessage || 
    "Hi Nandini, I visited your portfolio and would like to connect with you regarding an opportunity / project collaboration!";
  const defaultSubject = personalInfo.defaultContactSubject || "Portfolio Inquiry — Let's Connect";
  const cleanPhone = personalInfo.phone.replace(/[^0-9]/g, '');

  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(defaultSubject)}&body=${encodeURIComponent(defaultMsg)}`;
  const whatsappLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <footer className="py-12 sm:py-14 bg-canvas dark:bg-[#080D18] border-t border-border-subtle dark:border-slate-800/80 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 sm:pb-10 border-b border-border-subtle dark:border-slate-800/80">
          
          {/* Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2 mb-2 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 text-white flex items-center justify-center font-black text-sm shadow-clay-cyan border border-white/40">
                N
              </div>
              <span className="text-xl font-black tracking-tight text-graphite dark:text-white">
                {personalInfo.name}<span className="text-cyan-500">.</span>
              </span>
            </a>
            <p className="text-xs font-bold text-graphite-secondary dark:text-slate-300 max-w-sm">
              {personalInfo.title} • Building intelligent software with purpose.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs font-bold text-graphite-secondary dark:text-slate-300">
            <a href="#home" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Achievements</a>
            <a href="#education" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-surface-elevated dark:bg-[#1D2A3D] text-graphite dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 border border-border-subtle dark:border-slate-700/60 shadow-neu-soft flex items-center justify-center transition-all hover:scale-105 active:scale-95 shrink-0"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-graphite-muted dark:text-slate-400 text-center sm:text-left">
          <div>
            © {currentYear} {personalInfo.name} • Designed with Soft Blue Canvas, Liquid Glass & Electric Cyan.
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="text-graphite-muted dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center gap-1"
              aria-label="WhatsApp with pre-filled message"
              title="Chat on WhatsApp"
            >
              <MessageSquare size={16} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-graphite-muted dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-graphite-muted dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={mailtoLink}
              className="text-graphite-muted dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1"
              aria-label="Email with pre-filled draft"
              title="Send Email"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-graphite-muted dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <FileText size={14} /> Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
