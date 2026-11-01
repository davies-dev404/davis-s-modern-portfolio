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
      className="relative w-full min-h-[90vh] flex flex-col justify-between overflow-hidden"
    >
      {/* Background Image with Savannah Informatics Soft Lavender-White & Royal Indigo Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/hero-bg-web-dev.png')",
            y: heroY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9F8FC]/96 via-white/94 to-[#EEF0FA]/92" />
        {/* Ambient Savannah Indigo & Coral Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#384AD3]/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#8015E8]/10 blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content (Left Enterprise Story + Right Restored Floating Code Window) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pt-14 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Savannah Informatics Enterprise Positioning */}
          <div className="order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="mb-6 flex flex-wrap items-center gap-2.5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#384AD3]/10 border border-[#384AD3]/25 text-[#384AD3] text-xs sm:text-sm font-display font-bold backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#ED5829] animate-pulse" />
                AfriNex Tech • Creators of MakaziFlow360° &amp; Enterprise Platforms
              </span>
            </motion.div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[54px] mb-6 leading-[1.15] tracking-tight text-[#131946]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.45 }}
                style={{ display: "block" }}
              >
                Powering Digital
              </motion.span>
              <motion.span
                className="text-[#384AD3]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45 }}
                style={{ display: "block" }}
              >
                Informatics &amp; SaaS
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.45 }}
                style={{ display: "block" }}
              >
                Across Africa
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.45 }}
              className="text-[#505672] text-base md:text-lg max-w-xl mb-6 font-sans leading-relaxed"
            >
              AfriNex Tech builds connected digital ecosystems, enterprise software, and cloud-native SaaS platforms that simplify complex operations for property managers, healthcare providers, financial institutions, and growing enterprises.
            </motion.p>

            {/* Key Value Pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78, duration: 0.4 }}
              className="flex flex-wrap gap-4 mb-8 text-xs sm:text-sm font-medium text-[#131946]"
            >
              {[
                "Interoperable APIs & M-Pesa",
                "Cloud-Native Security",
                "24/7 Enterprise SLA",
              ].map((pill) => (
                <span key={pill} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ED5829] shrink-0" />
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* Savannah Informatics Style CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.45 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-9 flex-wrap"
            >
              <Button
                size="lg"
                asChild
                className="rounded-full font-display font-bold text-sm h-14 px-8 bg-[#384AD3] hover:bg-white hover:text-[#384AD3] border-2 border-[#384AD3] text-white shadow-lg shadow-[#384AD3]/25 transition-all duration-300"
              >
                <Link to="/contact">
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Talk to Our Team
                  </span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full font-display font-bold text-sm h-14 px-8 border-2 border-[#131946]/20 text-[#131946] hover:border-[#384AD3] hover:text-[#384AD3] bg-white/90 transition-all duration-300"
              >
                <Link to="/services">
                  <span className="flex items-center gap-2">
                    Explore Solutions
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.45 }}
              className="flex items-center gap-3.5 flex-wrap"
            >
              <span className="text-xs uppercase tracking-wider text-[#505672] font-display font-bold">
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
                    className="p-2.5 rounded-full bg-white border border-[#DCE0F5] text-[#25318D] hover:text-white hover:bg-[#384AD3] hover:border-[#384AD3] transition-all shadow-sm"
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Restored Animated Code Window (Styled with Savannah Deep Indigo #131946 & Royal Indigo #384AD3) */}
          <div className="order-2 relative hidden md:block perspective-1000 mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#384AD3]/30 via-[#8015E8]/20 to-[#ED5829]/20 rounded-3xl blur-2xl" />
                <motion.div
                  className="relative w-80 h-80 lg:w-[420px] lg:h-[390px] rounded-3xl bg-[#131946] backdrop-blur-lg border border-[#384AD3]/50 p-6 overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02, rotateY: 8, rotateX: -4 }}
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                    default: { type: "spring", stiffness: 300 },
                  }}
                >
                  {/* Window Controls */}
                  <div className="absolute top-4 left-5 right-5 flex items-center justify-between border-b border-[#25318D]/70 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ED5829]" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-[#407C51]" />
                    </div>
                    <span className="text-xs font-mono text-[#B5BCF0] flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#ED5829]" />
                      afrinex-informatics.ts
                    </span>
                  </div>

                  {/* Code Content */}
                  <div className="mt-10 font-mono text-sm leading-relaxed">
                    <div className="text-[#B5BCF0] mb-1.5">
                      <span className="text-[#ED5829] font-semibold">const</span>{" "}
                      <span className="text-white font-bold">afriNexPlatform</span> = {"{"}
                    </div>
                    <div className="pl-4 text-[#B5BCF0]">
                      <span className="text-[#8F98E2]">organization</span>:{" "}
                      <span className="text-amber-300">&apos;AfriNex Tech&apos;</span>,
                    </div>
                    <div className="pl-4 text-[#B5BCF0]">
                      <span className="text-[#8F98E2]">flagship</span>:{" "}
                      <span className="text-emerald-300">&apos;MakaziFlow360°&apos;</span>,
                    </div>
                    <div className="pl-4 text-[#B5BCF0]">
                      <span className="text-[#8F98E2]">capabilities</span>: [
                    </div>
                    <div className="pl-8 text-[#B5BCF0]">
                      <span className="text-amber-300">&apos;Enterprise SaaS&apos;</span>,{" "}
                      <span className="text-amber-300">&apos;Informatics&apos;</span>,
                    </div>
                    <div className="pl-8 text-[#B5BCF0]">
                      <span className="text-amber-300">&apos;M-Pesa &amp; ERP APIs&apos;</span>,
                    </div>
                    <div className="pl-8 text-[#B5BCF0]">
                      <span className="text-amber-300">&apos;Cloud &amp; AI Analytics&apos;</span>
                    </div>
                    <div className="pl-4 text-[#B5BCF0]">],</div>
                    <div className="pl-4 text-[#B5BCF0]">
                      <span className="text-[#8F98E2]">uptimeSLA</span>:{" "}
                      <span className="text-[#ED5829] font-semibold">&apos;99.9%&apos;</span>
                    </div>
                    <div className="text-[#B5BCF0]">{"};"}</div>
                    <div className="mt-3 pt-2 border-t border-[#25318D]/60 flex items-center gap-1.5 text-xs text-emerald-300">
                      <span>&gt; Connected ecosystems active...</span>
                      <span className="animate-pulse font-bold text-[#ED5829]">_</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom of Hero Section: 4-Column Company Stats Bar (Preserved & Styled in Savannah Informatics Palette) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-6 md:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-[#DCE0F5] shadow-[0_18px_40px_-12px_rgba(19,25,70,0.12)]"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 + i * 0.1 }}
              className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#F9F8FC] border border-[#DCE0F5] text-center hover:border-[#384AD3] hover:bg-white hover:shadow-md transition-all"
            >
              <span className="font-display font-extrabold text-3xl md:text-4xl text-[#384AD3] tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-[#131946] mt-1.5 font-display font-semibold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
