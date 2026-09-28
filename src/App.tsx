import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { personalInfo } from './data';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay for smooth initial asset hydration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <AnimatePresence>
          {isLoading ? (
            <motion.div
              key="loader"
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas"
            >
              <div className="flex flex-col items-center">
                {/* Light Liquid Glass Loading Capsule */}
                <div className="liquid-glass rounded-3xl p-8 shadow-neu-floating flex flex-col items-center border border-white/90 dark:border-white/10">
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1],
                      borderRadius: ['28%', '50%', '28%'],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-14 h-14 bg-coral-500 shadow-clay-coral flex items-center justify-center text-white font-black text-xl"
                  >
                    N
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 text-center"
                  >
                    <h2 className="text-base font-black text-graphite dark:text-white tracking-tight">
                      {personalInfo.name}
                    </h2>
                    <p className="text-xs font-bold text-coral-600 dark:text-cyan-400 mt-0.5 tracking-wider uppercase">
                      Initializing Portfolio
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative min-h-screen bg-canvas dark:bg-[#080D18] text-graphite dark:text-slate-100 overflow-x-hidden"
            >
              {/* Subtle Ambient Lighting Accents */}
              <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
                <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full ambient-glow-coral blur-3xl opacity-70" />
                <div className="absolute top-1/3 -right-32 w-[650px] h-[650px] rounded-full ambient-glow-cyan blur-3xl opacity-60" />
                <div className="absolute -bottom-32 left-1/4 w-[700px] h-[700px] rounded-full ambient-glow-coral blur-3xl opacity-50" />
              </div>

              {/* Main Content Layout */}
              <div className="relative z-10">
                <Navbar />
                <main>
                  <Hero />
                  <About />
                  <Skills />
                  <Experience />
                  <Projects />
                  <Achievements />
                  <Education />
                  <Contact />
                </main>
                <Footer />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
};

export default App;
