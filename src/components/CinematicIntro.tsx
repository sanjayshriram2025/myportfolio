import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, SkipForward } from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
}

type IntroPhase = 'lights' | 'invitation' | 'exiting';

interface LightSpec {
  id: string;
  color: string;
  glowColor: string;
  label: string;
  delay: number;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<IntroPhase>('lights');

  // The 4 Studio Editorial Marks: Oxblood, Cobalt, Muted Brass, Ink
  const lights: LightSpec[] = [
    {
      id: 'l1',
      color: '#9E2939', // Oxblood
      glowColor: 'rgba(158, 41, 57, 0.45)',
      label: 'DEFENSE',
      delay: 0,
    },
    {
      id: 'l2',
      color: '#2448C5', // Cobalt
      glowColor: 'rgba(36, 72, 197, 0.45)',
      label: 'SYSTEMS',
      delay: 0.12,
    },
    {
      id: 'l3',
      color: '#D5A65A', // Muted Brass
      glowColor: 'rgba(213, 166, 90, 0.45)',
      label: 'ORATORY',
      delay: 0.24,
    },
    {
      id: 'l4',
      color: '#242424', // Ink
      glowColor: 'rgba(36, 36, 36, 0.35)',
      label: 'RESEARCH',
      delay: 0.36,
    },
  ];

  const firstName = 'SANJAY'.split('');
  const lastName = 'SHRIRAM'.split('');

  const handleExit = useCallback(() => {
    if (phase === 'exiting') return;
    setPhase('exiting');
    setTimeout(() => {
      onComplete();
    }, 400);
  }, [phase, onComplete]);

