import React, { useState } from 'react';
import { Camera, FileText, Image as ImageIcon, Presentation, Award, Eye, ExternalLink } from 'lucide-react';
import { MediaSlot } from '../data-achievements';

interface MediaPlaceholderProps {
  slot: MediaSlot;
  onPreview?: (slot: MediaSlot) => void;
  className?: string;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
  slot,
  onPreview,
  className = '',
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Pick appropriate icon
  const getIcon = () => {
    switch (slot.type) {
      case 'certificate':
        return <Award className="w-5 h-5 text-[#FF6538]" />;
      case 'slides':
        return <Presentation className="w-5 h-5 text-[#00D2FF]" />;
      case 'poster':
      case 'paper':
        return <FileText className="w-5 h-5 text-[#F2F0EA]" />;
      case 'screenshot':
        return <ImageIcon className="w-5 h-5 text-[#FF6538]" />;
      case 'photo':
      default:
        return <Camera className="w-5 h-5 text-[#00D2FF]" />;
    }
  };

  const aspectClasses = {
    video: 'aspect-[16/10]',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]',
    doc: 'aspect-[4/3]',
  }[slot.aspectRatio || 'video'];

  const handleClick = () => {
    if (onPreview) {
      onPreview(slot);
    }
  };

  return (
    <div
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-label={`Preview: ${slot.label}`}
      className={`group relative overflow-hidden rounded-xl border border-white/[0.08] hover:border-[#FF6538]/50 bg-[#0e0e0e] transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF6538] ${aspectClasses} ${className}`}
    >
      {/* Real image if present in public directory */}
      {!imgError && (
        <img
          src={slot.expectedPath}
          alt={slot.caption || slot.label}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      )}

      {/* Cinematic Placeholder Blueprint when user hasn't dropped the image file yet */}
      {(!imgLoaded || imgError) && (
        <div className="absolute inset-0 p-4 flex flex-col justify-between bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#080808] border border-dashed border-white/10 group-hover:border-white/25 transition-colors">
          {/* Top Row: Type and Path Indicator */}
          <div className="flex items-center justify-between text-[10px] font-mono text-[#929292]">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:bg-[#FF6538]/10 group-hover:border-[#FF6538]/30 transition-colors">
                {getIcon()}
              </span>
              <span className="uppercase tracking-wider font-semibold text-[#F2F0EA]/80 group-hover:text-[#FF6538] transition-colors">
                {slot.type}
              </span>
            </div>
            <span className="text-[9px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[#929292]/70">
              SLOT READY
            </span>
          </div>

          {/* Center: Label & Blueprint Reticle */}
          <div className="my-auto text-center px-2 py-2">
            <p className="font-display font-bold text-xs sm:text-sm text-[#F2F0EA] mb-1 group-hover:text-[#FF6538] transition-colors">
              {slot.label}
            </p>
            <p className="text-[10px] font-mono text-[#929292] line-clamp-2 leading-relaxed">
              {slot.caption}
            </p>
          </div>

          {/* Bottom Row: Expected Path / Upload Cue */}
          <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-[9px] font-mono text-[#929292]/60">
            <span className="truncate max-w-[70%]" title={slot.expectedPath}>
              {slot.expectedPath}
            </span>
            <span className="inline-flex items-center gap-1 text-[#FF6538] opacity-80 group-hover:opacity-100">
              <Eye className="w-3 h-3" />
              <span>Inspect</span>
            </span>
          </div>
        </div>
      )}

      {/* Hover Inspect Glass Overlay */}
      <div className="absolute inset-0 bg-[#080808]/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center pointer-events-none">
        <div className="px-3.5 py-1.5 rounded-full bg-[#111111]/90 border border-[#FF6538]/40 text-[#F2F0EA] text-[11px] font-mono flex items-center gap-2 shadow-2xl">
          <Eye className="w-3.5 h-3.5 text-[#FF6538]" />
          <span>View Asset Slot</span>
          <ExternalLink className="w-3 h-3 text-[#929292]" />
        </div>
      </div>
    </div>
  );
};
