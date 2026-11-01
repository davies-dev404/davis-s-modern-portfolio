import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Shield,
  Building2,
  CheckCircle2,
  ExternalLink,
  Layers,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { StaxHero } from "@/components/StaxHero";
import { StaxSection } from "@/components/StaxSection";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const whyUs = [
  {
    icon: Layers,
    title: "Connected Ecosystems",
    desc: "We unify fragmented workflows—linking web portals, mobile apps, M-Pesa payments, and ERP backends into one seamless experience.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    desc: "Built with role-based access control, encrypted data pipelines, and high-availability cloud infrastructure you can trust.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    desc: "Executive dashboards, automated reconciliation, and live reporting that turn operational data into smart business decisions.",
  },
  {
    icon: Globe,
    title: "Built for African Scale",
    desc: "Engineered in Nairobi for East African and global enterprises—fast on any network, mobile-first, and locally integrated.",
  },
];

const industrySolutions = [
  {
    badge: "PropTech & Real Estate",
    title: "Property & Tenant Automation",
    desc: "End-to-end digital rent collection, automated M-Pesa receipting, lease tracking, and landlord reporting via MakaziFlow.",
    accent: "#384AD3",
  },
  {
    badge: "Healthcare & Clinics",
    title: "Patient & Operations Portals",
    desc: "Streamlined appointment scheduling, digital records, billing workflows, and multi-branch analytics for modern providers.",
    accent: "#8015E8",
  },
  {
    badge: "FinTech & Commerce",
    title: "Payment & B2B Marketplaces",
    desc: "High-conversion e-commerce platforms, Daraja M-Pesa & bank API gateways, and automated inventory & order management.",
    accent: "#ED5829",
  },
  {
    badge: "Corporate & SMEs",
    title: "Custom Enterprise Software",
    desc: "Bespoke internal portals, HR/payroll automation, CRM integrations, and legacy system modernization tailored to your organization.",
    accent: "#407C51",
  },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <Layout>
      <StaxHero />

      {/* Who We Are Banner */}
      <StaxSection background="light" className="text-center" width="content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#384AD3]/10 text-[#384AD3] text-xs font-display font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#ED5829]" />
            Who We Are
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#131946] mb-5 leading-tight">
            Building Connected Digital Solutions for{" "}
            <span className="text-[#384AD3]">Modern African Enterprises</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-[#505672] max-w-3xl mx-auto leading-relaxed">
            At <strong className="text-[#131946]">AfriNex Tech</strong>, we believe organizations thrive when their software, payments, and data work together effortlessly. From our flagship{" "}
            <a
              href="https://makaziflow.afrinextech.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#384AD3] hover:underline"
            >
              MakaziFlow
            </a>{" "}
            platform to custom enterprise web applications and API integrations, we engineer digital solutions that drive measurable impact.
          </p>
        </motion.div>
      </StaxSection>

      {/* Core Solutions / "Blocks" Section */}
      <StaxSection background="accent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative -mt-32 z-20">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </StaxSection>

      {/* Flagship Product Spotlight: MakaziFlow */}
      <StaxSection background="white">
        <div className="rounded-3xl bg-gradient-to-br from-[#131946] via-[#25318D] to-[#384AD3] text-white p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#ED5829]/20 blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-display font-bold uppercase tracking-widest text-[#B5BCF0]">
                <Building2 className="w-4 h-4 text-[#ED5829]" />
                Flagship SaaS Platform
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                MakaziFlow — Smart Property &amp; Rental Management
              </h2>
              <p className="text-[#B5BCF0] text-base md:text-lg leading-relaxed">
                Designed and engineered by AfriNex Tech, MakaziFlow empowers landlords, property managers, and real estate agencies across Kenya to automate rent collection, M-Pesa reconciliation, tenant communication, and financial reporting in real time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Automated M-Pesa & Bank Reconciliation",
                  "Real-Time Occupancy & Arrears Analytics",
                  "Digital Lease & Tenant Self-Service Portal",
                  "Instant SMS/Email Receipts & Statements",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5 text-sm font-medium text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#ED5829] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full font-display font-bold bg-[#ED5829] hover:bg-white hover:text-[#131946] text-white px-8 py-6 shadow-lg transition-all"
                >
                  <a href="https://makaziflow.afrinextech.co.ke" target="_blank" rel="noopener noreferrer">
                    Launch MakaziFlow <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full font-display font-bold border-2 border-white/40 bg-transparent text-white hover:bg-white hover:text-[#131946] px-8 py-6 transition-all"
                >
                  <Link to="/contact">Request Enterprise Demo</Link>
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

      {/* Industries & Ecosystems We Serve */}
      <StaxSection background="light">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#384AD3]/10 text-[#384AD3] text-xs font-display font-bold uppercase tracking-widest mb-3">
            Ecosystems &amp; Verticals
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#131946] mb-4">
            Solutions Tailored to Your Industry
          </h2>
          <p className="text-[#505672] text-base md:text-lg">
            We combine domain expertise with modern software engineering to solve high-impact operational challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industrySolutions.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-7 rounded-2xl bg-white border border-[#DCE0F5] hover:border-[#384AD3] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-display font-bold text-white mb-4"
                  style={{ backgroundColor: item.accent }}
                >
                  {item.badge}
                </span>
                <h3 className="font-display font-bold text-xl text-[#131946] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#505672] leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-[#384AD3] hover:text-[#ED5829] mt-6 transition-colors"
              >
                Explore Solution <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </StaxSection>

      {/* Why Choose AfriNex Tech */}
      <StaxSection background="white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="inline-block font-display font-bold uppercase tracking-widest text-xs text-[#ED5829] mb-2">
              Why Partner With Us
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#131946]">
              The AfriNex Tech Advantage
            </h2>
          </div>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="hidden md:flex rounded-full font-display font-bold border-2 border-[#384AD3] text-[#384AD3] hover:bg-[#384AD3] hover:text-white"
          >
            <Link to="/about">
              About Our Company <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-7 rounded-2xl border border-[#DCE0F5] bg-[#F9F8FC] hover:bg-white hover:border-[#384AD3] hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#384AD3]/10 text-[#384AD3] flex items-center justify-center mb-5 group-hover:bg-[#384AD3] group-hover:text-white transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#131946] mb-2">{item.title}</h3>
              <p className="text-[#505672] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </StaxSection>

      {/* Featured Portfolio */}
      <StaxSection background="light">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="inline-block font-display font-bold uppercase tracking-widest text-xs text-[#384AD3] mb-2">
              Proven Track Record
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#131946]">
              Platforms &amp; Case Studies
            </h2>
          </div>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="hidden md:flex rounded-full font-display font-bold border-2 border-[#384AD3] text-[#384AD3] hover:bg-[#384AD3] hover:text-white"
          >
            <Link to="/projects">
              View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
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
            className="rounded-full font-display font-bold border-2 border-[#384AD3] text-[#384AD3]"
          >
            <Link to="/projects">
              View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </StaxSection>

      {/* Enterprise CTA Section */}
      <StaxSection background="white" className="border-t border-[#DCE0F5]">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#ED5829]/10 text-[#ED5829] text-xs font-display font-bold uppercase tracking-widest mb-4">
            Let&apos;s Transform Your Operations
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#131946] mb-6 leading-tight">
            Ready to Scale with <span className="text-[#384AD3]">AfriNex Tech?</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-[#505672] mb-10 leading-relaxed">
            Whether you need a custom enterprise web platform, seamless M-Pesa &amp; ERP API integrations, or our MakaziFlow SaaS suite — our engineering team in Nairobi is ready to partner with you.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="rounded-full font-display font-bold text-sm px-8 py-6 bg-[#384AD3] hover:bg-white hover:text-[#384AD3] border-2 border-[#384AD3] text-white transition-all duration-300 shadow-lg"
            >
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full font-display font-bold text-sm px-8 py-6 border-2 border-[#131946]/20 text-[#131946] hover:text-[#384AD3] hover:border-[#384AD3]"
            >
              <a href="https://wa.me/254790264792" target="_blank" rel="noopener noreferrer">
                Chat with Sales on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </StaxSection>
    </Layout>
  );
}
