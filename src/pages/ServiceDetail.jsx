import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(
    (s) => s.slug === slug || String(s.id) === slug
  );

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Services — AfriNex Tech`;
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;
  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-[#121212] min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Services</span>
            </Link>
          </div>

          {/* Service Header Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl bg-[#18181c] border border-white/10 p-7 sm:p-10 mb-10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#3444da] text-white flex items-center justify-center shrink-0 shadow-lg">
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#a0b3ff] block mb-1.5">
                  AfriNex Tech • Digital Solutions
                </span>
                <h1 className="font-display font-semibold text-3xl sm:text-4xl text-white">
                  {service.title}
                </h1>
              </div>
            </div>

            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8">
              {service.longDescription || service.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full font-medium bg-[#3444da] hover:bg-[#6d7cff] text-white px-8"
              >
                <Link to="/contact">
                  Request This Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full font-medium border-white/15 bg-white/[0.04] text-white hover:bg-white hover:text-[#121212] px-7"
              >
                <a
                  href="https://wa.me/254790264792"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discuss on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Benefits & Delivery Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {service.benefits && (
              <div className="rounded-2xl bg-[#18181c] border border-white/10 p-7">
                <h2 className="font-display font-semibold text-xl text-white mb-5">
                  Key Business Benefits
                </h2>
                <ul className="space-y-3.5">
                  {service.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm sm:text-base text-white/75"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#6d7cff] shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.process && (
              <div className="rounded-2xl bg-[#18181c] border border-white/10 p-7">
                <h2 className="font-display font-semibold text-xl text-white mb-5">
                  Delivery Process
                </h2>
                <div className="space-y-3.5">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex items-center gap-3.5 text-sm sm:text-base">
                      <span className="w-7 h-7 rounded-full bg-[#3444da]/25 border border-[#6d7cff]/30 text-[#a0b3ff] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-white/80 font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Core Capabilities */}
          {service.features && (
            <div className="rounded-2xl bg-[#18181c] border border-white/10 p-7 mb-14">
              <h2 className="font-display font-semibold text-xl text-white mb-4">
                Included Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.features.map((feat) => (
                  <div
                    key={feat}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm font-medium text-white/85"
                  >
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Services */}
          <div className="pt-10 border-t border-white/10">
            <h2 className="font-display font-semibold text-2xl text-white mb-6">
              Other Services We Offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherServices.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <Link
                    key={item.id}
                    to={`/services/${item.slug || item.id}`}
                    className="group rounded-2xl bg-[#18181c] border border-white/10 hover:border-[#6d7cff]/50 p-5 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#3444da]/20 text-[#a0b3ff] flex items-center justify-center mb-3.5">
                        <ItemIcon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-medium text-base text-white group-hover:text-[#a0b3ff] transition-colors mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/60 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#a0b3ff] mt-4">
                      View Service <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
