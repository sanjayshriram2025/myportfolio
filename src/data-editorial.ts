export interface Profile {
  name: string;
  fullName: string;
  initials: string;
  discipline: string;
  institution: string;
  standing: string;
  location: string;
  timeline: string;
  statement: string;
  github: string;
  email: string;
  linkedin: string;
}

export interface NavItem {
  label: string;
  href: string;
  index: string;
}

export interface EditorialProject {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  domain: string;
  year: string;
  status: string;
  verifiedOutcome: string;
  context: string;
  architecture: string;
  results: string;
  tags: string[];
  imagePath?: string;
  imageAlt?: string;
  imageCaption?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface ResearchDossier {
  id: string;
  ref: string;
  title: string;
  focus: string;
  classification: 'Ongoing Research' | 'Prototype Stage' | 'Symposium Presentation' | 'Exploratory Investigation';
  hypothesis: string;
  methodology: string;
  datasetOrTooling: string;
  statusDetails: string;
  mediaPath?: string;
  mediaLabel?: string;
}

export const PROFILE: Profile = {
  name: 'SANJAY SHRIRAM N',
  fullName: 'Sanjay Shriram N',
  initials: 'SSN',
  discipline: 'Independent AI Research · Systems Engineering',
  institution: 'Panimalar Engineering College, Chennai',
  standing: 'B.E. Computer Science and Engineering (Class of 2028 · Year II)',
  location: 'Chennai, Tamil Nadu, India [13.0827° N, 80.2707° E]',
  timeline: '2026 — 2028',
  statement:
    'Investigating adversarial robustness in artificial intelligence, model alignment boundaries, and resilient software architectures. Dedicated to building verifiable, explainable systems that withstand hostile environments.',
  github: 'https://github.com/sanjayshriram2025',
  email: '',
  linkedin: '',
};

export const EDITORIAL_NAV: NavItem[] = [
  { label: 'WORK', href: '#work', index: '01' },
  { label: 'RESEARCH', href: '#research', index: '02' },
  { label: 'ARCHIVE', href: '#archive', index: '03' },
  { label: 'CAPABILITIES', href: '#capabilities', index: '04' },
  { label: 'ABOUT', href: '#profile', index: '05' },
  { label: 'CONTACT', href: '#contact', index: '06' },
];

export const EDITORIAL_PROJECTS: EditorialProject[] = [
  {
    id: 'cybersecurity-digital-twin',
    index: '01',
    title: 'GenAI Digital Twin for Personal Cybersecurity',
    subtitle: 'Predictive identity exposure simulation & explainable vulnerability assessment',
    domain: 'Adversarial Modeling & Synthetic Personas',
    year: '2025–2026',
    status: 'Research Prototype / Symposium Presentation',
    verifiedOutcome: 'Presented at INVENTE’26 Technical Symposium',
    context:
      'Personal cybersecurity models remain fundamentally reactive: users receive compromise alerts only after credentials, behavioral patterns, or multi-factor tokens have already leaked.',
    architecture:
      'Constructed a generative digital twin replicating human behavioral telemetry. Integrates synthetic agent simulation with SHAP (SHapley Additive exPlanations) to explain feature vulnerabilities before social engineering vectors trigger.',
    results:
      'Simulates spear-phishing susceptibility on extensive authentication logs, providing interpretable risk weighting across behavioral features.',
    tags: ['Generative AI', 'SHAP Explainability', 'Threat Simulation', 'Behavioral Defense', 'Python'],
    imagePath: '/images/research/cybersecurity-presentation-slide.png',
    imageAlt: 'Panimalar Engineering College Research Presentation Slide — Sanjay Shriram N et al.',
    imageCaption: 'Official Research Presentation Slide — Department of CSE, Panimalar Engineering College (Reg. 2114241040771).',
    githubUrl: 'https://github.com/sanjayshriram2025',
  },
  {
    id: 'sentinel-x',
    index: '02',
    title: 'SENTINEL-X',
    subtitle: 'Runtime AI safety interceptor and governance layer',
    domain: 'Model Guardrails & Exposure Interception',
    year: '2025–2026',
    status: 'Functional Architecture Prototype',
    verifiedOutcome: 'Working Security Interceptor Codebase',
    context:
      'High-stakes enterprise and student deployments of large language models are vulnerable to zero-day prompt injection, output toxicity drift, and unauthorized private data exfiltration.',
    architecture:
      'A multi-stage proxy interceptor that monitors inbound prompts and outbound embeddings in real-time, executing policy compliance checks, toxicity threshold gating, and prompt sanitization.',
    results:
      'Eliminates direct token jailbreak sequences without requiring recurrent end-to-end model retraining.',
    tags: ['Model Guardrails', 'Adversarial Interception', 'Prompt Sanitization', 'FastAPI', 'Python'],
    githubUrl: 'https://github.com/sanjayshriram2025',
  },
  {
    id: 'rakshak',
    index: '03',
    title: 'RAKSHAK',
    subtitle: 'AI-powered criminal network analysis for law enforcement intelligence',
    domain: 'Graph Intelligence & Forensic Analytics',
    year: '2024–2025',
    status: 'Hackathon Submission (Problem Statement SIH26189)',
    verifiedOutcome: 'Validated Interactive Investigation System',
    context:
      'Investigative agencies face overwhelming volumes of disparate transactional, telecommunication, and spatial logs, creating severe cognitive bottlenecks in mapping syndicate hierarchies.',
    architecture:
      'Built graph centrality algorithms, cross-relational cluster mapping, and an intuitive analyst interface to parse complex telecommunication and financial links into prioritized forensic heatmaps.',
    results:
      'Accelerates investigative link discovery, isolates syndicate hubs, and reveals latent peripheral conspirators.',
    tags: ['SIH26189', 'Graph Intelligence', 'FastAPI', 'Network Centrality', 'React'],
    githubUrl: 'https://github.com/sanjayshriram2025',
  },
  {
    id: 'shuddh',
    index: '04',
    title: 'SHUDDH',
    subtitle: 'Automated waste segregation via edge computer vision and embedded hardware',
    domain: 'Computer Vision & Edge Hardware Automation',
    year: '2024–2025',
    status: 'Laboratory Hardware Prototype',
    verifiedOutcome: 'Functional Multi-Stream Sorting Rig (R&D Lead)',
    context:
      'Municipal and campus solid-waste management relies heavily on error-prone manual sorting, resulting in recyclable stream contamination and unsafe handling conditions.',
    architecture:
      'Trained a lightweight Convolutional Neural Network (CNN) with TensorFlow, deploying inference to a Raspberry Pi 4 paired with an Arduino Uno microcontroller over serial bus protocol to drive sorting actuators.',
    results:
      'Real-time automated categorization of waste into recyclable and non-recyclable streams with zero manual contact.',
    tags: ['Raspberry Pi 4', 'Arduino Uno', 'TensorFlow CNN', 'Edge Vision', 'Actuation Control'],
    imagePath: '/images/projects/shuddh-core-team.png',
    imageAlt: 'SHUDDH Core Project Team — Sanjay Sriram, Research & Development Lead',
    imageCaption: 'Official SHUDDH Project Leadership Team — Sanjay Sriram (Research & Development Lead), Sayantani MB, Akshay Perumal Raj, Samantha Janet.',
  },
  {
    id: 'pollution-control-iot',
    index: '05',
    title: 'Pollution Control with IoT and AI',
    subtitle: 'Predictive environmental monitoring & air quality mitigation framework',
    domain: 'Environmental Telemetry & Edge AI',
    year: '2024–2025',
    status: 'Competition Submission (Ideathon 2024–25)',
    verifiedOutcome: 'Top 20 Finalist out of ~240 competing teams (Team 24CS64)',
    context:
      'Urban atmospheric monitoring systems typically report historical data rather than anticipating hyper-local microclimate particulate concentrations in real-time.',
    architecture:
      'Engineered an edge-to-cloud environmental telemetry concept combining particulate matter sensors with predictive dispersion algorithms for timely localized interventions.',
    results:
      'Evaluated and defended by Team 24CS64 under Sanjay Shriram’s leadership, ranking in the Top 20 of 240 collegiate teams.',
    tags: ['IoT Sensors', 'Air Quality Modeling', 'Edge Compute', 'Predictive Analytics'],
    imagePath: '/images/events/ideathon-event.jpg',
    imageAlt: 'Pollution Control IoT Telemetry Architecture Pitch',
    imageCaption: 'Ideathon 2024–25 — Team 24CS64 presentation and defense (Top 20 Finalist).',
  },
  {
    id: 'toastmasters-tracker',
    index: '06',
    title: 'Toastmasters Meeting & Speech Tracker',
    subtitle: 'Systematic oratorical milestone tracking and timer synchronization',
    domain: 'Productivity Systems & Workflow Architecture',
    year: '2025',
    status: 'Verified Working Codebase',
    verifiedOutcome: 'Shipped Operational Tooling in Repository',
    context:
      'Collegiate Toastmasters and public speaking chapters struggle with fragmented manual stopwatches, role assignment discrepancies, and unstandardized meeting records.',
    architecture:
      'Constructed a specialized interface managing speaker timing intervals (green/amber/red cues), Ah-counter logs, grammarian notes, and speech objective checklists.',
    results:
      'Provides deterministic meeting administration and structured speech progress tracking.',
    tags: ['TypeScript', 'State Management', 'Web Application', 'Public Speaking Tooling'],
    githubUrl: 'https://github.com/sanjayshriram2025',
  },
  {
    id: 'job-portal',
    index: '07',
    title: 'Job Portal & Recruitment Management System',
    subtitle: 'Role-based employment portal with application tracking and candidate matching',
    domain: 'Enterprise Architecture & Relational Data Flows',
    year: '2025',
    status: 'Verified Working Codebase',
    verifiedOutcome: 'Shipped Full-Stack System in Repository',
    context:
      'Recruitment coordination requires clear permission tiers, applicant filtering, status transparency, and deterministic resume evaluation pipelines.',
    architecture:
      'Designed end-to-end full-stack portal with role-based authentication (candidate vs recruiter), resume submission workflows, structured job filtering, and stage tracking.',
    results:
      'End-to-end applicant tracking with modular components and resilient form handling.',
    tags: ['Full-Stack', 'Role-Based Access', 'RESTful API', 'TypeScript', 'Relational State'],
    githubUrl: 'https://github.com/sanjayshriram2025',
  },
];

export const RESEARCH_DOSSIERS: ResearchDossier[] = [
  {
    id: 'res-cybersecurity-twin',
    ref: 'DOSSIER // 01',
    title: 'Generative Digital Twin for Predictive Personal Cybersecurity',
    focus: 'Behavioral attack surface simulation & explainable vulnerability discovery',
    classification: 'Symposium Presentation',
    hypothesis:
      'A calibrated generative digital twin simulating human credentials and behavioral authentication patterns can predict targeted spear-phishing vulnerability before exploit execution.',
    methodology:
      'Evaluating large-scale empirical login records, modeling behavioral anomalies, and applying SHAP (SHapley Additive exPlanations) to identify feature-level risk sensitivities.',
    datasetOrTooling:
      'Authentication event datasets, Scikit-Learn, SHAP, Python Generative Modeling.',
    statusDetails:
      'Formally presented at INVENTE’26 Technical Symposium. Ongoing academic inquiry exploring adversarial persona transfer.',
    mediaPath: '/images/research/cybersecurity-research-paper.jpg',
    mediaLabel: 'Research Paper — GenAI-Powered Digital Twin for Predictive Personal Cybersecurity Risk Assessment',
  },
  {
    id: 'res-ai-safety-governance',
    ref: 'DOSSIER // 02',
    title: 'Mechanistic Interpretability & Runtime Model Guardrails',
    focus: 'Adversarial prompt defense, toxic vector pruning, and privacy boundaries',
    classification: 'Ongoing Research',
    hypothesis:
      'Pre-inference inspection probes at the middleware layer can intercept adversarial jailbreak intents and private data exfiltration attempts with minimal inference latency overhead.',
    methodology:
      'Benchmarking defensive interceptors against published jailbreak taxonomies, monitoring embedding distances, and validating token toxicity scoring.',
    datasetOrTooling:
      'Adversarial prompt benchmarks, HuggingFace Transformers, Python, FastAPI.',
    statusDetails:
      'Functional middleware prototype implemented in Sentinel-X codebase. Pre-publication investigation.',
  },
  {
    id: 'res-emergency-multimodal',
    ref: 'DOSSIER // 03',
    title: 'VisionGuard: Agentic Multimodal AI for Emergency Triage',
    focus: 'Low-latency situational appraisal and structured hazard routing',
    classification: 'Prototype Stage',
    hypothesis:
      'Lightweight multimodal vision-language agents can parse real-time camera telemetry to generate structured hazard taxonomies for first responders during disaster triage.',
    methodology:
      'Testing asynchronous visual spatial feature extraction coupled with strict JSON schema response validation for incident reporting.',
    datasetOrTooling:
      'Vision-Language Model APIs, OpenCV, Python Async Frameworks.',
    statusDetails:
      'Exploratory prototype in early student experimentation phase. No claims of peer-reviewed publication.',
  },
  {
    id: 'res-indic-misinformation',
    ref: 'DOSSIER // 04',
    title: 'Cross-Lingual Representation for Indic Misinformation Detection',
    focus: 'Low-resource semantic embeddings and synthetic disinformation analysis',
    classification: 'Exploratory Investigation',
    hypothesis:
      'Parameter-efficient fine-tuning on multilingual Indic encoders can detect coordinated regional disinformation without requiring massive paired parallel training corpora.',
    methodology:
      'Evaluating zero-shot cross-lingual transfer representations and semantic clustering across regional language news datasets.',
    datasetOrTooling:
      'IndicBERT, Multilingual Sentence Transformers, PyTorch, Regional Corpora.',
    statusDetails:
      'Theoretical inquiry and dataset compilation in progress. Pre-submission academic investigation.',
  },
];
