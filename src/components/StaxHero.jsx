import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Briefcase, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { XIcon } from "@/components/XIcon";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

export function StaxHero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const personalInfo = {
    tagline: "Building digital products, brands, and experiences",
    resumeUrl: "/assets/DAVIS%20KIBET%20KIPSOI%20cv%20%20full%20stack.pdf",
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/davies-dev404", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/davies-kibet-342363237", icon: Linkedin },
    { name: "Twitter", url: "https://x.com/Quantito1", icon: XIcon },
    { name: "Email", url: "mailto:info@afrinextech.co.ke", icon: Mail },
  ];

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#121212]"
    >
      {/* micro1.ai Inspired Atmospheric Background + Subtle Horizon Glow */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: "url('/assets/hero-bg-web-dev.png')",
            y: heroY,
          }}
        />
        {/* micro1 signature warm/cool radial & sky mask gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(62% 70% at 54% 18%, rgba(52, 68, 218, 0.28) 0%, rgba(109, 124, 255, 0.14) 32%, rgba(24, 24, 28, 0.88) 68%, #121212 100%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      {/* Main Hero Content (Original Portfolio Copy + Floating Code Window Visible on Mobile & Desktop) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Original Portfolio Introduction */}
          <div className="order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/15 text-white/90 text-xs sm:text-sm font-medium backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                AfriNex Tech • Available for opportunities
              </span>
            </motion.div>

            <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-[1.12] tracking-tight text-white">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.45 }}
                className="block text-white"
              >
                Hi, I&apos;m Davis —
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45 }}
                className="block text-color-gradient-accent"
              >
                Software Engineer
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.45 }}
                className="block text-white/90"
              >
                &amp; Full-Stack Dev
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.45 }}
              className="text-white/65 text-base sm:text-lg md:text-xl max-w-xl mb-8 font-sans leading-relaxed"
            >
              {personalInfo.tagline}. Founder of <strong className="text-white font-medium">AfriNex Tech</strong> — crafting elegant digital solutions with modern technologies and turning complex ideas into seamless user experiences.
            </motion.p>

            {/* Portfolio CTA Buttons (Hire Me + Download CV) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.45 }}
              className="flex flex-row items-center gap-3 sm:gap-4 mb-9 flex-wrap"
            >
              <Button
                size="lg"
                asChild
                className="rounded-full font-medium text-sm h-12 sm:h-14 px-7 sm:px-8 bg-[#3444da] hover:bg-[#6d7cff] text-white border border-[#6d7cff]/40 shadow-[0_0_28px_-4px_rgba(109,124,255,0.5)] transition-all duration-300"
              >
                <Link to="/contact">
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                    Hire Me
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full font-medium text-sm h-12 sm:h-14 px-7 sm:px-8 border border-white/15 bg-[#25252e]/80 text-white hover:bg-white hover:text-[#121212] transition-all duration-300"
              >
                <a href={personalInfo.resumeUrl} download="Davis_Kibet_CV.pdf">
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    Download CV
                  </span>
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.45 }}
              className="flex items-center gap-3.5 flex-wrap"
            >
              <span className="text-xs uppercase tracking-widest text-white/50 font-medium">
                Find me on
              </span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-full bg-white/[0.06] border border-white/10 text-white/75 hover:text-white hover:border-[#6d7cff] hover:bg-[#3444da]/30 transition-all"
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Original Developer Code Window (Visible on Mobile & Desktop) */}
          <div className="order-2 relative block perspective-1000 w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#3444da]/35 via-[#6d7cff]/20 to-transparent rounded-3xl blur-2xl" />
                <motion.div
                  className="relative w-full lg:w-[430px] rounded-2xl bg-[#191919]/95 backdrop-blur-xl border border-white/12 p-5 sm:p-6 overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                    default: { type: "spring", stiffness: 300 },
                  }}
                >
                  {/* Window Controls */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/90" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/90" />
                      <div className="w-3 h-3 rounded-full bg-green-500/90" />
                    </div>
                    <span className="text-xs font-mono text-white/50 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#6d7cff]" />
                      developer.ts • AfriNex Tech
                    </span>
                  </div>

                  {/* Original Developer Code Content */}
                  <div className="font-mono text-xs sm:text-sm leading-relaxed">
                    <div className="text-white/80 mb-1.5">
                      <span className="text-[#6d7cff] font-semibold">const</span>{" "}
                      <span className="text-white font-bold">developer</span> = {"{"}
                    </div>
                    <div className="pl-4 text-white/80">
                      <span className="text-emerald-400">name</span>:{" "}
                      <span className="text-amber-300">&apos;Davis Kipsoi&apos;</span>,
                    </div>
                    <div className="pl-4 text-white/80">
                      <span className="text-emerald-400">brand</span>:{" "}
                      <span className="text-amber-300">&apos;AfriNex Tech&apos;</span>,
                    </div>
                    <div className="pl-4 text-white/80">
                      <span className="text-emerald-400">role</span>:{" "}
                      <span className="text-amber-300">&apos;Full-Stack Dev&apos;</span>,
                    </div>
                    <div className="pl-4 text-white/80">
                      <span className="text-emerald-400">skills</span>: [
                    </div>
                    <div className="pl-8 text-white/80">
                      <span className="text-amber-300">&apos;React&apos;</span>,{" "}
                      <span className="text-amber-300">&apos;Node.js&apos;</span>,
                    </div>
                    <div className="pl-8 text-white/80">
                      <span className="text-amber-300">&apos;JavaScript&apos;</span>,{" "}
                      <span className="text-amber-300">&apos;TypeScript&apos;</span>,
                    </div>
                    <div className="pl-8 text-white/80">
                      <span className="text-amber-300">&apos;Python&apos;</span>
                    </div>
                    <div className="pl-4 text-white/80">],</div>
                    <div className="pl-4 text-white/80">
                      <span className="text-emerald-400">passion</span>:{" "}
                      <span className="text-[#6d7cff] font-semibold">true</span>
                    </div>
                    <div className="text-white/80">{"};"}</div>
                    <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-1.5 text-xs text-[#a0b3ff]">
                      <span>&gt; Ready to build...</span>
                      <span className="animate-pulse font-bold text-[#6d7cff]">_</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom of Hero Section: 4-Stat Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-10 sm:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 p-4 sm:p-6 rounded-2xl bg-[#191919]/90 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 + i * 0.1 }}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center hover:border-[#6d7cff]/50 hover:bg-white/[0.06] transition-all"
            >
              <span className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-color-gradient-accent tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-white/65 mt-1 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
