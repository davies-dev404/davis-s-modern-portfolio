import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Briefcase, Github, Linkedin, Mail, Globe, Users, Zap } from "lucide-react";
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
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={heroRef} className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/hero-bg-web-dev.png')",
            y: heroY
          }}
        />
        <div className="absolute inset-0 bg-white/90 dark:bg-black/80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Now Accepting New Projects
              </span>
            </motion.div>

            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 leading-tight text-stax-black dark:text-white">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{ display: "block" }}
              >
                We Build
              </motion.span>
              <motion.span
                className="text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{ display: "block" }}
              >
                Digital Solutions
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                style={{ display: "block" }}
              >
                That Scale
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-stax-medium-gray text-lg md:text-xl max-w-xl mb-8 font-serif leading-relaxed"
            >
              AfriNex Tech is a Nairobi-based software company delivering modern web applications, APIs, and digital transformation for businesses across Africa and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12 flex-wrap"
            >
              <Button size="lg" asChild className="rounded-full font-bold uppercase tracking-wider h-14 px-8 bg-primary hover:bg-stax-black text-white shadow-lg shadow-primary/25">
                <Link to="/contact">
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Start a Project
                  </span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full font-bold uppercase tracking-wider h-14 px-8 border-2 hover:bg-stax-light-gray">
                <Link to="/services">
                  <span className="flex items-center gap-2">
                    View Services
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <span className="text-sm text-stax-medium-gray font-medium">Find us on</span>
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
                    className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-stax-light-gray text-stax-medium-gray hover:text-primary hover:border-primary transition-all shadow-sm"
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Stats / Visual Element */}
          <div className="order-2 lg:order-2 relative hidden md:block mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl blur-2xl" />
                <motion.div
                  className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl bg-card/80 backdrop-blur-lg border border-border/50 p-8 overflow-hidden grid grid-cols-2 gap-4 content-center"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
                >
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.15 }}
                      className="flex flex-col items-center justify-center p-4 rounded-2xl bg-background/60 border border-border/40 text-center"
                    >
                      <span className="font-display font-extrabold text-3xl text-primary">{stat.value}</span>
                      <span className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle">
        <div className="w-[1px] h-16 bg-stax-medium-gray/30 mx-auto"></div>
      </div>
    </section>
  );
}
