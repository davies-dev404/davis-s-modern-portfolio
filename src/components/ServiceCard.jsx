import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const detailPath = `/services/${service.slug || service.id}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col justify-between p-8 rounded-3xl bg-card border border-border/80 shadow-sm hover:shadow-2xl hover:border-primary/40 transition-all duration-500 overflow-hidden h-full"
    >
      {/* Background Ambient Glow */}
      <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />

      <div>
        {/* Header Icon with Glowing Container */}
        <div className="flex items-center justify-between mb-6">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-300"
          >
            <Icon className="w-8 h-8" />
          </motion.div>
          <span className="text-xs font-mono font-bold text-muted-foreground/60 tracking-wider">
            0{index + 1}
          </span>
        </div>

        {/* Title */}
        <Link to={detailPath}>
          <h3 className="font-display font-bold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
        </Link>

        {/* Short Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Feature Badges Preview */}
        {service.features && (
          <div className="flex flex-wrap gap-1.5 mb-8">
            {service.features.slice(0, 3).map((feat) => (
              <span
                key={feat}
                className="px-2.5 py-1 text-[11px] font-semibold bg-muted/60 text-muted-foreground rounded-full border border-border/50 group-hover:border-primary/20 transition-colors"
              >
                {feat}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Dedicated Service Detail Page Link */}
      <Button
        variant="outline"
        size="lg"
        asChild
        className="w-full mt-auto rounded-xl border-border text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 group/btn"
      >
        <Link to={detailPath}>
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </Button>
    </motion.article>
  );
}
