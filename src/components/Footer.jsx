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
  { path: "/about", label: "About Us" },
  { path: "/services", label: "Solutions" },
  { path: "/projects", label: "Our Work" },
  { path: "/blog", label: "Insights & Blog" },
  { path: "/contact", label: "Contact Us" },
];

const solutionLinks = [
  { path: "/services", label: "Enterprise Web Apps" },
  { path: "/services", label: "API & M-Pesa Integrations" },
  { path: "/services", label: "UI/UX & Product Design" },
  { path: "/services", label: "SaaS & PropTech Systems" },
  { path: "/services", label: "Cloud & Cybersecurity" },
];

export function Footer() {
  return (
    <footer className="bg-[#131946] text-white border-t border-[#25318D]">
      <div className="container mx-auto px-4 py-10 md:py-16">
        {/* Multi-column layout even on small mobile screens (grid-cols-2 on mobile, grid-cols-4 on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Company Brand (Full width on compact mobile so logo + bio fit cleanly, 1 col on desktop) */}
          <div className="col-span-2 lg:col-span-1 space-y-3">
            <Link to="/" className="inline-block">
              <AfriNexLogo variant="light" />
            </Link>
            <p className="text-[#B5BCF0] text-xs sm:text-sm leading-relaxed">
              AfriNex Tech is a premier software engineering &amp; digital solutions company in Nairobi, Kenya — building custom web platforms, SaaS products like MakaziFlow, and enterprise systems.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={link.label}
                  className="p-2 rounded-full bg-[#25318D]/60 text-[#B5BCF0] hover:bg-[#ED5829] hover:text-white transition-colors"
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 1 on Mobile: Company Links */}
          <div className="col-span-1 space-y-3">
            <h3 className="font-display font-bold text-white uppercase tracking-wider text-xs">
              Company
            </h3>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-[#B5BCF0] hover:text-white transition-colors text-xs sm:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2 on Mobile: Platforms & Solutions */}
          <div className="col-span-1 space-y-3">
            <h3 className="font-display font-bold text-white uppercase tracking-wider text-xs">
              Solutions
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://makaziflow.afrinextech.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#ED5829] hover:text-white font-display font-semibold transition-colors text-xs sm:text-sm"
              >
                MakaziFlow <ExternalLink className="h-3 w-3 shrink-0" />
              </a>
              {solutionLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-[#B5BCF0] hover:text-white transition-colors text-xs sm:text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Headquarters & Quick Contact (Compact 2-column row on mobile, 1 column on desktop) */}
          <div className="col-span-2 lg:col-span-1 pt-4 lg:pt-0 border-t border-[#25318D]/60 lg:border-none flex flex-col sm:flex-row lg:flex-col justify-between gap-4">
            <div className="space-y-2.5">
              <h3 className="font-display font-bold text-white uppercase tracking-wider text-xs">
                Headquarters
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                <div className="flex items-center gap-2 text-[#B5BCF0] text-xs sm:text-sm">
                  <MapPin className="h-3.5 w-3.5 text-[#ED5829] shrink-0" />
                  Nairobi, Kenya
                </div>
                <a
                  href="tel:+254790264792"
                  className="flex items-center gap-2 text-[#B5BCF0] hover:text-white transition-colors text-xs sm:text-sm"
                >
                  <Phone className="h-3.5 w-3.5 text-[#ED5829] shrink-0" />
                  +254 790 264 792
                </a>
                <a
                  href="mailto:info@afrinextech.co.ke"
                  className="flex items-center gap-2 text-[#B5BCF0] hover:text-white transition-colors text-xs sm:text-sm sm:col-span-2 lg:col-span-1"
                >
                  <Mail className="h-3.5 w-3.5 text-[#ED5829] shrink-0" />
                  info@afrinextech.co.ke
                </a>
              </div>
            </div>
            <div className="pt-1">
              <Button
                asChild
                size="sm"
                className="w-full sm:w-auto rounded-full font-display font-bold bg-[#384AD3] hover:bg-[#ED5829] text-white text-xs px-5 py-4"
              >
                <a
                  href="https://wa.me/254790264792?text=Hello%20AfriNex%20Tech%2C%20we%20would%20like%20to%20inquire%20about%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with Sales on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-[#25318D] flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-[#B5BCF0] text-xs">
            © {new Date().getFullYear()} AfriNex Tech. All rights reserved.
          </p>
          <p className="text-[#B5BCF0]/80 text-[11px]">
            Engineered in Nairobi, Kenya • Digital Solutions Across Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
