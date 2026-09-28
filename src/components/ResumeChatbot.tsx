import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Sparkles, Send, User, MessageSquare, Mail } from 'lucide-react';
import { personalInfo } from '../data';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
}

const quickQuestions = [
  'Tell me about Nandini',
  'What are her skills?',
  'Show projects',
  'AI/ML specialization',
  'Experience & Internships',
  'How to contact Nandini?',
];

export const ResumeChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: `Hi! I am Nandini's portfolio AI assistant. Ask me about her AI/ML projects, 3 internships, technical skills, or background!`,
    },
  ]);
  const [input, setInput] = useState('');

  const defaultMsg = personalInfo.defaultContactMessage || 
    "Hi Nandini, I visited your portfolio and would like to connect with you regarding an opportunity / project collaboration!";
  const defaultSubject = personalInfo.defaultContactSubject || "Portfolio Inquiry — Let's Connect";
  const cleanPhone = personalInfo.phone.replace(/[^0-9]/g, '');
  const whatsappLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultMsg)}`;
  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(defaultSubject)}&body=${encodeURIComponent(defaultMsg)}`;

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('about') || q.includes('who is') || q.includes('nandini')) {
      return `Nandini R. is an aspiring Software Engineer & AI/ML Developer with a 9.34 CGPA in Computer Science & Engineering from Beary's Institute of Technology (BIT), Mangalore (Affiliated to VTU). She has completed 3 industry internships and engineered 11+ applications in deep learning, computer vision, and full-stack systems.`;
    }

    if (q.includes('education') || q.includes('college') || q.includes('cgpa') || q.includes('degree')) {
      return `Nandini is pursuing her B.E. in Computer Science & Engineering at Beary's Institute of Technology (BIT), Mangalore (VTU) with an outstanding CGPA of 9.34 / 10 (2022–2026). She completed PUC with 80.67% and SSLC with 91.36% distinction.`;
    }

    if (q.includes('skill') || q.includes('tech stack') || q.includes('stack')) {
      return `Nandini's core technical skills span:
• AI & Machine Learning: Python, TensorFlow, Keras, Scikit-learn, PyTorch, OpenCV, NLP, Deep Learning, CNN, YOLO
• Full-Stack & Web Dev: React.js, Next.js, Node.js, Express.js, Flask, MERN Stack, REST APIs
• Languages: Python, Java, C, C++, SQL, JavaScript, TypeScript
• Databases & Cloud: MySQL, MongoDB, PostgreSQL, AWS, Git/GitHub, Postman.`;
    }

    if (q.includes('project') || q.includes('work') || q.includes('show')) {
      return `Nandini has built 11+ projects! Notable ones include:
1. Brain Tumor Classification: Deep CNN model achieving 94%+ accuracy on MRI scans.
2. HeyGen AI Avatar Generator: Full-stack generative AI avatar video generation platform.
3. OmniDetect AI: Real-time object detection powered by YOLO and OpenCV.
4. FoodShare Platform: Collaborative surplus food donation network connecting donors, NGOs, and volunteers.
5. Student Performance Tracker: Full-stack educational SaaS dashboard with analytics.`;
    }

    if (q.includes('ai') || q.includes('ml') || q.includes('machine learning') || q.includes('vision')) {
      return `In AI/ML, Nandini specializes in deep learning (CNNs for brain tumor classification), computer vision (YOLO real-time object detection, face recognition attendance, EAR driver drowsiness detection), and end-to-end ML data pipelines using Python, TensorFlow, and Scikit-learn.`;
    }

    if (q.includes('experience') || q.includes('intern') || q.includes('company')) {
      return `Nandini has completed 3 industry internships:
1. Inventeron Technologies (Machine Learning Intern — Current)
2. iStudio (Artificial Intelligence Intern — 6 months)
3. Teachnook (Machine Learning Intern — 2 months).`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach') || q.includes('message') || q.includes('whatsapp') || q.includes('phone')) {
      return `You can connect with Nandini instantly:
• WhatsApp: ${personalInfo.phone}
• Email: ${personalInfo.email}
• LinkedIn: ${personalInfo.linkedin}

Tip: Click the Contact section to send a pre-filled direct message!`;
    }

    return `Nandini specializes in software engineering, AI/ML, full-stack development, and data science. You can explore her 11+ projects, 3 internships, and skills in the sections above, or contact her directly at ${personalInfo.email}!`;
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: generateAnswer(text),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 350);
  };

  return (
    <>
      {/* Floating Liquid Glass / Clay Trigger Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.94 }}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full liquid-glass flex items-center justify-center text-graphite dark:text-white shadow-neu-floating border border-white/90 dark:border-slate-700/60 group"
          aria-label="Open portfolio AI assistant"
        >
          {/* Cyan AI Active Pulse Dot */}
          <span className="absolute top-1 right-1 flex h-3 sm:h-3.5 w-3 sm:w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 sm:h-3.5 w-3 sm:w-3.5 bg-cyan-500 border-2 border-white dark:border-[#172235]" />
          </span>

          {isOpen ? (
            <X size={20} className="text-graphite dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
          ) : (
            <Bot size={22} className="text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
          )}
        </motion.button>
      </div>

      {/* Expandable Light Glass Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-18 sm:bottom-24 right-3 left-3 sm:left-auto sm:right-6 sm:w-96 max-w-sm h-[480px] sm:h-[520px] max-h-[78vh] liquid-glass-modal rounded-3xl p-4 sm:p-5 shadow-2xl z-40 border border-white/95 dark:border-slate-700/60 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-slate-700/60">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-xs shadow-clay-cyan">
                  <Sparkles size={14} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-graphite dark:text-white leading-tight">
                    Portfolio Assistant
                  </h4>
                  <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    ● Ready to assist recruiters
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-surface dark:bg-[#1D2A3D] text-graphite-muted dark:text-slate-300 hover:text-graphite dark:hover:text-white flex items-center justify-center border border-transparent dark:border-slate-700/50"
                aria-label="Close chatbot"
              >
                <X size={14} />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto py-3 space-y-3 pr-1 text-xs">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-start gap-2 ${
                    m.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] ${
                      m.sender === 'user'
                        ? 'bg-graphite dark:bg-slate-700 text-white'
                        : 'bg-cyan-500 text-white shadow-clay-cyan'
                    }`}
                  >
                    {m.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                  </div>
                  <div
                    className={`p-3 rounded-2xl max-w-[84%] leading-relaxed font-medium whitespace-pre-line ${
                      m.sender === 'user'
                        ? 'bg-cyan-600 text-white shadow-clay-cyan rounded-tr-none'
                        : 'bg-surface dark:bg-[#111827] text-graphite dark:text-slate-200 border border-black/5 dark:border-slate-700/60 shadow-neu-soft rounded-tl-none'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Quick Questions Pills */}
            <div className="py-2 border-t border-black/5 dark:border-slate-700/60 overflow-x-auto">
              <div className="flex gap-1.5 whitespace-nowrap">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="clay-pill px-2.5 py-1 text-[10px] font-semibold text-graphite-secondary dark:text-slate-300 dark:bg-[#1D2A3D] dark:border-slate-700/60 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 shrink-0"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Action bar with direct WhatsApp and Email */}
            <div className="pt-1.5 pb-2 flex items-center justify-center gap-2 border-t border-black/5 dark:border-slate-700/60 text-[10px] font-bold">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 flex items-center justify-center gap-1 border border-emerald-200 dark:border-emerald-800 transition-colors"
              >
                <MessageSquare size={11} />
                <span>WhatsApp</span>
              </a>
              <a
                href={mailtoLink}
                className="flex-1 py-1 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 flex items-center justify-center gap-1 border border-cyan-200 dark:border-cyan-800 transition-colors"
              >
                <Mail size={11} />
                <span>Email</span>
              </a>
            </div>

            {/* Input Bar */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about skills, projects..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-surface dark:bg-[#111827] text-graphite dark:text-white placeholder-graphite-muted dark:placeholder-slate-500 text-xs font-medium rounded-pill py-2.5 px-3.5 outline-none shadow-neu-inset border border-black/5 dark:border-slate-700/60 focus:border-cyan-500 dark:focus:border-cyan-400"
              />
              <button
                onClick={() => handleSend()}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-clay-cyan hover:scale-105 active:scale-95 transition-transform shrink-0"
                aria-label="Send message"
              >
                <Send size={13} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeChatbot;
