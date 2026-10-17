import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileCode, CheckCircle, Info } from 'lucide-react';
import { MediaSlot } from '../data-achievements';

interface MediaLightboxProps {
  slot: MediaSlot | null;
  onClose: () => void;
}

export const MediaLightbox: React.FC<MediaLightboxProps> = ({ slot, onClose }) => {
  useEffect(() => {
    if (slot) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [slot, onClose]);

  if (!slot) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Media Lightbox: ${slot.label}`}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#080808]/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-[#111111] border border-white/15 rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/[0.08] bg-[#161616]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF6538] font-bold">
                  MEDIA ASSET INSPECTOR // {slot.type.toUpperCase()}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-[#F2F0EA]">
                {slot.label}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-white/[0.05] hover:bg-white/15 text-[#F2F0EA] transition-colors focus-visible:outline-2 focus-visible:outline-[#FF6538]"
              aria-label="Close media preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Media Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex flex-col items-center justify-center flex-grow bg-[#0c0c0c]">
            <div className="w-full max-w-2xl aspect-[16/10] rounded-xl overflow-hidden relative border border-white/10 bg-[#141414] flex flex-col items-center justify-center text-center p-6 shadow-inner">
              {/* Attempt to display image */}
              <img
                src={slot.expectedPath}
                alt={slot.caption}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
                className="absolute inset-0 w-full h-full object-contain bg-black/60 z-10"
              />

              {/* Blueprint fallback details */}
              <div className="relative z-0 flex flex-col items-center max-w-md">
                <div className="w-14 h-14 rounded-2xl bg-[#FF6538]/10 border border-[#FF6538]/20 flex items-center justify-center mb-4 text-[#FF6538]">
                  <FileCode className="w-7 h-7" />
                </div>
                <h4 className="font-display font-bold text-base text-[#F2F0EA] mb-2">
                  Dedicated Verified Slot
                </h4>
                <p className="text-xs text-[#929292] font-mono mb-4 leading-relaxed">
                  {slot.caption}
                </p>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-left w-full space-y-1.5">
                  <div className="flex items-center justify-between text-[#929292]">
                    <span>Expected File:</span>
                    <span className="text-[#FF6538] font-bold">{slot.expectedPath}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#929292]">
                    <span>Aspect Ratio:</span>
                    <span className="text-[#F2F0EA]">{slot.aspectRatio || '16:10'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanatory Caption */}
            <div className="mt-6 w-full max-w-2xl flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-[#929292]">
              <Info className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#F2F0EA] font-semibold mb-0.5">Asset Preservation Guarantee</p>
                <p className="leading-relaxed">
                  To view your authentic certificate, slide deck, or event photograph, place the corresponding image file in the <code className="text-[#FF6538]">{slot.expectedPath}</code> folder. The portfolio automatically hot-loads it without requiring code modifications.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 sm:px-6 border-t border-white/[0.08] bg-[#141414] flex items-center justify-between text-xs font-mono text-[#929292]">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Zero-Fabrication Media Architecture</span>
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/10 text-[#F2F0EA] font-medium transition-colors"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
