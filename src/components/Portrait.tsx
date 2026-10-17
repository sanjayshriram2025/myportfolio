import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { User, Activity, ShieldCheck, Terminal } from 'lucide-react';

interface PortraitProps {
  mousePosition: { x: number; y: number };
}

export const Portrait: React.FC<PortraitProps> = ({ mousePosition }) => {
  const shouldReduceMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);

  // Auto-detect portrait.jpg in assets
  const imageModules = import.meta.glob<{ default: string }>(
    '../assets/portrait.{jpg,jpeg,png,webp,JPG,JPEG,PNG}',
    { eager: true }
  );

  const entries = Object.values(imageModules) as Array<{ default: string }>;
  const detectedSrc = entries[0]?.default || null;
  const hasPortrait = Boolean(detectedSrc) && !imageError;

  // Gentle subtle pointer parallax (disabled on touch/reduced-motion)
  const mx = shouldReduceMotion ? 0 : mousePosition.x;
  const my = shouldReduceMotion ? 0 : mousePosition.y;

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-[4/5] mx-auto select-none flex items-center justify-center">
      {/* 1. Cinematic Ambient Rim Glow (Layer 0) */}
      <div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#FF6538]/20 via-[#00D2FF]/10 to-transparent blur-2xl opacity-60 pointer-events-none -z-30"
        aria-hidden="true"
      />

      {/* 2. Technical Wireframe Reticle Behind (Layer 1) */}
      <motion.div
        animate={{
          x: mx * -18,
          y: my * -14,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 100 }}
        className="absolute -inset-2 border border-white/10 rounded-3xl -z-20 pointer-events-none"
        aria-hidden="true"
      >
        <span className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#FF6538]" />
        <span className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#FF6538]" />
        <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#FF6538]" />
        <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#FF6538]" />
      </motion.div>

      {/* 3. Geometric Offset Technical Plate (Layer 2) */}
      <motion.div
        animate={{
          x: mx * 14,
          y: my * 10,
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 110 }}
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#111111] border border-white/[0.08] -z-10 shadow-2xl"
        aria-hidden="true"
      />

      {/* 4. Main Portrait Frame (Natural facial tone preserved) */}
      <motion.div
        animate={{
          x: mx * 8,
          y: my * 6,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 120 }}
        className="relative w-full h-full rounded-2xl overflow-hidden bg-[#111111] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center z-10"
      >
        {hasPortrait && detectedSrc ? (
          <img
            src={detectedSrc}
            alt="Sanjay Shriram N — Keynote & Systems Researcher"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.04] saturate-[1.02]"
            loading="eager"
          />
        ) : (
          <div className="w-full h-full border border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center p-8 text-center bg-[#111111]">
            <div className="w-20 h-20 rounded-full bg-white/[0.05] flex items-center justify-center mb-4 border border-white/10 text-[#FF6538]">
              <User className="w-10 h-10 stroke-[1.5]" />
            </div>
            <p className="font-display font-bold text-sm text-[#F2F0EA] mb-1">
              Portrait Placeholder
            </p>
            <p className="text-xs text-[#929292] font-mono max-w-[200px]">
              Add <span className="text-[#FF6538]">src/assets/portrait.jpg</span> to render photo
            </p>
          </div>
        )}

        {/* Cinematic Vignette Overlay (Bottom blend) */}
        {hasPortrait && (
          <div
            className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        )}

        {/* Technical Hud Overlay at Bottom of Portrait */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[9px] font-mono uppercase tracking-wider text-[#F2F0EA]/80 bg-[#080808]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 pointer-events-none">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
            SEC-AI / RES
          </span>
          <span className="text-[#929292]">LOC: CHENNAI [13.08°N]</span>
        </div>
      </motion.div>

      {/* 5. Minimal Technical Chip: Adversarial AI (Top Right) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [-4, 4, -4],
              }
        }
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-3 -right-3 sm:-right-4 z-20 bg-[#111111]/90 backdrop-blur-md border border-[#00D2FF]/40 text-[#00D2FF] px-3 py-1 rounded-full text-[10px] font-mono font-medium shadow-xl flex items-center gap-1.5"
      >
        <ShieldCheck className="w-3 h-3 text-[#00D2FF]" aria-hidden="true" />
        <span>Adversarial Defense</span>
      </motion.div>

      {/* 6. Minimal Technical Chip: Graph AI (Middle Left) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [4, -4, 4],
              }
        }
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="absolute top-1/2 -left-4 sm:-left-6 z-20 bg-[#111111]/90 backdrop-blur-md border border-[#FF6538]/40 text-[#FF6538] px-3 py-1 rounded-full text-[10px] font-mono font-medium shadow-xl flex items-center gap-1.5"
      >
        <Activity className="w-3 h-3 text-[#FF6538]" aria-hidden="true" />
        <span>Graph Intelligence</span>
      </motion.div>

      {/* 7. Minimal Technical Chip: Systems Research (Bottom Right) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [-3, 3, -3],
              }
        }
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="absolute -bottom-3 right-4 sm:right-6 z-20 bg-[#111111]/90 backdrop-blur-md border border-white/20 text-[#F2F0EA] px-3 py-1 rounded-full text-[10px] font-mono font-medium shadow-xl flex items-center gap-1.5"
      >
        <Terminal className="w-3 h-3 text-[#929292]" aria-hidden="true" />
        <span>High-Assurance SW</span>
      </motion.div>
    </div>
  );
};
