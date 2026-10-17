import React from 'react';
import { MARQUEE_WORDS } from '../data';

export const Marquee: React.FC = () => {
  const marqueeList = [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS];

  return (
    <div
      className="relative w-full overflow-hidden py-3 my-8 bg-[#111111] border-y border-white/10 select-none"
      aria-hidden="true"
    >
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {marqueeList.map((word, idx) => (
          <div key={`${word}-${idx}`} className="flex items-center">
            <span className="font-mono text-xs uppercase tracking-widest px-4 text-[#F2F0EA]/70">
              {word}
            </span>
            <span className="text-[#FF6538] text-xs px-2 font-bold select-none">
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
