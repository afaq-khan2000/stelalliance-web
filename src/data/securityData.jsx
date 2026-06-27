import React from "react";
import {
  BugReport,
  CloudDone,
  Code,
  DeviceHub,
  Gavel,
  HealthAndSafety,
  Lock,
  Policy,
  Psychology,
  Security,
  Shield,
} from "@mui/icons-material";

const securityServices = [
  {
    slug: "offensive-security",
    icon: <BugReport sx={{ fontSize: "36px", color: "#FFBD1F" }} />,
    title: "Offensive Security",
    tagline: "Attack before attackers do.",
    description:
      "Red team operations, penetration testing, and adversary simulation mapped to MITRE ATT&CK and OWASP — across cloud, applications, and identity.",
    whyItMatters:
      "Most organizations find their security gaps during an actual incident. Offensive security inverts that timeline — uncovering exploitable paths before attackers do, with specific, evidence-backed findings your team can act on immediately.",
    what: [
      "Red team operations & adversary simulation",
      "External & internal penetration testing",
      "Web & API application security testing",
      "Phishing & social engineering simulations",
      "Purple team exercises",
      "Cloud & identity attack path mapping",
    ],
    scenario: {
      label: "Representative Engagement",
      text: "A financial services firm failing an internal audit hired us for a full red team operation. We gained access through a misconfigured OAuth app, escalated via an unmonitored service account, and reached a production data store — without triggering a single alert. Three detection gaps and two privilege escalation paths were identified and remediated within a single sprint.",
    },
    whoFor: [
      "Organizations that have invested in security tooling but haven't validated it",
      "Teams preparing for regulatory assessments or board-level reviews",
      "Companies in high-consequence sectors where a breach is catastrophic",
      "SecOps teams that want to close gaps before an attacker finds them",
    ],
    frameworks: ["MITRE ATT&CK", "OWASP", "PTES", "OSSTMM"],
    engagementNote:
      "Scoped jointly, executed with real operator tradecraft, closed with a debrief your engineering and leadership teams can act on immediately.",
  },
  {
    slug: "defensive-security",
    icon: <Shield sx={{ fontSize: "36px", color: "#FFBD1F" }} />,
    title: "Defensive Security",
    tagline: "Detection that holds under pressure.",
    description:
      "SOC design, detection engineering, and incident response programs built against real adversary TTPs — not compliance checklists.",
    whyItMatters:
      "Detection programs that look good on paper often collapse under a real incident. We assess defensive maturity against actual attacker techniques and build programs that hold when it counts.",
    what: [
      "SOC design & maturity review",
      "SIEM rule tuning and detection engineering",
      "Threat hunting program design & execution",
      "Incident response planning & tabletop exercises",
      "Security architecture review",
      "Alert triage workflow optimization",
    ],
    scenario: {
      label: "Representative Engagement",
      text: "A SaaS platform asked us to assess their detection coverage. Mapping SIEM rules against MITRE ATT&CK revealed 60% of high-severity techniques had zero coverage. We rebuilt their detection logic, ran two tabletop exercises, and reduced mean time to detect from 11 days to under 4 hours.",
    },
    whoFor: [
      "Organizations building or maturing an internal SOC",
      "Teams struggling with alert fatigue and unclear response workflows",
      "Companies that have never stress-tested their incident response plan",
      "Leadership that needs confidence their security program is effective, not just documented",
    ],
    frameworks: ["NIST CSF", "ISO 27001", "MITRE D3FEND", "SOC 2"],
    engagementNote:
      "We measure defensive maturity against real adversary TTPs — not checkbox compliance.",
  },
  {
    slug: "cloud-app-security",
    icon: <CloudDone sx={{ fontSize: "36px", color: "#FFBD1F" }} />,
    title: "Cloud & App Security",
    tagline: "Cloud-native hardening, runtime to architecture.",
    description:
      "Full-stack cloud security across AWS, Azure, and GCP — from IaC templates and CI/CD pipelines to runtime containers and API endpoints.",
    whyItMatters:
      "Misconfigurations accumulate silently in cloud environments. An overpermissioned IAM role, a public S3 bucket, a container running as root — individually minor, collectively exploitable. We assess your complete cloud attack surface.",
    what: [
      "Cloud security posture management (CSPM)",
      "Container & Kubernetes hardening",
      "Serverless & microservices security review",
      "IaC security scanning (Terraform, CloudFormation)",
      "Web application & API penetration testing",
      "Cloud architecture risk assessment",
    ],
    scenario: {
      label: "Representative Engagement",
      text: "A startup migrating to microservices on AWS asked us to review before go-live. We found 14 critical misconfigurations — including a public metadata endpoint, an unauthenticated internal API, and Kubernetes pods with cluster-admin privileges. All critical issues were resolved in two weeks.",
    },
    whoFor: [
      "Engineering teams moving to cloud-native or containerized workloads",
      "Product companies handling customer data in cloud environments",
      "Organizations subject to cloud security compliance requirements",
      "Teams that want security integrated into their development lifecycle",
    ],
    frameworks: ["CSA CCM", "OWASP", "CIS Benchmarks", "AWS Well-Architected"],
    engagementNote:
      "Findings are mapped to your cloud provider's native controls with actionable remediation steps — not just a list of CVEs.",
  },
  {
    slug: "identity-access",
    icon: <Lock sx={{ fontSize: "36px", color: "#FFBD1F" }} />,
    title: "Identity & Access",
    tagline: "Zero trust from the ground up.",
    description:
      "Identity attack path mapping, zero trust architecture, and privilege access management aligned with NIST SP 800-63. Identity is the new perimeter.",
    whyItMatters:
      "Over 80% of breaches involve compromised credentials. We map every identity-based attack path in your environment, validate what your monitoring catches, and close the gaps systematically.",
    what: [
      "Active Directory & Entra ID attack path assessment",
      "Privileged access management (PAM) design & review",
      "Zero trust architecture design & roadmap",
      "OAuth / OIDC & SSO configuration review",
      "MFA posture assessment and bypass testing",
      "Service account & non-human identity audit",
    ],
    scenario: {
      label: "Representative Engagement",
      text: "A healthcare organization asked us to assess their Active Directory after a third-party audit flagged identity risks. Within 48 hours we mapped 7 privilege escalation paths — three reaching domain admin from a standard user account with no MFA bypass required. A prioritized remediation roadmap was executed over six weeks.",
    },
    whoFor: [
      "Organizations operating hybrid or cloud identity environments",
      "Teams implementing zero trust but unsure where to start",
      "Companies that have experienced a credentials-based incident",
      "Regulated businesses where identity governance is a compliance requirement",
    ],
    frameworks: ["NIST SP 800-63", "Zero Trust (NIST SP 800-207)", "CIS Controls"],
    engagementNote:
      "We run real identity-based attacks in scoped environments so your team sees exactly how credentials escalate to domain compromise — and how to stop it.",
  },
  {
    slug: "data-security-privacy",
    icon: <Policy sx={{ fontSize: "36px", color: "#FFBD1F" }} />,
    title: "Data Security & Privacy",
    tagline: "Protect data. Satisfy regulators.",
    description:
      "Data protection strategies compliant with GDPR and HIPAA — from sensitive data discovery and classification to encryption architecture and DLP implementation.",
    whyItMatters:
      "Compliance alone doesn't protect data. We help you understand where sensitive data lives, how it flows, where it's exposed, and how to build controls that satisfy both regulators and real-world threat scenarios.",
    what: [
      "Sensitive data discovery, mapping & classification",
      "GDPR gap assessment & remediation roadmap",
      "HIPAA security rule compliance review",
      "Data loss prevention (DLP) strategy & configuration",
      "Encryption architecture review",
      "Privacy-by-design consulting for product teams",
    ],
    scenario: {
      label: "Representative Engagement",
      text: "A digital health startup preparing for Series B hired us six weeks before their data room opened. A HIPAA assessment found patient data stored unencrypted in a shared S3 bucket, PHI in application logs, and no data retention policy. We remediated everything and provided investor-ready documentation. Due diligence closed without data security findings.",
    },
    whoFor: [
      "Product companies handling personal, health, or financial data",
      "Organizations subject to GDPR, HIPAA, or sector-specific regulations",
      "Teams preparing for fundraising, M&A due diligence, or regulatory audit",
      "Engineering teams that want privacy embedded in their product",
    ],
    frameworks: ["GDPR", "HIPAA", "NIST SP 800-188", "ISO 27701"],
    engagementNote:
      "We work alongside your legal and engineering teams to embed privacy controls into products — not bolt them on after the fact.",
  },
  {
    slug: "devops-devsecops",
    icon: <Code sx={{ fontSize: "36px", color: "#FFBD1F" }} />,
    title: "DevOps & DevSecOps",
    tagline: "Security baked into every pipeline.",
    description:
      "Security integrated throughout CI/CD pipelines — from SAST/DAST toolchain to supply chain protection and secrets management — without slowing your team down.",
    whyItMatters:
      "Security added at the end of the development lifecycle is expensive and incomplete. We shift security left — catching issues at design and code stage rather than in post-release penetration tests.",
    what: [
      "CI/CD pipeline security assessment & hardening",
      "SAST / DAST / SCA toolchain integration",
      "Container image and registry security scanning",
      "Secrets detection, management & rotation",
      "Software supply chain security (SBOM review)",
      "Developer security training for your stack",
    ],
    scenario: {
      label: "Representative Engagement",
      text: "A 40-developer fintech team had no security gates in their GitHub Actions pipelines. We found hardcoded AWS credentials in 6 repos and critical CVEs in 3 containers deployed to production. We implemented a full security pipeline in two weeks — secret scanning on every PR, image scanning in CI, automated dependency alerts. Zero new critical vulnerabilities shipped in the following quarter.",
    },
    whoFor: [
      "Engineering teams shipping frequently who want security integrated, not blocking",
      "Organizations that have experienced supply chain or secrets exposure incidents",
      "Dev teams preparing for SOC 2 or ISO 27001 certification",
      "CTOs who want security without sacrificing velocity",
    ],
    frameworks: ["OWASP SAMM", "SLSA", "NIST SSDF", "CIS Software Supply Chain"],
    engagementNote:
      "We embed security engineers alongside your dev team — as accelerators who ship secure code faster, not gatekeepers who slow it down.",
  },
  {
    slug: "ai-emerging-tech",
    icon: <Psychology sx={{ fontSize: "36px", color: "#FFBD1F" }} />,
    title: "AI & Emerging Tech",
    tagline: "Secure the frontier before attackers exploit it.",
    description:
      "Security assessments for AI systems, LLM deployments, and agentic architectures — applying OWASP AI Top 10 and NIST AI RMF to real production environments.",
    whyItMatters:
      "AI systems introduce attack surfaces traditional tools don't cover. Prompt injection, model inversion, and training data poisoning are real, exploited techniques — not academic thought experiments. We assess these systems with the same rigor as any other production environment.",
    what: [
      "LLM security assessment (prompt injection, jailbreaks, data leakage)",
      "ML model adversarial robustness testing",
      "AI supply chain risk review",
      "Agentic AI architecture security review",
      "Blockchain & smart contract audit",
      "RAG pipeline and vector database assessment",
    ],
    scenario: {
      label: "Representative Engagement",
      text: "A legal tech company deploying a customer-facing LLM asked us to assess it before launch. We identified three prompt injection vectors that extracted system prompts, two data leakage paths through retrieval augmentation, and one output that violated compliance policies. All critical issues were resolved before launch.",
    },
    whoFor: [
      "Product teams shipping LLM-powered applications to customers",
      "Organizations building agentic systems with tool access or autonomous decision-making",
      "ML teams that need their models assessed for adversarial robustness",
      "Compliance teams that need AI risk documentation for regulators",
    ],
    frameworks: ["OWASP LLM Top 10", "NIST AI RMF", "MITRE ATLAS"],
    engagementNote:
      "As AI becomes an attack surface in its own right, we help teams ship AI products hardened against the adversarial techniques we test with daily.",
  },
  {
    slug: "ot-critical-infrastructure",
    icon: <DeviceHub sx={{ fontSize: "36px", color: "#FFBD1F" }} />,
    title: "OT & Critical Infrastructure",
    tagline: "Industrial security — where downtime is not an option.",
    description:
      "OT and ICS security assessments aligned with IEC 62443 and NIST SP 800-82, purpose-built for environments where a security incident has physical consequences.",
    whyItMatters:
      "OT environments were never designed with cybersecurity in mind. As IT and OT networks converge, attackers are crossing from corporate networks into industrial systems — where consequences go beyond data loss to production shutdown and safety incidents.",
    what: [
      "OT / ICS network architecture and segmentation review",
      "SCADA & PLC security assessment (passive, non-disruptive)",
      "IT/OT convergence risk assessment",
      "OT threat modeling and attack path analysis",
      "Industrial asset inventory & vulnerability strategy",
      "Compliance readiness (IEC 62443, NERC CIP)",
    ],
    scenario: {
      label: "Representative Engagement",
      text: "A manufacturer with 12 production sites engaged us after a competitor's ransomware incident caused a two-week shutdown. A passive network assessment found direct connectivity between corporate IT and production PLCs, three legacy HMIs accessible via default credentials, and zero OT monitoring. The remediation program segmented environments within six weeks.",
    },
    whoFor: [
      "Manufacturers, utilities, and energy companies with OT environments",
      "Organizations subject to NERC CIP, IEC 62443, or national critical infrastructure regulations",
      "Companies that recently ran an IT/OT convergence project without a security review",
      "CISOs who need OT expertise their internal team doesn't have",
    ],
    frameworks: ["IEC 62443", "NIST SP 800-82", "NERC CIP", "MITRE ATT&CK for ICS"],
    engagementNote:
      "We conduct passive, non-disruptive assessments in live OT environments — preserving uptime while uncovering the exposures that matter most.",
  },
  {
    slug: "software-development",
    icon: <Security sx={{ fontSize: "36px", color: "#FFBD1F" }} />,
    title: "Secure Software Development",
    tagline: "Hardened from the first line of code.",
    description:
      "Security-first software development with threat modeling, secure code review, and pre-launch penetration testing built into the SDLC from day one.",
    whyItMatters:
      "The cost of fixing a vulnerability in production is exponentially higher than catching it at design or code review. We build software where security is a first-class requirement — not patched in after audit findings.",
    what: [
      "Secure SDLC design, policy & implementation",
      "Threat modeling during architecture and design phases",
      "Security-focused code review (manual & automated)",
      "Security architecture design for new products",
      "Third-party library & dependency vetting",
      "Pre-launch security assessment & penetration testing",
    ],
    scenario: {
      label: "Representative Engagement",
      text: "A fintech startup building a payment API hired us to build their backend with security as a core requirement. We ran threat modeling before the first line of code, implemented mTLS for all service-to-service communication, and integrated automated scanning into their CI pipeline. The product passed a third-party penetration test on first attempt — zero critical or high findings.",
    },
    whoFor: [
      "Startups building products that handle sensitive data or financial transactions",
      "Organizations that have inherited legacy codebases with unknown security history",
      "Teams preparing software for regulated environments",
      "Engineering leaders who want security embedded in their culture",
    ],
    frameworks: ["OWASP SAMM", "NIST SSDF", "ISO 27034", "BSIMM"],
    engagementNote:
      "Our engineers build software that passes penetration tests — because they think like attackers from day one.",
  },
  {
    slug: "agentic-security-ops",
    icon: <HealthAndSafety sx={{ fontSize: "36px", color: "#FFBD1F" }} />,
    title: "Agentic Security Ops",
    tagline: "LLM-powered security — always on.",
    description:
      "Autonomous security workflows powered by LLMs — VAPT automation, compliance monitoring, and alert triage that runs continuously so your team handles decisions, not busywork.",
    whyItMatters:
      "Security teams are overwhelmed. Alert volumes exceed analyst capacity, compliance evidence is collected manually, and vulnerability backlogs grow faster than they're cleared. Agentic operations absorb the operational load — so your team focuses on judgment, not repetition.",
    what: [
      "Automated VAPT pipeline design",
      "LLM-driven alert triage & priority scoring",
      "Compliance evidence collection and reporting automation",
      "Security workflow orchestration (n8n, LangChain)",
      "Agentic SOC assistant design and deployment",
      "Human-in-the-loop approval workflows",
    ],
    scenario: {
      label: "Representative Engagement",
      text: "A two-person security team was spending 60% of their time collecting SOC 2 compliance evidence. We deployed an agentic workflow that automatically collected, categorized, and formatted evidence from their cloud environment, ticketing system, and CI/CD pipelines weekly. Compliance workload dropped 70% — freeing the team for threat hunting and architecture review.",
    },
    whoFor: [
      "Small security teams with large operational workloads",
      "Organizations going through SOC 2 or ISO 27001 for the first time",
      "Companies running continuous vulnerability management that need automation",
      "Engineering-led security teams who want to push automation to its limits",
    ],
    frameworks: ["NIST AI RMF", "OWASP LLM Top 10", "MITRE ATT&CK"],
    engagementNote:
      "We design agentic systems that augment your team's capacity — not replace their judgment — with human-in-the-loop controls throughout.",
  },
  {
    slug: "governance-risk",
    icon: <Gavel sx={{ fontSize: "36px", color: "#FFBD1F" }} />,
    title: "Governance & Risk",
    tagline: "Compliance that means something.",
    description:
      "ISO 27001, SOC 2, and GDPR governance frameworks that satisfy auditors and give leadership real, measurable confidence — not documentation that passes review but fails incidents.",
    whyItMatters:
      "Governance built purely to satisfy auditors creates a false sense of security. Real governance connects controls to business risk and survives actual incidents — not just scheduled audits.",
    what: [
      "ISO 27001 gap assessment, readiness & certification support",
      "SOC 2 Type I & II scoping, preparation & evidence management",
      "Risk assessment, treatment planning & risk register design",
      "Security policy, procedure & standard development",
      "Board-level and executive security reporting",
      "Third-party and vendor risk management",
    ],
    scenario: {
      label: "Representative Engagement",
      text: "A technology company needed ISO 27001 certification to close an enterprise contract — in 14 weeks. We ran a gap assessment, identified 43 control gaps, drafted all required policies, implemented an ISMS, trained their internal audit team, and supported the stage 1 and 2 certification audit. Certificate issued on schedule. Contract closed.",
    },
    whoFor: [
      "Organizations pursuing ISO 27001, SOC 2, or other certifications for the first time",
      "Companies whose governance frameworks haven't kept pace with growth",
      "Leadership teams that need a security reporting structure for the board",
      "Businesses entering regulated markets or working with enterprise customers",
    ],
    frameworks: ["ISO 27001", "SOC 2", "GDPR", "NIST CSF", "COBIT"],
    engagementNote:
      "We don't produce compliance theater. Our frameworks are designed to withstand real auditor scrutiny and survive the next security incident review.",
  },
];

export default securityServices;
