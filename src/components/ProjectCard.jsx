import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

export function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}
      className="organic-block flex flex-col h-full group"
    >
      {/* Fast-Loading Image Container */}
      <div className="relative h-48 -mx-7 -mt-7 mb-6 overflow-hidden rounded-t-2xl border-b border-white/[0.08] bg-[#141418]">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#141418] via-[#1f1f27] to-[#141418]" />
        )}
        <img
          src={project.image}
          alt={project.title}
          width="720"
          height="384"
          loading={index < 3 ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={index < 3 ? "high" : "low"}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Content */}
      <h3 className="font-display font-medium text-xl text-white mb-2.5 group-hover:text-[#a0b3ff] transition-colors">
        {project.title}
      </h3>

      <p className="font-sans text-white/65 text-sm mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-mono font-medium bg-white/[0.05] text-[#a0b3ff] border border-white/[0.08] rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action (Live Demo only — GitHub link removed per request) */}
      {project.demo && (
        <div className="flex items-center mt-auto">
          <Button
            size="sm"
            asChild
            className="w-full bg-[#3444da] text-white hover:bg-[#4f69d4] rounded-full font-display font-medium text-xs shadow-md shadow-[#3444da]/25"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
        </div>
      )}
    </motion.article>
  );
}
