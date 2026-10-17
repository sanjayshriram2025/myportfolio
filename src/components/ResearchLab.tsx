import React, { useState } from 'react';
import { FileText, Activity, Cpu, ShieldCheck } from 'lucide-react';
import { RESEARCH_DOSSIERS } from '../data-editorial';
import { EditorialMedia } from './EditorialMedia';

interface ResearchLabProps {
  onInspectMedia?: (src: string, alt: string, caption?: string) => void;
}

export const ResearchLab: React.FC<ResearchLabProps> = ({ onInspectMedia }) => {
  const leadDossier = RESEARCH_DOSSIERS[0]; // Digital Twin Cybersecurity
  const secondaryDossier = RESEARCH_DOSSIERS[1]; // Sentinel-X Model Guardrails
  const exploratoryDossiers = RESEARCH_DOSSIERS.slice(2); // VisionGuard & Indic NLP

  // Interactive Digital Twin Pipeline state
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);

  const pipelineSteps = [
    {
      num: '01',
      title: 'Behavioural Login Data',
      badge: 'INPUT TELEMETRY',
      description: 'Ingests multi-source authentication telemetry: timestamp dispersion, user-agent entropy, IP geolocation variance, and keystroke cadence intervals.',
      technicalSpec: 'Raw auth events (JSON) → Temporal & spatial session tokens',
    },
    {
      num: '02',
      title: 'Feature Engineering',
      badge: 'VECTOR SYNTHESIS',
      description: 'Transforms asynchronous session logs into calibrated behavioral vectors: login velocity delta, credential exposure indices, and anomaly deviation scores.',
      technicalSpec: 'Z-score normalization, rolling window entropy, feature matrix X ∈ R^(N×D)',
    },
    {
      num: '03',
      title: 'Risk Prediction',
      badge: 'ML INFERENCE',
      description: 'Machine learning model evaluates synthetic persona attack surfaces, outputting a continuous probabilistic exposure metric (P_compromise ∈ [0, 1]).',
      technicalSpec: 'Gradient boosted trees & probabilistic persona classifiers',
    },
    {
      num: '04',
      title: 'Explainability with SHAP',
      badge: 'XAI ATTRIBUTION',
      description: 'Calculates Shapley additive values to quantify exactly which behavioral traits contributed positively or negatively to the computed vulnerability score.',
      technicalSpec: 'φ_i(x) = ∑ [|S|!(|F|-|S|-1)!/|F|!] × [f(S ∪ {i}) - f(S)]',
    },
    {
      num: '05',
      title: 'Prevention Guidance',
      badge: 'POLICY ENGINE',
      description: 'Translates high-risk feature attributions into deterministic mitigation actions: step-up hardware token MFA, credential invalidation, or session boundary isolation.',
      technicalSpec: 'Rule-bound policy dispatch based on top 3 SHAP attribution indices',
    },
    {
      num: '06',
      title: 'Adaptive Feedback',
      badge: 'CLOSED LOOP',
      description: 'Incorporates verified post-alert telemetry back into the individual digital twin, refining baseline thresholds and preventing alert fatigue.',
      technicalSpec: 'Continuous Bayesian parameter calibration & drift monitoring',
    },
  ];

  return (
    <section
      id="research"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#D8CEBA] bg-[#F2EBDD]"
      aria-label="Research Laboratory & Inquiries"
    >
      {/* Editorial Section Header */}
      <div className="flex items-center justify-between text-xs font-mono-meta text-[#5A5954] pb-4 border-b border-[#D8CEBA] mb-14 sm:mb-20">
        <span className="text-[#9E2939] font-bold flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-[#9E2939]" />
          03 // APPLIED RESEARCH & INQUIRIES
        </span>
        <span className="text-[#5A5954]">Adversarial AI & Behavioral Cybersecurity</span>
      </div>

      {/* Narrative Section Intro & Academic Protocol */}
      <div className="mb-16 sm:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#242424] tracking-tight mb-4 uppercase">
            Research Inquiries & Methodologies.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#5A5954] leading-relaxed max-w-2xl">
            Inquiries exploring behavioral personal cybersecurity modeling, explainable AI attribution (SHAP), and adversarial input filtering for LLM architectures.
          </p>
        </div>

        {/* Factual Academic Notice */}
        <div className="lg:col-span-4 p-5 bg-[#FAF6EE] border border-[#D8CEBA] text-xs font-mono-meta text-[#5A5954] space-y-2 shadow-xs">
          <div className="flex items-center gap-2 text-[#9E2939] font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Academic Integrity Protocol</span>
          </div>
          <p className="font-sans text-xs text-[#5A5954] leading-relaxed">
            All entries reflect undergraduate student research, collegiate technical symposia presentations, and working prototypes. <strong className="text-[#242424] font-semibold">No claims of indexed journal acceptance are made without verified citations.</strong>
          </p>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE RESEARCH PIPELINE INSTRUMENT: CYBERSECURITY DIGITAL TWIN
         ========================================================================= */}
      <div className="mb-20 sm:mb-28 p-6 sm:p-8 bg-[#FAF6EE] border border-[#D8CEBA] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#D8CEBA] mb-6">
          <div className="flex items-center gap-2 text-xs font-mono-meta">
            <Cpu className="w-4 h-4 text-[#9E2939]" />
            <span className="text-[#242424] font-bold uppercase tracking-wider">RESEARCH INSTRUMENT // TELEMETRY PIPELINE</span>
            <span className="text-[#D8CEBA]">/</span>
            <span className="text-[#5A5954]">Personal Risk Engine</span>
          </div>
          <span className="text-[11px] font-mono-meta text-[#9E2939] bg-[#F2EBDD] border border-[#D8CEBA] px-2.5 py-0.5 font-bold">
            Interactive Architecture Workflow
          </span>
        </div>

        {/* 6-Step Visual Flow Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
          {pipelineSteps.map((step, idx) => {
            const isActive = activePipelineStep === idx;
            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setActivePipelineStep(idx)}
                className={`p-3 text-left border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#242424] text-[#F2EBDD] border-[#242424] shadow-xs'
                    : 'bg-[#F2EBDD] border-[#D8CEBA] hover:border-[#9E2939]/60 text-[#5A5954]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5 text-[10px] font-mono-meta">
                  <span className={isActive ? 'text-[#D5A65A] font-bold' : 'text-[#5A5954]'}>{step.num}</span>
                  <span className={`px-1.5 py-0.2 text-[8px] font-bold ${isActive ? 'bg-[#9E2939] text-[#F2EBDD]' : 'bg-[#FAF6EE] text-[#5A5954] border border-[#D8CEBA]'}`}>
                    {step.badge}
                  </span>
                </div>
                <p className={`font-display font-black text-sm leading-tight uppercase ${isActive ? 'text-[#F2EBDD]' : 'text-[#242424]'}`}>
                  {step.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="p-5 bg-[#F2EBDD] border border-[#D8CEBA] space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="font-display font-black text-lg sm:text-xl text-[#242424] flex items-center gap-2 uppercase">
              <span className="text-[#9E2939]">STAGE {pipelineSteps[activePipelineStep].num} //</span>
              <span>{pipelineSteps[activePipelineStep].title}</span>
            </h4>
            <span className="text-xs font-mono-meta text-[#9E2939] font-bold">
              {pipelineSteps[activePipelineStep].badge}
            </span>
          </div>

          <p className="font-sans text-sm text-[#5A5954] leading-relaxed">
            {pipelineSteps[activePipelineStep].description}
          </p>

          <div className="pt-2 border-t border-[#D8CEBA] flex items-center gap-2 text-xs font-mono-meta text-[#5A5954]">
            <span className="font-bold text-[#242424]">Telemetry Formulation:</span>
            <code className="text-[#242424] bg-[#FAF6EE] px-2 py-0.5 border border-[#D8CEBA] font-mono text-[11px]">
              {pipelineSteps[activePipelineStep].technicalSpec}
            </code>
          </div>
        </div>
      </div>

      {/* =========================================================================
          1. LEAD RESEARCH SPREAD: DIGITAL TWIN CYBERSECURITY INQUIRY
         ========================================================================= */}
      <article
        id={`dossier-${leadDossier.id}`}
        className="mb-20 sm:mb-28 pt-8 border-t border-[#D8CEBA]"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono-meta text-[#5A5954] pb-4 border-b border-[#D8CEBA] mb-8">
          <div className="flex items-center gap-3">
            <span className="text-[#9E2939] font-bold">{leadDossier.ref}</span>
            <span className="text-[#D8CEBA]">/</span>
            <span className="text-[#242424] bg-[#FAF6EE] px-2.5 py-0.5 border border-[#D8CEBA] font-medium">
              {leadDossier.classification}
            </span>
          </div>
          <span className="text-[#242424] font-medium">{leadDossier.statusDetails}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Scholarly Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-[#242424] mb-3 leading-snug uppercase">
                {leadDossier.title}
              </h3>
              <p className="font-mono-meta text-xs text-[#9E2939] font-bold">
                Inquiry Focus: {leadDossier.focus}
              </p>
            </div>

            {/* Structured Abstract & Methodology */}
            <div className="space-y-4 text-xs font-mono-meta">
              <div className="p-5 bg-[#FAF6EE] border border-[#D8CEBA] shadow-xs">
                <div className="flex items-center gap-2 text-[#242424] font-bold mb-2">
                  <FileText className="w-3.5 h-3.5 text-[#9E2939]" />
                  <span>Theoretical Hypothesis</span>
                </div>
                <p className="text-[#5A5954] font-sans text-xs sm:text-sm leading-relaxed">
                  {leadDossier.hypothesis}
                </p>
              </div>

              <div className="p-5 bg-[#FAF6EE] border border-[#D8CEBA] shadow-xs">
                <span className="text-[#2448C5] font-bold block mb-2">
                  Experimental Methodology
                </span>
                <p className="text-[#5A5954] font-sans text-xs sm:text-sm leading-relaxed">
                  {leadDossier.methodology}
                </p>
              </div>

              <div className="p-5 bg-[#FAF6EE] border border-[#D8CEBA] shadow-xs">
                <span className="text-[#242424] font-bold block mb-2">
                  Telemetry & Scientific Tooling
                </span>
                <p className="text-[#5A5954] font-sans text-xs leading-relaxed">
                  {leadDossier.datasetOrTooling}
                </p>
              </div>
            </div>
          </div>

          {/* Diagram Plate Column: Published Research Paper */}
          <div className="lg:col-span-5">
            {leadDossier.mediaPath && (
              <EditorialMedia
                src={leadDossier.mediaPath}
                alt={leadDossier.mediaLabel || leadDossier.title}
                caption={leadDossier.mediaLabel}
                aspect="3/4"
                onInspect={() =>
                  onInspectMedia &&
                  leadDossier.mediaPath &&
                  onInspectMedia(leadDossier.mediaPath, leadDossier.mediaLabel || leadDossier.title, leadDossier.statusDetails)
                }
              />
            )}
          </div>
        </div>
      </article>

      {/* =========================================================================
          2. FEATURED DOSSIER 02: SENTINEL-X MODEL GUARDRAILS SPREAD
         ========================================================================= */}
      <article
        id={`dossier-${secondaryDossier.id}`}
        className="mb-20 sm:mb-28 pt-8 border-t border-[#D8CEBA]"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono-meta text-[#5A5954] pb-4 border-b border-[#D8CEBA] mb-8">
          <div className="flex items-center gap-3">
            <span className="text-[#9E2939] font-bold">{secondaryDossier.ref}</span>
            <span className="text-[#D8CEBA]">/</span>
            <span className="text-[#242424] bg-[#FAF6EE] px-2.5 py-0.5 border border-[#D8CEBA] font-medium">
              {secondaryDossier.classification}
            </span>
          </div>
          <span className="text-[#242424] font-medium">{secondaryDossier.statusDetails}</span>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-[#242424] mb-3 leading-snug uppercase">
              {secondaryDossier.title}
            </h3>
            <p className="font-mono-meta text-xs text-[#9E2939] font-bold">
              Inquiry Focus: {secondaryDossier.focus}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono-meta">
            <div className="p-5 bg-[#FAF6EE] border border-[#D8CEBA] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[#242424] font-bold block mb-2 text-xs tracking-wider uppercase">
                  Hypothesis & Problem Framing
                </span>
                <p className="text-[#5A5954] font-sans text-xs sm:text-sm leading-relaxed">
                  {secondaryDossier.hypothesis}
                </p>
              </div>
            </div>

            <div className="p-5 bg-[#FAF6EE] border border-[#D8CEBA] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[#2448C5] font-bold block mb-2 text-xs tracking-wider uppercase">
                  Evaluation Framework
                </span>
                <p className="text-[#5A5954] font-sans text-xs sm:text-sm leading-relaxed">
                  {secondaryDossier.methodology}
                </p>
              </div>
            </div>

            <div className="p-5 bg-[#FAF6EE] border border-[#D8CEBA] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[#D5A65A] font-bold block mb-2 text-xs tracking-wider uppercase">
                  Tooling & Benchmarks
                </span>
                <p className="text-[#5A5954] font-sans text-xs leading-relaxed">
                  {secondaryDossier.datasetOrTooling}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* =========================================================================
          3. EXPLORATORY DOSSIERS (VisionGuard & Indic NLP)
         ========================================================================= */}
      <div className="pt-8 border-t border-[#D8CEBA]">
        <div className="flex items-center justify-between text-xs font-mono-meta text-[#5A5954] pb-4 border-b border-[#D8CEBA] mb-8">
          <span className="text-[#9E2939] font-bold">EXPLORATORY INQUIRIES // DOSSIERS 03—04</span>
          <span>Early Investigation & Formulation</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exploratoryDossiers.map((dossier) => (
            <div
              key={dossier.id}
              className="p-6 bg-[#FAF6EE] border border-[#D8CEBA] space-y-4 shadow-sm"
            >
              <div className="flex items-center justify-between text-xs font-mono-meta text-[#5A5954]">
                <span className="text-[#9E2939] font-bold">{dossier.ref}</span>
                <span className="bg-[#F2EBDD] text-[#242424] px-2.5 py-0.5 border border-[#D8CEBA] font-medium">
                  {dossier.classification}
                </span>
              </div>

              <div>
                <h4 className="font-display font-black text-2xl text-[#242424] mb-1 uppercase">
                  {dossier.title}
                </h4>
                <p className="text-xs font-mono-meta text-[#5A5954]">
                  {dossier.focus}
                </p>
              </div>

              <div className="space-y-3 text-xs font-mono-meta text-[#5A5954]">
                <p>
                  <strong className="text-[#242424]">Hypothesis:</strong> {dossier.hypothesis}
                </p>
                <p>
                  <strong className="text-[#2448C5]">Methodology:</strong> {dossier.methodology}
                </p>
                <p>
                  <strong className="text-[#D5A65A]">Tooling:</strong> {dossier.datasetOrTooling}
                </p>
              </div>

              <div className="pt-3 border-t border-[#D8CEBA] flex items-center justify-between text-[11px] font-mono-meta text-[#5A5954]">
                <span>{dossier.statusDetails}</span>
                <span className="text-[#9E2939] font-bold">Academic Prototype</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
