import React, { useState } from 'react';
import { Github, Mail, ArrowUpRight, Copy, CheckCircle2, Send } from 'lucide-react';
import { PROFILE } from '../data-editorial';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const contactEmail = 'sanjayshriram.cs@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      id="contact"
      className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative bg-[#F2EBDD]"
      aria-label="Contact — Dispatch & Channels"
    >
      {/* Section Header Line */}
      <div className="flex items-center justify-between text-xs font-mono-meta text-[#5A5954] pb-4 border-b border-[#D8CEBA] mb-16">
        <span className="text-[#9E2939] font-bold flex items-center gap-2">
          <Send className="w-3.5 h-3.5 text-[#9E2939]" />
          07 // DISPATCH & COLLABORATION
        </span>
        <span>Academic Inquiry & Technical Exchange</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
        {/* Left Column: Headline & Action */}
        <div className="lg:col-span-8">
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] text-[#242424] tracking-tight leading-[0.92] mb-8 uppercase">
            <span className="block">Initiate</span>
            <span className="block text-[#242424]">
              dialogue<span className="text-[#9E2939]">.</span>
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#5A5954] leading-relaxed max-w-2xl mb-12">
            Open to summer 2026 engineering internships, AI safety lab collaborations, and mathematically rigorous systems engineering challenges.
          </p>

          {/* Factual Channels */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono-meta">
            {/* Real Verified GitHub in Bold Cobalt */}
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#2448C5] hover:bg-[#193496] text-[#F2EBDD] font-bold tracking-wider transition-all border border-[#193496] shadow-sm cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>GitHub profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Direct Email Action */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FAF6EE] hover:bg-[#FFFFFF] text-[#242424] border border-[#D8CEBA] hover:border-[#9E2939] transition-colors cursor-pointer shadow-xs"
              title="Click to copy verified contact email"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#9E2939]" />
                  <span className="text-[#9E2939] font-bold">Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-[#9E2939]" />
                  <span className="font-semibold">Copy Direct Email</span>
                  <Copy className="w-3.5 h-3.5 text-[#5A5954]" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Verification Stamp */}
        <div className="lg:col-span-4 p-6 bg-[#FAF6EE] border border-[#D8CEBA] text-xs font-mono-meta text-[#5A5954] space-y-3 shadow-sm">
          <div className="text-[10px] text-[#9E2939] uppercase font-bold tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E2939] animate-pulse" />
            AUTHENTIC DISPATCH RECORD
          </div>
          <p className="text-[#242424] font-display font-black text-xl uppercase">
            Sanjay Shriram N.
          </p>
          <p className="leading-relaxed text-[11px]">
            Primary codebase repository: <br />
            <a
              href="https://github.com/sanjayshriram2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#242424] underline hover:text-[#9E2939] font-bold"
            >
              github.com/sanjayshriram2025
            </a>
          </p>
          <div className="pt-3 border-t border-[#D8CEBA] text-[10px] text-[#8A8981] flex items-center justify-between">
            <span>RECORD STAMP: CHENNAI</span>
            <span className="text-[#9E2939] font-bold">2026 // 2028</span>
          </div>
        </div>
      </div>
    </section>
  );
};
