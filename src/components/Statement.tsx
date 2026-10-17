import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Terminal, Award, BookOpen } from 'lucide-react';

export const Statement: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const storyImages = [
    {
      src: '/images/events/ideathon-event.jpg',
      label: 'Ideathon 2024–25 Finalist Evaluation',
      badge: 'TOP 20 FINALIST',
      domain: 'Environmental IoT & AI',
    },
    {
      src: '/images/reels/sanjay-keynote-suit.jpg',
      label: 'Keynote Plenary Address · Oratory',
      badge: 'PLENARY LEAD',
      domain: 'Student Leadership',
    },
    {
      src: '/images/events/mun-assembly.jpg',
      label: 'Model United Nations General Assembly',
      badge: 'SECRETARIAT LEAD',
      domain: 'Multilateral Diplomacy',
    },
    {
      src: '/images/events/app-dev-session.jpg',
      label: 'App Dev Club Orientation & Technical Session',
      badge: 'COORDINATOR',
      domain: 'Peer Technical Mentorship',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#D8CEBA] relative bg-[#F2EBDD]"
      aria-label="About — Personal Story & Philosophy"
    >
      <div className="flex flex-col gap-14 sm:gap-20">
        {/* Editorial Section Ledger */}
        <div className="flex items-center justify-between text-xs font-mono-meta text-[#5A5954] pb-4 border-b border-[#D8CEBA]">
          <span className="text-[#9E2939] font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9E2939]" />
            01 // ABOUT & RESEARCH PERSPECTIVE
          </span>
          <span className="text-[#5A5954]">Core Engineering Philosophy</span>
        </div>

        {/* Oversized Studio Statement with Editorial Typography */}
        <div className="max-w-4xl">
          <motion.blockquote
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.05] tracking-tight text-[#242424] uppercase"
          >
            I study how machine learning systems fail under pressure. My work focuses on{' '}
            <span className="font-serif-italic font-normal lowercase text-4xl sm:text-6xl md:text-7xl text-[#9E2939]">
              adversarial defense
            </span>
            , explainable cybersecurity digital twins, and resilient software architectures that remain dependable when real-world inputs turn unpredictable.
          </motion.blockquote>
        </div>

        {/* Real Field Photography Contact Plates */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono-meta text-[#5A5954]">
            <span className="uppercase tracking-wider font-bold">Field Photography & Academic Engagements</span>
            <span className="hidden sm:inline text-[#242424]">Verified Student Leadership & Symposia</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {storyImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative aspect-[4/3] overflow-hidden bg-[#FAF6EE] border border-[#D8CEBA] hover:border-[#9E2939] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover photo-exhibition transition-transform duration-500 group-hover:scale-104"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/85 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <span className="inline-block px-1.5 py-0.5 text-[8px] font-mono-meta font-bold bg-[#FAF6EE] text-[#9E2939] border border-[#D8CEBA] mb-1">
                    {img.badge}
                  </span>
                  <p className="text-[10px] font-mono-meta text-[#F2EBDD] truncate leading-tight font-medium">
                    {img.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3-Column Structured Dossier */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#D8CEBA] text-xs font-mono-meta">
          <div className="p-6 bg-[#FAF6EE] border border-[#D8CEBA] space-y-2.5 shadow-xs">
            <div className="flex items-center gap-2 text-[#9E2939] text-[11px] font-bold">
              <BookOpen className="w-3.5 h-3.5 text-[#9E2939]" />
              <span>01 · Academic Rigor</span>
            </div>
            <p className="text-[#242424] font-sans text-sm leading-relaxed">
              Second-year B.E. Computer Science student at Panimalar Engineering College, maintaining an 8.3 CGPA with distinction across algorithmic foundations, system design, and discrete mathematics.
            </p>
          </div>

          <div className="p-6 bg-[#FAF6EE] border border-[#D8CEBA] space-y-2.5 shadow-xs">
            <div className="flex items-center gap-2 text-[#2448C5] text-[11px] font-bold">
              <Terminal className="w-3.5 h-3.5 text-[#2448C5]" />
              <span>02 · Research Investigation</span>
            </div>
            <p className="text-[#242424] font-sans text-sm leading-relaxed">
              Investigating generative digital twins for personal risk prediction, explainable SHAP feature attribution, runtime guardrails, and graph intelligence algorithms for forensic analytics.
            </p>
          </div>

          <div className="p-6 bg-[#FAF6EE] border border-[#D8CEBA] space-y-2.5 shadow-xs">
            <div className="flex items-center gap-2 text-[#D5A65A] text-[11px] font-bold">
              <Award className="w-3.5 h-3.5 text-[#D5A65A]" />
              <span>03 · Technical Trajectory</span>
            </div>
            <p className="text-[#242424] font-sans text-sm leading-relaxed">
              Preparing for graduate research in machine learning security and high-assurance architectures while engineering software that can be audited, stress-tested, and deployed today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