  // Fast, crisp sequence transition
  useEffect(() => {
    if (shouldReduceMotion) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setPhase((current) => (current === 'lights' ? 'invitation' : current));
    }, 1800);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion, onComplete]);

  // Keyboard accessibility: Escape to skip, Enter/Space to enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleExit();
      } else if ((e.key === 'Enter' || e.key === ' ') && phase === 'invitation') {
        e.preventDefault();
        handleExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [phase, handleExit]);

  // Lock body scroll during intro
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'exiting' ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-[#F2EBDD] text-[#242424] overflow-hidden select-none flex flex-col justify-between"
      role="region"
      aria-label="Editorial Opening Sequence"
    >
      {/* Top Bar: Minimal Classification & Instant Skip */}
      <header className="relative z-40 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-xs font-mono-meta text-[#5A5954]">
        <div className="flex items-center gap-3">
          <span className="text-[#9E2939] font-bold tracking-wider">SSN // MONOGRAPH</span>
          <span className="text-[#D8CEBA]">/</span>
          <span className="text-[#242424] hidden sm:inline">PRELUDE</span>
        </div>

        <button
          type="button"
          onClick={handleExit}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF6EE] hover:bg-[#FFFFFF] text-[#5A5954] hover:text-[#242424] border border-[#D8CEBA] hover:border-[#9E2939] transition-colors uppercase text-[11px] tracking-wider cursor-pointer shadow-sm"
          aria-label="Skip introduction"
        >
          <span>Skip</span>
          <SkipForward className="w-3.5 h-3.5 text-[#9E2939]" />
          <kbd className="hidden sm:inline px-1 py-0.2 bg-[#F2EBDD] text-[9px] text-[#5A5954] border border-[#D8CEBA]">
            ESC
          </kbd>
        </button>
      </header>

      {/* =========================================================================
          CENTER STAGE: FOUR EDITORIAL CHROMATIC MARKS
         ========================================================================= */}
      <div className="relative flex-grow flex items-center justify-center w-full max-w-4xl mx-auto px-4">
        <div className="relative z-30 text-center flex flex-col items-center">
          {/* THE FOUR EDITORIAL CHROMATIC MARKS */}
          <div className="relative mb-8 flex items-center justify-center h-20 w-72">
            <div className="flex items-center gap-6 sm:gap-7">
              {lights.map((light, idx) => (
                <motion.div
                  key={light.id}
                  animate={
                    phase === 'lights'
                      ? {
                          y: [0, -14, 0, 6, 0],
                          scale: [1, 1.35, 1, 0.92, 1],
                          opacity: [0.85, 1, 0.9, 0.8, 0.85],
                        }
                      : {
                          y: 0,
                          scale: 1,
                          opacity: 1,
                        }
                  }
                  transition={
                    phase === 'lights'
                      ? {
                          duration: 1.25,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: light.delay,
                        }
                      : {
                          duration: 0.45,
                          ease: [0.16, 1, 0.3, 1],
                        }
                  }
                  className="relative group cursor-pointer"
                  onClick={() => {
                    if (phase === 'lights') setPhase('invitation');
                  }}
                >
                  {/* Subtle Colored Aura Glow */}
                  <div
                    className="absolute -inset-1.5 rounded-full blur-md opacity-60"
                    style={{ backgroundColor: light.glowColor }}
                  />
                  {/* Physical Light Sphere */}
                  <div
                    className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-md border border-white/40"
                    style={{ backgroundColor: light.color }}
                  />
                  {phase === 'invitation' && (
                    <motion.span
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 * idx }}
                      className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono-meta text-[#5A5954] whitespace-nowrap hidden sm:block font-bold tracking-wider"
                    >
                      {light.label}
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* TRANSITION TEXT & INVITATION */}
          <AnimatePresence mode="wait">
            {phase === 'lights' && (
              <motion.div
                key="lights-label"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="space-y-2"
              >
                <p className="font-mono-meta text-xs text-[#5A5954] tracking-widest uppercase">
                  INITIALIZING ARCHIVAL & RESEARCH CANVASES
                </p>
                <div className="flex items-center justify-center gap-2 text-[10px] font-mono-meta text-[#8A8981]">
                  <span>[OXBLOOD // COBALT // BRASS // INK]</span>
                </div>
              </motion.div>
            )}

            {phase === 'invitation' && (
              <motion.div
                key="invitation-view"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center mt-2"
              >
                <div className="font-mono-meta text-[11px] text-[#5A5954] uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="text-[#9E2939] font-bold">PANIMALAR ENGINEERING COLLEGE</span>
                  <span>·</span>
                  <span>CLASS OF 2028</span>
                </div>

                <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl leading-[0.92] text-[#242424] tracking-tight mb-4 uppercase">
                  <span className="inline-block mr-3 sm:mr-4">
                    {firstName.map((letter, i) => (
                      <motion.span
                        key={`fn-${i}`}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.04 + i * 0.03 }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                  <span className="inline-block">
                    {lastName.map((letter, i) => (
                      <motion.span
                        key={`ln-${i}`}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.22 + i * 0.03 }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                    <motion.span
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.45 }}
                      className="inline-block text-[#9E2939] ml-3 sm:ml-4 font-display font-black"
                    >
                      N
                    </motion.span>
                  </span>
                </h1>

                <p className="font-sans text-sm sm:text-base text-[#5A5954] max-w-md mx-auto leading-relaxed mb-7">
                  Adversarial Machine Learning · Explainable Cybersecurity · High-Assurance Systems
                </p>

                <button
                  type="button"
                  onClick={handleExit}
                  className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#9E2939] hover:bg-[#7A1E2C] text-[#F2EBDD] font-mono-meta text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer shadow-lg border border-[#9E2939]"
                >
                  <span>ENTER PORTFOLIO</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <span className="mt-3.5 text-[11px] font-mono-meta text-[#8A8981]">
                  Press [Enter] or Click to enter
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Minimal Ledger */}
      <footer className="relative z-40 w-full max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-[11px] font-mono-meta text-[#5A5954] border-t border-[#D8CEBA]">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9E2939] animate-pulse" />
          <span>Panimalar Engineering College · Chennai [13.08° N, 80.27° E]</span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-[10px] text-[#8A8981]">
          <span>EXPERIMENTAL EDITORIAL MONOGRAPH</span>
        </div>
      </footer>
    </motion.div>
  );
};
