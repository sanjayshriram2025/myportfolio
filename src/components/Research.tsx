import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, AlertCircle, Compass, FileText } from 'lucide-react';
import { RESEARCH_THREADS } from '../data';

export const Research: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<string[]>([RESEARCH_THREADS[0].id]);

  const toggleItem = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="research"
      className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative scroll-mt-16"
      aria-label="Research Inquiries"
    >
      {/* Section Header Line */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF6538]">
            03 // APPLIED INQUIRIES & HYPOTHESES
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#929292]">EARLY-STAGE RIGOR</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sticky Left Heading */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF6538]">
            <Compass className="w-4 h-4" />
            <span>RESEARCH TRAJECTORY</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#F2F0EA] leading-tight tracking-tight">
            Questions I keep chasing in AI and security.
          </h2>

          <p className="text-[#929292] text-sm sm:text-base leading-relaxed">
            Exploring how next-generation autonomous models can either exploit or defend human autonomy. I focus on mechanistic interpretability, adversarial prompt defense, and generative digital twins.
          </p>

          {/* Explicit Academic Status Notice */}
          <div className="p-4 rounded-xl bg-[#111111] border border-white/10 text-xs font-mono text-[#929292] flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#FF6538] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <span className="font-bold text-[#F2F0EA] block mb-1">Authentic Academic Disclaimer</span>
              <span>
                These inquiries represent student research threads, exploratory hypotheses, and ongoing prototype codebases. <strong className="text-[#F2F0EA]">None of this is currently peer-reviewed or published literature.</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Right-Side Technical Accordion */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {RESEARCH_THREADS.map((thread) => {
            const isOpen = expandedIds.includes(thread.id);
            const contentId = `research-content-${thread.id}`;
            const headerId = `research-header-${thread.id}`;

            return (
              <div
                key={thread.id}
                className="bg-[#111111] rounded-2xl border border-white/[0.08] overflow-hidden transition-colors hover:border-white/20"
              >
                {/* Accordion Trigger Button */}
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleItem(thread.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 focus-visible:outline-2 focus-visible:outline-[#FF6538]"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#FF6538]">
                        {thread.number}
                      </span>
                      {/* Status Badge */}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white/[0.04] text-[#F2F0EA] border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" aria-hidden="true" />
                        <span>{thread.status}</span>
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base sm:text-lg text-[#F2F0EA]">
                      {thread.title}
                    </h3>
                    <p className="text-xs text-[#929292] font-mono">
                      Focus: {thread.focus}
                    </p>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="p-1.5 rounded-full bg-white/[0.05] text-[#929292] shrink-0 mt-1"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Animated Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/[0.06] text-xs space-y-4">
                        <div>
                          <span className="font-mono text-[#F2F0EA] font-semibold uppercase tracking-wider block mb-1">
                            Core Hypothesis
                          </span>
                          <p className="text-[#929292] leading-relaxed font-mono">
                            {thread.hypothesis}
                          </p>
                        </div>

                        <div>
                          <span className="font-mono text-[#00D2FF] font-semibold uppercase tracking-wider block mb-1">
                            Experimental Methodology
                          </span>
                          <p className="text-[#929292] leading-relaxed font-mono">
                            {thread.methodology}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {thread.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-[#F2F0EA]/70 border border-white/[0.06]"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-[#929292]/60">
                          <FileText className="w-3 h-3" />
                          <span>Status: Student Research Track · Pre-Publication</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
