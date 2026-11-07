import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AfriNexLogo } from "@/components/AfriNexLogo";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/services", label: "Services" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-[#121212]/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          : "bg-[#121212]/60 backdrop-blur-md border-white/10"
      )}
    >
      <div className="w-full max-w-wide mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <AfriNexLogo />
          </Link>

          {/* Desktop Navigation (micro1.ai sleek minimalist nav links) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 font-sans relative py-1",
                  location.pathname === link.path
                    ? "text-white font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#6d7cff] after:rounded-full"
                    : "text-white/65 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions (micro1.ai signature "Get in touch" pill button with double chevron) */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#25252e] hover:bg-[#3444da] border border-white/15 hover:border-[#6d7cff] text-white text-sm font-medium transition-all duration-300 shadow-sm"
              >
                <span>Get in touch</span>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#a0b3ff] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#121212]/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-medium transition-all",
                    location.pathname === link.path
                      ? "text-white bg-white/10 border-l-2 border-[#6d7cff] pl-5"
                      : "text-white/70 hover:text-white hover:bg-white/5 hover:pl-5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#3444da] hover:bg-[#6d7cff] text-white font-medium text-sm transition-all"
                >
                  <span>Get in touch</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
