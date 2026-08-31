import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ServiceCard({ service, index }) {
  const Icon = service.icon;

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
            whileHover={{ scale: 1.1, rotate: 5 }}
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
        <h3 className="font-display font-bold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        
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

      {/* Interactive Modal Details Button */}
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full mt-auto rounded-xl border-border text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 group/btn"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border border-border p-0 gap-0 rounded-3xl shadow-2xl">
          {/* Banner */}
          <div className="bg-gradient-to-r from-primary/15 via-primary/5 to-transparent p-6 sm:p-8 border-b border-border flex items-center gap-5">
            <div className="p-4 bg-primary text-white rounded-2xl shadow-lg">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <DialogTitle className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-1">
                {service.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-primary" />
                Tailored engineering solutions for maximum impact.
              </DialogDescription>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Long Description */}
            <div>
              <p className="text-base leading-relaxed text-muted-foreground">
                {service.longDescription || service.description}
              </p>
            </div>

            {/* Key Benefits */}
            {service.benefits && (
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-primary rounded-full"/> Key Benefits
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {service.technologies && (
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-primary rounded-full"/> Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-lg border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Process Steps */}
            {service.process && (
              <div className="bg-muted/40 rounded-2xl p-6 border border-border/60">
                <h4 className="font-bold text-xs uppercase tracking-widest text-foreground mb-4">
                  Development Process
                </h4>
                <div className="space-y-3">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-muted-foreground font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA inside Dialog */}
            <div className="pt-4 flex justify-end">
              <Button asChild size="lg" className="rounded-full font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-white shadow-lg">
                <Link to="/contact">Request This Service</Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.article>
  );
}
