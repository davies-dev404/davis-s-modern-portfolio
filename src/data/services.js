import {
  Code,
  Layers,
  CreditCard,
  Smartphone,
  Layout as LayoutIcon,
  ShieldCheck,
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Custom Web & Enterprise Applications",
    description:
      "Designing and engineering high-performance corporate portals, business management systems, and customer-facing web applications built to scale.",
    longDescription:
      "At AfriNex Tech, we engineer custom web applications and enterprise portals tailored to your exact business workflows. Whether you need a corporate platform, a client booking portal, or an internal operations dashboard, we deliver responsive, fast, and SEO-optimized applications built on modern full-stack architectures.",
    icon: Code,
    features: [
      "Corporate & Enterprise Portals",
      "Custom Business Dashboards",
      "SEO & High-Speed Architecture",
      "Responsive Cross-Device UI",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    benefits: [
      "Tailored to your exact business workflows and branding",
      "Search-engine & AI-search optimized for maximum visibility",
      "Fast load times and seamless experience on mobile and desktop",
      "Built-in analytics, lead capture, and administrative controls",
    ],
    process: [
      "Business Discovery & Requirements Architecture",
      "UI/UX Wireframing & Interactive Prototyping",
      "Full-Stack Engineering & Database Design",
      "Quality Assurance & Performance Testing",
      "Production Deployment & Ongoing Support",
    ],
  },
  {
    id: 2,
    title: "SaaS & Industry Management Systems",
    description:
      "Building cloud-based SaaS platforms, property & real estate ERP systems (like MakaziFlow), healthcare portals, POS, and logistics platforms.",
    longDescription:
      "We build multi-tenant SaaS products and specialized management information systems (MIS) that automate complex industry operations. From real estate and rental automation (such as our flagship MakaziFlow platform) to hospital portals, inventory & POS systems, and fleet management hubs, we turn manual spreadsheets into automated cloud software.",
    icon: Layers,
    features: [
      "Property & Real Estate SaaS",
      "Inventory, POS & ERP Systems",
      "Healthcare & Legal Portals",
      "Automated Billing & Reporting",
    ],
    technologies: ["React", "Node.js", "Express", "Python", "MongoDB", "PostgreSQL", "Docker"],
    benefits: [
      "Eliminates manual paperwork and spreadsheet errors",
      "Role-based access control for admins, staff, and customers",
      "Real-time financial, occupancy, and operational analytics",
      "Automated SMS, WhatsApp, and email notifications",
    ],
    process: [
      "Operational Workflow Audit & System Blueprint",
      "Multi-Tenant Database & Role Security Architecture",
      "Core Module Development & Payment Automation",
      "Staff Onboarding & Data Migration",
      "Continuous Feature Scaling & SLA Support",
    ],
  },
  {
    id: 3,
    title: "M-Pesa, Payment & API Integrations",
    description:
      "Seamless integration of Safaricom M-Pesa Daraja (Paybill, Till, STK Push), card payment gateways, SMS/WhatsApp alerts, and custom REST APIs.",
    longDescription:
      "Power your digital products with reliable payment automation and third-party connectivity. AfriNex Tech specializes in Safaricom M-Pesa Daraja API integrations (STK Push, C2B Paybill/Till reconciliation, B2C payouts), Pesapal, Stripe, and automated WhatsApp/SMS receipting — ensuring every transaction is verified and reconciled in real time.",
    icon: CreditCard,
    features: [
      "M-Pesa Daraja (STK, C2B, B2C)",
      "Card & Bank Payment Gateways",
      "Automated SMS & WhatsApp Alerts",
      "Custom REST & GraphQL APIs",
    ],
    technologies: ["M-Pesa Daraja API", "Node.js", "Python", "FastAPI", "Stripe", "Pesapal", "Webhooks"],
    benefits: [
      "Instant automated payment verification and receipt generation",
      "Zero manual M-Pesa statement reconciliation",
      "Secure encrypted webhook handling and audit logs",
      "Smooth connection between your website, CRM, and accounting tools",
    ],
    process: [
      "API & Payment Flow Specification",
      "Sandbox Development & Webhook Security Hardening",
      "End-to-End Transaction & Failover Testing",
      "Safaricom / Gateway Go-Live Certification",
      "Real-Time Monitoring & Reconciliation Setup",
    ],
  },
  {
    id: 4,
    title: "Mobile App & E-Commerce Solutions",
    description:
      "Developing cross-platform iOS & Android mobile applications and full-featured online stores with real-time inventory and instant checkout.",
    longDescription:
      "Reach your customers wherever they are with modern mobile applications and conversion-driven e-commerce platforms. We deliver cross-platform Android and iOS apps alongside custom online stores complete with product catalogs, inventory tracking, M-Pesa & card checkout, and delivery management.",
    icon: Smartphone,
    features: [
      "iOS & Android Mobile Apps",
      "Progressive Web Apps (PWAs)",
      "Custom E-Commerce Stores",
      "Order & Inventory Management",
    ],
    technologies: ["React Native", "React", "Next.js", "Node.js", "Tailwind CSS", "M-Pesa / Stripe"],
    benefits: [
      "Single unified codebase for Android, iOS, and Web",
      "Frictionless mobile checkout with M-Pesa STK Push and cards",
      "Real-time stock alerts, order tracking, and customer accounts",
      "Offline-ready Progressive Web App capabilities",
    ],
    process: [
      "Customer Journey & Mobile UX Design",
      "App & Storefront Engineering",
      "Payment Gateway & Logistics Integration",
      "Device Testing & App Store / Web Launch",
      "Post-Launch Growth & Feature Updates",
    ],
  },
  {
    id: 5,
    title: "UI/UX, Product Design & Brand Identity",
    description:
      "Crafting intuitive product interfaces, interactive Figma prototypes, design systems, and cohesive digital brand identities that convert visitors.",
    longDescription:
      "Great software starts with world-class design. Our product design team creates user-centered interfaces, interactive prototypes, and complete visual brand identities that build trust and guide users effortlessly from discovery to conversion.",
    icon: LayoutIcon,
    features: [
      "UI/UX & Product Design",
      "Interactive Figma Prototypes",
      "Design Systems & Style Guides",
      "Corporate Branding & Visual Assets",
    ],
    technologies: ["Figma", "Design Systems", "Adobe Illustrator", "Adobe Photoshop", "Framer"],
    benefits: [
      "Higher customer conversion and user retention rates",
      "Clear, accessible navigation across mobile and desktop",
      "Clickable prototypes to validate ideas before writing code",
      "Consistent, executive-grade brand presence across all channels",
    ],
    process: [
      "Brand & User Research Discovery",
      "Information Architecture & User Flows",
      "High-Fidelity UI Design & Interactive Prototyping",
      "Design System Handoff & Engineering Implementation",
    ],
  },
  {
    id: 6,
    title: "Cloud Hosting, DevOps & Cybersecurity",
    description:
      "Managed cloud deployment, CI/CD pipelines, domain & business email setup, SSL hardening, application security audits, and ongoing maintenance.",
    longDescription:
      "Keep your digital infrastructure fast, secure, and online 24/7. AfriNex Tech handles cloud server provisioning, automated CI/CD deployments, custom domain and corporate email configuration, OWASP security hardening, and proactive technical maintenance so you can focus on running your business.",
    icon: ShieldCheck,
    features: [
      "Cloud Deployment & CI/CD",
      "Application Security & Audits",
      "Domain, SSL & Corporate Email",
      "24/7 Maintenance & SLA Support",
    ],
    technologies: ["AWS", "Vercel", "Docker", "Linux", "GitHub Actions", "OWASP Security", "SSL/TLS"],
    benefits: [
      "99.9% uptime with scalable cloud infrastructure",
      "Protection against common web vulnerabilities (OWASP Top 10)",
      "Automated backups, SSL certificates, and zero-downtime updates",
      "Dedicated technical support and system monitoring",
    ],
    process: [
      "Infrastructure & Security Assessment",
      "Cloud Environment & SSL/DNS Configuration",
      "Security Hardening & Automated Backup Setup",
      "Continuous Uptime Monitoring & Technical Support",
    ],
  },
];
