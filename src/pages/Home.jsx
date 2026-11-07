import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, ChevronRight, Sparkles, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { StaxHero } from "@/components/StaxHero";
import { StaxSection } from "@/components/StaxSection";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

// micro1-style interactive benchmark / technical proficiency data
const benchmarkTabs = [
  {
    id: "frontend",
    label: "Frontend Architecture",
    metric: "Proficiency score",
    lastUpdated: "November 2026",
    rows: [
      { name: "React.js & Next.js", score: 96.4, lead: true, badge: "R" },
      { name: "Tailwind CSS & UI Systems", score: 95.0, lead: false, badge: "T" },
      { name: "JavaScript (ES6+) & TypeScript", score: 92.8, lead: false, badge: "TS" },
      { name: "Framer Motion & Interactive UX", score: 90.5, lead: false, badge: "FM" },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    metric: "System reliability score",
    lastUpdated: "November 2026",
    rows: [
      { name: "Node.js & Express REST APIs", score: 95.2, lead: true, badge: "N" },
      { name: "MongoDB & PostgreSQL", score: 93.4, lead: false, badge: "DB" },
      { name: "M-Pesa Daraja & Payment Gateways", score: 94.8, lead: false, badge: "MP" },
      { name: "Python & FastAPI Services", score: 88.6, lead: false, badge: "PY" },
    ],
  },
  {
    id: "cloud",
    label: "DevOps & Security",
    metric: "Production readiness",
    lastUpdated: "November 2026",
    rows: [
      { name: "Git, CI/CD & Cloud Deployment", score: 95.8, lead: true, badge: "CI" },
      { name: "JWT, OAuth & API Security", score: 93.0, lead: false, badge: "SEC" },
      { name: "Performance & SEO Optimization", score: 96.2, lead: false, badge: "SEO" },
      { name: "Linux / cPanel / Vercel / Docker", score: 91.5, lead: false, badge: "OPS" },
    ],
  },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const featuredServices = services.slice(0, 3);
  const [activeTabId, setActiveTabId] = useState("frontend");
  const activeBenchmark = benchmarkTabs.find((t) => t.id === activeTabId) || benchmarkTabs[0];

  return (
    <Layout>
      <StaxHero />

      {/* Intro Section — Original Portfolio Copy Styled with micro1.ai Gradient & Dark Surface */}
      <StaxSection background="light" className="text-center border-y border-white/10" width="content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-medium text-[#a0b3ff] mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#6d7cff]" />
            AfriNex Tech • Full-Stack Engineering
          </span>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-color-gradient-accent mb-4 leading-tight">
            Totally Customizable
          </h2>
          <h3 className="font-sans font-normal text-xl md:text-2xl text-white/80 leading-snug mb-6">
            Modern web development just got easier with{" "}
            <strong className="text-white font-semibold">AFRINEX TECH</strong>
          </h3>
          <p className="font-sans text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            I provide complete control over your entire web presence. From global fonts and colors to custom headers, APIs, and full-stack layouts. The possibilities are truly endless when you have a dedicated Full-Stack Developer.
          </p>
        </motion.div>
      </StaxSection>

      {/* Services / "Blocks" Section */}
      <StaxSection background="accent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative -mt-28 z-20">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </StaxSection>

      {/* Flagship Product Spotlight (MakaziFlow) — Preserved with Glass Card & Screenshot */}
      <StaxSection background="white">
        <div className="rounded-3xl bg-gradient-to-br from-[#191919] via-[#1d2247] to-[#3444da]/80 text-white p-7 sm:p-10 lg:p-14 border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#6d7cff]/20 blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium uppercase tracking-widest text-[#a0b3ff]">
                Flagship SaaS Project
              </div>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                MakaziFlow — Smart Property &amp; Rental Management
              </h2>
              <p className="text-white/75 text-base md:text-lg leading-relaxed">
                Designed and engineered under AfriNex Tech, MakaziFlow automates rent collection, M-Pesa Daraja reconciliation, tenant communication, and real-time financial reporting for landlords and property managers across Kenya.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full font-medium bg-[#3444da] hover:bg-[#6d7cff] text-white px-7 py-6 shadow-lg transition-all"
                >
                  <a href="https://makaziflow.afrinextech.co.ke" target="_blank" rel="noopener noreferrer">
                    Launch MakaziFlow <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full font-medium border border-white/25 bg-white/5 text-white hover:bg-white hover:text-[#121212] px-7 py-6 transition-all"
                >
                  <Link to="/projects">View All Projects</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <a
                href="https://makaziflow.afrinextech.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-xl hover:border-white/40 transition-all group"
              >
                <img
                  src="/assets/makaziflow-hero.jpg"
                  alt="MakaziFlow Property Management SaaS by AfriNex Tech"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain rounded-xl border border-white/15 group-hover:scale-[1.01] transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </StaxSection>

      {/* micro1.ai Inspired Interactive Engineering Benchmark Leaderboard */}
      <StaxSection background="light" className="border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-color-gradient-accent mb-3">
              Engineering Benchmarks
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
              Interactive breakdown of core technical stacks and production metrics across frontend, backend, and cloud architecture.
            </p>
          </div>

          {/* micro1.ai Leaderboard Card */}
          <div className="rounded-2xl bg-[#121212] border border-white/10 p-5 sm:p-8 shadow-2xl">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-white/[0.06] border border-white/10 mb-6">
              {benchmarkTabs.map((tab) => {
                const isSelected = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTabId(tab.id)}
                    className={`flex-1 min-w-[140px] py-2 px-4 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                      isSelected
                        ? "bg-white/85 text-[#121212] font-semibold shadow-sm"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Header Meta */}
            <div className="flex items-center justify-between text-xs text-white/55 mb-6 px-1">
              <span className="font-medium text-white/80">{activeBenchmark.metric}</span>
              <span>Updated {activeBenchmark.lastUpdated}</span>
            </div>

            {/* Bars */}
            <ol className="space-y-5">
              {activeBenchmark.rows.map((row) => (
                <li
                  key={row.name}
                  className="group p-3 -mx-3 rounded-xl hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-mono font-bold shrink-0 ${
                          row.lead
                            ? "bg-[#3444da] text-white"
                            : "bg-white/10 text-white/80"
                        }`}
                      >
                        {row.badge}
                      </span>
                      <span className="text-sm text-white/85 font-medium truncate">
                        {row.name}
                      </span>
                      <Info className="w-3.5 h-3.5 text-white/30 group-hover:text-white/70 transition-colors shrink-0" />
                    </div>
                    <span
                      className={`text-sm font-mono ${
                        row.lead ? "text-white font-semibold" : "text-white/75"
                      }`}
                    >
                      {row.score.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      key={`${activeTabId}-${row.name}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${row.score}%` }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-full ${
                        row.lead ? "micro1-bar-fill" : "bg-white/35"
                      }`}
                    />
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-7 pt-5 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs text-white/50">
                Full-Stack Portfolio • Davis Kibet Kipsoi
              </span>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#a0b3ff] hover:text-white transition-colors"
              >
                <span>View full skills &amp; CV</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </StaxSection>

      {/* Featured Projects */}
      <StaxSection background="white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h6 className="font-sans font-semibold uppercase tracking-widest text-xs text-[#6d7cff] mb-2">
              Portfolio
            </h6>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl text-color-gradient-accent">
              Featured Projects
            </h2>
          </div>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="hidden md:flex rounded-full font-medium border border-white/15 bg-[#25252e]/80 text-white hover:bg-[#3444da] hover:border-[#6d7cff]"
          >
            <Link to="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-full font-medium border border-white/15 bg-[#25252e] text-white"
          >
            <Link to="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </StaxSection>

      {/* CTA Section */}
      <StaxSection background="light" className="border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Let&apos;s Build <span className="text-color-gradient-accent">Something Amazing</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-white/65 mb-10 leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. Whether it&apos;s a new application, a website redesign, or technical consulting, I&apos;m here to help you achieve your digital goals.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="rounded-full font-medium px-8 py-6 bg-[#3444da] hover:bg-[#6d7cff] text-white transition-all duration-300 shadow-[0_0_28px_-4px_rgba(109,124,255,0.5)]"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full font-medium px-8 py-6 border border-white/15 bg-[#25252e]/80 text-white hover:bg-white hover:text-[#121212]"
            >
              <a href="https://wa.me/254790264792" target="_blank" rel="noopener noreferrer">
                WhatsApp Me
              </a>
            </Button>
          </div>
        </div>
      </StaxSection>
    </Layout>
  );
}
