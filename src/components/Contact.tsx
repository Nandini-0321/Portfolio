import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ExternalLink,
  Sparkles,
  RefreshCw,
  SendHorizontal
} from 'lucide-react';
import { personalInfo, quickContactTemplates } from '../data';
import { SectionHeading } from './ui/SectionHeading';
import { LightGlassSurface } from './ui/LightGlassSurface';
import { NeumorphicInput, NeumorphicTextarea } from './ui/NeumorphicInput';
import { NeumorphicButton } from './ui/NeumorphicButton';
import { ClayBadge } from './ui/ClayBadge';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjykjbva';

const defaultMessage = personalInfo.defaultContactMessage || 
  "Hi Nandini, I visited your portfolio and would like to connect with you regarding an opportunity / project collaboration!";
const defaultSubject = personalInfo.defaultContactSubject || "Portfolio Inquiry — Let's Connect";
const cleanPhone = personalInfo.phone.replace(/[^0-9]/g, '');

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: defaultSubject,
    message: defaultMessage,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleApplyTemplate = (template: { subject: string; message: string }) => {
    setFormData((prev) => ({
      ...prev,
      subject: template.subject,
      message: template.message,
    }));
  };

  const handleResetToDefault = () => {
    setFormData((prev) => ({
      ...prev,
      subject: defaultSubject,
      message: defaultMessage,
    }));
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const getMailtoUrl = () => {
    const finalSubject = formData.subject.trim() || defaultSubject;
    const bodyContent = `Name: ${formData.name.trim() || 'Portfolio Visitor'}\nEmail: ${formData.email.trim() || 'Not specified'}\n\nMessage:\n${formData.message.trim() || defaultMessage}`;
    return `mailto:${personalInfo.email}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(bodyContent)}`;
  };

  const getWhatsAppUrl = () => {
    const text = formData.name.trim() 
      ? `Hi Nandini, I am ${formData.name.trim()}.\n\n${formData.message.trim() || defaultMessage}`
      : formData.message.trim() || defaultMessage;
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in your name, email, and message.');
      return;
    }

    setStatus('submitting');

    // Attempt Formspree submission with automatic fallback to mailto
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || defaultSubject,
          message: formData.message,
        }),
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        setStatus('success');
      } else {
        // Fallback to mailto draft
        window.location.href = getMailtoUrl();
        setStatus('success');
      }
    } catch {
      // Direct fallback to mailto draft if Formspree endpoint or network error occurs
      window.location.href = getMailtoUrl();
      setStatus('success');
    }
  };

  const baseWhatsAppLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultMessage)}`;
  const baseMailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(defaultSubject)}&body=${encodeURIComponent(defaultMessage)}`;

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-canvas dark:bg-[#080D18] bg-micro-grid relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <SectionHeading
          badge="Direct Inquiries"
          title="Let's Build Something"
          highlightedWord="Intelligent."
          subtitle="Open to full-time engineering roles, AI/ML internships, freelance collaborations, and innovative technical projects."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* ── LEFT COLUMN: Elevated Light Glass Information & Quick Connect ── */}
          <div className="lg:col-span-5 space-y-6">
            <LightGlassSurface className="p-5 sm:p-7 md:p-8">
              <div className="flex items-center justify-between gap-2 mb-4">
                <ClayBadge variant="cyan" size="sm">
                  Active Response
                </ClayBadge>
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Within 24 Hours
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-graphite dark:text-white mb-2 leading-tight">
                Get in Touch
              </h3>
              <p className="text-xs sm:text-sm text-graphite-secondary dark:text-slate-300 font-medium leading-relaxed mb-6">
                Connect directly through WhatsApp, Email, or the form. Every link includes a pre-filled default message for immediate communication.
              </p>

              {/* Direct Channels */}
              <div className="space-y-3.5">
                
                {/* 1. WhatsApp Channel */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-surface dark:bg-[#111827] border border-border-subtle dark:border-slate-700/60 shadow-neu-soft hover:shadow-neu-raised transition-all">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200/50 dark:border-emerald-700/60">
                        <MessageSquare size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-graphite-muted dark:text-slate-400 uppercase tracking-wider">
                          WhatsApp / Phone
                        </p>
                        <a
                          href={baseWhatsAppLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs sm:text-sm font-bold text-graphite dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 truncate block transition-colors"
                          title="Click to open WhatsApp chat with default message"
                        >
                          {personalInfo.phone}
                        </a>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={baseWhatsAppLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold shadow-sm flex items-center gap-1 transition-all"
                        aria-label="Chat on WhatsApp"
                      >
                        <span>Chat</span>
                        <ExternalLink size={11} />
                      </a>
                      <button
                        onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                        className="w-8 h-8 rounded-xl bg-surface-elevated dark:bg-[#1D2A3D] text-graphite-muted dark:text-slate-300 hover:text-graphite dark:hover:text-white flex items-center justify-center border border-border-subtle dark:border-slate-700/60 transition-colors"
                        aria-label="Copy phone number"
                        title="Copy phone number"
                      >
                        {copiedType === 'phone' ? <Check size={14} className="text-emerald-500" /> : <Copy size={13} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2. Email Channel */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-surface dark:bg-[#111827] border border-border-subtle dark:border-slate-700/60 shadow-neu-soft hover:shadow-neu-raised transition-all">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-2xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-300 flex items-center justify-center shrink-0 border border-cyan-200/50 dark:border-cyan-700/60">
                        <Mail size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-graphite-muted dark:text-slate-400 uppercase tracking-wider">
                          Email Address
                        </p>
                        <a
                          href={baseMailtoLink}
                          className="text-xs sm:text-sm font-bold text-graphite dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 truncate block transition-colors"
                          title="Click to draft email with pre-filled message"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={baseMailtoLink}
                        className="px-2.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white text-[11px] font-bold shadow-sm flex items-center gap-1 transition-all"
                        aria-label="Send Email"
                      >
                        <span>Mail</span>
                        <ExternalLink size={11} />
                      </a>
                      <button
                        onClick={() => copyToClipboard(personalInfo.email, 'email')}
                        className="w-8 h-8 rounded-xl bg-surface-elevated dark:bg-[#1D2A3D] text-graphite-muted dark:text-slate-300 hover:text-graphite dark:hover:text-white flex items-center justify-center border border-border-subtle dark:border-slate-700/60 transition-colors"
                        aria-label="Copy email address"
                        title="Copy email address"
                      >
                        {copiedType === 'email' ? <Check size={14} className="text-cyan-500" /> : <Copy size={13} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* 3. Location Channel */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-surface dark:bg-[#111827] border border-border-subtle dark:border-slate-700/60 shadow-neu-soft">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-700/60">
                      <MapPin size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-graphite-muted dark:text-slate-400 uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-graphite dark:text-white truncate">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Networks */}
              <div className="mt-6 pt-5 border-t border-border-subtle dark:border-slate-700/60">
                <p className="text-xs font-bold text-graphite-muted dark:text-slate-400 uppercase tracking-wider mb-3">
                  Professional Networks
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <NeumorphicButton
                    variant="secondary"
                    size="sm"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    icon={<Linkedin size={14} className="text-cyan-600 dark:text-cyan-400" />}
                  >
                    LinkedIn
                  </NeumorphicButton>

                  <NeumorphicButton
                    variant="secondary"
                    size="sm"
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    icon={<Github size={14} />}
                  >
                    GitHub
                  </NeumorphicButton>
                </div>
              </div>
            </LightGlassSurface>
          </div>

          {/* ── RIGHT COLUMN: Neumorphic Contact Form ── */}
          <div className="lg:col-span-7">
            <div className="liquid-glass rounded-3xl p-5 sm:p-7 md:p-9 border border-white/90 dark:border-slate-700/60 shadow-neu-floating">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-graphite dark:text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-graphite-secondary dark:text-slate-300 font-medium">
                    Select a quick preset below or type your custom message.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleResetToDefault}
                  className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 hover:bg-cyan-100 transition-colors"
                  title="Reset to standard default message"
                >
                  <RefreshCw size={11} />
                  <span>Default Message</span>
                </button>
              </div>

              {/* Quick Template Preset Chips */}
              <div className="mb-5 pb-4 border-b border-black/5 dark:border-slate-700/60">
                <span className="text-[10px] font-bold text-graphite-muted dark:text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-1">
                  <Sparkles size={11} className="text-cyan-500" />
                  <span>Quick Message Presets:</span>
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {quickContactTemplates.map((template) => {
                    const isSelected = formData.subject === template.subject;
                    return (
                      <button
                        key={template.label}
                        type="button"
                        onClick={() => handleApplyTemplate(template)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-sm scale-[1.02]'
                            : 'bg-surface dark:bg-[#111827] text-graphite-secondary dark:text-slate-300 border border-border-subtle dark:border-slate-700/60 hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400'
                        }`}
                      >
                        {template.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 sm:p-8 text-center neu-inset rounded-2xl dark:bg-[#111827] dark:border dark:border-slate-700/60"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-lg font-black text-graphite dark:text-white mb-1">
                    Message Ready / Sent! 🎉
                  </h4>
                  <p className="text-xs text-graphite-secondary dark:text-slate-300 mb-4 font-medium max-w-sm mx-auto">
                    Thank you for reaching out! If you also want to follow up via WhatsApp or Email app, you can launch them directly below.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 transition-all"
                    >
                      <MessageSquare size={14} />
                      <span>Open on WhatsApp</span>
                    </a>
                    <a
                      href={getMailtoUrl()}
                      className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs flex items-center gap-1.5 transition-all"
                    >
                      <Mail size={14} />
                      <span>Open in Email Client</span>
                    </a>
                    <NeumorphicButton
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        setStatus('idle');
                        setFormData({ name: '', email: '', subject: defaultSubject, message: defaultMessage });
                      }}
                    >
                      Write Another Message
                    </NeumorphicButton>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <NeumorphicInput
                      label="Your Name"
                      name="name"
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <NeumorphicInput
                      label="Your Email"
                      type="email"
                      name="email"
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <NeumorphicInput
                    label="Subject"
                    name="subject"
                    placeholder="e.g. Software Engineer / AI/ML Role"
                    value={formData.subject}
                    onChange={handleChange}
                  />

                  <NeumorphicTextarea
                    label="Message"
                    name="message"
                    placeholder="Share your requirements, ideas, or questions here..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                  />

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <NeumorphicButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={status === 'submitting'}
                      icon={<SendHorizontal size={16} />}
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Send Message'}
                    </NeumorphicButton>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-colors"
                      title="Send this typed message directly to WhatsApp"
                    >
                      <MessageSquare size={14} className="text-emerald-500" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <a
                      href={getMailtoUrl()}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 hover:bg-cyan-100 transition-colors"
                      title="Send this typed message directly via Email Client"
                    >
                      <Mail size={14} className="text-cyan-500" />
                      <span>Send via Email Client</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
