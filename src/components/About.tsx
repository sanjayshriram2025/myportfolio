import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';
import { ABOUT_STATEMENT, ABOUT_FACTS } from '../data';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  shouldReduceMotion: boolean | null;
}

const ScrubWord: React.FC<WordProps> = ({ children, progress, range, shouldReduceMotion }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ['rgba(146, 146, 146, 0.3)', 'rgba(242, 240, 234, 1)']);

  if (shouldReduceMotion) {
    return <span className="inline-block text-[#F2F0EA] mr-2.5 mb-2">{children}</span>;
  }

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-2.5 sm:mr-3.5 mb-2 transition-colors duration-150"
    >
      {children}
    </motion.span>
  );
};

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const words = ABOUT_STATEMENT.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 50%'],
  });

  const getFactIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap className="w-4 h-4 text-[#FF6538]" />;
      case 1:
        return <Calendar className="w-4 h-4 text-[#00D2FF]" />;
      case 2:
        return <Award className="w-4 h-4 text-[#FF6538]" />;
      case 3:
      default:
        return <MapPin className="w-4 h-4 text-[#F2F0EA]" />;
    }
  };

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative scroll-mt-20"
      aria-label="Overview & Trajectory"
    >
      <div className="flex flex-col gap-16">
        {/* Section Header Line */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF6538]">
              01 // DOSSIER & BACKGROUND
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#929292]">SYSTEM SPECS</span>
        </div>

        {/* Scroll-Scrubbed Statement */}
        <div ref={containerRef} className="py-4 max-w-5xl">
          <p className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.2] tracking-tight">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = (i + 1) / words.length;
              return (
                <ScrubWord
                  key={`${word}-${i}`}
                  progress={scrollYProgress}
                  range={[start, end]}
                  shouldReduceMotion={shouldReduceMotion}
                >
                  {word}
                </ScrubWord>
              );
            })}
          </p>
        </div>

        {/* 4-Cell Technical Fact Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ABOUT_FACTS.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative bg-[#111111] rounded-2xl p-6 border border-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              {/* Top Row: Label & Micro Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#929292]">
                  {fact.label}
                </span>
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                  {getFactIcon(index)}
                </div>
              </div>

              {/* Value */}
              <div className="font-display font-bold text-xl sm:text-2xl text-[#F2F0EA] mb-1 group-hover:text-[#FF6538] transition-colors">
                {fact.value}
              </div>

              {/* Detail */}
              <p className="text-xs text-[#929292] font-mono mb-3">
                {fact.detail}
              </p>

              {/* Status Tag */}
              <div className="inline-block text-[10px] font-mono text-[#F2F0EA]/60 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.05]">
                {fact.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
