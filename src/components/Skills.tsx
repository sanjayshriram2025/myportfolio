import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Code2, Layers, Wrench } from 'lucide-react';

interface SkillGroup {
  id: string;
  code: string;
  category: string;
  description: string;
  accent: string;
  icon: React.ReactNode;
  skills: { name: string; focus: string }[];
}

export const Skills: React.FC = () => {
  const skillGroups: SkillGroup[] = [
    {
      id: 'ai-ml',
      code: 'CAP-01',
      category: 'Artificial Intelligence & Machine Learning',
      description: 'Applied model engineering, representation learning, and modern LLM orchestration.',
      accent: '#2448C5',
      icon: <Cpu className="w-4 h-4 text-[#2448C5]" />,
      skills: [
        { name: 'Natural Language Processing', focus: 'Semantic parsing, tokenization & Indic embeddings' },
        { name: 'Transformer Adaptation', focus: 'Parameter-efficient fine-tuning (PEFT, LoRA)' },
        { name: 'Retrieval Augmented Generation', focus: 'Vector indexing, similarity ranking & hybrid search' },
        { name: 'LLM Orchestration & Prompts', focus: 'Structured schema enforcement & API integration' },
        { name: 'Scientific Computing', focus: 'PyTorch, NumPy, Scikit-Learn, Pandas' },
      ],
    },
    {
      id: 'security-xai',
      code: 'CAP-02',
      category: 'Cybersecurity & Explainable AI (XAI)',
      description: 'Systematic adversarial defense, threat modeling, and mechanistic interpretability.',
      accent: '#9E2939',
      icon: <Shield className="w-4 h-4 text-[#9E2939]" />,
      skills: [
        { name: 'Adversarial Machine Learning', focus: 'Prompt injection defense & input filtering' },
        { name: 'Explainable AI Attribution', focus: 'SHAP (SHapley Additive exPlanations) & feature weights' },
        { name: 'Behavioral Threat Modeling', focus: 'Identity risk simulation & synthetic personas' },
        { name: 'Runtime AI Guardrails', focus: 'Policy enforcement & token toxicity interception' },
        { name: 'Forensic Network Graphing', focus: 'Criminal syndicate centrality & anomaly clustering' },
      ],
    },
    {
      id: 'systems-software',
      code: 'CAP-03',
      category: 'Programming & Software Engineering',
      description: 'Deterministic architectures, strict static typing, and scalable backend pipelines.',
      accent: '#D5A65A',
      icon: <Code2 className="w-4 h-4 text-[#D5A65A]" />,
      skills: [
        { name: 'Python Core', focus: 'Asyncio, object architectures & scientific ecosystems' },
        { name: 'TypeScript & Contracts', focus: 'Strict type modeling, interfaces & generic patterns' },
        { name: 'FastAPI & REST APIs', focus: 'High-throughput asynchronous microservices' },
        { name: 'Embedded Edge Hardware', focus: 'Raspberry Pi 4, Arduino Uno & serial sensors' },
        { name: 'Relational & Document State', focus: 'PostgreSQL, Firebase Firestore & Realtime DB' },
      ],
    },
    {
      id: 'web-craft',
      code: 'CAP-04',
      category: 'Web Architecture & Interactive 3D',
      description: 'High-assurance interface engineering, Three.js WebGL spatial computing, and version control.',
      accent: '#242424',
      icon: <Layers className="w-4 h-4 text-[#242424]" />,
      skills: [
        { name: 'React 18 & Concurrent UI', focus: 'State machines, performance hooks & custom rigs' },
        { name: 'Tailwind CSS & Token Systems', focus: 'Systematic responsive design & fluid typography' },
        { name: 'Three.js & WebGL 3D', focus: 'Dynamic lighting, materials, shaders & volumetric depth' },
        { name: 'Git & Trunk Workflow', focus: 'Version control, atomic commits & branch safety' },
        { name: 'Scholarly Documentation', focus: 'Hypothesis framing, technical reporting & symposia' },
      ],
    },
  ];

  return (
    <section
      id="capabilities"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#D8CEBA] bg-[#F2EBDD]"
      aria-label="Capabilities & Technical Toolkit"
    >
      {/* Section Header Line */}
      <div className="flex items-center justify-between text-xs font-mono-meta text-[#5A5954] pb-4 border-b border-[#D8CEBA] mb-14 sm:mb-20">
        <span className="text-[#9E2939] font-bold flex items-center gap-2">
          <Wrench className="w-3.5 h-3.5 text-[#9E2939]" />
          05 // CAPABILITIES & TECHNICAL TOOLKIT
        </span>
        <span className="text-[#5A5954]">Evidence-Based Rigor · No Arbitrary Percentages</span>
      </div>

      <div className="mb-14 sm:mb-20 max-w-3xl">
        <h2 className="font-display font-black text-4xl sm:text-6xl text-[#242424] tracking-tight mb-4 uppercase">
          Technical Domains & Systems Craft.
        </h2>
        <p className="font-sans text-base text-[#5A5954] leading-relaxed">
          Competencies demonstrated across active research repositories, symposia proceedings, and working systems. No fabricated skill percentages or inflated buzzwords.
        </p>
      </div>

      {/* 4 Technical Matrices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.id}
            className="p-6 sm:p-8 bg-[#FAF6EE] border border-[#D8CEBA] shadow-xs flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#F2EBDD] border border-[#D8CEBA]">
                    {group.icon}
                  </div>
                  <h3 className="font-display font-black text-xl text-[#242424] uppercase">
                    {group.category}
                  </h3>
                </div>
                <span
                  className="text-xs font-mono-meta font-bold px-2.5 py-0.5 rounded-sm border"
                  style={{ color: group.accent, borderColor: `${group.accent}40`, backgroundColor: '#F2EBDD' }}
                >
                  {group.code}
                </span>
              </div>

              <p className="text-xs font-mono-meta text-[#5A5954] mb-6 leading-relaxed">
                {group.description}
              </p>

              {/* Skill Matrix List */}
              <div className="space-y-2.5">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 3 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-[#F2EBDD] border border-[#D8CEBA] text-xs hover:border-[#9E2939] transition-colors"
                  >
                    <span className="font-mono-meta font-bold text-[#242424]">
                      {skill.name}
                    </span>
                    <span className="text-[#5A5954] font-mono-meta text-[11px] mt-1 sm:mt-0">
                      {skill.focus}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Indicator */}
            <div className="mt-6 pt-4 border-t border-[#D8CEBA] flex items-center justify-between text-[11px] font-mono-meta text-[#5A5954]">
              <span>Verified in shipped codebases</span>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: group.accent }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
