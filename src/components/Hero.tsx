import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { TypographicCenterpiece3D } from './TypographicCenterpiece3D';
import { ArrowDownRight, Compass, Maximize2 } from 'lucide-react';
import { PROFILE } from '../data-editorial';

interface HeroProps {
  onInspectMedia?: (src: string, alt: string, caption?: string) => void;
}

interface PhotoTrackCard {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  rotation: number;
  zDepth: number;
}

export const Hero: React.FC<HeroProps> = ({ onInspectMedia }) => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Smooth springs for gentle pointer-driven perspective movement
  const rawMouseX = useRef(0);
  const rawMouseY = useRef(0);
  const smoothMouseX = useSpring(0, { stiffness: 45, damping: 22 });
  const smoothMouseY = useSpring(0, { stiffness: 45, damping: 22 });

  // Scroll-linked cinematic transition
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const leftTrackX = useTransform(scrollYProgress, [0, 0.8], [0, -220]);
  const leftTrackOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const leftTrackRotateY = useTransform(scrollYProgress, [0, 0.8], [14, 40]);

  const rightTrackX = useTransform(scrollYProgress, [0, 0.8], [0, 220]);
  const rightTrackOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const rightTrackRotateY = useTransform(scrollYProgress, [0, 0.8], [-14, -40]);

  const centerScale = useTransform(scrollYProgress, [0, 0.85], [1, 0.95]);
  const centerOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const centerTranslateY = useTransform(scrollYProgress, [0, 0.85], [0, -50]);

  // Pointer movement handler across hero stage
  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    rawMouseX.current = x;
    rawMouseY.current = y;
    smoothMouseX.set(x);
    smoothMouseY.set(y);
  };

  // Left Perspective Track: Speaking, Oratory, and Debate Photographs
  const leftTrackPhotos: PhotoTrackCard[] = [
    {
      id: 'lt-1',
      src: '/images/reels/sanjay-ideathon-stage.jpg',
      alt: 'Sanjay Shriram presenting on stage at Ideathon 2024–25',
      caption: 'Ideathon 2024–25 · Finalist Stage Presentation',
      category: 'FINALIST',
      rotation: -2,
      zDepth: 25,
    },
    {
      id: 'lt-2',
      src: '/images/reels/sanjay-speech.jpg',
      alt: 'Sanjay Shriram delivering address as App Dev Coordinator',
      caption: 'App Dev Club Coordinator Address · PEC Plenary',
      category: 'LEADERSHIP',
      rotation: 1.5,
      zDepth: 45,
    },
    {
      id: 'lt-3',
      src: '/images/reels/sanjay-mun-debate.jpg',
      alt: 'Sanjay Shriram debating at Model United Nations',
      caption: 'Model United Nations Assembly General Plenary',
      category: 'DIPLOMACY',
      rotation: -1,
      zDepth: 10,
    },
  ];

  // Right Perspective Track: Keynote, Demonstration, and Research Photographs
  const rightTrackPhotos: PhotoTrackCard[] = [
    {
      id: 'rt-1',
      src: '/images/reels/sanjay-keynote-suit.jpg',
      alt: 'Sanjay Shriram delivering keynote plenary address in formal suit',
      caption: 'Keynote Plenary Address · Delegation',
      category: 'KEYNOTE',
      rotation: 2,
      zDepth: 35,
    },
    {
      id: 'rt-2',
      src: '/images/reels/sanjay-project-demo.jpg',
      alt: 'Hardware prototype demonstration and evaluation review',
      caption: 'Hardware Demonstration & Experimental Jury Review',
      category: 'PROTOTYPE',
      rotation: -1.5,
      zDepth: 50,
    },
    {
      id: 'rt-3',
      src: '/images/reels/sanjay-conference.jpg',
      alt: 'INVENTE Technical Symposium presentation',
      caption: 'INVENTE’26 Technical Symposium Research Presentation',
      category: 'SYMPOSIUM',
      rotation: 1,
      zDepth: 15,
    },
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      onPointerMove={handlePointerMove}
      className="relative min-h-screen flex flex-col justify-between pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-[1540px] mx-auto border-b border-[#D8CEBA] overflow-hidden bg-[#F2EBDD]"
      aria-label="Hero — Monumental Typographic Identity & Exhibition Perspective"
    >
      {/* Top Ledger: Institutional Coordinates */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="w-full flex flex-wrap items-center justify-between gap-4 py-2.5 border-b border-[#D8CEBA] text-[11px] font-mono-meta text-[#5A5954]"
      >
        <div className="flex items-center gap-3">
          <span className="text-[#9E2939] font-bold tracking-wider">REF: SSN-2026</span>
          <span className="text-[#D8CEBA]">/</span>
          <span className="text-[#242424] font-medium">Independent AI Research & Systems Engineering</span>
        </div>
        <div className="flex items-center gap-6">
          <span>Panimalar Engineering College</span>
          <span className="hidden md:inline">Chennai, India [13.08° N, 80.27° E]</span>
          <span className="text-[#9E2939] font-bold">{PROFILE.timeline}</span>
        </div>
      </motion.div>

      {/* =========================================================================
          HERO MAIN COMPOSITION: OVERSIZED 3D NAME FLANKED BY CURVED PHOTO TRACKS
         ========================================================================= */}
      <div className="relative my-auto py-3 sm:py-5 w-full perspective-2000">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
          
          {/* =====================================================================
              LEFT CURVED PERSPECTIVE TRACK (Exhibition Matted Plates)
             ===================================================================== */}
          <motion.aside
            style={
              shouldReduceMotion
                ? {}
                : {
                    x: leftTrackX,
                    opacity: leftTrackOpacity,
                    rotateY: leftTrackRotateY,
                  }
            }
            className="hidden lg:flex lg:col-span-2 xl:col-span-2 flex-col gap-4 preserve-3d origin-right z-20"
            aria-label="Oratory & Stage Perspective Track"
          >
            {leftTrackPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  scale: 1.04,
                  translateZ: 30,
                  transition: { duration: 0.25 },
                }}
                onClick={() => onInspectMedia && onInspectMedia(photo.src, photo.alt, photo.caption)}
                className="group relative bg-[#FAF6EE] border border-[#D8CEBA] hover:border-[#9E2939] p-2.5 shadow-sm hover:shadow-lg cursor-pointer transition-all duration-300"
                style={{
                  transform: `rotate(${photo.rotation}deg) translateZ(${photo.zDepth}px)`,
                }}
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#ECE4D4] border border-[#D8CEBA] mb-2">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover photo-exhibition group-hover:scale-103 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-[#FAF6EE]/95 px-1.5 py-0.5 border border-[#D8CEBA] text-[8px] font-mono-meta text-[#9E2939] font-bold tracking-wider">
                    {photo.category}
                  </div>
                  <div className="absolute bottom-1.5 right-1.5 p-1 bg-[#FAF6EE]/90 text-[#242424] opacity-0 group-hover:opacity-100 transition-opacity border border-[#D8CEBA]">
                    <Maximize2 className="w-3 h-3 text-[#9E2939]" />
                  </div>
                </div>

                <p className="text-[10.5px] leading-snug font-mono-meta text-[#4A4944] line-clamp-2 group-hover:text-[#242424] transition-colors font-medium">
                  {photo.caption}
                </p>
              </motion.div>
            ))}
          </motion.aside>

          {/* =====================================================================
              CENTERSTAGE: OVERSIZED MONUMENTAL 3D TYPOGRAPHY (~1.5X SCALE)
             ===================================================================== */}
          <motion.div
            style={
              shouldReduceMotion
                ? {}
                : {
                    scale: centerScale,
                    opacity: centerOpacity,
                    y: centerTranslateY,
                  }
            }
            className="lg:col-span-8 xl:col-span-8 flex flex-col items-center justify-center text-center z-30 px-1 sm:px-2"
          >
            {/* The Signature 3D Centerpiece — Monumental, Heavy, Tactile Dimensionality */}
            <div className="w-full relative mb-1">
              <TypographicCenterpiece3D />
            </div>

            {/* Editorial Research Statement */}
            <div className="max-w-xl mx-auto mt-1 sm:mt-2 mb-6 text-center">
              <p className="font-sans text-base sm:text-lg text-[#3E3D38] leading-relaxed tracking-tight">
                Investigating <strong className="text-[#242424] font-semibold">adversarial machine learning</strong>, explainable cybersecurity digital twins, and verifiable runtime guardrails in Chennai.
              </p>
              <div className="mt-2.5 flex items-center justify-center gap-2.5 text-[11px] font-mono-meta text-[#7A7971]">
                <span className="text-[#9E2939] font-bold tracking-wider">PEC // CLASS OF ’28</span>
                <span className="text-[#D8CEBA]">•</span>
                <span>8.3 CGPA</span>
                <span className="text-[#D8CEBA]">•</span>
                <span>SIH26189 FINALIST</span>
              </div>
            </div>

            {/* Deliberate Editorial CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 font-mono-meta text-xs">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#9E2939] hover:bg-[#7A1E2C] text-[#F2EBDD] font-bold tracking-wider transition-all border border-[#9E2939] shadow-xs hover:shadow-md cursor-pointer"
              >
                <span>Selected Systems</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#research"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FAF6EE] hover:bg-[#FFFFFF] text-[#242424] border border-[#D8CEBA] hover:border-[#2448C5] transition-colors cursor-pointer shadow-xs"
              >
                <span>Research Dossiers</span>
                <Compass className="w-4 h-4 text-[#2448C5]" />
              </a>
            </div>
          </motion.div>

          {/* =====================================================================
              RIGHT CURVED PERSPECTIVE TRACK (Exhibition Matted Plates)
             ===================================================================== */}
          <motion.aside
            style={
              shouldReduceMotion
                ? {}
                : {
                    x: rightTrackX,
                    opacity: rightTrackOpacity,
                    rotateY: rightTrackRotateY,
                  }
            }
            className="hidden lg:flex lg:col-span-2 xl:col-span-2 flex-col gap-4 preserve-3d origin-left z-20"
            aria-label="Research & Keynote Perspective Track"
          >
            {rightTrackPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  scale: 1.04,
                  translateZ: 30,
                  transition: { duration: 0.25 },
                }}
                onClick={() => onInspectMedia && onInspectMedia(photo.src, photo.alt, photo.caption)}
                className="group relative bg-[#FAF6EE] border border-[#D8CEBA] hover:border-[#2448C5] p-2.5 shadow-sm hover:shadow-lg cursor-pointer transition-all duration-300"
                style={{
                  transform: `rotate(${photo.rotation}deg) translateZ(${photo.zDepth}px)`,
                }}
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#ECE4D4] border border-[#D8CEBA] mb-2">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover photo-exhibition group-hover:scale-103 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-[#FAF6EE]/95 px-1.5 py-0.5 border border-[#D8CEBA] text-[8px] font-mono-meta text-[#2448C5] font-bold tracking-wider">
                    {photo.category}
                  </div>
                  <div className="absolute bottom-1.5 right-1.5 p-1 bg-[#FAF6EE]/90 text-[#242424] opacity-0 group-hover:opacity-100 transition-opacity border border-[#D8CEBA]">
                    <Maximize2 className="w-3 h-3 text-[#2448C5]" />
                  </div>
                </div>

                <p className="text-[10.5px] leading-snug font-mono-meta text-[#4A4944] line-clamp-2 group-hover:text-[#242424] transition-colors font-medium">
                  {photo.caption}
                </p>
              </motion.div>
            ))}
          </motion.aside>

          {/* =====================================================================
              MOBILE / TABLET TOUCH TRACK: SWIPEABLE CAROUSEL
             ===================================================================== */}
          <div className="lg:hidden col-span-1 w-full pt-4 border-t border-[#D8CEBA]">
            <div className="flex items-center justify-between text-xs font-mono-meta text-[#5A5954] mb-3">
              <span className="text-[#9E2939] font-bold">DOCUMENTED PHOTOGRAPHIC RECORD</span>
              <span>SWIPE HORIZONTALLY →</span>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
              {[...leftTrackPhotos, ...rightTrackPhotos].map((photo) => (
                <div
                  key={`mob-${photo.id}`}
                  onClick={() => onInspectMedia && onInspectMedia(photo.src, photo.alt, photo.caption)}
                  className="snap-center shrink-0 w-64 bg-[#FAF6EE] border border-[#D8CEBA] p-3 shadow-md cursor-pointer"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#ECE4D4] border border-[#D8CEBA] mb-2">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover photo-exhibition"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 bg-[#FAF6EE]/95 px-2 py-0.5 border border-[#D8CEBA] text-[8px] font-mono-meta text-[#9E2939] font-bold">
                      {photo.category}
                    </span>
                  </div>
                  <p className="text-[10.5px] leading-snug font-mono-meta text-[#242424] line-clamp-2 font-medium">{photo.caption}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Ledger */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="w-full pt-4 border-t border-[#D8CEBA] flex items-center justify-between text-xs font-mono-meta text-[#5A5954]"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9E2939] animate-pulse" />
          <span>Active Investigation: Explainable Cybersecurity Digital Twins & Adversarial Robustness</span>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-1.5 text-[#242424] hover:text-[#9E2939] transition-colors py-1"
          aria-label="Scroll to introductory statement"
        >
          <span>Scroll to explore</span>
          <span className="text-[#9E2939]">↓</span>
        </a>
      </motion.div>
    </section>
  );
};
