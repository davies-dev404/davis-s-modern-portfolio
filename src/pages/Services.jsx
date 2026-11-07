import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <Layout>
      {/* Main Section Header + Services Grid */}
      <section className="py-10 md:py-16 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Services &amp; Expertise</span>
            </div>

            <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-4">
              What I <span className="text-color-gradient-accent">Offer</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive software engineering and design solutions tailored to bring your ideas to life with performance, elegance, and scale.
            </p>
          </motion.div>

          {/* Animated Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          >
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#17171c] text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-primary/5 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              Ready to Build <span className="text-color-gradient-accent">Something Extraordinary?</span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Let&apos;s collaborate to transform your concept into a high-performing digital experience.
            </p>
            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-full font-medium bg-[#3444da] hover:bg-[#6d7cff] text-white shadow-xl transition-all duration-300"
              >
                <Link to="/contact" className="flex items-center gap-2 px-8 py-6">
                  <span>Get a Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
