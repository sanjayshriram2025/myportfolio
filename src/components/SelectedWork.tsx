import React, { useState } from 'react';
import { ArrowUpRight, Github, Eye, ChevronDown, Layers } from 'lucide-react';
import { EDITORIAL_PROJECTS, EditorialProject } from '../data-editorial';
import { EditorialMedia } from './EditorialMedia';

interface SelectedWorkProps {
  onInspectMedia?: (src: string, alt: string, caption?: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onInspectMedia }) => {
  const leadProject = EDITORIAL_PROJECTS[0]; // GenAI Digital Twin
  const pairProjects = EDITORIAL_PROJECTS.slice(1, 3); // Sentinel-X & Rakshak
  const indexProjects = EDITORIAL_PROJECTS.slice(3); // Shuddh, Pollution Control, Toastmasters, Job Portal

  const [hoveredIndexProject, setHoveredIndexProject] = useState<EditorialProject>(indexProjects[0]);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);

  const toggleMobileExpand = (id: string) => {
    setExpandedMobileId(expandedMobileId === id ? null : id);
  };

  return (
    <section
      id="work"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#D8CEBA] bg-[#F2EBDD]"
      aria-label="Selected Work — Projects"
    >
      {/* Editorial Section Header */}
      <div className="flex items-center justify-between text-xs font-mono-meta text-[#5A5954] pb-4 border-b border-[#D8CEBA] mb-14 sm:mb-20">
        <span className="text-[#9E2939] font-bold flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-[#9E2939]" />
          02 // SELECTED SYSTEMS & PROTOCOLS
        </span>
        <span className="text-[#5A5954]">Verified Architectural Case Studies</span>
      </div>

      {/* Narrative Section Intro */}
      <div className="mb-16 sm:mb-20 max-w-3xl">
        <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#242424] tracking-tight mb-4 uppercase">
          Software Systems & Prototypes.
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#5A5954] leading-relaxed">
          Case studies documenting systems designed, implemented, and benchmarked. Each entry outlines the operational problem, technical implementation, and verified outcome.
        </p>
      </div>

      {/* =========================================================================
          1. LEAD FEATURE: GenAI Personal Cybersecurity Digital Twin
             (BOLD DELIBERATE COBALT BLOCK)
         ========================================================================= */}
      <article
        id={`project-${leadProject.id}`}
        className="mb-24 sm:mb-32 bg-[#2448C5] text-[#F2EBDD] p-6 sm:p-10 lg:p-12 border border-[#193496] shadow-xl"
      >
        {/* Ledger Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono-meta pb-4 border-b border-[#F2EBDD]/25 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-[#F2EBDD] font-bold tracking-wider">LEAD ARCHITECTURE // SYSTEM 0{leadProject.index}</span>
            <span className="text-[#F2EBDD]/40">/</span>
            <span className="text-[#F2EBDD]/90 font-medium">{leadProject.domain}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#F2EBDD]/80">{leadProject.year}</span>
            <span className="text-[#2448C5] bg-[#F2EBDD] px-3 py-1 font-bold shadow-xs">
              {leadProject.verifiedOutcome}
            </span>
          </div>
        </div>

        {/* Lead Headline */}
        <div className="max-w-4xl mb-10">
          <h3 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#F2EBDD] tracking-tight mb-4 leading-[1.0] uppercase">
            {leadProject.title}
          </h3>
          <p className="font-sans text-base sm:text-xl text-[#F2EBDD]/90 leading-relaxed">
            {leadProject.subtitle}
          </p>
        </div>

        {/* Large Architectural Plate + Deep-Dive Structured Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-6">
          {/* Architectural Media Plate */}
          <div className="lg:col-span-7">
            {leadProject.imagePath && (
              <EditorialMedia
                src={leadProject.imagePath}
                alt={leadProject.imageAlt || leadProject.title}
                caption={leadProject.imageCaption}
                aspect="16/10"
                onInspect={() =>
                  onInspectMedia &&
                  leadProject.imagePath &&
                  onInspectMedia(leadProject.imagePath, leadProject.imageAlt || leadProject.title, leadProject.imageCaption)
                }
              />
            )}
          </div>

          {/* Deep-Dive Structured Breakdown */}
          <div className="lg:col-span-5 space-y-4 text-xs font-mono-meta">
            <div className="p-5 bg-[#193496]/80 border border-[#F2EBDD]/20 shadow-xs">
              <span className="text-[#F2EBDD] font-bold block mb-1.5 text-xs tracking-wider uppercase">
                Operational Problem Context
              </span>
              <p className="text-[#F2EBDD]/90 font-sans text-xs sm:text-sm leading-relaxed">
                {leadProject.context}
              </p>
            </div>

            <div className="p-5 bg-[#193496]/80 border border-[#F2EBDD]/20 shadow-xs">
              <span className="text-[#D5A65A] font-bold block mb-1.5 text-xs tracking-wider uppercase">
                Architecture & Telemetry Pipeline
              </span>
              <p className="text-[#F2EBDD]/90 font-sans text-xs sm:text-sm leading-relaxed">
                {leadProject.architecture}
              </p>
            </div>

            <div className="p-5 bg-[#193496]/80 border border-[#F2EBDD]/20 shadow-xs">
              <span className="text-[#F2EBDD] font-bold block mb-1.5 text-xs tracking-wider uppercase">
                Evaluated Verification
              </span>
              <p className="text-[#F2EBDD]/90 font-sans text-xs sm:text-sm leading-relaxed">
                {leadProject.results}
              </p>
            </div>

            {/* Tags and Links */}
            <div className="pt-2 flex flex-wrap gap-2">
              {leadProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono-meta text-[#F2EBDD] border border-[#F2EBDD]/25 bg-[#193496]/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            {leadProject.githubUrl && (
              <div className="pt-4 border-t border-[#F2EBDD]/25 flex items-center justify-between">
                <a
                  href={leadProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#F2EBDD] hover:text-[#D5A65A] font-bold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[#F2EBDD]/60 text-[11px]">Verified Academic Record</span>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* =========================================================================
          2. ASYMMETRICAL EDITORIAL PAIR: SENTINEL-X & RAKSHAK
         ========================================================================= */}
      <div className="space-y-20 sm:space-y-28 mb-24 sm:mb-32">
        {pairProjects.map((project, idx) => {
          const hasImage = Boolean(project.imagePath);
          const isReversed = idx % 2 === 1;

          if (hasImage) {
            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="p-6 sm:p-10 bg-[#FAF6EE] border border-[#D8CEBA] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Text Column */}
                <div className={`lg:col-span-6 flex flex-col justify-between ${isReversed ? 'lg:order-2' : ''}`}>
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono-meta text-[#5A5954] pb-3 border-b border-[#D8CEBA] mb-5">
                      <span className="text-[#9E2939] font-bold">System 0{project.index}</span>
                      <span className="text-[#242424] font-medium">{project.domain}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-display font-black text-3xl sm:text-4xl text-[#242424] tracking-tight mb-2.5 uppercase">
                      {project.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-[#5A5954] mb-5 leading-normal">
                      {project.subtitle}
                    </p>

                    <div className="inline-block font-mono-meta text-xs text-[#242424] bg-[#F2EBDD] px-3 py-1 border border-[#D8CEBA] mb-6">
                      Status: <span className="text-[#9E2939] font-bold">{project.verifiedOutcome}</span>
                    </div>

                    <div className="space-y-3.5 text-xs font-mono-meta mb-6">
                      <div className="p-4 bg-[#F2EBDD] border border-[#D8CEBA]">
                        <span className="text-[#242424] font-bold block mb-1">
                          Problem Framing
                        </span>
                        <p className="text-[#5A5954] font-sans text-xs sm:text-sm leading-relaxed">
                          {project.context}
                        </p>
                      </div>

                      <div className="p-4 bg-[#F2EBDD] border border-[#D8CEBA]">
                        <span className="text-[#2448C5] font-bold block mb-1">
                          Architecture & Engineering
                        </span>
                        <p className="text-[#5A5954] font-sans text-xs sm:text-sm leading-relaxed">
                          {project.architecture}
                        </p>
                      </div>

                      <div className="p-4 bg-[#F2EBDD] border border-[#D8CEBA]">
                        <span className="text-[#9E2939] font-bold block mb-1">
                          Demonstrated Results
                        </span>
                        <p className="text-[#5A5954] font-sans text-xs sm:text-sm leading-relaxed">
                          {project.results}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono-meta text-[#5A5954] border border-[#D8CEBA] bg-[#F2EBDD]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#D8CEBA] flex items-center justify-between text-xs font-mono-meta">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#242424] hover:text-[#9E2939] font-bold transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Codebase</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[#8A8981]">Codebase available upon request</span>
                    )}
                    <span className="text-[#8A8981]">Verified Project Record</span>
                  </div>
                </div>

                {/* Media Plate Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <EditorialMedia
                    src={project.imagePath}
                    alt={project.imageAlt || project.title}
                    caption={project.imageCaption}
                    aspect="16/10"
                    onInspect={() =>
                      onInspectMedia &&
                      project.imagePath &&
                      onInspectMedia(project.imagePath, project.imageAlt || project.title, project.imageCaption)
                    }
                  />
                </div>
              </article>
            );
          }

          // Full-width architectural layout for systems without image assets
          return (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className="p-6 sm:p-10 bg-[#FAF6EE] border border-[#D8CEBA] shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono-meta text-[#5A5954] pb-4 border-b border-[#D8CEBA] mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-[#9E2939] font-bold">System 0{project.index}</span>
                  <span className="text-[#D8CEBA]">/</span>
                  <span className="text-[#242424] font-medium">{project.domain}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>{project.year}</span>
                  <span className="text-[#9E2939] bg-[#F2EBDD] px-3 py-0.5 border border-[#D8CEBA] font-bold">
                    {project.verifiedOutcome}
                  </span>
                </div>
              </div>

              <div className="max-w-4xl mb-8">
                <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#242424] tracking-tight mb-3 uppercase">
                  {project.title}
                </h3>
                <p className="font-sans text-base sm:text-lg text-[#5A5954] leading-relaxed">
                  {project.subtitle}
                </p>
              </div>

              {/* 3-Column Structured Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-xs font-mono-meta">
                <div className="p-5 bg-[#F2EBDD] border border-[#D8CEBA] shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[#242424] font-bold block mb-2 text-xs tracking-wider uppercase">
                      Problem Framing
                    </span>
                    <p className="text-[#5A5954] font-sans text-xs sm:text-sm leading-relaxed">
                      {project.context}
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-[#F2EBDD] border border-[#D8CEBA] shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[#2448C5] font-bold block mb-2 text-xs tracking-wider uppercase">
                      Architecture & Engineering
                    </span>
                    <p className="text-[#5A5954] font-sans text-xs sm:text-sm leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-[#F2EBDD] border border-[#D8CEBA] shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[#9E2939] font-bold block mb-2 text-xs tracking-wider uppercase">
                      Demonstrated Results
                    </span>
                    <p className="text-[#5A5954] font-sans text-xs sm:text-sm leading-relaxed">
                      {project.results}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Tags & Links */}
              <div className="pt-4 border-t border-[#D8CEBA] flex flex-wrap items-center justify-between gap-4 text-xs font-mono-meta">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono-meta text-[#5A5954] border border-[#D8CEBA] bg-[#F2EBDD]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#242424] hover:text-[#9E2939] font-bold transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Codebase</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[#8A8981]">Codebase available upon request</span>
                  )}
                  <span className="text-[#8A8981]">Verified Architectural Record</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* =========================================================================
          3. TYPOGRAPHIC PROJECT INDEX: SHUDDH, POLLUTION IOT, TOASTMASTERS, JOB PORTAL
         ========================================================================= */}
      <div className="pt-10 border-t border-[#D8CEBA]">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono-meta text-[#5A5954] pb-4 border-b border-[#D8CEBA] mb-8">
          <span className="text-[#9E2939] font-bold">
            TYPOGRAPHIC INDEX // SYSTEMS 04—07
          </span>
          <span>Edge Hardware, Telemetry & Full-Stack Systems</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Narrow Index Rows */}
          <div className="lg:col-span-7 divide-y divide-[#D8CEBA]">
            {indexProjects.map((project) => {
              const isHovered = hoveredIndexProject.id === project.id;
              const isExpandedMobile = expandedMobileId === project.id;
              const hasImage = Boolean(project.imagePath);

              return (
                <div
                  key={project.id}
                  id={`project-${project.id}`}
                  onMouseEnter={() => setHoveredIndexProject(project)}
                  className={`group py-5 transition-colors cursor-pointer px-3 ${
                    isHovered ? 'bg-[#FAF6EE]' : 'hover:bg-[#FAF6EE]/60'
                  }`}
                  onClick={() => {
                    if (window.innerWidth >= 1024) {
                      setHoveredIndexProject(project);
                      if (onInspectMedia && project.imagePath) {
                        onInspectMedia(project.imagePath, project.imageAlt || project.title, project.imageCaption);
                      }
                    } else {
                      toggleMobileExpand(project.id);
                    }
                  }}
                >
                  {/* Top Meta Line */}
                  <div className="flex items-center justify-between text-xs font-mono-meta text-[#5A5954] mb-1.5 px-2">
                    <span className="text-[#9E2939] font-bold">0{project.index}</span>
                    <span className="text-[11px] text-[#242424] font-medium">{project.domain}</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Title & Chevron */}
                  <div className="flex items-baseline justify-between px-2 gap-4">
                    <h4 className="font-display font-black text-2xl sm:text-3xl text-[#242424] group-hover:text-[#9E2939] transition-colors uppercase">
                      {project.title}
                    </h4>
                    <span className="lg:hidden text-[#5A5954]">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isExpandedMobile ? 'rotate-180 text-[#9E2939]' : ''}`}
                      />
                    </span>
                  </div>

                  {/* Subtitle & Outcome */}
                  <p className="font-sans text-xs sm:text-sm text-[#5A5954] px-2 mt-1 leading-relaxed">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 px-2 mt-3 pt-2 text-xs font-mono-meta border-t border-[#D8CEBA]/60">
                    <span className="text-[#242424] bg-[#F2EBDD] px-2.5 py-0.5 border border-[#D8CEBA] font-medium">
                      {project.verifiedOutcome}
                    </span>
                    <div className="flex items-center gap-4">
                      {hasImage && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onInspectMedia && project.imagePath) {
                              onInspectMedia(project.imagePath, project.imageAlt || project.title, project.imageCaption);
                            }
                          }}
                          className="inline-flex items-center gap-1.5 text-[#5A5954] hover:text-[#242424] transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#9E2939]" />
                          <span>Inspect Plate</span>
                        </button>
                      )}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-[#5A5954] hover:text-[#9E2939] font-medium transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Codebase</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-[#8A8981] text-[11px]">Hardware Prototype Rig</span>
                      )}
                    </div>
                  </div>

                  {/* Mobile Tap Drawer Expansion */}
                  {isExpandedMobile && (
                    <div className="lg:hidden mt-4 pt-4 border-t border-[#D8CEBA] px-2 space-y-4">
                      {hasImage && (
                        <EditorialMedia
                          src={project.imagePath}
                          alt={project.imageAlt || project.title}
                          caption={project.imageCaption}
                          aspect="16/10"
                          onInspect={() =>
                            onInspectMedia &&
                            project.imagePath &&
                            onInspectMedia(project.imagePath, project.imageAlt || project.title, project.imageCaption)
                          }
                        />
                      )}
                      <div className="text-xs font-mono-meta space-y-2 text-[#5A5954]">
                        <p><strong className="text-[#242424]">Context:</strong> {project.context}</p>
                        <p><strong className="text-[#2448C5]">Architecture:</strong> {project.architecture}</p>
                        <p><strong className="text-[#9E2939]">Result:</strong> {project.results}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop Hover Image Preview Plate */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="p-5 bg-[#FAF6EE] border border-[#D8CEBA] space-y-4 shadow-md">
              <div className="flex items-center justify-between text-xs font-mono-meta text-[#5A5954] pb-2 border-b border-[#D8CEBA]">
                <span className="text-[#9E2939] font-bold">
                  {hoveredIndexProject.imagePath ? 'INDEX PREVIEW' : 'SYSTEM ARCHITECTURE'} // SYSTEM 0{hoveredIndexProject.index}
                </span>
                <span>{hoveredIndexProject.year}</span>
              </div>

              {hoveredIndexProject.imagePath ? (
                <EditorialMedia
                  src={hoveredIndexProject.imagePath}
                  alt={hoveredIndexProject.imageAlt || hoveredIndexProject.title}
                  caption={hoveredIndexProject.imageCaption}
                  aspect="16/10"
                  onInspect={() =>
                    onInspectMedia &&
                    hoveredIndexProject.imagePath &&
                    onInspectMedia(
                      hoveredIndexProject.imagePath,
                      hoveredIndexProject.imageAlt || hoveredIndexProject.title,
                      hoveredIndexProject.imageCaption
                    )
                  }
                />
              ) : (
                <div className="p-5 bg-[#F2EBDD] border border-[#D8CEBA] text-xs font-mono-meta space-y-2.5">
                  <span className="text-[10px] text-[#9E2939] font-bold uppercase tracking-wider block">
                    Technical Architecture Dossier
                  </span>
                  <p className="font-display font-black text-lg text-[#242424] uppercase">
                    {hoveredIndexProject.title}
                  </p>
                  <p className="text-xs font-sans text-[#5A5954] leading-relaxed">
                    {hoveredIndexProject.context}
                  </p>
                </div>
              )}

              <div className="space-y-2 text-xs font-mono-meta">
                <p className="font-display font-black text-xl text-[#242424] uppercase">
                  {hoveredIndexProject.title}
                </p>
                <p className="font-sans text-xs text-[#5A5954] leading-relaxed">
                  {hoveredIndexProject.architecture}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {hoveredIndexProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono-meta text-[#5A5954] border border-[#D8CEBA] bg-[#F2EBDD]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#D8CEBA] flex items-center justify-between">
                  {hoveredIndexProject.imagePath ? (
                    <button
                      type="button"
                      onClick={() =>
                        onInspectMedia &&
                        hoveredIndexProject.imagePath &&
                        onInspectMedia(
                          hoveredIndexProject.imagePath,
                          hoveredIndexProject.imageAlt || hoveredIndexProject.title,
                          hoveredIndexProject.imageCaption
                        )
                      }
                      className="inline-flex items-center gap-1.5 text-xs text-[#242424] hover:text-[#9E2939] font-medium transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#9E2939]" />
                      <span>Inspect Schematics</span>
                    </button>
                  ) : (
                    <span className="text-[#8A8981] text-[11px]">Specification Verified</span>
                  )}

                  {hoveredIndexProject.githubUrl && (
                    <a
                      href={hoveredIndexProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#2448C5] hover:underline font-bold"
                    >
                      <span>Codebase</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
