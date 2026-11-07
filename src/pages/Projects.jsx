import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories from all projects
  const uniqueCategories = ["All", ...new Set(projects.flatMap((project) => project.category))];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(activeCategory)
            : p.category === activeCategory
        );

  return (
    <Layout>
      <section className="py-12 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Portfolio"
            title="My Projects"
            description="Explore my recent work and see how I bring ideas to life through code."
            align="center"
          />

          {/* Filter (micro1.ai tab style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2.5 mb-12"
          >
            {uniqueCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border",
                  activeCategory === category
                    ? "bg-[#3444da] border-[#6d7cff] text-white shadow-[0_0_20px_-4px_rgba(109,124,255,0.6)]"
                    : "bg-[#191919] border-white/10 text-white/70 hover:border-[#6d7cff]/50 hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground py-12"
            >
              No projects found in this category.
            </motion.p>
          )}
        </div>
      </section>
    </Layout>
  );
}
