/**
 * Every fact on this site lives here.
 *
 * The rule: a number in this file must also be a number I can defend in an
 * interview. If a claim can't survive "how do you know that?", it doesn't go in.
 * `**double asterisks**` render as emphasis (see `rich()` in lib/rich.jsx).
 */

export const PROFILE = {
  name: 'Ahmed Naeem',
  email: 'ahmednumber10@gmail.com',
  github: 'https://github.com/ahmed-naeem99',
  linkedin: 'https://www.linkedin.com/in/ahmed-a-naeem',
  resume: '/Ahmed_Naeem_Resume.pdf',
  resumeData: '/Ahmed_Naeem_Resume_Data_Engineering.pdf',
  location: 'Toronto, ON',
  roles: [
    'Software Engineer',
    'Co-Founder @ Yusr',
    'Payments & Platform Backend',
    'ML Data Engineering',
    'Real-Time Systems',
  ],
  tagline:
    "I build systems that handle other people's money, rides, and data — and I stay on the hook for them after launch.",
};

/** Hero counters. `value` is what CountUp animates to. */
export const HERO_STATS = [
  { value: 89, suffix: '%', label: 'Fraud losses cut' },
  { value: 500, suffix: 'K', label: 'Rides served per year' },
  { value: 41.1, suffix: 'M', decimals: 1, label: 'Transit records processed' },
  { value: 1000, suffix: '+', separator: ',', label: 'Concurrent players tested' },
];

/** About panel. Static strings: these are hexes, not counters. */
export const ABOUT_STATS = [
  { number: '89%', label: 'Fraud cut' },
  { number: '$60K', label: 'Pilot secured' },
  { number: '12.1M', label: 'Training examples' },
  { number: '85%', label: 'Tickets auto-resolved' },
  { number: '4 wks', label: 'Backend rebuild' },
  { number: '~500', label: 'Live quiz users' },
];

export const EDUCATION = {
  school: 'Toronto Metropolitan University',
  program: "BSc (Hons) Computer Science, Co-operative Program — Dean's List",
  period: 'Sep 2024 – Apr 2029 (expected) · Toronto, ON',
  courses: ['Data Structures', 'Algorithms', 'Operating Systems', 'DB Systems', 'Web Security', 'Discrete Math'],
};

export const EXPERIENCE = [
  {
    role: 'Software & ML Solutions Engineer',
    company: 'SCOOTY Mobility Inc.',
    note: 'Metrolinx / GO Transit e-scooter partner',
    period: 'May 2026 – Present',
    location: 'Mississauga, ON',
    badge: 'Current',
    achievements: [
      'Cut annual fraud losses **89% ($40K → $4.5K)** by rebuilding the payment lifecycle on **Stripe incremental authorization**, closing stolen-card and prepaid-account abuse vectors the legacy flat-charge flow could not detect.',
      'Rearchitected and shipped a replacement ride-platform backend in **4 weeks** for a service running **~500K annual rides across ~100K riders**, then led the migration of a **500-vehicle fleet** off the legacy system while it kept running.',
      'Consolidated phone, chatbot, and email support into one AI-triaged console that **auto-resolves 85% of tickets** and cut median response time from **~1 week to under 2 hours**, joining ride telemetry, geofence logs, and Stripe records with **GPT-4o** to draft evidence-backed refund decisions under human review.',
      'Modeled **per-vehicle marginal revenue** across the fleet to find the saturation point where extra vehicles stopped paying for themselves, which now informs demand-based rebalancing between service zones.',
    ],
    tags: ['Stripe', 'Node.js', 'PostgreSQL', 'GPT-4o', 'Python', 'Docker', 'Analytics'],
  },
  {
    role: 'Full-Stack Software Developer Associate',
    company: 'FluidAI Medical',
    period: 'May 2025 – Aug 2025',
    location: 'Remote',
    badge: 'Internship',
    achievements: [
      'Built full-stack features for a medical-device data platform in **Python (Flask), React, and SQL**, shipping into a regulated healthcare environment where the review process mattered as much as the code.',
      'Built **ETL pipelines** synchronizing machine-learning model outputs with the clinician-facing interface, keeping what a clinician sees consistent with what the inference layer actually produced.',
      'Worked in an Agile cross-functional team with Git and **CI/CD**, applying modular object-oriented design across complex data structures.',
    ],
    tags: ['Python', 'Flask', 'React', 'SQL', 'ETL', 'Git', 'CI/CD', 'Agile'],
  },
  {
    role: 'Lead Software Engineer & Co-Founder',
    company: 'Yusr Funeral Financial Aid',
    companyUrl: 'https://yusr.ca',
    period: 'Jan 2024 – Present',
    location: 'Oakville, ON',
    badge: 'Co-Founder',
    achievements: [
      'Co-founded a funeral financial-aid organization serving Muslim families across Canada, and built and still operate every part of its software.',
      'Streamlined member registration with an on-premise **FastAPI** service running a quantized vision LLM (**Ollama / Qwen2-VL**) that reads ID documents and auto-fills sign-up forms — on-premise so members’ identity documents never reach a third-party API.',
      'Built a **Next.js 15** front end on PostgreSQL/Prisma with magic-link JWT auth, and orchestrated webhook pipelines through **n8n** connecting Stripe billing, transactional email, and scheduled cron jobs.',
      'Designed and deployed a self-hosted containerized CRM on a Hetzner VPS with **Docker Compose** and Coolify, owning the full deployment pipeline.',
    ],
    tags: ['Next.js 15', 'FastAPI', 'Ollama', 'PostgreSQL', 'Prisma', 'Docker', 'n8n', 'Stripe'],
  },
];

