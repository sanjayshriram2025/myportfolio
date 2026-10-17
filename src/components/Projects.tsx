import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data';
import { ProjectArt } from './ProjectArt';

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative scroll-mt-16"
      aria-label="Selected Engineering Systems"
    >
      {/* Section Header Line */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF6538]">
            02 // SELECTED SYSTEMS & BUILDS
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#929292]">4 HIGH-ASSURANCE CASE STUDIES</span>
      </div>

      {/* Narrative Section Intro */}
      <div className="mb-16 max-w-3xl">
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#F2F0EA] tracking-tight mb-4">
          Engineered for Adversarial Reality.
        </h2>
        <p className="text-[#929292] text-sm sm:text-base leading-relaxed">
          From law-enforcement graph intelligence to multi-tier autonomous AI guardrails. Each build tackles real architectural constraints with verified implementation artifacts.
        </p>
      </div>

      {/* Stacking Case Study Panels */}
      <div className="relative flex flex-col gap-8 md:gap-12 pb-16">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const stickyTop = `calc(5.5rem + ${index * 1.5}rem)`;

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      style={{
        top: stickyTop,
      }}
      className={`relative md:sticky rounded-3xl ${project.theme.panelBg} text-[#F2F0EA] p-6 sm:p-10 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.85)] border ${project.theme.border} transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#FF6538] overflow-hidden`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Dossier Metadata & Case Study Breakdown */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* System Index & Kind */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#FF6538] font-bold px-2 py-0.5 rounded bg-[#FF6538]/10 border border-[#FF6538]/20">
                {project.number}
              </span>
              <span className="font-mono text-xs text-[#929292] uppercase tracking-wider">
                {project.kind}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 tracking-tight text-[#F2F0EA]">
              {project.title}
            </h3>

            {/* Executive Blurb */}
            <p className="text-sm sm:text-base text-[#929292] leading-relaxed mb-6 max-w-xl">
              {project.blurb}
            </p>

            {/* Case Study Problem & Contribution Breakdown */}
            <div className="space-y-3.5 mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs">
              <div>
                <span className="font-mono font-bold text-[#F2F0EA] uppercase tracking-wider block mb-1">
                  [Problem Context]
                </span>
                <p className="text-[#929292] leading-relaxed">{project.problem}</p>
              </div>

              <div>
                <span className="font-mono font-bold text-[#FF6538] uppercase tracking-wider block mb-1">
                  [My Contribution & Architecture]
                </span>
                <p className="text-[#929292] leading-relaxed">{project.contribution}</p>
              </div>
            </div>

            {/* Tech Stack Tag Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono text-[#F2F0EA]/80 bg-white/[0.04] border border-white/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Dossier Line */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
            <span className="text-[#929292]">
              Status: <span className="text-[#00D2FF]">Codebase & Architecture Validated</span>
            </span>
            <span className="text-[10px] text-[#929292]/70 uppercase tracking-widest">
              CONFIDENTIAL / STUDENT IP
            </span>
          </div>
        </div>

        {/* Right Column: Custom Animated Technical Artwork */}
        <div className="lg:col-span-5 flex items-center justify-center p-2">
          <ProjectArt id={project.id} isHovered={isHovered} />
        </div>
      </div>
    </article>
  );
};
