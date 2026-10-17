import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image as ImageIcon, ShieldCheck } from 'lucide-react';

export interface LightboxData {
  src?: string;
  alt: string;
  caption?: string;
}

interface EditorialLightboxProps {
  data: LightboxData | null;
  onClose: () => void;
}

export const EditorialLightbox: React.FC<EditorialLightboxProps> = ({ data, onClose }) => {
  useEffect(() => {
    if (data) {
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
  }, [data, onClose]);

  if (!data) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Inspect Plate: ${data.alt}`}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#242424]/75 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-[#FAF6EE] border border-[#D8CEBA] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#D8CEBA] bg-[#F2EBDD]">
            <div>
              <span className="text-[10px] font-mono-meta uppercase tracking-widest text-[#9E2939] font-bold flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9E2939]" />
                TECHNICAL RECORD // DOCUMENT INSPECTION
              </span>
              <h3 className="font-display font-black text-xl text-[#242424] uppercase">
                {data.alt}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 border border-[#D8CEBA] bg-[#FAF6EE] hover:bg-[#FFFFFF] text-[#242424] hover:text-[#9E2939] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer shadow-xs"
              aria-label="Close plate inspection"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex flex-col items-center justify-center flex-grow bg-[#F2EBDD]">
            <div className="w-full max-w-2xl aspect-[16/10] bg-[#FAF6EE] border border-[#D8CEBA] relative overflow-hidden flex flex-col items-center justify-center p-6 shadow-inner">
              {data.src && (
                <img
                  src={data.src}
                  alt={data.alt}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  className="absolute inset-0 w-full h-full object-contain z-10"
                />
              )}

              {/* Blueprint fallback */}
              <div className="relative z-0 flex flex-col items-center text-center max-w-md">
                <ImageIcon className="w-10 h-10 mb-3 text-[#8A8981]/50 stroke-[1.2]" />
                <h4 className="font-display font-black text-base text-[#242424] mb-1 uppercase">
                  Document Plate
                </h4>
                <p className="font-mono-meta text-xs text-[#5A5954] mb-3">
                  {data.alt}
                </p>
                <p className="font-mono-meta text-[11px] text-[#8A8981] max-w-sm">
                  Asset location: {data.src}
                </p>
              </div>
            </div>

            {/* Caption */}
            {data.caption && (
              <div className="mt-4 max-w-2xl text-xs font-mono-meta text-[#5A5954] bg-[#FAF6EE] p-3.5 border border-[#D8CEBA] w-full">
                <span className="text-[#9E2939] font-bold mr-2">EVIDENCE NOTE:</span>
                <span>{data.caption}</span>
              </div>
            )}
          </div>

          {/* Footer Ledger */}
          <div className="p-3.5 sm:p-4 border-t border-[#D8CEBA] bg-[#F2EBDD] flex items-center justify-between text-xs font-mono-meta text-[#5A5954]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9E2939] animate-pulse" />
              <span>Panimalar Engineering College · Department of Computer Science</span>
            </div>
            <span className="text-[#242424] font-bold">RECORD AUTHENTICATED</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
