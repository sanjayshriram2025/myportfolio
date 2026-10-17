export interface Profile {
  name: string;
  fullName: string;
  role: string;
  specialization: string;
  tagline: string;
  institution: string;
  location: string;
  academicStanding: string;
  graduatingYear: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface NavItem {
  label: string;
  href: string;
  number: string;
}

export interface FactItem {
  label: string;
  value: string;
  detail: string;
  tag: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  kind: string;
  title: string;
  problem: string;
  contribution: string;
  solution: string;
  blurb: string;
  tags: string[];
  metrics?: string;
  theme: {
    panelBg: string;
    border: string;
    accent: string;
    badgeBg: string;
    badgeText: string;
  };
}

export interface ResearchThread {
  id: string;
  number: string;
  title: string;
  focus: string;
  hypothesis: string;
  methodology: string;
  status: 'Prototype Stage' | 'Ongoing Inquiry' | 'Active Exploration';
  tags: string[];
}

export interface SkillCategory {
  id: string;
  number: string;
  category: string;
  description: string;
  skills: { name: string; focus: string }[];
  accentColor: string;
}

export interface LeadershipItem {
  id: string;
  number: string;
  title: string;
  role: string;
  organization: string;
  impact: string;
  description: string;
  iconName: 'MessageSquare' | 'Mic' | 'HeartHandshake';
  accentBorder: string;
}

export const PROFILE: Profile = {
  name: 'SANJAY SHRIRAM',
  fullName: 'Sanjay Shriram N',
  role: 'AI/ML Engineer & Systems Researcher',
  specialization: 'Adversarial AI Defense · Graph Intelligence · Applied Cybersecurity',
  tagline:
    'Undergraduate computer science researcher and engineer investigating model robustness, adversarial defense layers, and autonomous cybersecurity systems.',
  institution: 'Panimalar Engineering College, Chennai',
  location: 'Chennai, Tamil Nadu, India',
  academicStanding: 'CGPA: 8.3 / 10.0 (Year II Standing)',
  graduatingYear: '2028',
  email: '',
  github: 'https://github.com/sanjayshriram2025',
  linkedin: '',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', href: '#about', number: '01' },
  { label: 'Selected Systems', href: '#projects', number: '02' },
  { label: 'Archive', href: '#archive', number: '03' },
  { label: 'Research', href: '#research', number: '04' },
  { label: 'Capabilities', href: '#skills', number: '05' },
  { label: 'Leadership', href: '#leadership', number: '06' },
  { label: 'Signal', href: '#contact', number: '07' },
];

export const MARQUEE_WORDS = [
  'Adversarial AI Defense',
  'Graph Neural Intelligence',
  'Autonomous Guardrails',
  'Predictive Threat Twins',
  'Mechanistic Interpretability',
  'High-Assurance Systems',
];

export const ABOUT_STATEMENT =
  'Second-year Computer Science student in Chennai who builds intelligent systems, researches how AI can be made safer, and ships software people can use — next up, graduate study in AI/ML.';

export const ABOUT_FACTS: FactItem[] = [
  {
    label: 'Academic Track',
    value: 'B.E. Computer Science',
    detail: 'Panimalar Engineering College',
    tag: 'Accredited Curriculum',
  },
  {
    label: 'Graduation Year',
    value: 'Class of 2028',
    detail: 'Second-Year Standing (Semester IV)',
    tag: 'In Progress',
  },
  {
    label: 'Performance',
    value: '8.3 CGPA',
    detail: 'Core CS & Mathematics Rigor',
    tag: 'Verified Metric',
  },
  {
    label: 'Operational Base',
    value: 'Chennai, India',
    detail: 'Tamil Nadu · UTC+05:30',
    tag: 'On-Site / Remote',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'rakshak',
    number: 'SYS-01',
    kind: 'Law Enforcement Intelligence / Graph AI',
    title: 'Rakshak',
    problem:
      'Manual investigations struggle to identify latent criminal hierarchy, money laundering rings, and syndicate collusion within fragmented unstructured telecommunication logs.',
    contribution:
      'Engineered network centrality algorithms, node relational mapping, and an interactive intelligence interface designed for investigative analysts.',
    solution:
      'A graph analytics intelligence portal parsing complex multi-hop relationship matrices into prioritized threat clusters and anomaly heatmaps.',
    blurb:
      'AI-powered criminal network analysis engineered for investigative workflows. Discovers hidden relationships, central actors, and suspicious clusters within complex transactional datasets.',
    tags: ['Graph AI', 'Python', 'Relational Mapping', 'FastAPI', 'React'],
    metrics: 'Multi-node clustering engine',
    theme: {
      panelBg: 'bg-[#EDE8DF]',
      border: 'border-white/10 hover:border-[#FF6538]/40',
      accent: '#FF6538',
      badgeBg: 'bg-[#FF6538]/10',
      badgeText: 'text-[#FF6538]',
    },
  },
  {
    id: 'sentinel-x',
    number: 'SYS-02',
    kind: 'AI Safety & Security Governance Framework',
    title: 'Sentinel-X',
    problem:
      'LLM deployment in high-stakes domains suffers from zero-day prompt injections, data extraction exploits, and uncontrollable output drift.',
    contribution:
      'Designed real-time adversarial input sanitation interceptors and automated safety evaluation pipelines to neutralize hostile token sequences.',
    solution:
      'Multi-tiered middleware verifying context integrity, model toxicity thresholds, and prompt guardrails before query execution.',
    blurb:
      'Autonomous AI safety and governance framework. Monitors model outputs, detects jailbreaks, mitigates toxic vectors, and enforces guardrails to safeguard LLM-integrated production systems.',
    tags: ['Adversarial Defense', 'AI Governance', 'Prompt Sanitization', 'Security Auditing', 'Python'],
    metrics: 'Multi-layered interceptors',
    theme: {
      panelBg: 'bg-[#EDE8DF]',
      border: 'border-white/10 hover:border-[#00D2FF]/40',
      accent: '#00D2FF',
      badgeBg: 'bg-[#00D2FF]/10',
      badgeText: 'text-[#00D2FF]',
    },
  },
  {
    id: 'digital-twin',
    number: 'SYS-03',
    kind: 'Predictive Cybersecurity Simulation',
    title: 'GenAI Digital Twin',
    problem:
      'Personal cybersecurity remains reactive: people only respond after credentials or behavioral patterns are already breached.',
    contribution:
      'Architected a personal behavioral simulation model that replicates human digital footprints to stress-test identity attack surfaces.',
    solution:
      'Generative agent twins that run Monte Carlo social-engineering simulations, pre-calculating credential vulnerability scores before attacks occur.',
    blurb:
      'Predictive personal cybersecurity risk assessment via a generative digital twin. Simulates user behavior, attack surfaces, and social engineering vulnerabilities to preemptively quantify identity exposure.',
    tags: ['Digital Twin', 'GenAI Modeling', 'Threat Simulation', 'Risk Assessment', 'Research'],
    metrics: 'Predictive vulnerability synthesis',
    theme: {
      panelBg: 'bg-[#EDE8DF]',
      border: 'border-white/10 hover:border-[#FF6538]/40',
      accent: '#FF6538',
      badgeBg: 'bg-[#FF6538]/10',
      badgeText: 'text-[#FF6538]',
    },
  },
  {
    id: 'fullstack-web',
    number: 'SYS-04',
    kind: 'Systems Engineering & Scalable Web Architecture',
    title: 'Full-Stack Web Deployments',
    problem:
      'Demanding student organizations and business workflows suffer from fragile data consistency, poor latency, and inaccessible user interfaces.',
    contribution:
      'Engineered responsive full-stack architectures across multiple practical client environments, emphasizing type safety and deterministic state.',
    solution:
      'Shipped specialized production systems including Arivu AI, a centralized Hostel Management System, and TailorFlow Pro tailored to operational workflows.',
    blurb:
      'Engineering performant, accessible, and mission-critical full-stack applications with modular architectures, real-time data flows, and thoughtful user experiences.',
    tags: ['Arivu AI', 'Hostel Management', 'TailorFlow Pro', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    metrics: 'Multi-system production deployments',
    theme: {
      panelBg: 'bg-[#EDE8DF]',
      border: 'border-white/10 hover:border-white/30',
      accent: '#F2F0EA',
      badgeBg: 'bg-white/10',
      badgeText: 'text-[#F2F0EA]',
    },
  },
];

export const RESEARCH_THREADS: ResearchThread[] = [
  {
    id: 'genai-cybersecurity',
    number: 'RES-01',
    title: 'Generative Agents for Proactive Personal Cybersecurity',
    focus: 'Predictive Identity Risk & Synthetic Spear-Phishing Defense',
    hypothesis:
      'Can an individual digital twin accurately simulate an individual vulnerabilities under evolving automated social engineering attacks?',
    methodology:
      'Constructing calibrated agent simulations evaluating behavioral data leakage, testing synthetic persona resistance against generative persuasion models.',
    status: 'Ongoing Inquiry',
    tags: ['Agent Simulation', 'Behavioral Defense', 'Threat Modeling'],
  },
  {
    id: 'ai-safety-governance',
    number: 'RES-02',
    title: 'Mechanistic Interpretability & Runtime Model Guardrails',
    focus: 'Adversarial Prompt Defense & Unsupervised Alignment Verification',
    hypothesis:
      'Can lightweight inspection probes detect jailbreak intents and toxic embeddings before full inference completion?',
    methodology:
      'Auditing token probability shifts, red-teaming transformer activations, and benchmarking defensive middleware against known jailbreak benchmark corpora.',
    status: 'Ongoing Inquiry',
    tags: ['Red-Teaming', 'Adversarial Robustness', 'Model Alignment'],
  },
  {
    id: 'visionguard-agentic',
    number: 'RES-03',
    title: 'Agentic Multimodal AI for Emergency Situational Triage',
    focus: 'VisionGuard: Autonomous Disaster Assessment & Hazard Routing',
    hypothesis:
      'Can lightweight multimodal LLM pipelines process asynchronous camera feeds to provide actionable triage summaries for first responders within low latency windows?',
    methodology:
      'Prototyping spatial visual feature extraction combined with structured JSON schema output enforcement for emergency hazard taxonomy.',
    status: 'Prototype Stage',
    tags: ['Multimodal LLMs', 'Computer Vision', 'Emergency Response'],
  },
  {
    id: 'indic-nlp',
    number: 'RES-04',
    title: 'NLP for Indian Languages: Multilingual Misinformation Detection',
    focus: 'Cross-Lingual Embeddings in Low-Resource Regional Contexts',
    hypothesis:
      'Can parameter-efficient fine-tuning on Indic multilingual encoders identify coordinated synthetic fake news across Indian dialects without paired translation data?',
    methodology:
      'Evaluating cross-lingual zero-shot transfer capabilities and low-resource semantic clustering across regional datasets.',
    status: 'Active Exploration',
    tags: ['IndicNLP', 'Fact Verification', 'Low-Resource NLP'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-ml',
    number: 'CAP-01',
    category: 'AI & Machine Learning',
    description: 'Applied model engineering, representation learning, and modern LLM orchestration.',
    skills: [
      { name: 'NLP & Tokenization', focus: 'Semantic parsing & embeddings' },
      { name: 'Transformer Fine-Tuning', focus: 'Parameter-efficient adaptation' },
      { name: 'RAG Architectures', focus: 'Vector indexing & hybrid retrieval' },
      { name: 'LLM APIs & Prompt Ops', focus: 'Structured schema enforcement' },
      { name: 'Python Core & Scientific', focus: 'NumPy, PyTorch, Pandas' },
    ],
    accentColor: '#FF6538',
  },
  {
    id: 'security',
    number: 'CAP-02',
    category: 'Security & Alignment',
    description: 'Systematic defense, threat modeling, and robustness validation against hostile vectors.',
    skills: [
      { name: 'Cybersecurity Research', focus: 'Vulnerability discovery & attack surface' },
      { name: 'Adversarial AI Defense', focus: 'Jailbreak mitigation & input filtering' },
      { name: 'Threat & Risk Modeling', focus: 'Identity risk & perimeter audit' },
      { name: 'AI Safety Governance', focus: 'Guardrails & compliance protocols' },
    ],
    accentColor: '#00D2FF',
  },
  {
    id: 'systems',
    number: 'CAP-03',
    category: 'Systems & Web Engineering',
    description: 'Constructing robust, accessible, and performant web products with strict typing.',
    skills: [
      { name: 'React 18 & Next Patterns', focus: 'Component state & concurrent UI' },
      { name: 'TypeScript', focus: 'Strict types, contracts & generics' },
      { name: 'Vite & Bundler Tooling', focus: 'Optimized build pipelines' },
      { name: 'Tailwind CSS', focus: 'Systematic token-based UI' },
      { name: 'FastAPI & Node APIs', focus: 'RESTful architectures & auth' },
      { name: 'Firebase & SQL', focus: 'Persistent transactional state' },
    ],
    accentColor: '#F2F0EA',
  },
  {
    id: 'craft',
    number: 'CAP-04',
    category: 'Engineering Craft & Research',
    description: 'Methodical execution, research documentation, and collaboration standards.',
    skills: [
      { name: 'Git & Version Control', focus: 'Trunk-based workflow & CI/CD' },
      { name: 'Technical Writing', focus: 'Structured hypotheses & case studies' },
      { name: 'Design Engineering', focus: 'Figma to high-fidelity code systems' },
    ],
    accentColor: '#77766F',
  },
];

export const LEADERSHIP_ITEMS: LeadershipItem[] = [
  {
    id: 'debating',
    number: 'LEAD-01',
    title: 'Parliamentary & Technical Debating',
    role: 'Competitive Debater',
    organization: 'Panimalar Engineering College',
    impact: 'Critical argumentation under time pressure on socio-technical governance and AI ethics.',
    description:
      'Rigorous rhetorical preparation analyzing high-stakes public policy, emerging technology regulation, and competitive inter-collegiate tournaments.',
    iconName: 'MessageSquare',
    accentBorder: 'hover:border-[#FF6538]',
  },
  {
    id: 'speaking',
    number: 'LEAD-02',
    title: 'Public Speaking & Presentation',
    role: 'Speaker & Technical Presenter',
    organization: 'Academic & Peer Forums',
    impact: 'Demystifying complex computer science themes and motivating peer engineering initiatives.',
    description:
      'Commanding audiences with structured delivery, communicating research visions with poise, clarity, and unyielding energy.',
    iconName: 'Mic',
    accentBorder: 'hover:border-[#00D2FF]',
  },
  {
    id: 'yrc',
    number: 'LEAD-03',
    title: 'Youth Red Cross (YRC)',
    role: 'Active Volunteer & Organizer',
    organization: 'YRC Chapter · PEC',
    impact: 'Coordinating blood donation drives and humanitarian campus outreach initiatives.',
    description:
      'Channeling leadership towards civic responsibility, emergency medical logistics coordination, and community social programs.',
    iconName: 'HeartHandshake',
    accentBorder: 'hover:border-[#F2F0EA]',
  },
];
