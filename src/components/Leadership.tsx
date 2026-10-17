import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mic, HeartHandshake, ShieldAlert } from 'lucide-react';
import { LEADERSHIP_ITEMS, LeadershipItem } from '../data';

export const Leadership: React.FC = () => {
  const getIcon = (iconName: LeadershipItem['iconName']) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[#FF6538]" />;
      case 'Mic':
        return <Mic className="w-5 h-5 text-[#00D2FF]" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-5 h-5 text-[#F2F0EA]" />;
    }
  };

  return (
    <section
      id="leadership"
      className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative scroll-mt-16"
      aria-label="Leadership and Impact"
    >
      {/* Section Header Line */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF6538]">
            05 // IMPACT, ADVOCACY & DISCOURSE
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#929292]">CIVIC & ORATORICAL ENGAGEMENT</span>
      </div>

      <div className="flex flex-col gap-12">
        <div className="max-w-3xl">
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#F2F0EA] tracking-tight mb-4">
            Discourse & Community Action.
          </h2>
          <p className="text-[#929292] text-sm sm:text-base leading-relaxed">
            Engineering leadership requires clear rhetorical articulation and moral responsibility. A record of competitive parliamentary debating, motivational presentations, and humanitarian coordination.
          </p>
        </div>

        {/* Three Cinematic Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEADERSHIP_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className={`relative bg-[#111111] rounded-2xl p-6 sm:p-8 border border-white/[0.08] ${item.accentBorder} transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#929292]">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-[#F2F0EA] mb-1">
                  {item.title}
                </h3>

                {/* Organization & Role */}
                <p className="text-xs font-mono text-[#FF6538] font-semibold mb-4">
                  {item.role} · {item.organization}
                </p>

                {/* Impact Statement */}
                <p className="text-xs text-[#F2F0EA]/80 font-mono mb-3 bg-white/[0.02] p-3 rounded-lg border border-white/[0.04]">
                  &quot;{item.impact}&quot;
                </p>

                {/* Description */}
                <p className="text-xs text-[#929292] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#929292]/60">
                <span>Panimalar Engineering College</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clear Achievements Placeholder (Zero fabrication rule) */}
        <div
          role="region"
          aria-label="Verified Achievements"
          className="border border-dashed border-white/15 bg-white/[0.01] rounded-2xl p-8 sm:p-10 text-center"
        >
          <div className="max-w-md mx-auto flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-white/[0.04] text-[#929292] flex items-center justify-center mb-3 border border-white/10">
              <ShieldAlert className="w-5 h-5 opacity-70" aria-hidden="true" />
            </div>

            <h3 className="font-display font-bold text-base text-[#F2F0EA] mb-1">
              Verified Honors & Certification Record
            </h3>

            <p className="font-mono text-xs text-[#929292] mb-4">
              (add verified awards, hackathons, certifications once confirmed)
            </p>

            <span className="text-[10px] font-mono uppercase tracking-widest text-[#929292]/60 bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.06]">
              Awaiting Official Verification Audit
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
