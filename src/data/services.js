import { Code, Server, Layout as LayoutIcon, Palette, ShieldCheck, Building2 } from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Custom Web & Enterprise Applications",
    description: "Engineering high-performance, responsive, and scalable web applications tailored for modern enterprises and growing businesses.",
    longDescription: "Our engineering team builds secure, high-converting web platforms and enterprise portals tailored to your workflows. From initial product strategy to cloud deployment, we optimize every layer for speed, reliability, and business growth.",
    icon: Code,
    features: ["React & Next.js Platforms", "Enterprise Dashboards & Portals", "TypeScript Architecture", "Mobile-First Responsive UX"],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vite"],
    benefits: [
      "Blazing-fast load speeds & Core Web Vitals",
      "SEO-engineered architecture for top search visibility",
      "Seamless responsiveness across mobile, tablet, and desktop"
    ],
    process: [
      "Business Discovery & Requirements Analysis",
      "UI/UX Prototyping & Architecture",
      "Full-Stack Agile Engineering",
      "Automated QA & Performance Testing",
      "Deployment & Ongoing SLA Support"
    ]
  },
  {
    id: 2,
    title: "Backend Systems, APIs & Payment Integrations",
    description: "Designing resilient RESTful & GraphQL APIs, microservices, and automated M-Pesa, bank, and ERP integrations.",
    longDescription: "Every mission-critical platform depends on a rock-solid backend. AfriNex Tech architects secure, high-throughput APIs and integrates local and international payment gateways (M-Pesa Daraja, Pesapal, Stripe, Bank APIs) and enterprise systems.",
    icon: Server,
    features: ["Node.js, Express & Python APIs", "M-Pesa & Payment Automation", "Database Design & Optimization", "Role-Based Access & JWT Security"],
    technologies: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Docker"],
    benefits: [
      "Automated financial reconciliation & zero manual errors",
      "High-availability architecture built for growing traffic",
      "Low-latency API response times"
    ],
    process: [
      "Data Modeling & Schema Architecture",
      "API Contract & Security Design",
      "Payment & Third-Party Gateway Integration",
      "Load Testing & Security Auditing",
      "Production Monitoring & Scaling"
    ]
  },
  {
    id: 3,
    title: "SaaS, PropTech & FinTech Product Engineering",
    description: "End-to-end product development for multi-tenant SaaS platforms, property management systems, and financial technology solutions.",
    longDescription: "As the creators of flagship platforms like MakaziFlow, we help founders and enterprises bring full-scale SaaS products to market—complete with subscription billing, multi-tenant architecture, real-time analytics, and automated reporting.",
    icon: Building2,
    features: ["Multi-Tenant SaaS Architecture", "Automated Billing & Invoicing", "Real-Time Analytics & Reporting", "Tenant & Customer Portals"],
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL", "Cloudflare", "AWS"],
    benefits: [
      "Rapid time-to-market for new digital products",
      "Built-in multi-tenancy and role permissions",
      "Actionable executive reporting & financial insights"
    ],
    process: [
      "Product Roadmap & MVP Scoping",
      "Multi-Tenant Architecture Blueprint",
      "Iterative Sprint Delivery",
      "Pilot Testing & User Onboarding",
      "Continuous Feature Evolution"
    ]
  },
  {
    id: 4,
    title: "UI/UX Product Design & Prototyping",
    description: "Crafting intuitive, conversion-focused user interfaces and comprehensive design systems that delight customers.",
    longDescription: "Great software starts with exceptional user experience. Our design team creates user-centric wireframes, interactive Figma prototypes, and scalable design systems focused on clarity, accessibility, and customer conversion.",
    icon: LayoutIcon,
    features: ["Interactive Figma Prototypes", "Design Systems & Component Libraries", "User Journey & Workflow Mapping", "Conversion Rate Optimization"],
    technologies: ["Figma", "Adobe XD", "Tailwind Design Tokens", "Framer"],
    benefits: [
      "Higher customer engagement and retention",
      "Frictionless user onboarding and navigation",
      "Unified, modern brand experience across all devices"
    ],
    process: [
      "User Research & Workflow Audit",
      "Wireframing & Information Architecture",
      "High-Fidelity Interactive Prototyping",
      "Usability Testing & Developer Handoff"
    ]
  },
  {
    id: 5,
    title: "Corporate Branding & Digital Identity",
    description: "Establishing authoritative visual identities, brand guidelines, and digital marketing assets for ambitious companies.",
    longDescription: "Position your organization as an industry leader with cohesive corporate branding. From logo systems and brand guidelines to pitch decks and digital campaign assets, we make sure your brand commands trust.",
    icon: Palette,
    features: ["Corporate Logo & Visual Identity", "Brand Guidelines & Typography", "Company Profiles & Pitch Decks", "Digital Marketing Collateral"],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Canva Pro"],
    benefits: [
      "Commanding, trustworthy corporate presence",
      "Consistent visual language across web and print",
      "High-impact assets ready for investors and clients"
    ],
    process: [
      "Brand Discovery & Positioning",
      "Visual Concept Exploration",
      "Identity Refinement & Guidelines",
      "Complete Brand Asset Delivery"
    ]
  },
  {
    id: 6,
    title: "Application Security, Cloud & DevOps",
    description: "Protecting your digital infrastructure with application security hardening, SSL/TLS, cloud deployment, and CI/CD automation.",
    longDescription: "Security and uptime are non-negotiable. We harden web applications against OWASP vulnerabilities, configure automated backups and SSL certificates, and set up zero-downtime CI/CD deployment pipelines.",
    icon: ShieldCheck,
    features: ["OWASP Security Hardening", "Automated CI/CD Pipelines", "Cloud & Server Management", "SSL/TLS, Firewall & Backup Setup"],
    technologies: ["OWASP Top 10", "JWT & OAuth 2.0", "Cloudflare", "Linux / cPanel / VPS", "GitHub Actions"],
    benefits: [
      "Protection against common cyber threats and data leaks",
      "99.9% uptime with automated health monitoring",
      "Fast, zero-downtime software updates"
    ],
    process: [
      "Infrastructure & Security Audit",
      "Vulnerability Remediation & Hardening",
      "CI/CD & Cloud Environment Configuration",
      "Ongoing Monitoring & Maintenance"
    ]
  }
];
