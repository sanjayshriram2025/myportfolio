import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Award } from 'lucide-react';
import {
  ARCHIVE_ENTRIES,
  ArchiveCategory,
} from '../data-achievements';
import { EditorialMedia } from './EditorialMedia';

interface AchievementArchiveProps {
  onInspectMedia?: (src: string, alt: string, caption?: string) => void;
}

export const AchievementArchive: React.FC<AchievementArchiveProps> = ({ onInspectMedia }) => {
  const [activeFilter, setActiveFilter] = useState<ArchiveCategory>('all');

  const filteredEntries =
    activeFilter === 'all'
      ? ARCHIVE_ENTRIES
      : ARCHIVE_ENTRIES.filter((entry) => entry.category === activeFilter);

  const filters: { id: ArchiveCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Records', count: ARCHIVE_ENTRIES.length },
    { id: 'competitions', label: 'Competitions', count: ARCHIVE_ENTRIES.filter((e) => e.category === 'competitions').length },
    { id: 'research', label: 'Research', count: ARCHIVE_ENTRIES.filter((e) => e.category === 'research').length },
    { id: 'projects', label: 'Systems & Hardware', count: ARCHIVE_ENTRIES.filter((e) => e.category === 'projects').length },
    { id: 'leadership', label: 'Leadership', count: ARCHIVE_ENTRIES.filter((e) => e.category === 'leadership').length },
    { id: 'training', label: 'Training', count: ARCHIVE_ENTRIES.filter((e) => e.category === 'training').length },
  ];

  return (
    <section
      id="archive"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#D8CEBA] bg-[#F2EBDD]"
      aria-label="The Achievement Archive"
    >
      {/* Editorial Section Header */}
      <div className="flex items-center justify-between text-xs font-mono-meta text-[#5A5954] pb-4 border-b border-[#D8CEBA] mb-14 sm:mb-20">
        <span className="text-[#9E2939] font-bold flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-[#9E2939]" />
          04 // ACHIEVEMENT ARCHIVE
        </span>
        <span className="text-[#5A5954]">Documented Artifacts & Verified Records</span>
      </div>

      {/* Signature Typographic Headline */}
      <div className="mb-16 sm:mb-20 max-w-3xl">
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight text-[#242424] mb-5 uppercase">
          Built. Tested. <span className="font-serif-italic font-normal lowercase text-5xl sm:text-7xl md:text-8xl text-[#9E2939]">Presented.</span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#5A5954] leading-relaxed">
          A growing record of ideas explored, systems developed, teams led, and research presented. Preserved with strict factual fidelity.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-14 sm:mb-18 pb-4 border-b border-[#D8CEBA]">
        {filters.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-mono-meta transition-all border cursor-pointer ${
                isActive
                  ? 'bg-[#9E2939] text-[#F2EBDD] font-bold border-[#9E2939] shadow-sm'
                  : 'bg-[#FAF6EE] text-[#5A5954] hover:text-[#242424] border-[#D8CEBA]'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`ml-1.5 text-[11px] ${isActive ? 'text-[#F2EBDD]/90 font-bold' : 'text-[#9E2939]'}`}>
                [{tab.count}]
              </span>
            </button>
          );
        })}
      </div>

      {/* Chronological Archive Stream */}
      <div className="space-y-16 sm:space-y-24">
        <AnimatePresence mode="popLayout">
          {filteredEntries.map((entry) => {
            const hasMedia = entry.mediaSlots.length > 0;

            if (hasMedia) {
              return (
                <article
                  key={entry.id}
                  id={`archive-entry-${entry.id}`}
                  className="pt-10 border-t border-[#D8CEBA] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
                >
                  {/* Text Meta Column */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono-meta text-[#5A5954] pb-3 border-b border-[#D8CEBA] mb-5">
                        <span className="text-[#9E2939] font-bold">{entry.code}</span>
                        <span className="text-[#242424] font-medium">{entry.category}</span>
                        {entry.timeframe && <span>{entry.timeframe}</span>}
                      </div>

                      <h3 className="font-display font-black text-2xl sm:text-3xl text-[#242424] mb-2 leading-snug uppercase">
                        {entry.title}
                      </h3>

                      {entry.subtitle && (
                        <p className="font-sans text-sm text-[#5A5954] mb-4">
                          {entry.subtitle}
                        </p>
                      )}

                      {/* Verified Outcome Badge */}
                      <div className="inline-block font-mono-meta text-xs text-[#242424] bg-[#FAF6EE] px-3 py-1 border border-[#D8CEBA] font-medium mb-5 shadow-xs">
                        Outcome: <span className="text-[#9E2939] font-bold">{entry.verifiedOutcome}</span>
                      </div>

                      {/* Context Data Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-[#FAF6EE] border border-[#D8CEBA] text-xs font-mono-meta text-[#5A5954] mb-5 shadow-xs">
                        {entry.role && (
                          <div>
                            <span className="text-[#8A8981] block text-[10px] uppercase font-bold">Role</span>
                            <span className="text-[#242424] font-semibold">{entry.role}</span>
                          </div>
                        )}
                        {entry.teamOrOrg && (
                          <div>
                            <span className="text-[#8A8981] block text-[10px] uppercase font-bold">Organization</span>
                            <span className="text-[#242424] font-semibold">{entry.teamOrOrg}</span>
                          </div>
                        )}
                      </div>

                      {/* Narrative Description */}
                      <p className="text-xs sm:text-sm text-[#5A5954] leading-relaxed mb-5 font-sans">
                        {entry.description}
                      </p>

                      {/* Highlights Bulleted */}
                      <div className="space-y-2 mb-5 font-mono-meta text-xs">
                        {entry.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-[#242424]">
                            <span className="text-[#9E2939] mt-0.5 font-bold">▪</span>
                            <span className="leading-relaxed">{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {entry.techOrThemes.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 text-xs font-mono-meta text-[#5A5954] bg-[#FAF6EE] border border-[#D8CEBA]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Evidence Note & Link */}
                    <div className="pt-4 border-t border-[#D8CEBA] flex items-center justify-between text-xs font-mono-meta text-[#5A5954]">
                      <span className="text-[11px] truncate max-w-[75%]">{entry.evidenceNote}</span>
                      {entry.links && entry.links[0] && (
                        <a
                          href={entry.links[0].href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#242424] hover:text-[#9E2939] font-bold inline-flex items-center gap-1 transition-colors"
                        >
                          <span>Repository</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Dedicated Media Plates Column */}
                  <div className="lg:col-span-6">
                    <div className="flex items-center justify-between text-xs font-mono-meta text-[#5A5954] mb-3 pb-2 border-b border-[#D8CEBA]">
                      <span className="text-[#242424] font-bold">Verified Media Artifacts</span>
                      <span className="text-[#9E2939] font-bold">[{entry.mediaSlots.length} Plate{entry.mediaSlots.length > 1 ? 's' : ''}]</span>
                    </div>

                    <div
                      className={`grid gap-4 ${
                        entry.mediaSlots.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'
                      }`}
                    >
                      {entry.mediaSlots.map((slot, sIdx) => (
                        <EditorialMedia
                          key={sIdx}
                          src={slot.expectedPath}
                          alt={slot.label}
                          caption={slot.caption}
                          aspect={slot.aspectRatio === 'doc' ? '4/3' : '16/10'}
                          onInspect={() =>
                            onInspectMedia && onInspectMedia(slot.expectedPath, slot.label, slot.caption)
                          }
                        />
                      ))}
                    </div>
                  </div>
                </article>
              );
            }

            // Full-width layout for entries without media slots
            return (
              <article
                key={entry.id}
                id={`archive-entry-${entry.id}`}
                className="pt-10 border-t border-[#D8CEBA]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono-meta text-[#5A5954] pb-3 border-b border-[#D8CEBA] mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-[#9E2939] font-bold">{entry.code}</span>
                    <span className="text-[#D8CEBA]">/</span>
                    <span className="text-[#242424] font-medium">{entry.category}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    {entry.timeframe && <span>{entry.timeframe}</span>}
                    <span className="text-[#9E2939] bg-[#FAF6EE] px-2.5 py-0.5 border border-[#D8CEBA] font-bold">
                      {entry.verifiedOutcome}
                    </span>
                  </div>
                </div>

                <div className="max-w-4xl mb-6">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#242424] mb-2 uppercase">
                    {entry.title}
                  </h3>
                  {entry.subtitle && (
                    <p className="font-sans text-sm sm:text-base text-[#5A5954]">
                      {entry.subtitle}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-xs font-mono-meta">
                  <div className="p-4 bg-[#FAF6EE] border border-[#D8CEBA] shadow-xs space-y-2">
                    <span className="text-[#242424] font-bold uppercase tracking-wider block text-[10px]">
                      Context & Organization
                    </span>
                    {entry.role && (
                      <div>
                        <span className="text-[#8A8981] block text-[10px]">ROLE</span>
                        <span className="text-[#242424] font-semibold">{entry.role}</span>
                      </div>
                    )}
                    {entry.teamOrOrg && (
                      <div>
                        <span className="text-[#8A8981] block text-[10px]">ORGANIZATION</span>
                        <span className="text-[#242424] font-semibold">{entry.teamOrOrg}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 bg-[#FAF6EE] border border-[#D8CEBA] shadow-xs space-y-2">
                    <span className="text-[#2448C5] font-bold uppercase tracking-wider block text-[10px]">
                      Description
                    </span>
                    <p className="text-[#5A5954] font-sans text-xs leading-relaxed">
                      {entry.description}
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6EE] border border-[#D8CEBA] shadow-xs space-y-2">
                    <span className="text-[#9E2939] font-bold uppercase tracking-wider block text-[10px]">
                      Key Highlights
                    </span>
                    <div className="space-y-1.5">
                      {entry.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5 text-[#242424]">
                          <span className="text-[#9E2939] mt-0.5 font-bold">▪</span>
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D8CEBA] flex flex-wrap items-center justify-between gap-4 text-xs font-mono-meta text-[#5A5954]">
                  <div className="flex flex-wrap gap-2">
                    {entry.techOrThemes.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-mono-meta text-[#5A5954] bg-[#FAF6EE] border border-[#D8CEBA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {entry.evidenceNote && (
                      <span className="text-[11px] text-[#8A8981]">{entry.evidenceNote}</span>
                    )}
                    {entry.links && entry.links[0] && (
                      <a
                        href={entry.links[0].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#242424] hover:text-[#9E2939] font-bold inline-flex items-center gap-1 transition-colors"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span>Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};
