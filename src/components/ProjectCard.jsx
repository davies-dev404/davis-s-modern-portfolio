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
      <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-2xl border-b border-[#DCE0F5] bg-[#F9F8FC]">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#F9F8FC] via-[#EEF0FA] to-[#F9F8FC]" />
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
      <h3 className="font-display font-bold text-xl text-[#131946] mb-3 transition-colors">
        {project.title}
      </h3>

      <p className="font-sans text-[#505672] text-sm mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-display font-semibold bg-[#F9F8FC] text-[#384AD3] border border-[#DCE0F5] rounded-md"
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
          className="flex-1 border-[#DCE0F5] text-[#131946] hover:bg-[#384AD3] hover:text-white hover:border-[#384AD3] rounded-full font-display font-bold text-xs"
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Source
          </a>
        </Button>

        {project.demo && (
          <Button
            size="sm"
            asChild
            className="flex-1 bg-[#384AD3] text-white hover:bg-[#131946] rounded-full font-display font-bold text-xs"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Platform
            </a>
          </Button>
        )}
      </div>
    </motion.article>
  );
}
