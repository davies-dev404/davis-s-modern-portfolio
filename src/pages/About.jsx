import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Rocket,
  ShieldCheck,
  Code2,
  Cpu,
  Layers,
  Globe,
  Building2,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBar } from "@/components/SkillBar";
import { skills } from "@/data/skills";

// Founder profile image
import profileAvatar from "/assets/kibetprofess.png";

const companyValues = [
  {
    icon: Rocket,
    title: "Enterprise SaaS & Product Engineering",
    desc: "Designing and scaling multi-tenant SaaS platforms like MakaziFlow alongside bespoke web applications built for growth.",
  },
  {
    icon: Code2,
    title: "Full-Stack Architecture & APIs",
    desc: "End-to-end engineering with React, TypeScript, Node.js, and Python — complete with M-Pesa Daraja and banking API integrations.",
  },
  {
    icon: ShieldCheck,
    title: "Security & High Availability",
    desc: "Building resilient systems with JWT/OAuth security, encrypted data flows, automated testing, and cloud-native deployments.",
  },
  {
    icon: Cpu,
    title: "Modern UI/UX & Brand Systems",
    desc: "Crafting fast, accessible, and conversion-focused interfaces that elevate digital brands across mobile and desktop.",
  },
  {
    icon: Layers,
    title: "Scalable Database & Cloud Infrastructure",
    desc: "Optimizing PostgreSQL, MongoDB, and cloud hosting pipelines for low-latency performance and seamless scalability.",
  },
  {
    icon: Globe,
    title: "Built for Africa & Global Markets",
    desc: "Headquartered in Nairobi, Kenya, delivering localized payment automation and global-standard software engineering.",
  },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 0.7]);

  return (
    <Layout>
      {/* Hero: About AfriNex Tech & Founder */}
      <section className="py-12 md:py-24 hero-gradient" ref={containerRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Founder & Lead Engineer Card */}
            <motion.div className="lg:col-span-5 relative" style={{ y }}>
              <div className="relative w-full max-w-md mx-auto">
                <motion.div
                  className="rounded-2xl overflow-hidden glass card-shadow border border-white/15 p-4 bg-[#18181c]/90"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="rounded-xl overflow-hidden bg-[#121212]">
                    <motion.img
                      src={profileAvatar}
                      alt="Davis Kibet Kipsoi — Founder & Lead Engineer at AfriNex Tech"
                      fetchPriority="high"
                      className="w-full h-auto object-contain"
                      style={{ opacity }}
                    />
                  </div>
                  <div className="pt-4 pb-1 px-2 flex items-center justify-between gap-3">
                    <div>
                      <h2 className="font-display font-semibold text-lg text-white">
                        Davis Kibet Kipsoi
                      </h2>
                      <p className="text-xs text-[#a0b3ff] font-medium">
                        Founder &amp; Lead Software Engineer • AfriNex Tech
                      </p>
                    </div>
                    <a
                      href="https://github.com/davies-dev404"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.07] hover:bg-[#3444da] text-white text-xs font-medium border border-white/15 transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column: Business Story + Brief Founder Bio */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex flex-wrap gap-2 items-center">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold bg-[#3444da]/25 text-[#a0b3ff] border border-[#6d7cff]/30 rounded-full">
                  <Building2 className="h-3.5 w-3.5" />
                  About AfriNex Tech
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Nairobi%2C+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full hover:bg-emerald-500/20 transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  Nairobi, Kenya
                </a>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-semibold text-white leading-tight">
                Engineering Digital Solutions for{" "}
                <span className="text-color-gradient-accent">Modern Businesses</span>
              </h1>

              <p className="text-white/75 leading-relaxed text-base md:text-lg">
                <strong className="text-white">AfriNex Tech</strong> is a premier software engineering and digital solutions company based in Nairobi, Kenya. We partner with startups, law firms, real estate agencies, healthcare providers, and growing enterprises across Africa to design, build, and scale high-performance web applications, custom APIs, and cloud platforms.
              </p>

              <p className="text-white/70 leading-relaxed">
                Beyond client engineering, AfriNex Tech builds proprietary SaaS products tailored to African markets — including our flagship platform{" "}
                <a
                  href="https://makaziflow.afrinextech.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a0b3ff] hover:text-white underline underline-offset-4 font-medium"
                >
                  MakaziFlow
                </a>
                , which automates property operations, M-Pesa Daraja rent reconciliation, digital tenancy leases, and real-time financial reporting for landlords and property managers.
              </p>

              {/* Brief Founder Highlight */}
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 space-y-2.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#a0b3ff]">
                    Leadership &amp; Engineering
                  </span>
                  <span className="text-xs text-white/55">
                    BSc Information Science (MKU) • PLP Alumnus
                  </span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  Founded and led by <strong className="text-white">Davis Kibet Kipsoi</strong>, a Software Engineer &amp; Full-Stack Developer specializing in modern JavaScript/TypeScript (MERN), Python, API architecture, and system security. Davis brings hands-on technical leadership to every project delivered by AfriNex Tech.
                </p>
              </div>

              {/* Action Buttons: GitHub Links + Work With Us (No Download CV) */}
              <div className="flex gap-3.5 flex-wrap pt-2">
                <Button
                  size="lg"
                  asChild
                  className="rounded-full font-medium bg-[#3444da] hover:bg-[#6d7cff] text-white px-7 shadow-[0_0_25px_-4px_rgba(109,124,255,0.5)]"
                >
                  <a
                    href="https://github.com/davies-dev404"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Explore GitHub (@davies-dev404)
                    <ExternalLink className="h-4 w-4 ml-1.5" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="rounded-full font-medium border-white/15 bg-white/[0.05] text-white hover:bg-white hover:text-[#121212] px-7"
                >
                  <a
                    href="https://github.com/davies-dev404?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code2 className="h-5 w-5 mr-2" />
                    Open-Source Repositories
                  </a>
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  asChild
                  className="rounded-full font-medium text-white/80 hover:text-white hover:bg-white/10 px-6"
                >
                  <Link to="/contact">
                    Work With Us
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Business Pillars */}
      <section className="py-12 md:py-20 bg-card border-y border-white/10">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Why AfriNex Tech"
            title="What Drives Our Business"
            description="We combine rigorous software engineering with practical business automation to deliver measurable digital impact."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {companyValues.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl border border-white/10 bg-[#121212]/80 hover:border-[#6d7cff]/50 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#3444da]/20 border border-[#6d7cff]/30 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-[#a0b3ff]" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack & Capabilities */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Technology Stack"
            title="Our Engineering Capabilities"
            description="Production-grade technologies we use to build, secure, and deploy applications at AfriNex Tech."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Frontend Architecture", data: skills.filter((s) => s.category === "Frontend") },
              { title: "Backend & APIs", data: skills.filter((s) => s.category === "Backend") },
              { title: "Databases & Storage", data: skills.filter((s) => s.category === "Databases") },
              { title: "Cloud, DevOps & Tools", data: skills.filter((s) => s.category === "Tools") },
            ].map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-6"
              >
                <h3 className="font-display font-bold text-2xl border-b border-white/10 pb-2 text-white">
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.data.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub & Engineering Presence Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl bg-gradient-to-r from-[#18181c] via-[#1e2242] to-[#18181c] border border-white/15 p-7 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#a0b3ff]">
                Open Source &amp; Engineering Codebase
              </span>
              <h3 className="font-display font-semibold text-2xl sm:text-3xl text-white">
                Inspect Our Code &amp; Architecture on GitHub
              </h3>
              <p className="text-white/65 text-sm sm:text-base max-w-2xl">
                Explore open-source projects, full-stack templates, and production engineering repositories maintained by founder Davis Kibet Kipsoi.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Button
                asChild
                size="lg"
                className="rounded-full font-medium bg-[#3444da] hover:bg-[#6d7cff] text-white px-7"
              >
                <a
                  href="https://github.com/davies-dev404"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 mr-2" />
                  github.com/davies-dev404
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full font-medium border-white/15 bg-white/5 text-white hover:bg-white hover:text-[#121212] px-6"
              >
                <a
                  href="https://www.linkedin.com/in/davies-kibet-342363237"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