export const PROJECTS = [
  {
    id: 'trivial',
    featured: true,
    title: 'Trivial',
    type: 'Real-Time Systems',
    year: '2026 – Present',
    icon: '⚡',
    desc: 'A self-hostable real-time quiz platform used by ~500 people in live classrooms, written as a cheaper replacement for Kahoot. One Node process, no database server, proven correct under load.',
    longDesc:
      'Teachers were paying per seat for software that fell over in a full classroom, so I wrote a replacement. Players join from their phones with a game PIN, no account and no email. One Node.js process serves the REST API, the WebSocket game server, and the React build, with first-class Arabic and RTL support because that is what the classrooms it was built for needed.',
    features: [
      'Built and operate it: **~500 people** have played it in live classrooms, and it runs on Fly.io today.',
      'One Node.js process serves a REST API, a **WebSocket** game server, and the React build. Live game state is held **in memory so the answer hot path never touches disk**, with SQLite (WAL) for anything that must survive a restart.',
      '**Load-tested past 1,000 concurrent players** with a swarm that independently recomputes every player’s score and diffs it against the server, proving **zero lost, duplicated, or misattributed answers** rather than merely that nothing crashed.',
      'Self-hostable by design: Node 22+, `npm install`, one dependency on the server. No database to provision.',
    ],
    schematic: ['phones', 'WebSocket hub', 'in-memory state', 'SQLite WAL', 'big screen'],
    tags: ['TypeScript', 'Node.js', 'WebSockets', 'SQLite', 'React', 'Fly.io'],
    github: 'https://github.com/ahmed-naeem99/trivial',
    live: 'https://trivial-lqm.fly.dev/',
    image: null,
  },
  {
    id: 'rideguide',
    featured: true,
    title: 'RideGuide',
    type: 'ML Data Engineering',
    year: '2026 – Present',
    icon: '🚍',
    desc: 'A GTFS-Realtime pipeline turning 41.1M+ transit prediction snapshots into 12.1M+ labeled training examples for ETA correction, across 8 GTHA agencies.',
    longDesc:
      'Transit apps tell you the bus is four minutes away and then it is nine. The correction model needs ground truth, and nobody publishes it, so the dataset had to be built: capture every prediction as it is made, watch what actually happens, and derive the label from the difference.',
    features: [
      'Built a **GTFS-Realtime ML data pipeline** turning **41.1M+ prediction snapshots** into **12.1M+ labeled stop-level training examples** across **8 GTHA agencies** (TTC, GO Transit, MiWay, YRT and others).',
      'Derived ground-truth arrival labels by inferring real arrivals from vehicle-position progression and GTFS `STOPPED_AT` / `IN_TRANSIT_TO` signals, engineering **prediction-time-safe features** so no label leaks backward into its own input.',
      'Deployed **24/7 capture infrastructure** on an Oracle Cloud VM ingesting protobuf feeds at 30-second intervals to Cloudflare R2, with feed-health monitoring and route reliability analytics (median/p95 delay, % late) across **467 routes**.',
      'Trained and validated an initial ETA-correction model on a single agency first, to prove the labeling methodology before spending compute on all eight.',
      'Selected as **1 of 5 team leads from a 300-person cohort**; pitched the project to funding review panels and helped secure **$250,000** in non-dilutive funding.',
    ],
    schematic: ['8 agency feeds', '30s capture', 'Cloudflare R2', 'label derivation', 'training set'],
    tags: ['Python', 'Pandas', 'GTFS-RT', 'Protocol Buffers', 'Oracle Cloud', 'Cloudflare R2'],
    github: null,
    live: null,
    image: null,
  },
  {
    id: 'patchforce',
    featured: true,
    title: 'PatchForce',
    type: 'Civic Platform / AI',
    year: '2026',
    icon: '🏗️',
    desc: 'An AI municipal-infrastructure platform built end to end, from resident reporting through repair workflow to municipal approval. It became a six-month, $60,000 paid pilot.',
    longDesc:
      'Potholes get reported five times by five people and fixed once, if the report reaches the right desk. PatchForce takes resident reports, groups the duplicates, analyzes the issue, and moves it through a repair and approval workflow that a municipality can actually sign off on.',
    features: [
      '**Secured a six-month, $60,000 paid pilot** by turning stakeholder demos into a funded real-world deployment.',
      'Built the platform end to end on React, TypeScript, Supabase, and PostgreSQL: resident reporting, AI issue analysis, duplicate detection, repair workflows, and municipal approval, with role-based access.',
      'Ran product discovery with the City of Brampton, City of Markham, York Region, City of Barrie, and the Town of St. Marys, turning operational feedback into roadmap priorities.',
    ],
    schematic: ['resident report', 'AI analysis', 'dedupe', 'repair workflow', 'city approval'],
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'LLM Workflows'],
    github: null,
    live: null,
    image: null,
  },
  {
    id: 'yusr',
    featured: true,
    title: 'Yusr Platform',
    type: 'SaaS / Self-Hosted',
    year: 'Jan 2024 – Present',
    icon: '🤝',
    desc: 'The platform behind the funeral financial-aid organization I co-founded: self-hosted CRM, an on-premise vision LLM for ID documents, and webhook-driven back-office automation.',
    longDesc:
      'Yusr helps Muslim families in Canada with funeral costs at the worst week of their lives. The software has to be quiet, correct, and private — which is why the identity documents are read by a model running on our own hardware rather than an API.',
    features: [
      'Self-hosted **containerized CRM** on a Hetzner VPS with Docker Compose and Coolify, deployment pipeline included.',
      'On-premise **FastAPI + Ollama (Qwen2-VL)** service that reads ID documents to auto-fill registration, keeping personal data off third-party APIs.',
      '**Next.js 15 + PostgreSQL/Prisma** with magic-link JWT auth, and **n8n** orchestrating Stripe billing events, transactional email, and cron jobs.',
    ],
    schematic: ['sign-up', 'on-prem OCR', 'Postgres', 'n8n webhooks', 'Stripe'],
    tags: ['Next.js 15', 'FastAPI', 'Ollama', 'Docker', 'n8n', 'PostgreSQL', 'Stripe'],
    github: null,
    live: 'https://yusr.ca',
    image: '/assets/pj-yusr.png',
  },
  {
    id: 'urbanforge',
    featured: true,
    title: 'UrbanForge',
    type: 'Spatial Data / LLM',
    year: '2026',
    icon: '🌆',
    desc: 'Built at the NVIDIA × Antler Hackathon: a simulation projecting how a proposed development reshapes its neighbourhood, from City of Toronto open data.',
    longDesc:
      'A development application is a PDF and an argument. UrbanForge turns it into a projection: what happens to traffic, to the local economy, to air and water, to the tree canopy, if this thing gets built.',
    features: [
      'Built **UrbanForge** at the **NVIDIA × Antler Hackathon** from City of Toronto open data.',
      'Modeled **traffic, economic, and environmental impact** (air and water pollution, tree-canopy loss) with spatial pipelines aligning parcel, zoning, and sensor records to a common geometry.',
      'Ran narrative impact analysis on **NVIDIA Nemotron** served from a **DGX Spark** via NemoClaw, turning model output into planner-readable assessments.',
    ],
    schematic: ['open data', 'geometry align', 'impact models', 'Nemotron', 'planner report'],
    tags: ['Python', 'NVIDIA Nemotron', 'DGX Spark', 'Geospatial', 'LLM'],
    github: 'https://github.com/Kingsolima/Nvidia-Hackathon',
    live: null,
    image: null,
  },
  {
    id: 'arg',
    featured: true,
    title: 'Augmented Reality Quest',
    type: 'Full-Stack / Events',
    year: 'Feb 2025',
    icon: '🎮',
    desc: 'An alternate-reality game platform bridging physical and digital puzzles, run live for 150+ concurrent players with JWT auth, AWS S3 media, and a REST backend.',
    longDesc:
      'A campus-wide puzzle hunt where the clues live in both worlds: QR codes on real walls, state and scoring on the web. Built to survive a crowd arriving all at once, because everyone starts at the same moment.',
    features: [
      'Served **150+ concurrent players** with real-time state sync during a live event.',
      'Secure **NextAuth JWT** authentication with session management, and **AWS S3** for media storage.',
      'REST API handling the game-state and task endpoints, with puzzle mechanics bridging physical and digital.',
    ],
    schematic: ['QR clue', 'auth', 'game state', 'S3 media', 'leaderboard'],
    tags: ['React', 'Node.js', 'Neon DB', 'NextAuth', 'AWS S3', 'REST API'],
    github: 'https://github.com/ahmed-naeem99/IAW25-ARG',
    live: null,
    image: null,
  },
  // Earlier work. Kept for the record, not shown on the grid.
  {
    id: 'stock',
    featured: false,
    title: 'AI Stock Strategist',
    type: 'Quantitative Finance',
    year: '2024',
    icon: '📈',
    desc: 'Python pipelines over market data producing structured buy/sell/hold signals, with yfinance ingestion and backtesting.',
    longDesc: 'An early project: ingest market data, process it with statistical models, output structured signals.',
    features: [
      'Quantitative analysis pipelines in **Python (Pandas, NumPy)** over historical and live market data.',
      '**yfinance** ingestion with backtesting workflows and algorithmic signal generation.',
    ],
    schematic: ['market data', 'pipeline', 'signals'],
    tags: ['Python', 'Pandas', 'NumPy', 'yfinance'],
    github: 'https://github.com/ahmed-naeem99/personal-ai-stock-analyst',
    live: null,
    image: '/assets/pj-stock.png',
  },
  {
    id: 'firms',
    featured: false,
    title: 'NASA FIRMS Fire Tracker',
    type: 'Geospatial Pipelines',
    year: '2024',
    icon: '🔥',
    desc: 'An ingestion pipeline over live NASA FIRMS satellite feeds with a geospatial proximity filter for wildfire threat zones.',
    longDesc: 'An early data-engineering project consuming live satellite fire detections and ranking threat proximity.',
    features: [
      'Automated **ingestion pipeline** over live NASA FIRMS satellite JSON feeds.',
      'Custom **geospatial proximity algorithm** in Python to filter noise and surface high-priority zones.',
    ],
    schematic: ['FIRMS feed', 'proximity filter', 'alerts'],
    tags: ['Python', 'NASA FIRMS API', 'Geospatial', 'Data Pipelines'],
    github: 'https://github.com/ahmed-naeem99/Out-of-this-World',
    live: null,
    image: '/assets/pj-nasa.png',
  },
];

