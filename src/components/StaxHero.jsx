import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Github, Linkedin, Mail } from "lucide-react";
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
      {/* Background Image with Clean Corporate Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/hero-bg-web-dev.png')",
            y: heroY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/92 to-blue-50/90" />
      </div>

      {/* Main Hero Content (Left Text + Right Floating Code Window) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Now Accepting New Enterprise &amp; Startup Projects
              </span>
            </motion.div>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-stax-black">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.45 }}
                style={{ display: "block" }}
              >
                We Build
              </motion.span>
              <motion.span
                className="text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45 }}
                style={{ display: "block" }}
              >
                Digital Solutions
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.45 }}
                style={{ display: "block" }}
              >
                That Scale
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.45 }}
              className="text-stax-medium-gray text-lg md:text-xl max-w-xl mb-8 font-serif leading-relaxed"
            >
              AfriNex Tech is a Nairobi-based software engineering company delivering custom web platforms, SaaS products, API integrations, and digital transformation across Africa and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.45 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10 flex-wrap"
            >
              <Button
                size="lg"
                asChild
                className="rounded-full font-bold uppercase tracking-wider h-14 px-8 bg-primary hover:bg-stax-black text-white shadow-lg shadow-primary/25"
              >
                <Link to="/contact">
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Start a Project
                  </span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full font-bold uppercase tracking-wider h-14 px-8 border-2 border-slate-300 text-stax-black hover:border-primary hover:text-primary bg-white/80"
              >
                <Link to="/services">
                  <span className="flex items-center gap-2">
                    Explore Services
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
              className="flex items-center gap-4 flex-wrap"
            >
              <span className="text-sm text-stax-medium-gray font-semibold">Connect with us</span>
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
                    className="p-3 rounded-full bg-white border border-slate-200 text-stax-medium-gray hover:text-primary hover:border-primary transition-all shadow-sm"
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Restored Animated Code Window */}
          <div className="order-2 relative hidden md:block perspective-1000 mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/25 to-cyan-500/15 rounded-3xl blur-2xl" />
                <motion.div
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-slate-900/95 backdrop-blur-lg border border-slate-700/80 p-6 overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02, rotateY: 10, rotateX: -5 }}
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                    default: { type: "spring", stiffness: 300 },
                  }}
                >
                  {/* Window Controls */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">afrinex-engine.ts</span>
                  </div>

                  {/* Code Content */}
                  <div className="mt-10 font-mono text-sm leading-relaxed">
                    <div className="text-slate-300 mb-1.5">
                      <span className="text-sky-400">const</span>{" "}
                      <span className="text-white font-semibold">afriNexTech</span> = {"{"}
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-emerald-400">company</span>:{" "}
                      <span className="text-amber-300">&apos;AfriNex Tech&apos;</span>,
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-emerald-400">focus</span>:{" "}
                      <span className="text-amber-300">&apos;Digital Solutions&apos;</span>,
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-emerald-400">stack</span>: [
                    </div>
                    <div className="pl-8 text-slate-300">
                      <span className="text-amber-300">&apos;React&apos;</span>,{" "}
                      <span className="text-amber-300">&apos;Node.js&apos;</span>,
                    </div>
                    <div className="pl-8 text-slate-300">
                      <span className="text-amber-300">&apos;TypeScript&apos;</span>,{" "}
                      <span className="text-amber-300">&apos;Python&apos;</span>,
                    </div>
                    <div className="pl-8 text-slate-300">
                      <span className="text-amber-300">&apos;Cloud &amp; APIs&apos;</span>
                    </div>
                    <div className="pl-4 text-slate-300">],</div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-emerald-400">enterpriseReady</span>:{" "}
                      <span className="text-sky-400">true</span>
                    </div>
                    <div className="text-slate-300">{"};"}</div>
                    <div className="mt-3 flex items-center gap-1 text-xs text-sky-400">
                      <span>&gt; Deploying scalable systems...</span>
                      <span className="animate-pulse font-bold">_</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom of Hero Section: 4-Column Company Stats Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-6 md:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 + i * 0.1 }}
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50/90 border border-slate-200/70 text-center hover:border-primary/40 hover:bg-blue-50/40 transition-colors"
            >
              <span className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-wide">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-stax-medium-gray mt-1 font-semibold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
