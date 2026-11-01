import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Github, Linkedin, Mail, Sparkles, CheckCircle2 } from "lucide-react";
import { XIcon } from "@/components/XIcon";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com/davies-dev404", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/davies-kibet-342363237", icon: Linkedin },
  { name: "Twitter", url: "https://x.com/Quantito1", icon: XIcon },
  { name: "Email", url: "mailto:info@afrinextech.co.ke", icon: Mail },
];

export function StaxHero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#0F1538]"
    >
      {/* Background Image with Rich Deep Navy Overlay so White & Bright Accents Pop Crystal Clear */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: "url('/assets/hero-bg-web-dev.png')",
            y: heroY,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(15, 21, 56, 0.94) 0%, rgba(19, 25, 70, 0.90) 55%, rgba(37, 49, 141, 0.88) 100%)",
          }}
        />
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#384AD3]/25 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#ED5829]/15 blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content (Left Enterprise Story + Right Floating Code Window — Visible on All Devices Including Mobile!) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-10 sm:pt-14 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: High-Contrast AfriNex Tech Positioning */}
          <div className="order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="mb-5 flex flex-wrap items-center gap-2.5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/25 text-white text-xs sm:text-sm font-display font-bold backdrop-blur-md shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ED5829] animate-pulse" />
                AfriNex Tech • Digital Solutions
              </span>
            </motion.div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[54px] mb-5 leading-[1.15] tracking-tight text-white drop-shadow-sm">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.45 }}
                className="block text-white"
              >
                Engineering Smart
              </motion.span>
              <motion.span
                className="block text-[#60A5FA]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45 }}
              >
                Digital Solutions
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.45 }}
                className="block text-white"
              >
                For Modern Business
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.45 }}
              className="text-slate-200 text-sm sm:text-base md:text-lg max-w-xl mb-6 font-sans leading-relaxed"
            >
              AfriNex Tech is a premier software engineering company in Nairobi delivering custom web platforms, enterprise systems, M-Pesa API integrations, and cloud-ready SaaS products like{" "}
              <a
                href="https://makaziflow.afrinextech.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ED5829] font-bold underline decoration-[#ED5829]/60 hover:text-white transition-colors"
              >
                MakaziFlow
              </a>
              .
            </motion.p>

            {/* Key Value Pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78, duration: 0.4 }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-7 text-xs sm:text-sm font-medium text-white"
            >
              {[
                "Custom Web & Mobile Apps",
                "M-Pesa & Enterprise APIs",
                "24/7 Technical Support",
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#ED5829] shrink-0" />
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.45 }}
              className="flex flex-row items-center gap-3 sm:gap-4 mb-8 flex-wrap"
            >
              <Button
                size="lg"
                asChild
                className="rounded-full font-display font-bold text-xs sm:text-sm h-12 sm:h-14 px-6 sm:px-8 bg-[#ED5829] hover:bg-white hover:text-[#131946] border-2 border-[#ED5829] text-white shadow-lg transition-all duration-300"
              >
                <Link to="/contact">
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                    Start a Project
                  </span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full font-display font-bold text-xs sm:text-sm h-12 sm:h-14 px-6 sm:px-8 border-2 border-white/40 text-white hover:border-white hover:bg-white hover:text-[#131946] bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <Link to="/services">
                  <span className="flex items-center gap-2">
                    Explore Services
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.45 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <span className="text-xs uppercase tracking-wider text-slate-300 font-display font-bold">
                Connect with us
              </span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:text-white hover:bg-[#ED5829] hover:border-[#ED5829] transition-all shadow-sm"
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Animated Code Window (Visible on BOTH Mobile and Desktop!) */}
          <div className="order-2 relative block perspective-1000 w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#384AD3]/40 via-[#8015E8]/25 to-[#ED5829]/25 rounded-3xl blur-2xl" />
                <motion.div
                  className="relative w-full lg:w-[430px] rounded-3xl bg-[#0B0F29]/95 backdrop-blur-lg border border-white/20 p-5 sm:p-6 overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                    default: { type: "spring", stiffness: 300 },
                  }}
                >
                  {/* Window Controls */}
                  <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ED5829]" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#ED5829]" />
                      afrinex-engine.ts
                    </span>
                  </div>

                  {/* Code Content */}
                  <div className="font-mono text-xs sm:text-sm leading-relaxed">
                    <div className="text-slate-200 mb-1.5">
                      <span className="text-[#ED5829] font-semibold">const</span>{" "}
                      <span className="text-white font-bold">afriNexTech</span> = {"{"}
                    </div>
                    <div className="pl-4 text-slate-200">
                      <span className="text-sky-300">company</span>:{" "}
                      <span className="text-amber-300">&apos;AfriNex Tech&apos;</span>,
                    </div>
                    <div className="pl-4 text-slate-200">
                      <span className="text-sky-300">tagline</span>:{" "}
                      <span className="text-emerald-300">&apos;Digital Solutions&apos;</span>,
                    </div>
                    <div className="pl-4 text-slate-200">
                      <span className="text-sky-300">flagshipSaaS</span>:{" "}
                      <span className="text-amber-300">&apos;MakaziFlow&apos;</span>,
                    </div>
                    <div className="pl-4 text-slate-200">
                      <span className="text-sky-300">stack</span>: [
                    </div>
                    <div className="pl-8 text-slate-200">
                      <span className="text-amber-300">&apos;React&apos;</span>,{" "}
                      <span className="text-amber-300">&apos;Node.js&apos;</span>,
                    </div>
                    <div className="pl-8 text-slate-200">
                      <span className="text-amber-300">&apos;TypeScript&apos;</span>,{" "}
                      <span className="text-amber-300">&apos;Python&apos;</span>,
                    </div>
                    <div className="pl-8 text-slate-200">
                      <span className="text-amber-300">&apos;Cloud &amp; M-Pesa APIs&apos;</span>
                    </div>
                    <div className="pl-4 text-slate-200">],</div>
                    <div className="pl-4 text-slate-200">
                      <span className="text-sky-300">enterpriseReady</span>:{" "}
                      <span className="text-[#ED5829] font-semibold">true</span>
                    </div>
                    <div className="text-slate-200">{"};"}</div>
                    <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center gap-1.5 text-xs text-emerald-300">
                      <span>&gt; Deploying scalable systems...</span>
                      <span className="animate-pulse font-bold text-[#ED5829]">_</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom of Hero Section: 4-Column Company Stats Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-10 sm:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 p-4 sm:p-6 md:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-[#DCE0F5] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.25)]"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 + i * 0.1 }}
              className="flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl bg-[#F9F8FC] border border-[#DCE0F5] text-center hover:border-[#384AD3] hover:bg-white hover:shadow-md transition-all"
            >
              <span className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#384AD3] tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] sm:text-xs md:text-sm text-[#131946] mt-1 font-display font-semibold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
