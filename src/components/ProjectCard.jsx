import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
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
      className="organic-block flex flex-col h-full hover:shadow-xl transition-all duration-300"
    >
      {/* Fast-Loading Image Container */}
      <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-xl border-b border-border bg-slate-100">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-100 via-blue-50 to-slate-100" />
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
          className={`w-full h-full object-cover transition-all duration-500 hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-2xl text-stax-black mb-3 transition-colors">
        {project.title}
      </h3>

      <p className="font-serif text-stax-medium-gray text-base mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border border-blue-200/60 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-auto">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="flex-1 border-slate-300 text-stax-dark-gray hover:bg-primary hover:text-white hover:border-primary rounded-full font-bold uppercase tracking-wider text-xs"
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Source
          </a>
        </Button>

        {project.demo && (
          <Button
            size="sm"
            asChild
            className="flex-1 bg-primary text-white hover:bg-stax-black rounded-full font-bold uppercase tracking-wider text-xs"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
        )}
      </div>
    </motion.article>
  );
}
