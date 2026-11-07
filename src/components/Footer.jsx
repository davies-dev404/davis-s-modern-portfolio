import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { XIcon } from "./XIcon";
import { AfriNexLogo } from "./AfriNexLogo";

const socialLinks = [
  { icon: Github, href: "https://github.com/davies-dev404", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/davies-kibet-342363237", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/Quantito1", label: "X (Twitter)" },
  { icon: Mail, href: "mailto:info@afrinextech.co.ke", label: "Email" },
];

const footerLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/services", label: "Services" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

const serviceLinks = [
  { path: "/services", label: "Web App Development" },
  { path: "/services", label: "Backend & API Dev" },
  { path: "/services", label: "UI/UX Design" },
  { path: "/services", label: "Graphic Design" },
  { path: "/services", label: "Basic Cybersecurity" },
];

export function Footer() {
  return (
    <footer className="bg-[#0d0d11] text-white border-t border-white/[0.08]">
      <div className="container mx-auto px-4 py-10 md:py-16">
        {/* Multi-column layout even on small mobile screens (grid-cols-2 on mobile, grid-cols-4 on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Brand & Bio (Full width on compact mobile so logo + bio fit cleanly, 1 col on desktop) */}
          <div className="col-span-2 lg:col-span-1 space-y-3">
            <Link to="/" className="inline-block">
              <AfriNexLogo />
            </Link>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Software Engineer &amp; Full-Stack Developer crafting modern web applications, APIs, and digital solutions under AfriNex Tech.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={link.label}
                  className="p-2 rounded-full bg-white/[0.06] border border-white/10 text-white/75 hover:bg-[#3444da] hover:border-[#6d7cff] hover:text-white transition-colors"
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 1 on Mobile: Quick Links */}
          <div className="col-span-1 space-y-3">
            <h3 className="font-mono font-medium text-white/50 uppercase tracking-widest text-xs">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white/70 hover:text-[#6d7cff] transition-colors text-xs sm:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2 on Mobile: Services & Flagship */}
          <div className="col-span-1 space-y-3">
            <h3 className="font-mono font-medium text-white/50 uppercase tracking-widest text-xs">
              Services
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://makaziflow.afrinextech.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#a0b3ff] hover:text-white font-display font-medium transition-colors text-xs sm:text-sm"
              >
                MakaziFlow <ExternalLink className="h-3 w-3 shrink-0" />
              </a>
              {serviceLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-white/70 hover:text-[#6d7cff] transition-colors text-xs sm:text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Get in Touch (Compact 2-column row on mobile, 1 column on desktop) */}
          <div className="col-span-2 lg:col-span-1 pt-4 lg:pt-0 border-t border-white/10 lg:border-none flex flex-col sm:flex-row lg:flex-col justify-between gap-4">
            <div className="space-y-2.5">
              <h3 className="font-mono font-medium text-white/50 uppercase tracking-widest text-xs">
                Get in Touch
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm">
                  <MapPin className="h-3.5 w-3.5 text-[#6d7cff] shrink-0" />
                  Nairobi, Kenya
                </div>
                <a
                  href="tel:+254790264792"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  <Phone className="h-3.5 w-3.5 text-[#6d7cff] shrink-0" />
                  +254 790 264 792
                </a>
                <a
                  href="mailto:info@afrinextech.co.ke"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs sm:text-sm sm:col-span-2 lg:col-span-1"
                >
                  <Mail className="h-3.5 w-3.5 text-[#6d7cff] shrink-0" />
                  info@afrinextech.co.ke
                </a>
              </div>
            </div>
            <div className="pt-1">
              <Button
                asChild
                size="sm"
                className="w-full sm:w-auto rounded-full font-display font-medium bg-[#3444da] hover:bg-[#4f69d4] text-white text-xs px-5 py-4 shadow-md shadow-[#3444da]/25"
              >
                <a
                  href="https://wa.me/254790264792?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} AfriNex Tech. All rights reserved.
          </p>
          <p className="text-white/40 text-[11px]">
            Davis Kibet Kipsoi • AfriNex Tech Digital Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
