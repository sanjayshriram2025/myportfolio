export type ArchiveCategory = 'all' | 'competitions' | 'research' | 'projects' | 'leadership' | 'training';

export interface MediaSlot {
  label: string;
  expectedPath: string;
  type: 'photo' | 'certificate' | 'slides' | 'poster' | 'screenshot' | 'paper';
  caption: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'doc';
}

export interface ArchiveEntry {
  id: string;
  code: string;
  title: string;
  subtitle?: string;
  category: 'competitions' | 'research' | 'projects' | 'leadership' | 'training';
  timeframe?: string;
  role?: string;
  trackOrTheme?: string;
  teamOrOrg?: string;
  verifiedOutcome: string;
  outcomeType: 'finalist' | 'participation' | 'presentation' | 'active_lead' | 'prototype' | 'completed';
  description: string;
  highlights: string[];
  techOrThemes: string[];
  mediaSlots: MediaSlot[];
  evidenceNote?: string;
  links?: { label: string; href: string; external?: boolean }[];
}

export const ARCHIVE_ENTRIES: ArchiveEntry[] = [
  // 1. IDEATHON 2024-25
  {
    id: 'ideathon-2024-25',
    code: 'COMP-01',
    title: 'IDEATHON 2024–25',
    subtitle: 'Pollution Control with IoT and AI',
    category: 'competitions',
    timeframe: '2024–2025',
    role: 'Team Lead',
    trackOrTheme: 'Sustainable Environment Track',
    teamOrOrg: 'Team 24CS64 · Panimalar Engineering College',
    verifiedOutcome: 'Top 20 Finalist (out of ~240 competing teams)',
    outcomeType: 'finalist',
    description:
      'Conceptualized and engineered an integrated AI/IoT environmental monitoring and automated mitigation framework designed to track Air Quality Index (AQI) dynamics in real-time. Commanded Team 24CS64 through evaluation rounds to reach the Top 20 tier out of approximately 240 collegiate teams.',
    highlights: [
      'Engineered an edge-to-cloud telemetry concept bridging particulate matter sensors with predictive dispersion analysis',
      'Orchestrated technical pitch, architecture schematics, and defensive Q&A during rigorous jury evaluations',
      'Distinction: Verified Top 20 ranking among 240 teams (preserved accurately without inflated winner claims)',
    ],
    techOrThemes: ['IoT Sensing', 'AI/ML AQI Modeling', 'Edge Telemetry', 'Environmental Systems', 'Team Leadership'],
    mediaSlots: [
      {
        label: 'Event Photograph',
        expectedPath: '/images/events/ideathon-event.jpg',
        type: 'photo',
        caption: 'Ideathon 2024–25 presentation floor & jury review session',
        aspectRatio: 'video',
      },
      {
        label: 'Presentation Deck Slides',
        expectedPath: '/images/achievements/ideathon-slides.jpg',
        type: 'slides',
        caption: 'Pollution Control IoT & AI Architecture presentation slides',
        aspectRatio: 'video',
      },
      {
        label: 'Live Hardware & IoT Demo',
        expectedPath: '/images/events/ideathon-demo.jpg',
        type: 'photo',
        caption: 'Team 24CS64 particulate matter telemetry demonstration',
        aspectRatio: 'video',
      },
    ],
    evidenceNote: 'Outcome verified as Top 20 of ~240 teams. Academic competition record.',
  },

  // 2. SMART INDIA HACKATHON — RAKSHAK
  {
    id: 'sih-rakshak',
    code: 'COMP-02',
    title: 'Smart India Hackathon (SIH)',
    subtitle: 'Rakshak — AI-Powered Criminal Network Analysis',
    category: 'competitions',
    timeframe: 'Hackathon Initiative',
    role: 'Core Systems & AI Developer',
    trackOrTheme: 'Problem Statement ID: SIH26189',
    teamOrOrg: 'Law Enforcement Intelligence Challenge',
    verifiedOutcome: 'Hackathon Submission & Working Interactive Architecture',
    outcomeType: 'participation',
    description:
      'Developed under Problem Statement SIH26189 to address complex investigative dilemmas faced by law enforcement agencies. Engineered relational mapping algorithms to discover latent hierarchy, money laundering rings, and syndicates across fragmented telecommunication records.',
    highlights: [
      'Built multi-node centrality scoring and cross-transactional cluster identification pipelines',
      'Constructed responsive investigative analyst dashboard with graph search and anomaly heatmaps',
      'Presented as hackathon project/participation in strict alignment with verified records',
    ],
    techOrThemes: ['SIH26189', 'Graph AI', 'Cybersecurity', 'NLP', 'FastAPI', 'React'],
    mediaSlots: [],
    evidenceNote: 'Registered under Problem Statement SIH26189. Verified hackathon build.',
    links: [{ label: 'GitHub Repository', href: 'https://github.com/sanjayshriram2025', external: true }],
  },

  // 3. INVENTE'26 / RESEARCH PRESENTATION
  {
    id: 'invente-26-research',
    code: 'RES-01',
    title: "INVENTE'26 Research Presentation",
    subtitle: 'GenAI-Powered Digital Twin for Predictive Personal Cybersecurity Risk Assessment',
    category: 'research',
    timeframe: "INVENTE'26 Technical Symposium",
    role: 'Primary Student Researcher & Presenter',
    trackOrTheme: 'Predictive Cybersecurity & Machine Learning',
    teamOrOrg: 'Inter-Collegiate Research Symposium · Panimalar Engineering College',
    verifiedOutcome: 'Technical Research Paper Presentation & Defense',
    outcomeType: 'presentation',
    description:
      'Formally presented novel inquiry into personal cybersecurity risk modeling. The system constructs a generative agent twin that stress-tests human attack surfaces against automated spear-phishing and social engineering attacks, moving beyond reactive detection toward proactive vulnerability anticipation.',
    highlights: [
      'Tackled behavioral analytics using empirical authentication and credential risk models',
      'Integrated Explainable AI (SHAP) to interpret feature importance and vulnerability weighting',
      'Defended paper authored by Sanjay Shriram N, Sivanesan S, and Sai Saran K under guidance of Mrs. Mohana Priya (Asst. Prof / CSE)',
    ],
    techOrThemes: ['Digital Twin', 'Behavioral Risk', 'SHAP', 'GenAI Modeling', 'Empirical Dataset'],
    mediaSlots: [
      {
        label: 'Official Symposium Presentation Slide',
        expectedPath: '/images/research/cybersecurity-presentation-slide.png',
        type: 'slides',
        caption: 'Panimalar Engineering College CSE Department symposium title slide (Reg: 2114241040771)',
        aspectRatio: 'video',
      },
      {
        label: 'Research Paper Publication',
        expectedPath: '/images/research/cybersecurity-research-paper.jpg',
        type: 'paper',
        caption: 'Full symposium research paper: GenAI-Powered Digital Twin for Predictive Personal Cybersecurity Risk Assessment',
        aspectRatio: 'doc',
      },
      {
        label: 'Symposium Podium Photograph',
        expectedPath: '/images/events/invente-presentation.jpg',
        type: 'photo',
        caption: "Delivering research presentation at INVENTE'26 technical podium",
        aspectRatio: 'video',
      },
    ],
    evidenceNote: 'Presented research topic. Manuscript undergoing ongoing academic extension.',
  },

  // 4. SENTINEL-X — AI SAFETY AND GOVERNANCE
  {
    id: 'sentinel-x-governance',
    code: 'RES-02',
    title: 'Sentinel-X AI Safety & Governance Layer',
    subtitle: 'Runtime Adversarial Prompt Defense & Privacy Risk Interceptors',
    category: 'research',
    timeframe: 'Active Exploration & Prototype',
    role: 'Lead Architect',
    trackOrTheme: 'Adversarial Machine Learning & Privacy Governance',
    teamOrOrg: 'Independent Research Initiative',
    verifiedOutcome: 'Working Middleware Architecture & Defense Interceptors',
    outcomeType: 'prototype',
    description:
      'Engineered an autonomous guardrail layer to intercept zero-day prompt injections, malicious jailbreak vectors, and private data exfiltration attempts in production LLM workflows. Focuses on exposure-risk scoring and input token sanitation.',
    highlights: [
      'Multi-tiered middleware intercepting toxic token sequences before query submission',
      'Runtime privacy and exposure-risk workflows checking context boundary violations',
      'Pre-inference inspection probes benchmarked against known jailbreak corpora',
    ],
    techOrThemes: ['Model Guardrails', 'Prompt Sanitization', 'Privacy Auditing', 'Python', 'FastAPI'],
    mediaSlots: [],
    evidenceNote: 'Ongoing engineering prototype with verified local repository implementation.',
    links: [{ label: 'GitHub Repository', href: 'https://github.com/sanjayshriram2025', external: true }],
  },

  // 5. SHUDDH — SMART WASTE SEGREGATION
  {
    id: 'shuddh-smart-segregation',
    code: 'PROJ-01',
    title: 'SHUDDH — Smart Waste Segregation',
    subtitle: 'Edge Computer Vision & Automated Multi-Stream Sorting',
    category: 'projects',
    timeframe: 'R&D Initiative',
    role: 'R&D Lead',
    trackOrTheme: 'Embedded Systems & Computer Vision',
    teamOrOrg: 'Hardware/Software Engineering Lab',
    verifiedOutcome: 'Functional Hardware/Software Prototype',
    outcomeType: 'prototype',
    description:
      'Engineered an edge computer-vision automated segregation pipeline. Directing R&D to bridge deep-learning visual classifiers with microcontrollers and mechanical actuators for immediate, hygienic categorization of waste streams.',
    highlights: [
      'Trained lightweight convolutional neural network (CNN) classifiers using TensorFlow for recyclable vs organic identification',
      'Integrated Raspberry Pi 4 edge compute module with Arduino Uno microcontroller over serial communication',
      'Core leadership team: Sanjay Sriram (R&D Lead), Sayantani MB, Akshay Perumal Raj, Samantha Janet',
    ],
    techOrThemes: ['Raspberry Pi 4', 'Arduino Uno', 'TensorFlow CNN', 'Computer Vision', 'Serial Comm'],
    mediaSlots: [
      {
        label: 'SHUDDH Project Core Team',
        expectedPath: '/images/projects/shuddh-core-team.png',
        type: 'photo',
        caption: 'SHUDDH Core Project Team — Sanjay Sriram, Research & Development Lead',
        aspectRatio: 'video',
      },
    ],
    evidenceNote: 'Functional laboratory hardware prototype. R&D Lead designation verified.',
  },

  // 6. AIRFOIL SELF-NOISE PREDICTION & APPLIED ML
  {
    id: 'airfoil-self-noise',
    code: 'PROJ-02',
    title: 'Airfoil Self-Noise Aerodynamic Modeling',
    subtitle: 'Supervised Regressive Machine Learning on NASA Acoustic Dataset',
    category: 'projects',
    timeframe: 'Academic Project',
    role: 'ML Engineer',
    trackOrTheme: 'Applied Data Science & Regression Analysis',
    teamOrOrg: 'Department of Computer Science',
    verifiedOutcome: 'Validated Predictive ML Pipeline with Cross-Validation',
    outcomeType: 'completed',
    description:
      'Trained and evaluated predictive regression pipelines modeling acoustic noise levels produced by aerodynamic airfoils. Examined complex collinear relationships between frequency, angle of attack, chord length, suction side displacement, and velocity.',
    highlights: [
      'Conducted exploratory data analysis, outlier pruning, and feature normalization on empirical wind tunnel logs',
      'Benchmarked Random Forest, Gradient Boosted Trees, and Linear Ridge Regressors evaluating RMSE and R² metrics',
      'Visualized multi-variable correlation matrices and residual variance plots',
    ],
    techOrThemes: ['Scikit-Learn', 'Regression Modeling', 'NASA Dataset', 'Pandas', 'Matplotlib'],
    mediaSlots: [],
    evidenceNote: 'Empirical regression pipeline built on verified NASA aeroacoustic dataset.',
  },

  // 7. ARIVU AI & FULL-STACK ECOSYSTEM
  {
    id: 'arivu-ai-ecosystem',
    code: 'PROJ-03',
    title: 'Arivu AI & Full-Stack Systems Ecosystem',
    subtitle: 'TailorFlow Pro, Hostel Management & Specialized Production Web Apps',
    category: 'projects',
    timeframe: 'Production Engineering',
    role: 'Full-Stack Developer & Designer',
    trackOrTheme: 'Responsive Web Architecture & State Integrity',
    teamOrOrg: 'Client & Campus Systems',
    verifiedOutcome: 'Shipped Interactive Software Deployments',
    outcomeType: 'completed',
    description:
      'Engineered performant, accessible web systems emphasizing reliable state machines, responsive interfaces, and clean type contracts. Delivered Arivu AI, TailorFlow Pro, and a centralized Hostel Management portal tailored to organizational logistics.',
    highlights: [
      'Constructed modular React 18, TypeScript, and Tailwind CSS architectures with robust client-side validation',
      'Configured Firebase real-time data synchronization and REST endpoints for authenticated workflows',
      'Prioritized keyboard accessibility, semantic markup, and mobile layout fidelity',
    ],
    techOrThemes: ['React 18', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Vercel', 'UI/UX'],
    mediaSlots: [],
    evidenceNote: 'Verified software builds developed and maintained by Sanjay Shriram.',
  },

  // 8. SECRETARY-GENERAL — MODEL UNITED NATIONS (MUN)
  {
    id: 'mun-secretary-general',
    code: 'LEAD-01',
    title: 'Secretary-General — Model United Nations',
    subtitle: 'Diplomatic Simulation & Secretariat Administration',
    category: 'leadership',
    timeframe: 'Secretariat Leadership',
    role: 'Secretary-General',
    trackOrTheme: 'Executive Oversight & International Affairs Simulation',
    teamOrOrg: 'Model United Nations Secretariat',
    verifiedOutcome: 'Executive Secretariat Leadership & Conference Administration',
    outcomeType: 'active_lead',
    description:
      'Served as the highest administrative authority for the collegiate Model United Nations conference. Directed the executive secretariat across committee agendas, rules of procedure, crisis simulations, and external delegate relations.',
    highlights: [
      'Presided over committee formations spanning geopolitics, international security, and human rights charters',
      'Managed cross-functional organizing sub-committees including logistics, hospitality, delegate affairs, and press',
      'Delivered opening and closing plenary addresses, establishing a culture of respectful diplomatic debate',
    ],
    techOrThemes: ['Executive Leadership', 'Parliamentary Procedure', 'Diplomacy', 'Event Administration', 'Public Oratory'],
    mediaSlots: [
      {
        label: 'Secretariat Stage Photograph',
        expectedPath: '/images/events/mun-stage.jpg',
        type: 'photo',
        caption: 'Addressing the opening plenary session as Secretary-General',
        aspectRatio: 'video',
      },
      {
        label: 'Executive Secretariat Team',
        expectedPath: '/images/events/mun-secretariat-team.jpg',
        type: 'photo',
        caption: 'Executive Secretariat and committee chairs organizing delegation',
        aspectRatio: 'video',
      },
      {
        label: 'Official Appointment Credential',
        expectedPath: '/images/certificates/mun-appointment.jpg',
        type: 'certificate',
        caption: 'Official Secretariat appointment / leadership credential',
        aspectRatio: 'doc',
      },
    ],
    evidenceNote: 'Verified leadership appointment as Secretary-General.',
  },

  // 9. HEAD COORDINATOR — APP DEVELOPMENT CLUB (PEC)
  {
    id: 'app-dev-club-head',
    code: 'LEAD-02',
    title: 'Head Coordinator — App Development Club',
    subtitle: 'Panimalar Engineering College Technical Club Leadership',
    category: 'leadership',
    timeframe: 'Campus Technical Leadership',
    role: 'Head Coordinator',
    trackOrTheme: 'Student Developer Empowerment & Project Mentorship',
    teamOrOrg: 'App Development Club · Panimalar Engineering College',
    verifiedOutcome: 'Head Leadership Appointment & Workshop Coordination',
    outcomeType: 'active_lead',
    description:
      'Spearheading the premier software and mobile application development collective at Panimalar Engineering College. Structuring technical roadmaps, curating code workshops, and guiding junior students through modern software development cycles.',
    highlights: [
      'Organizing student peer-learning cohorts across modern web frameworks, git workflows, and mobile application paradigms',
      'Reviewing and mentoring student technical projects submitted for internal evaluations and external hackathons',
      'Collaborating with department faculty coordinators to schedule hands-on programming bootcamps',
    ],
    techOrThemes: ['Project Mentorship', 'Developer Advocacy', 'Technical Workshops', 'Peer Guidance', 'Campus Club Lead'],
    mediaSlots: [
      {
        label: 'Technical Session Photograph',
        expectedPath: '/images/events/app-dev-session.jpg',
        type: 'photo',
        caption: 'Leading code demonstration and peer review session in the department computer lab',
        aspectRatio: 'video',
      },
      {
        label: 'Club Orientation Photograph',
        expectedPath: '/images/events/app-dev-orientation.jpg',
        type: 'photo',
        caption: 'App Development Club student orientation address and technical roadmap presentation',
        aspectRatio: 'video',
      },
    ],
    evidenceNote: 'Verified leadership position as Head Coordinator of the App Development Club at PEC.',
  },

  // 10. AI TOOLS MASTERCLASS — STUDENT COORDINATOR
  {
    id: 'ai-tools-masterclass',
    code: 'LEAD-03',
    title: 'AI Tools Masterclass Student Coordinator',
    subtitle: 'Campus Artificial Intelligence & Generative Tooling Bootcamp',
    category: 'leadership',
    timeframe: 'Technical Event Coordination',
    role: 'Student Coordinator',
    trackOrTheme: 'AI Tooling & Hands-on Prompt Engineering',
    teamOrOrg: 'Technical Events Division · PEC',
    verifiedOutcome: 'Masterclass Execution & Hands-on Session Guidance',
    outcomeType: 'completed',
    description:
      'Coordinated an intensive masterclass equipping undergraduate engineering students with practical competencies across generative AI APIs, prompt workflows, automated research tools, and code-assistance systems.',
    highlights: [
      'Facilitated session logistics, live tooling demonstrations, and participant Q&A troubleshooting',
      'Demonstrated ethical boundaries, AI safety precautions, and hallucination mitigation techniques',
      'Supported faculty presenters and ensured seamless technical lab infrastructure execution',
    ],
    techOrThemes: ['Generative AI', 'Prompt Workflows', 'Student Coordination', 'Masterclass Logistics'],
    mediaSlots: [],
    evidenceNote: 'Verified student coordinator designation for campus AI masterclass.',
  },

  // 11. VAULTOFCODES PYTHON VIRTUAL TRAINING
  {
    id: 'vaultofcodes-python',
    code: 'TRAIN-01',
    title: 'VaultofCodes Python Virtual Training',
    subtitle: 'Comprehensive Core & Applied Python Programming Track',
    category: 'training',
    timeframe: 'Virtual Technical Program',
    role: 'Technical Trainee',
    trackOrTheme: 'Object-Oriented Programming & Algorithmic Python',
    teamOrOrg: 'VaultofCodes Technical Education',
    verifiedOutcome: 'Training Course Completion',
    outcomeType: 'completed',
    description:
      'Completed rigorous training covering core syntax, data structures, functional paradigms, OOP architecture, and file I/O operations. Established the programmatic foundation for subsequent machine learning research and backend systems.',
    highlights: [
      'Systematic curriculum in algorithmic thinking, data manipulation, and exception handling',
      'Applied module testing and programmatic problem-solving assignments',
      'Preserved without fabricated certificate identifiers or exaggerated grade claims',
    ],
    techOrThemes: ['Python Core', 'Data Structures', 'OOP', 'Algorithm Design'],
    mediaSlots: [],
    evidenceNote: 'Verified virtual training program with VaultofCodes.',
  },

  // 12. VAULTOFCODES AI & PROMPT ENGINEERING
  {
    id: 'vaultofcodes-prompt-engineering',
    code: 'TRAIN-02',
    title: 'VaultofCodes AI & Prompt Engineering Training',
    subtitle: 'Generative AI Principles, Prompt Architecture & LLM Interfaces',
    category: 'training',
    timeframe: 'Virtual Technical Program',
    role: 'Technical Trainee',
    trackOrTheme: 'Generative AI, Context Framing & Systematic Prompting',
    teamOrOrg: 'VaultofCodes Technical Education',
    verifiedOutcome: 'Training Course Completion',
    outcomeType: 'completed',
    description:
      'Specialized virtual training focused on the mechanics of large language models, prompt orchestration, few-shot conditioning, structured output enforcement (JSON/YAML), and generative workflow optimization.',
    highlights: [
      'Trained in advanced system prompt engineering, context pruning, and few-shot calibration',
      'Studied adversarial prompt vulnerabilities and hallucination mitigation strategies',
      'Honest representation: verified technical coursework completion',
    ],
    techOrThemes: ['Prompt Engineering', 'LLM Mechanics', 'Few-Shot Calibration', 'Structured Outputs'],
    mediaSlots: [],
    evidenceNote: 'Verified virtual training program with VaultofCodes.',
  },
];
