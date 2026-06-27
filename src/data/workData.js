const workData = [
  {
    id: 9,
    title: "Stellar Scholar",
    subtitle: "Space & STREAM Education Platform",
    description:
      "Stelalliance's flagship space and STREAM education initiative — a game-based learning platform that brings rocketry, space sciences, AI, and robotics into K-12 classrooms as a compulsory academic subject, deployed through Astrobot Academy across government and private school networks.",
    category: "Ed-tech · Education",
    image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800&q=80",
    screenshotUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1200&q=80",
    techStack: ["React", "Node.js", "Game-Based Learning", "STREAM Curriculum", "B2G / B2B SaaS"],
    duration: "Ongoing",
    completionDate: "Ongoing",
    features: [
      "Game-based rocketry and space sciences curriculum",
      "STREAM-aligned educational framework for K-12 (ECE–Grade 8)",
      "Astrobot Academy delivery platform integration",
      "Teacher training and certification programs",
      "Ministry and school network partnership programs",
      "Research presented at the International Astronautical Congress",
      "B2G / B2B subscription model",
      "Compulsory subject deployment across partner campuses",
    ],
    challenge:
      "Traditional school curricula across Pakistan were failing to expose students to interdisciplinary STEM thinking — particularly in space sciences, robotics, and AI. The education system had no scalable, institutionally credible framework to embed these subjects into the school day as a compulsory academic subject rather than an extracurricular afterthought.",
    solution:
      "Stelalliance built Stellar Scholar as both a curriculum framework and a technology platform. Students engage with rocket construction and space sciences through game-based interactive modules rather than rote instruction. Astrobot Academy, the dedicated delivery arm, operationalizes the curriculum in real classrooms — handling teacher training, campus infrastructure, and day-to-day delivery management. A structured B2G/B2B subscription model enables deployment across government and private school networks with institutional affiliations at SUPARCO, IST, NASA Space Apps Challenge, and UNESCO.",
    outcome:
      "Stellar Scholar has engaged over 20,000 students across schools in Islamabad through a collaboration with the Ministry of Federal Education. Research from the initiative has been presented at the International Astronautical Congress. A national MOU with the Meezan School System — targeting 1,000+ campuses — is positioning Stellar Scholar as the standard for compulsory STREAM education in Pakistan.",
  },
  {
    id: 1,
    title: "HemoGo",
    subtitle: "AI-Powered Health Intelligence Platform",
    description:
      "A healthcare technology platform that enables users to upload medical reports, lab results, and health records — then uses AI and OCR to extract, structure, and transform complex health data into clear, actionable insights.",
    category: "Health-tech · AI",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    logoImage: "/projects/hemogo/logo.png",
    screenshotUrl: "/projects/hemogo/home.png",
    screenshots: [
      "/projects/hemogo/intro.png",
      "/projects/hemogo/home.png",
      "/projects/hemogo/details.png",
    ],
    techStack: ["React", "Python", "OCR", "OpenAI", "Node.js", "PostgreSQL"],
    duration: "Ongoing",
    completionDate: "Ongoing",
    features: [
      "AI-powered medical report analysis",
      "OCR-based extraction from PDFs and images",
      "Biomarker tracking and trend visualization",
      "Personalized health insights and explanations",
      "Historical health record management",
      "Interactive dashboards and analytics",
    ],
    challenge:
      "Patients receiving medical lab reports had no way to understand what their results actually meant. Reports contained dense clinical terminology, dozens of biomarkers with no context, and no longitudinal view of how values changed over time. Health literacy was low and physician consultations were often used just to explain results rather than act on them.",
    solution:
      "Stelalliance built HemoGo — a platform that ingests PDFs and images of medical reports, applies OCR to extract structured data, and uses AI to generate plain-language explanations of every biomarker. Users get a personalized health timeline, trend graphs showing values across visits, and alerts when readings fall outside reference ranges — giving them a complete, understandable picture of their medical history.",
    outcome:
      "HemoGo transforms how individuals engage with their health data — improving health literacy, enabling proactive decisions, and centralizing medical history in one accessible platform. The platform is actively in development with an early user cohort providing feedback.",
  },
  {
    id: 2,
    title: "Bullseye",
    subtitle: "Investor–Advisor Matching & Engagement Platform",
    description:
      "A digital marketplace that connects investors with qualified financial advisors through intelligent discovery, ratings, and a structured engagement platform covering communication, contracts, and transaction monitoring.",
    category: "Fin-tech · SaaS",
    image: "/projects/bullseye/splash.png",
    logoImage: "/projects/bullseye/splash.png",
    screenshotUrl: "/projects/bullseye/portfolio.png",
    screenshots: [
      "/projects/bullseye/landing.png",
      "/projects/bullseye/analytics.png",
      "/projects/bullseye/portfolio.png",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    duration: "Ongoing",
    completionDate: "Ongoing",
    features: [
      "Investor, Advisor, and Admin portals",
      "Advisor discovery and recommendation system",
      "Ratings and review management",
      "In-platform communication and engagement",
      "Offer and contract management",
      "Transaction and commission tracking",
      "Administrative monitoring and analytics",
    ],
    challenge:
      "Investors seeking financial advisory services had no reliable, transparent way to discover and evaluate advisors. The selection process was opaque, referral-driven, and lacked any standardized measure of advisor quality or performance. Advisors, in turn, had no scalable channel to reach qualified prospects and manage engagement beyond email chains.",
    solution:
      "Stelalliance built Bullseye as a multi-portal SaaS platform. Investors use a discovery engine to find advisors filtered by expertise, ratings, reviews, and past performance. Advisors manage their profiles, accept or decline engagement requests, and communicate through the platform. A dedicated Admin portal provides full oversight — monitoring transactions, commissions, and dispute resolution — creating a transparent, scalable marketplace for financial advisory services.",
    outcome:
      "Bullseye creates a structured, trustworthy marketplace that removes the opacity from advisor selection, reduces friction in the engagement process, and gives both investors and advisors a professional operating environment with full transactional accountability.",
  },
  {
    id: 3,
    title: "Resum8",
    subtitle: "AI-Powered Resume Intelligence & Recruitment Platform",
    description:
      "An AI-powered recruitment platform that helps job seekers build ATS-optimized resumes and enables recruiters to efficiently evaluate, rank, and shortlist candidates using NLP-powered compatibility scoring.",
    category: "HR-tech · AI",
    image: "/projects/resum8/hero.png",
    logoImage: "/projects/resum8/logo.png",
    screenshotUrl: "/projects/resum8/screen-dashboard.png",
    screenshots: [
      "/projects/resum8/screen-dashboard.png",
      "/projects/resum8/screen-parser.png",
      "/projects/resum8/screen-interviews.png",
      "/projects/resum8/screen-candidate.png",
      "/projects/resum8/screen-atsmatch.png",
    ],
    screenshotLayout: "grid",
    techStack: ["React", "Python", "NLP", "OpenAI", "FastAPI", "MongoDB"],
    duration: "Ongoing",
    completionDate: "Ongoing",
    features: [
      "AI-powered resume analysis and scoring",
      "ATS compatibility evaluation",
      "Job description matching",
      "AI-generated resume improvement suggestions",
      "Resume parsing and structured profile extraction",
      "Candidate ranking and shortlisting",
      "Recruiter dashboard and applicant management",
      "Resume template generation and export",
    ],
    challenge:
      "Job seekers were being rejected by Applicant Tracking Systems before a human ever reviewed their resume — often for avoidable formatting or keyword issues. Recruiters, meanwhile, were buried in unstructured resume volumes with no consistent way to score or compare candidates against a job description. Both sides of the hiring process were broken and inefficient.",
    solution:
      "Stelalliance built Resume8 to fix both sides simultaneously. For candidates, the platform parses their resume, scores it against ATS criteria, compares it to a specific job description, and generates targeted improvement suggestions. For recruiters, it provides a dashboard where candidates are automatically ranked and profiled by compatibility, reducing manual screening time dramatically.",
    outcome:
      "Resume8 reduces manual screening effort, improves candidate quality signals for recruiters, and increases job seekers' chances of passing ATS filters — making the hiring process faster, more transparent, and more equitable for both parties.",
  },
  {
    id: 4,
    title: "LiveKit Voice Agents",
    subtitle: "Real-Time AI Voice Agent Platform",
    description:
      "A real-time conversational AI platform enabling organizations to deploy intelligent voice assistants capable of natural, low-latency conversations — built on LiveKit with integrated STT, LLM, and TTS pipelines.",
    category: "AI · Conversational",
    image: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=800&q=80",
    screenshotUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80",
    techStack: ["LiveKit", "Python", "Whisper STT", "OpenAI", "ElevenLabs TTS", "FastAPI"],
    duration: "Ongoing",
    completionDate: "Ongoing",
    features: [
      "Real-time AI voice conversations",
      "Streaming Speech-to-Text (STT)",
      "Natural Text-to-Speech (TTS)",
      "LLM-powered conversational intelligence",
      "Function calling and tool execution",
      "Multi-turn conversation memory",
      "CRM and third-party API integrations",
      "Low-latency audio streaming",
      "Session management and conversation analytics",
    ],
    challenge:
      "Organizations running customer service, appointment booking, and lead qualification workflows at scale needed a voice-capable AI solution — but existing IVR systems were rigid, scripted, and incapable of understanding natural language. Building a truly conversational voice agent required integrating speech recognition, large language models, and speech synthesis into a single low-latency pipeline that felt human.",
    solution:
      "Stelalliance deployed LiveKit Voice Agents — a real-time platform connecting Whisper-based STT, an LLM reasoning layer with function-calling capability, and ElevenLabs TTS into a seamless audio pipeline. Agents handle multi-turn conversations, recall prior context, execute actions (booking appointments, querying CRMs, updating records), and escalate to human agents when needed. The architecture is built for sub-second response latency.",
    outcome:
      "The platform enables organizations to handle high volumes of voice-based interactions — customer support calls, scheduling, lead qualification — autonomously and consistently, without the rigidity of traditional IVR systems. Deployed across multiple use cases with configurable agent personalities and tool integrations.",
  },
  {
    id: 5,
    title: "AI Knowledge Assistant",
    subtitle: "Enterprise Knowledge Management & Retrieval Platform",
    description:
      "A Retrieval-Augmented Generation (RAG) platform that transforms internal documents, policies, and knowledge bases into an intelligent conversational assistant — enabling employees to ask natural language questions and get accurate, citation-backed answers.",
    category: "AI · Enterprise",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    screenshotUrl: "https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?w=1200&q=80",
    techStack: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI", "React"],
    duration: "Ongoing",
    completionDate: "Ongoing",
    features: [
      "AI-powered document search",
      "Retrieval-Augmented Generation (RAG)",
      "Multi-format document ingestion (PDF, DOCX, TXT)",
      "Semantic search and vector indexing",
      "Citation-based responses",
      "Role-based access control",
      "Knowledge base management",
      "Enterprise analytics and monitoring",
    ],
    challenge:
      "Enterprise teams spent enormous amounts of time searching through internal documentation — policy manuals, SOPs, technical guides, onboarding documents — that were scattered across SharePoint, Google Drive, email, and wikis. The information existed, but accessing it was slow, inconsistent, and dependent on knowing who to ask.",
    solution:
      "Stelalliance built the AI Knowledge Assistant using a RAG architecture. Internal documents are ingested, chunked, and indexed into a vector database. When employees ask natural language questions, the system retrieves the most relevant document sections and passes them to an LLM to generate accurate, context-aware answers — with citations linking directly to the source document. Role-based access controls ensure users only see information they're permitted to access.",
    outcome:
      "Organizations using the AI Knowledge Assistant report dramatically reduced time spent searching for information, faster onboarding of new employees, and fewer escalations to senior staff for routine policy or process questions. The platform becomes more valuable as the knowledge base grows.",
  },
  {
    id: 6,
    title: "AI Workflow Automation",
    subtitle: "Intelligent Business Process Automation Platform",
    description:
      "An enterprise solution that automates repetitive business processes using AI, LLMs, and workflow orchestration — connecting business applications, APIs, and internal systems to reduce manual effort and improve operational efficiency.",
    category: "AI · Automation",
    image: "/projects/ai-workflow/card.png",
    screenshotUrl: "/projects/ai-workflow/card.png",
    techStack: ["Python", "n8n", "LangChain", "OpenAI", "FastAPI", "PostgreSQL"],
    duration: "Ongoing",
    completionDate: "Ongoing",
    features: [
      "AI-driven workflow automation",
      "Multi-step process orchestration",
      "Document processing and extraction",
      "API and third-party integrations",
      "Approval workflows",
      "Notification and task automation",
      "Workflow analytics",
      "Human-in-the-loop review system",
    ],
    challenge:
      "Business teams across industries were spending significant portions of their working day on repetitive, rule-based tasks — document review, data entry, report generation, approval routing, and notification management. These tasks were too nuanced for simple scripting but too time-consuming to leave entirely manual.",
    solution:
      "Stelalliance designed and deployed AI Workflow Automation — an orchestration platform that maps business processes into automated, multi-step workflows. AI handles document classification and extraction, LLMs draft communications and summaries, integration connectors push data between business systems, and human-in-the-loop checkpoints ensure oversight at critical decision points. The platform is configurable without deep technical expertise.",
    outcome:
      "Organizations report significant reductions in manual processing time across targeted workflows. Teams redirect reclaimed hours toward higher-judgment work, approval cycles compress from days to hours, and error rates in data handling drop substantially through automated validation.",
  },
  {
    id: 7,
    title: "AI Customer Support Assistant",
    subtitle: "Intelligent Omnichannel Customer Service Platform",
    description:
      "An AI-powered customer service platform that delivers automated, human-like support across web, mobile, and messaging channels — with context-aware conversations, ticket escalation, and CRM integration.",
    category: "AI · Customer Service",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    screenshotUrl: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=1200&q=80",
    techStack: ["React", "Python", "OpenAI", "FastAPI", "Twilio", "Zendesk API"],
    duration: "Ongoing",
    completionDate: "Ongoing",
    features: [
      "AI-powered customer support",
      "Omnichannel communication (web, mobile, messaging)",
      "Context-aware multi-turn conversations",
      "Ticket creation and escalation",
      "CRM integration",
      "FAQ automation",
      "Conversation history",
      "Performance analytics",
      "Multi-language support",
    ],
    challenge:
      "Customer support teams were overwhelmed by high inquiry volumes, repetitive questions, and slow response times — particularly outside business hours. Hiring more agents was expensive and didn't scale. Existing chatbots were rigid, FAQ-only systems that frustrated users with irrelevant responses and no ability to handle anything beyond the most common questions.",
    solution:
      "Stelalliance built an AI Customer Support Assistant powered by LLMs that understands intent, maintains conversation context across turns, and delivers accurate, helpful responses to a wide range of customer questions. When queries exceed the AI's confidence or require human judgment, the system automatically creates a support ticket and escalates with full conversation context. Integration with CRM systems means the AI has access to customer history and order data.",
    outcome:
      "Businesses deploying the platform see faster average response times, reduced agent workload on routine queries, and consistent customer experiences across all channels and time zones. Agents focus on complex, high-value interactions while the AI handles the volume.",
  },
  {
    id: 8,
    title: "AI Document Processing",
    subtitle: "Intelligent Document Analysis & Automation Platform",
    description:
      "An AI-powered platform that automates the extraction, classification, validation, and analysis of structured and unstructured documents — transforming invoices, contracts, reports, and forms into structured, actionable data.",
    category: "AI · Document Intelligence",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    screenshotUrl: "https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=80",
    techStack: ["Python", "OCR", "OpenAI", "FastAPI", "PostgreSQL", "React"],
    duration: "Ongoing",
    completionDate: "Ongoing",
    features: [
      "OCR-powered document extraction",
      "AI-based document classification",
      "Data validation and verification",
      "Structured data generation",
      "PDF and image processing",
      "Workflow automation",
      "Searchable document repository",
      "Reporting and analytics",
    ],
    challenge:
      "Organizations processing high volumes of business documents — invoices, contracts, insurance forms, compliance reports — were doing so largely by hand. Staff manually extracted key fields, entered data into systems, and validated outputs. The process was slow, error-prone, and created significant operational bottlenecks in finance, legal, and compliance teams.",
    solution:
      "Stelalliance built the AI Document Processing Platform to automate the full document lifecycle. OCR extracts text from PDFs and scanned images. AI classifies the document type, extracts the relevant fields, validates extracted data against business rules, and outputs clean structured records. Processed documents are indexed in a searchable repository. Integration with downstream systems means extracted data flows directly into the right destination without manual intervention.",
    outcome:
      "Processing times for document-heavy workflows drop from hours to minutes. Error rates in data extraction decrease significantly through automated validation, and teams previously dedicated to manual document handling are redeployed to higher-value analytical work.",
  },
  {
    id: 10,
    title: "DealerPro",
    subtitle: "Automotive Dealership SaaS & CRM Platform",
    description:
      "A purpose-built SaaS platform for automotive dealerships that streamlines customer interaction, sales pipeline management, inventory tracking, and dealership operations — transforming fragmented manual workflows into a unified, intelligent management system.",
    category: "Auto-tech · SaaS",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    screenshotUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
    duration: "Completed",
    completionDate: "2024",
    features: [
      "Customer interaction and CRM management",
      "Sales pipeline and lead tracking",
      "Vehicle inventory management",
      "Deal and contract management",
      "Automated follow-up and notification workflows",
      "Multi-branch dealership support",
      "Analytics and performance dashboards",
      "Role-based staff access control",
    ],
    challenge:
      "Automotive dealerships were managing customer relationships, inventory, and sales pipelines across disconnected spreadsheets, email chains, and manual processes. There was no single system that gave dealership managers visibility into their pipeline, follow-up status, and inventory in real time — leading to missed leads, inconsistent customer experiences, and operational blind spots.",
    solution:
      "Stelalliance built DealerPro as a unified SaaS platform tailored to the automotive dealership workflow. The CRM module captures and tracks every customer interaction from first inquiry to closed deal. Sales staff manage their pipeline through a structured deal flow interface, while managers get real-time visibility into team performance, inventory status, and revenue analytics. Automated follow-up workflows ensure no lead goes cold, and multi-branch support allows dealer groups to manage operations centrally.",
    outcome:
      "DealerPro transformed the customer interaction processes for its dealership clients — reducing lead drop-off, standardizing the sales workflow, and providing management with the operational visibility needed to make informed decisions. The platform has been recognized by its co-founders as a core driver of their customer engagement transformation.",
  },
];

export default workData;
