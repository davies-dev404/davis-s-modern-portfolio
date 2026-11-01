import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AfriNexLogo } from "@/components/AfriNexLogo";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/services", label: "Solutions" },
  { path: "/projects", label: "Our Work" },
  { path: "/blog", label: "Insights" },
  { path: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#DCE0F5] shadow-[0_2px_18px_-4px_rgba(19,25,70,0.06)]">
      <div className="w-full max-w-wide mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24">
          {/* Company Logo */}
          <Link to="/" className="flex items-center">
            <AfriNexLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-semibold tracking-normal transition-colors duration-300 font-display relative py-1",
                  location.pathname === link.path
                    ? "text-[#384AD3] font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#ED5829] after:rounded-full"
                    : "text-[#131946] hover:text-[#384AD3]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions (MakaziFlow Pill + Get a Quote — No Dark/Light Mode Toggle) */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://makaziflow.afrinextech.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F9F8FC] border border-[#B5BCF0] text-[#384AD3] hover:bg-[#384AD3] hover:text-white text-xs font-display font-bold transition-all duration-300"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#ED5829]" />
                MakaziFlow
              </a>
              <Button
                asChild
                className="rounded-full font-display font-bold text-sm px-6 py-5 bg-[#384AD3] hover:bg-white hover:text-[#384AD3] border-2 border-[#384AD3] text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#131946] hover:text-[#384AD3] transition-colors"
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
            className="lg:hidden bg-white border-t border-[#DCE0F5] overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-display font-bold transition-all",
                    location.pathname === link.path
                      ? "text-[#384AD3] bg-[#F9F8FC] border-l-4 border-[#ED5829] pl-5"
                      : "text-[#131946] hover:text-[#384AD3] hover:bg-[#F9F8FC] hover:pl-5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 px-4 flex flex-col gap-3">
                <a
                  href="https://makaziflow.afrinextech.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#F9F8FC] border border-[#B5BCF0] text-[#384AD3] font-display font-bold text-sm"
                >
                  <Sparkles className="h-4 w-4 text-[#ED5829]" />
                  MakaziFlow Platform
                </a>
                <Button
                  asChild
                  className="w-full rounded-full font-display font-bold py-6 bg-[#384AD3] hover:bg-[#131946] text-white transition-all duration-300"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
