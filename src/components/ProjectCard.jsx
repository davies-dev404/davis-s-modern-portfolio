import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

export function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const detailPath = `/projects/${project.slug || project.id}`;

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}
      className="organic-block flex flex-col h-full group"
    >
      {/* Image Container */}
      <Link
        to={detailPath}
        className="relative block h-48 -mx-7 -mt-7 mb-6 overflow-hidden rounded-t-2xl border-b border-white/[0.08] bg-[#141418]"
      >
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
      </Link>

      {/* Industry Tag */}
      {project.industry && (
        <span className="text-[11px] font-mono uppercase tracking-wider text-[#a0b3ff] mb-1.5">
          {project.industry}
        </span>
      )}

      {/* Title */}
      <Link to={detailPath}>
        <h3 className="font-display font-medium text-xl text-white mb-2.5 group-hover:text-[#a0b3ff] transition-colors">
          {project.title}
        </h3>
      </Link>

      {/* Description */}
      <p className="font-sans text-white/65 text-sm mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>

      {/* Actions: Dedicated Project Detail Page + Optional Live Site Link */}
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/[0.07]">
        <Button
          size="sm"
          asChild
          className="flex-1 bg-[#3444da] text-white hover:bg-[#4f69d4] rounded-full font-display font-medium text-xs shadow-md shadow-[#3444da]/25"
        >
          <Link to={detailPath}>
            View Details <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Link>
        </Button>

        {project.demo && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-white/15 bg-white/[0.03] text-white/80 hover:bg-white/[0.09] hover:text-white rounded-full font-display font-medium text-xs px-4"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Live Site <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </a>
          </Button>
        )}
      </div>
    </motion.article>
  );
}
