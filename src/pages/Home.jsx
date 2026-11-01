import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, Globe, Users, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { StaxHero } from "@/components/StaxHero";
import { StaxSection } from "@/components/StaxSection";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const whyUs = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "We ship production-ready solutions quickly without sacrificing quality."
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    desc: "Every system we build is architected for security and future growth."
  },
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "A senior engineering team committed to your project from day one."
  },
  {
    icon: Globe,
    title: "Africa-First Focus",
    desc: "Built for African realities — mobile-first, low bandwidth ready, local context."
  },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <Layout>
      <StaxHero />

      {/* Who We Are */}
      <StaxSection background="light" className="text-center" width="content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-5xl md:text-6xl text-stax-black dark:text-white mb-4 leading-none">
            Built in Africa, <br /> Built for the World
          </h2>
          <h3 className="font-sans font-normal text-2xl md:text-3xl text-stax-medium-gray dark:text-gray-300 leading-tight mb-8">
            Technology partner for businesses that want to grow with{" "}
            <strong className="text-stax-black dark:text-white">AFRINEX TECH</strong>
          </h3>
          <p className="font-serif text-lg text-stax-medium-gray dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We are a software engineering company delivering custom web applications, APIs, and digital transformation services. From startups to enterprises, we partner with ambitious businesses to build technology that works.
          </p>
        </motion.div>
      </StaxSection>

      {/* Services / "Blocks" Section */}
      <StaxSection background="accent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative -mt-32 z-20">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </StaxSection>

      {/* Why Choose Us */}
      <StaxSection background="white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h6 className="font-sans font-bold uppercase tracking-widest text-stax-medium-gray dark:text-gray-400 mb-2">Why Us</h6>
            <h2 className="font-display font-bold text-5xl text-stax-black dark:text-white">Why AfriNex Tech?</h2>
          </div>
          <Button variant="outline" size="lg" asChild className="hidden md:flex rounded-full font-bold uppercase tracking-wider">
            <Link to="/about">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-background/50 hover:border-primary/50 hover:shadow-md transition-all group"
            >
              <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-bold text-lg text-stax-black dark:text-white mb-2">{item.title}</h3>
              <p className="text-stax-medium-gray dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </StaxSection>

      {/* Featured Portfolio */}
      <StaxSection background="light">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h6 className="font-sans font-bold uppercase tracking-widest text-stax-medium-gray dark:text-gray-400 mb-2">Portfolio</h6>
            <h2 className="font-display font-bold text-5xl text-stax-black dark:text-white">Featured Work</h2>
          </div>
          <Button variant="outline" size="lg" asChild className="hidden md:flex rounded-full font-bold uppercase tracking-wider">
            <Link to="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" size="lg" asChild className="rounded-full font-bold uppercase tracking-wider">
            <Link to="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </StaxSection>

      {/* CTA Section */}
      <StaxSection background="white" className="border-t border-border">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-5xl md:text-6xl text-stax-black dark:text-white mb-6">
            Ready to Build <strong className="text-primary">Something Great?</strong>
          </h2>
          <p className="font-serif text-lg text-stax-medium-gray mb-10 leading-relaxed">
            Have a project in mind? Let's talk. Whether it's a web app, API integration, or a full digital transformation — AfriNex Tech is your partner.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <Button asChild className="rounded-full font-bold uppercase tracking-wider px-8 py-6 bg-primary hover:bg-stax-black text-white transition-all duration-300 shadow-md">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>

            <Button asChild variant="outline" className="rounded-full font-bold uppercase tracking-wider px-8 py-6 border-2 border-stax-light-gray text-stax-medium-gray hover:text-primary hover:border-primary">
              <a href="https://wa.me/254790264792" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </StaxSection>
    </Layout>
  );
}
