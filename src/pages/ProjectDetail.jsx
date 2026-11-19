import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(
    (p) => p.slug === slug || String(p.id) === slug
  );

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Case Study — AfriNex Tech`;
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const otherProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-[#121212] min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>
          </div>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-7 space-y-5"
            >
              <div className="flex flex-wrap items-center gap-2.5">
                {project.industry && (
                  <span className="px-3.5 py-1 rounded-full bg-[#3444da]/20 border border-[#6d7cff]/30 text-xs font-mono uppercase tracking-wider text-[#a0b3ff]">
                    {project.industry}
                  </span>
                )}
                {project.client && (
                  <span className="px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs text-white/70">
                    Client: {project.client}
                  </span>
                )}
              </div>

              <h1 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                {project.title}
              </h1>

              <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                {project.description}
              </p>

              <p className="text-white/65 text-sm sm:text-base leading-relaxed">
                {project.overview}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                {project.demo && (
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full font-medium bg-[#3444da] hover:bg-[#6d7cff] text-white px-7"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Live Platform
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full font-medium border-white/15 bg-white/[0.04] text-white hover:bg-white hover:text-[#121212] px-7"
                >
                  <Link to="/contact">
                    Request a Similar Solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Project Preview Screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#18181c] p-3 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-xl border border-white/10"
                />
              </div>
            </motion.div>
          </div>

          {/* Deliverables & Business Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {project.deliverables && (
              <div className="rounded-2xl bg-[#18181c] border border-white/10 p-7">
                <h2 className="font-display font-semibold text-xl text-white mb-4">
                  Scope &amp; Deliverables
                </h2>
                <ul className="space-y-3">
                  {project.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm sm:text-base text-white/75"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#6d7cff] shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.outcomes && (
              <div className="rounded-2xl bg-[#18181c] border border-white/10 p-7">
                <h2 className="font-display font-semibold text-xl text-white mb-4">
                  Key Business Impact
                </h2>
                <ul className="space-y-3">
                  {project.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm sm:text-base text-white/75"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* More Projects */}
          <div className="pt-12 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-semibold text-2xl text-white">
                More Projects by AfriNex Tech
              </h2>
              <Link
                to="/projects"
                className="text-sm text-[#a0b3ff] hover:text-white transition-colors"
              >
                View all
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((item) => (
                <Link
                  key={item.id}
                  to={`/projects/${item.slug || item.id}`}
                  className="group rounded-2xl bg-[#18181c] border border-white/10 hover:border-[#6d7cff]/50 p-5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-36 rounded-xl overflow-hidden mb-4 border border-white/10 bg-[#121212]">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-display font-medium text-lg text-white group-hover:text-[#a0b3ff] transition-colors mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/60 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#a0b3ff] mt-4">
                    Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
