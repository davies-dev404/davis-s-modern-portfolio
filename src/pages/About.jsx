import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Award,
  ShieldCheck,
  Zap,
  Globe,
  Users,
  Code2,
  Layers,
  CheckCircle2,
  ArrowRight,
  Target,
  Eye,
  Building2,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBar } from "@/components/SkillBar";
import { skills } from "@/data/skills";

const companyStats = [
  { value: "50+", label: "Digital Products Delivered" },
  { value: "30+", label: "Enterprise & SME Clients" },
  { value: "99.9%", label: "System Uptime & Reliability" },
  { value: "24/7", label: "Technical Support & SLA" },
];

const coreValues = [
  {
    icon: Zap,
    title: "Engineering Excellence",
    desc: "We write clean, maintainable, and scalable code backed by modern cloud-native architecture.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Trust by Default",
    desc: "Every platform we deliver incorporates industry-standard encryption, authentication, and data protection.",
  },
  {
    icon: Globe,
    title: "Africa-First Innovation",
    desc: "Built for local market realities—seamless M-Pesa & bank integrations, mobile-first UX, and fast performance.",
  },
  {
    icon: Users,
    title: "Client-Centric Partnership",
    desc: "We work as an extension of your team, aligning every technical milestone with measurable business growth.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "From MVP launch to millions of transactions, our systems are engineered to scale effortlessly.",
  },
  {
    icon: Rocket,
    title: "Rapid & Transparent Delivery",
    desc: "Agile sprints, clear communication, and predictable milestones keep your product launch on schedule.",
  },
];

const deliveryProcess = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We analyze your business goals, workflows, and target users to define a clear technical roadmap and ROI strategy.",
  },
  {
    step: "02",
    title: "UI/UX & System Architecture",
    desc: "Our designers and architects craft intuitive prototypes and resilient database & API blueprints.",
  },
  {
    step: "03",
    title: "Agile Engineering & Integration",
    desc: "We build your platform in iterative sprints with automated testing, payment integrations, and real-time staging previews.",
  },
  {
    step: "04",
    title: "Deployment, Scaling & Support",
    desc: "We handle cloud deployment, SSL/security hardening, team training, and continuous post-launch optimization.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Company Hero */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap gap-2 items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-full">
                  <Building2 className="h-3.5 w-3.5" />
                  About AfriNex Tech
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full">
                  <MapPin className="h-3.5 w-3.5" />
                  Headquartered in Nairobi, Kenya
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight">
                Engineering the Future of{" "}
                <span className="gradient-text">African Enterprise</span>
              </h1>

              <p className="text-lg font-medium text-foreground/90 leading-relaxed">
                AfriNex Tech is a full-service software development and digital transformation company helping businesses automate operations, launch SaaS products, and scale across Africa and globally.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We combine deep full-stack engineering expertise (React, Node.js, TypeScript, Python, Cloud &amp; DevOps) with an intimate understanding of local business ecosystems—from automated M-Pesa payment reconciliation and property management systems like <strong>MakaziFlow</strong> to enterprise logistics, healthcare, and e-commerce platforms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Custom Enterprise Web & Mobile Apps",
                  "M-Pesa, Banking & ERP Integrations",
                  "SaaS & PropTech Product Engineering",
                  "Dedicated Engineering & SLA Support",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap pt-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/projects">Explore Our Work</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Stats & Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {companyStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-2xl glass card-shadow border border-border/60 text-center"
                  >
                    <div className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mission & Vision */}
              <div className="p-6 md:p-8 rounded-2xl glass card-shadow border border-border/60 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">Our Mission</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      To empower startups, SMEs, and enterprises with reliable, high-performing software systems that streamline operations, unlock revenue, and elevate customer experiences.
                    </p>
                  </div>
                </div>

                <div className="border-t border-border/60 pt-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Eye className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">Our Vision</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      To be East Africa&apos;s most trusted technology partner for custom software engineering, SaaS innovation, and enterprise digital transformation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Culture"
            title="Core Company Values"
            description="The principles that guide every system we architect and every client relationship we build."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {coreValues.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 rounded-2xl border border-border bg-background/60 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work / Engineering Process */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Methodology"
            title="How We Deliver"
            description="A proven, transparent four-stage engineering process from concept to production scale."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {deliveryProcess.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl border border-border bg-card/50 space-y-3"
              >
                <span className="font-display font-extrabold text-4xl text-primary/25">{item.step}</span>
                <h3 className="font-display font-bold text-xl text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Capabilities"
            title="Our Technology Stack"
            description="Enterprise-grade frameworks, cloud infrastructure, and tools our engineering team uses in production."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Frontend & Web Platforms", data: skills.filter((s) => s.category === "Frontend") },
              { title: "Backend & API Architecture", data: skills.filter((s) => s.category === "Backend") },
              { title: "Databases & Data Storage", data: skills.filter((s) => s.category === "Databases") },
              { title: "Cloud, DevOps & Tooling", data: skills.filter((s) => s.category === "Tools") },
            ].map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-6"
              >
                <h3 className="font-display font-bold text-2xl border-b pb-2">{section.title}</h3>
                <div className="space-y-4">
                  {section.data.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
