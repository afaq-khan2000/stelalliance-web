const servicesData = [
  {
    slug: "software-saas-ai",
    title: "Software, SaaS & AI",
    tagline: "Build. Scale. Ship.",
    description:
      "Stelalliance is at its core a software engineering company. We design and build custom software, scalable SaaS products, and AI-driven solutions for organizations looking to modernize how they operate, serve customers, and make decisions. Our engineering foundation underpins everything else the group builds — including its managed security and education platforms.",
    whyItMatters:
      "Software built without a long-term engineering perspective becomes a liability quickly — expensive to maintain, slow to extend, and difficult to secure. We engage as an embedded technical partner from initial product strategy and MVP build through to post-launch scaling, not as a one-off vendor who hands over code and disappears.",
    what: [
      "Custom software development (web, mobile, desktop)",
      "SaaS product engineering — from MVP to multi-tenant scale",
      "AI agents, LLM integrations & machine learning solutions",
      "Cloud architecture design & DevOps implementation",
      "Data engineering, pipelines & analytics platforms",
      "UI/UX design & product strategy",
    ],
    whoFor: [
      "Startups building their first product and needing a technical partner, not just a vendor",
      "Scale-ups with a working product that needs a robust engineering foundation to grow on",
      "Enterprises modernizing legacy systems or launching new digital products",
      "Organizations that need AI embedded in their product — not added as an afterthought",
    ],
    scenario: {
      label: "How We Engage",
      text: "We typically begin with a discovery and scoping session to understand your product goals, user needs, existing technical context, and constraints. From there we build a roadmap, agree on delivery milestones, and embed as your technical team — designing, building, testing, and iterating. We don't hand over code and walk away; we stay through launch and the scaling phase that follows.",
    },
    highlights: ["Custom Software", "SaaS Platforms", "AI Agents", "Cloud & DevOps", "Data Engineering", "UI/UX Design"],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity & Managed Security",
    tagline: "Simulate the Threat. Strengthen the Defense.",
    description:
      "Stelalliance is a Managed Security Service Provider (MSSP) delivering practical, end-to-end cybersecurity for organizations across Pakistan, Kuwait, and the wider GCC. We cover the full modern security lifecycle — from offensive operations and detection engineering through to cloud security, identity, data protection, and governance.",
    whyItMatters:
      "Most organizations discover their security gaps during an actual incident. We invert that timeline. By running realistic attack scenarios and building robust detection and response programs, your team understands exactly where the exposure is — and closes it before an attacker finds it. Security built into the development lifecycle from the first line of code is always cheaper than security patched in after an incident.",
    what: [
      "Offensive Security — red teaming, adversary simulation, penetration testing",
      "Defensive Security — SOC design, threat hunting, incident response",
      "Cloud & Application Security — posture management, container hardening, API testing",
      "Identity & Access Management — zero trust, AD/Entra ID, PAM",
      "Data Security & Privacy — GDPR/HIPAA compliance, DLP, encryption",
      "Governance, Risk & Compliance — ISO 27001, SOC 2, risk assessments",
      "AI & Emerging Tech Security — LLM assessments, adversarial ML testing",
      "OT & Critical Infrastructure — ICS/SCADA, IEC 62443, NERC CIP",
    ],
    whoFor: [
      "Organizations in regulated sectors — financial services, healthcare, critical infrastructure",
      "Companies operating in Pakistan, Kuwait, and the GCC that need a local MSSP partner",
      "Engineering teams that want security embedded in their development lifecycle",
      "Leadership teams preparing for regulatory audits or board-level security reviews",
    ],
    scenario: {
      label: "Our Approach",
      text: "Every engagement begins with scoping — jointly defined with your team to align objectives, constraints, timelines, and rules. Execution follows real operator tradecraft, mapped to MITRE ATT&CK, OWASP, or the relevant framework for your environment. Reporting is structured for two audiences: executive decision-makers who need risk context, and technical teams who need evidence, attack paths, and actionable remediation steps they can act on immediately.",
    },
    highlights: ["Red Teaming", "Penetration Testing", "SOC Design", "Cloud Security", "ISO 27001", "OT Security"],
    ctaLink: "/security",
    ctaLabel: "Explore Security Services",
  },
  {
    slug: "stellar-scholar",
    title: "Stellar Scholar",
    tagline: "Igniting the next generation.",
    description:
      "Stellar Scholar is Stelalliance's space and STREAM education initiative, igniting children's interest in rocket and space sciences through game-based learning, curriculum standards, and a STREAM-aligned educational philosophy. Students explore rocket construction and experiment with components, learning the fundamentals of rocketry through interactive gameplay rather than rote instruction.",
    whyItMatters:
      "The next generation of scientists, engineers, and technologists will come from the classrooms of today. Traditional curricula don't expose students to the interdisciplinary thinking that defines modern STEM careers. Stellar Scholar changes that — embedding space sciences, AI, and robotics into the school day as a compulsory academic subject, not an extracurricular add-on, with affiliations at the highest institutional levels.",
    what: [
      "Game-based rocketry and space sciences curriculum",
      "STREAM-aligned educational framework for K-12",
      "Ministry and school network partnership programs",
      "Research presented at the International Astronautical Congress",
      "B2G / B2B subscription model for government and private schools",
      "Deployment through Astrobot Academy in partner campuses",
    ],
    whoFor: [
      "Government school networks seeking a STREAM curriculum with institutional credibility",
      "Private school groups looking to differentiate with a space and robotics program",
      "Education ministries exploring technology-integrated curriculum reform",
      "Organizations aligned with UNESCO, NASA, or SUPARCO educational goals",
    ],
    scenario: {
      label: "Milestone Partnership",
      text: "A collaboration with the Ministry of Federal Education has engaged more than 20,000 students across schools in Islamabad with structured space and STREAM learning. Stellar Scholar's work has been published in research presented at the International Astronautical Congress — the world's leading annual gathering of space agencies, industry, and researchers.",
    },
    highlights: ["Space Sciences", "STREAM Curriculum", "Game-Based Learning", "Ministry Partnerships", "IAC Research", "20k+ Students"],
  },
  {
    slug: "astrobot-academy",
    title: "Astrobot Academy",
    tagline: "STREAM. In every classroom.",
    description:
      "Astrobot Academy is Stelalliance's flagship STREAM delivery platform — the operational arm that brings Stellar Scholar's curriculum into real classrooms. Where Stellar Scholar sets the academic framework, Astrobot Academy executes it: deploying structured Robotics, AI, and Space Sciences modules, training and certifying teachers, and managing day-to-day delivery infrastructure across partner campuses.",
    whyItMatters:
      "A curriculum is only as good as its delivery. Astrobot Academy exists to close the gap between an educational framework and measurable student outcomes in real school environments — handling teacher training, classroom infrastructure, partner campus management, and the institutional relationships that make large-scale deployment possible.",
    what: [
      "Structured Robotics Engineering, AI, and Space Sciences modules",
      "Compulsory academic subject delivery (ECE through Grade 8)",
      "Teacher training, orientation & certification programs",
      "Day-to-day campus delivery infrastructure management",
      "Partner school network contracting and onboarding",
      "Integration with Stellar Scholar curriculum standards",
    ],
    whoFor: [
      "School networks seeking a turnkey STREAM delivery partner with institutional credibility",
      "Campuses affiliated with or seeking affiliation with SUPARCO, IST, NASA, or UNESCO",
      "Private school groups implementing a compulsory space and robotics subject",
      "Education partners already in discussion with Stellar Scholar",
    ],
    scenario: {
      label: "Notable Partnership",
      text: "Named as the implementation partner under the Stellar Scholar–Meezan MOU, Astrobot Academy is deploying a compulsory Department of Space Sciences, Robotics & AI from ECE through Grade 8 across a network targeting over 1,000 campuses nationwide — in affiliation with SUPARCO, the Institute of Space Technology, the NASA Space Apps Challenge, and UNESCO.",
    },
    highlights: ["Robotics & AI Modules", "Teacher Certification", "1,000+ Campuses Target", "SUPARCO Affiliation", "NASA Space Apps", "UNESCO"],
  },
];

export default servicesData;