export const SKILLS = [
  {
    icon: '💻',
    name: 'Languages',
    sub: 'What I write in',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'C', 'C++', 'C#'],
    note: 'TypeScript and Python daily; Java and C from coursework and systems work.',
  },
  {
    icon: '⚡',
    name: 'Backend & Web',
    sub: 'What I ship with',
    items: ['Node.js', 'Next.js 15', 'React', 'FastAPI', 'Flask', 'PostgreSQL', 'Prisma', 'WebSockets', 'REST APIs'],
    note: 'Production systems on all of these, including one I still operate.',
  },
  {
    icon: '🤖',
    name: 'AI & Data',
    sub: 'Models, and the data under them',
    items: ['OpenAI API (GPT-4o)', 'LLM agent workflows', 'RAG', 'Ollama / Qwen2-VL', 'Pandas', 'NumPy', 'Supervised dataset design', 'Feature engineering'],
    note: 'GPT-4o in production under human review; a quantized vision model served on-premise.',
  },
  {
    icon: '🛠️',
    name: 'Infrastructure',
    sub: 'Where it runs',
    items: ['Docker', 'Git / CI-CD', 'Linux', 'Oracle Cloud', 'Cloudflare R2', 'Fly.io', 'Coolify', 'n8n', 'Stripe API', 'GTFS-RT / Protobuf'],
    note: 'Self-hosted VPS, object storage, and 24/7 capture infrastructure I keep running.',
  },
];

export const CERTS = [
  {
    icon: '🔒',
    name: 'Microsoft Certified: Security, Compliance & Identity Fundamentals (SC-900)',
    issuer: 'Microsoft',
  },
  {
    icon: '📈',
    name: 'FinTech & Cybersecurity / AI-Driven Fintech Transformation',
    issuer: 'Ontario Tech SDF · 2025',
  },
];

export const TICKER = [
  'Payments & Stripe',
  'Real-Time Systems',
  'WebSockets',
  'ML Data Pipelines',
  'GTFS-Realtime',
  'Self-Hosting',
  'Docker',
  'Next.js 15',
  'FastAPI',
  'Local LLMs',
  'Agentic Workflows',
  'PostgreSQL',
  'TypeScript',
  'Python',
  'Node.js',
];
