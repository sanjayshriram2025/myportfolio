import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ArtProps {
  id: string;
  isHovered?: boolean;
}

export const ProjectArt: React.FC<ArtProps> = ({ id, isHovered = false }) => {
  const shouldReduceMotion = useReducedMotion();

  switch (id) {
    case 'rakshak':
      return <RakshakArt shouldReduceMotion={shouldReduceMotion} />;
    case 'sentinel-x':
      return <SentinelArt shouldReduceMotion={shouldReduceMotion} />;
    case 'digital-twin':
      return <DigitalTwinArt shouldReduceMotion={shouldReduceMotion} />;
    case 'fullstack-web':
      return <FullStackArt isHovered={isHovered} shouldReduceMotion={shouldReduceMotion} />;
    default:
      return null;
  }
};

/* 1. Rakshak: Network Graph with drawing edges, springing nodes, pulsing hub */
const RakshakArt: React.FC<{ shouldReduceMotion: boolean | null }> = ({ shouldReduceMotion }) => {
  const center = { x: 200, y: 160 };
  const nodes = [
    { x: 100, y: 90, r: 8, label: 'N1' },
    { x: 290, y: 80, r: 10, label: 'N2' },
    { x: 80, y: 220, r: 9, label: 'N3' },
    { x: 300, y: 230, r: 11, label: 'N4' },
    { x: 195, y: 60, r: 7, label: 'N5' },
    { x: 330, y: 155, r: 8, label: 'N6' },
    { x: 70, y: 150, r: 7, label: 'N7' },
  ];

  return (
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto max-w-[420px] select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Rakshak Network Graph AI Visualization"
    >
      <defs>
        <pattern id="rakshak-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1" fill="#F2F0EA" fillOpacity="0.08" />
        </pattern>
      </defs>
      <rect width="400" height="320" fill="url(#rakshak-grid)" />

      {/* Central Pulsing Wave */}
      {!shouldReduceMotion && (
        <>
          <motion.circle
            cx={center.x}
            cy={center.y}
            r="16"
            stroke="#FF6538"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            animate={{ r: [16, 80], opacity: [0.6, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.circle
            cx={center.x}
            cy={center.y}
            r="16"
            stroke="#00D2FF"
            strokeWidth="1"
            strokeOpacity="0.3"
            animate={{ r: [16, 120], opacity: [0.5, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut', delay: 0.9 }}
          />
        </>
      )}

      {/* Cross Interconnections */}
      <motion.path
        d="M 100 90 L 195 60 L 290 80 M 80 220 L 300 230 M 70 150 L 100 90"
        stroke="#F2F0EA"
        strokeWidth="1"
        strokeDasharray="4 4"
        strokeOpacity="0.2"
      />

      {/* Main Edges */}
      {nodes.map((node, i) => (
        <motion.line
          key={`edge-${i}`}
          x1={center.x}
          y1={center.y}
          x2={node.x}
          y2={node.y}
          stroke="#F2F0EA"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 0.9,
            delay: shouldReduceMotion ? 0 : i * 0.08,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Peripheral Nodes */}
      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill="#111111"
            stroke="#FF6538"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 18,
              delay: shouldReduceMotion ? 0 : 0.25 + i * 0.06,
            }}
          />
          <circle cx={node.x} cy={node.y} r={node.r * 0.35} fill="#FF6538" />
        </g>
      ))}

      {/* Central Hub Node */}
      <motion.circle
        cx={center.x}
        cy={center.y}
        r="18"
        fill="#FF6538"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{
          scale: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      <circle cx={center.x} cy={center.y} r="8" fill="#080808" />
      <circle cx={center.x} cy={center.y} r="3" fill="#F2F0EA" />
    </svg>
  );
};

/* 2. Sentinel-X: AI Safety Shield drawing, dashed rings, scanning sweep, checkmark */
const SentinelArt: React.FC<{ shouldReduceMotion: boolean | null }> = ({ shouldReduceMotion }) => {
  return (
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto max-w-[420px] select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sentinel-X AI Safety Shield Visualization"
    >
      <defs>
        <linearGradient id="scan-grad-cinematic" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00D2FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#00D2FF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00D2FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Concentric Dashed Radar Rings */}
      <motion.circle
        cx="200"
        cy="160"
        r="125"
        stroke="#F2F0EA"
        strokeWidth="1"
        strokeDasharray="6 6"
        strokeOpacity="0.15"
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '200px 160px' }}
      />
      <motion.circle
        cx="200"
        cy="160"
        r="95"
        stroke="#00D2FF"
        strokeWidth="1"
        strokeDasharray="4 4"
        strokeOpacity="0.25"
        animate={shouldReduceMotion ? {} : { rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '200px 160px' }}
      />

      {/* Shield Outline Path */}
      <motion.path
        d="M 200 65 L 280 105 C 280 190 235 240 200 260 C 165 240 120 190 120 105 Z"
        stroke="#00D2FF"
        strokeWidth="2.5"
        fill="#00D2FF"
        fillOpacity="0.05"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 1.2, ease: 'easeInOut' }}
      />

      {/* Inner Guardrail Outline */}
      <motion.path
        d="M 200 85 L 262 118 C 262 184 227 222 200 238 C 173 222 138 184 138 118 Z"
        stroke="#F2F0EA"
        strokeWidth="1"
        strokeDasharray="5 3"
        fill="none"
        strokeOpacity="0.25"
      />

      {/* Vertical Scanning Sweep Line */}
      {!shouldReduceMotion && (
        <motion.rect
          x="120"
          y="70"
          width="160"
          height="35"
          fill="url(#scan-grad-cinematic)"
          animate={{ y: [70, 220, 70] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* Checkmark drawing inside shield */}
      <motion.path
        d="M 175 160 L 194 180 L 232 138"
        stroke="#00D2FF"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0.2 : 0.7,
          delay: shouldReduceMotion ? 0 : 0.8,
          ease: 'easeOut',
        }}
      />

      {/* Markers */}
      <circle cx="200" cy="65" r="3" fill="#00D2FF" />
      <circle cx="280" cy="105" r="3" fill="#00D2FF" />
      <circle cx="120" cy="105" r="3" fill="#00D2FF" />
      <circle cx="200" cy="260" r="3" fill="#00D2FF" />
    </svg>
  );
};

/* 3. GenAI Digital Twin: Solid person and dashed twin linked by traveling data dots */
const DigitalTwinArt: React.FC<{ shouldReduceMotion: boolean | null }> = ({
  shouldReduceMotion,
}) => {
  return (
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto max-w-[420px] select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Digital Twin Cybersecurity Risk Model"
    >
      {/* Horizontal Data Conduit Lines */}
      <line x1="140" y1="120" x2="260" y2="120" stroke="#F2F0EA" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="140" y1="160" x2="260" y2="160" stroke="#FF6538" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="140" y1="200" x2="260" y2="200" stroke="#F2F0EA" strokeWidth="1" strokeOpacity="0.2" />

      {/* Traveling Data Packets */}
      {!shouldReduceMotion && (
        <>
          <motion.circle
            cy="120"
            r="3.5"
            fill="#00D2FF"
            animate={{ cx: [140, 260] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
          />
          <motion.circle
            cy="160"
            r="4"
            fill="#FF6538"
            animate={{ cx: [140, 260] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', delay: 0.4 }}
          />
          <motion.circle
            cy="200"
            r="3.5"
            fill="#00D2FF"
            animate={{ cx: [140, 260] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear', delay: 0.8 }}
          />
        </>
      )}

      {/* Left: Physical User */}
      <g>
        <circle cx="105" cy="115" r="24" fill="#111111" stroke="#F2F0EA" strokeWidth="1.5" />
        <circle cx="105" cy="115" r="8" fill="#F2F0EA" />
        <path
          d="M 68 225 C 68 175 80 155 105 155 C 130 155 142 175 142 225 Z"
          fill="#111111"
          stroke="#F2F0EA"
          strokeWidth="1.5"
        />
        <text
          x="105"
          y="255"
          textAnchor="middle"
          fill="#929292"
          fontFamily="monospace"
          fontWeight="600"
          fontSize="10"
          letterSpacing="1"
        >
          PHYSICAL_IDENTITY
        </text>
      </g>

      {/* Right: Generative Digital Twin */}
      <g>
        <circle
          cx="295"
          cy="115"
          r="24"
          stroke="#FF6538"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="#FF6538"
          fillOpacity="0.08"
        />
        <motion.circle
          cx="295"
          cy="115"
          r="8"
          fill="#FF6538"
          animate={shouldReduceMotion ? {} : { scale: [1, 1.25, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <path
          d="M 258 225 C 258 175 270 155 295 155 C 320 155 332 175 332 225 Z"
          stroke="#FF6538"
          strokeWidth="1.5"
          strokeDasharray="5 3"
          fill="#FF6538"
          fillOpacity="0.05"
        />
        <circle cx="275" cy="190" r="2.5" fill="#00D2FF" />
        <circle cx="315" cy="190" r="2.5" fill="#00D2FF" />
        <circle cx="295" cy="175" r="2.5" fill="#FF6538" />
        <text
          x="295"
          y="255"
          textAnchor="middle"
          fill="#FF6538"
          fontFamily="monospace"
          fontWeight="600"
          fontSize="10"
          letterSpacing="1"
        >
          SYNTHETIC_TWIN
        </text>
      </g>

      {/* Pill header */}
      <rect
        x="135"
        y="50"
        width="130"
        height="24"
        rx="12"
        fill="#111111"
        stroke="rgba(242,240,234,0.15)"
      />
      <text
        x="200"
        y="66"
        textAnchor="middle"
        fill="#F2F0EA"
        fontFamily="monospace"
        fontWeight="600"
        fontSize="9"
        letterSpacing="1"
      >
        MONTE_CARLO_SIM
      </text>
    </svg>
  );
};

/* 4. Full-Stack Web: Three isometric layers spreading apart on hover/focus */
const FullStackArt: React.FC<{
  isHovered: boolean;
  shouldReduceMotion: boolean | null;
}> = ({ isHovered, shouldReduceMotion }) => {
  const offset = shouldReduceMotion ? 0 : isHovered ? 26 : 0;

  return (
    <div className="w-full max-w-[400px] h-[300px] flex items-center justify-center relative perspective-[1000px] select-none">
      <div className="relative w-72 h-60 flex flex-col items-center justify-center">
        {/* Top: UI */}
        <motion.div
          animate={{
            y: -offset,
            rotateX: 56,
            rotateZ: -30,
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          className="absolute w-56 h-36 rounded-2xl bg-[#111111] border border-[#FF6538]/60 shadow-[0_12px_24px_rgba(0,0,0,0.7)] p-3.5 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF6538]" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/10" />
            </div>
            <span className="text-[10px] font-mono text-[#FF6538] uppercase">
              UI / PRESENTATION
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="w-full h-2 rounded bg-white/10" />
            <div className="w-2/3 h-2 rounded bg-white/5" />
          </div>
          <div className="flex justify-between items-center text-[9px] font-mono text-[#929292]">
            <span>React 18 · TypeScript</span>
            <span>Tailwind</span>
          </div>
        </motion.div>

        {/* Middle: API */}
        <motion.div
          animate={{
            y: 0,
            rotateX: 56,
            rotateZ: -30,
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          className="absolute w-56 h-36 rounded-2xl bg-[#111111] border border-[#00D2FF]/60 shadow-[0_16px_28px_rgba(0,0,0,0.8)] p-3.5 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#00D2FF] uppercase">
              SERVICE LAYER / API
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-ping" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-5 rounded bg-white/[0.04] flex items-center justify-center text-[9px] font-mono text-[#F2F0EA]/70">
              REST
            </div>
            <div className="h-5 rounded bg-white/[0.04] flex items-center justify-center text-[9px] font-mono text-[#F2F0EA]/70">
              Auth
            </div>
            <div className="h-5 rounded bg-white/[0.04] flex items-center justify-center text-[9px] font-mono text-[#F2F0EA]/70">
              FastAPI
            </div>
          </div>
          <span className="text-[9px] font-mono text-[#929292]">
            Microservices & Pipelines
          </span>
        </motion.div>

        {/* Bottom: Data */}
        <motion.div
          animate={{
            y: offset,
            rotateX: 56,
            rotateZ: -30,
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          className="absolute w-56 h-36 rounded-2xl bg-[#111111] border border-white/20 shadow-[0_20px_34px_rgba(0,0,0,0.9)] p-3.5 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#F2F0EA] uppercase">
              STATE & STORAGE
            </span>
            <span className="text-[9px] font-mono text-[#929292]">SQL / Vector</span>
          </div>
          <div className="space-y-1.5">
            <div className="w-full h-2 rounded bg-white/10" />
            <div className="w-4/5 h-2 rounded bg-white/5" />
          </div>
          <span className="text-[9px] font-mono text-[#929292]">
            Firebase · PostgreSQL · Vector Index
          </span>
        </motion.div>
      </div>
    </div>
  );
};
