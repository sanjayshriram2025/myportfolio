import React from 'react';
import { ArrowUp, Github } from 'lucide-react';
import { PROFILE } from '../data-editorial';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      role="contentinfo"
      className="bg-[#F2EBDD] text-[#5A5954] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#D8CEBA]"
    >
      <div className="max-w-[1520px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono-meta text-xs">
        {/* Left: Brand Monogram & Classification */}
        <div className="space-y-1">
          <p className="text-[#242424] font-display font-black text-base tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9E2939] animate-pulse" />
            <span>SANJAY SHRIRAM N.</span>
          </p>
          <p className="text-[#5A5954] text-[11px]">
            © {new Date().getFullYear()} · Computer Science & Engineering · Panimalar Engineering College · Chennai, India
          </p>
        </div>

        {/* Center: Repository Link */}
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#242424] hover:text-[#9E2939] font-medium transition-colors flex items-center gap-2"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub repository</span>
          </a>
          <span className="text-[#D8CEBA]">|</span>
          <span className="text-[11px] text-[#9E2939] font-bold">Studio Editorial Monograph</span>
        </div>

        {/* Right: Back to Top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 min-h-[40px] px-4 py-2 bg-[#FAF6EE] hover:bg-[#FFFFFF] text-[#242424] hover:text-[#9E2939] border border-[#D8CEBA] hover:border-[#9E2939] transition-colors text-xs font-mono-meta cursor-pointer shadow-xs"
          aria-label="Return to top of page"
        >
          <span>Return to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#9E2939]" />
        </button>
      </div>
    </footer>
  );
};
