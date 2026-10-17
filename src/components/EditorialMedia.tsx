import React, { useState } from 'react';
import { Image as ImageIcon, Eye, ExternalLink } from 'lucide-react';

interface EditorialMediaProps {
  src?: string;
  alt: string;
  caption?: string;
  aspect?: '16/10' | '4/3' | '1/1' | '21/9' | '3/4';
  className?: string;
  onInspect?: () => void;
}

export const EditorialMedia: React.FC<EditorialMediaProps> = ({
  src,
  alt,
  caption,
  aspect = '16/10',
  className = '',
  onInspect,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (!src) {
    return null;
  }

  const aspectClass = {
    '16/10': 'aspect-[16/10]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '21/9': 'aspect-[21/9]',
    '3/4': 'aspect-[3/4]',
  }[aspect];

  return (
    <figure className={`flex flex-col ${className}`}>
      <div
        onClick={onInspect}
        role={onInspect ? 'button' : undefined}
        tabIndex={onInspect ? 0 : undefined}
        aria-label={onInspect ? `Enlarge image: ${alt}` : undefined}
        className={`group relative overflow-hidden bg-[#ECE4D4] border border-[#D8CEBA] transition-all duration-500 ${aspectClass} ${
          onInspect ? 'cursor-pointer hover:border-[#9E2939] shadow-sm hover:shadow-md' : ''
        }`}
      >
        {/* Real image if available */}
        {!error && (
          <img
            src={src}
            alt={alt}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            loading="lazy"
            className={`w-full h-full object-cover photo-exhibition transition-all duration-700 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Loading skeleton */}
        {!loaded && !error && (
          <div className="absolute inset-0 bg-[#ECE4D4] animate-pulse flex items-center justify-center">
            <span className="text-[10px] font-mono-meta text-[#8A8981] tracking-wider uppercase">Loading Archive Plate...</span>
          </div>
        )}

        {/* Graceful error fallback if file fails to load */}
        {error && (
          <div className="absolute inset-0 p-5 flex flex-col justify-between bg-[#FAF6EE] text-[#5A5954]">
            <div className="flex items-center justify-between text-[10px] font-mono-meta tracking-wider">
              <span className="text-[#5A5954]">DOCUMENT PLATE</span>
              <span className="text-[#9E2939] font-bold">[VERIFIED ARTIFACT]</span>
            </div>
            <div className="text-center px-4 my-auto">
              <ImageIcon className="w-6 h-6 mx-auto mb-2 text-[#8A8981]/60" />
              <p className="font-display font-black text-xs text-[#242424] uppercase">{alt}</p>
            </div>
          </div>
        )}

        {/* Hover Cue */}
        {onInspect && loaded && (
          <div className="absolute inset-0 bg-[#242424]/75 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <div className="px-3.5 py-1.5 bg-[#FAF6EE] border border-[#D8CEBA] text-[#242424] text-[11px] font-mono-meta tracking-wider uppercase flex items-center gap-2 shadow-lg">
              <Eye className="w-3.5 h-3.5 text-[#9E2939]" />
              <span className="font-bold">Inspect Plate</span>
              <ExternalLink className="w-3 h-3 text-[#5A5954]" />
            </div>
          </div>
        )}
      </div>

      {/* Caption */}
      {caption && (
        <figcaption className="mt-2.5 text-[11px] font-mono-meta text-[#5A5954] leading-relaxed flex items-baseline gap-2">
          <span className="text-[#9E2939] font-bold">▪</span>
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
};
