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
  { path: "/services", label: "Enterprise Solutions" },
  { path: "/projects", label: "Platforms & Case Studies" },
  { path: "/blog", label: "Insights & Blog" },
  { path: "/contact", label: "Contact Us" },
];

const solutionLinks = [
  { path: "/services", label: "Enterprise Web Applications" },
  { path: "/services", label: "Backend & API Integrations" },
  { path: "/services", label: "UI/UX & Product Design" },
  { path: "/services", label: "SaaS & PropTech Platforms" },
  { path: "/services", label: "Cloud & Cybersecurity" },
];

export function Footer() {
  return (
    <footer className="bg-[#131946] text-white border-t border-[#25318D]">
      <div className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <AfriNexLogo variant="light" />
            </Link>
            <p className="text-[#B5BCF0] text-sm leading-relaxed">
              AfriNex Tech is a premier software engineering &amp; informatics company in Nairobi, Kenya — building connected ecosystems, SaaS products like MakaziFlow360°, and enterprise digital solutions across Africa.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={link.label}
                  className="p-2.5 rounded-full bg-[#25318D]/60 text-[#B5BCF0] hover:bg-[#ED5829] hover:text-white transition-colors"
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-white uppercase tracking-wider text-xs">
              Company
            </h3>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-[#B5BCF0] hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Platforms & Solutions */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-white uppercase tracking-wider text-xs">
              Platforms &amp; Solutions
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://makaziflow.afrinextech.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#ED5829] hover:text-white font-display font-semibold transition-colors text-sm"
              >
                MakaziFlow360° SaaS <ExternalLink className="h-3.5 w-3.5" />
              </a>
              {solutionLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-[#B5BCF0] hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Headquarters */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-white uppercase tracking-wider text-xs">
              Headquarters
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-[#B5BCF0] text-sm">
                <MapPin className="h-4 w-4 text-[#ED5829] shrink-0" />
                Nairobi, Kenya
              </div>
              <a
                href="mailto:info@afrinextech.co.ke"
                className="flex items-center gap-2.5 text-[#B5BCF0] hover:text-white transition-colors text-sm"
              >
                <Mail className="h-4 w-4 text-[#ED5829] shrink-0" />
                info@afrinextech.co.ke
              </a>
              <a
                href="tel:+254790264792"
                className="flex items-center gap-2.5 text-[#B5BCF0] hover:text-white transition-colors text-sm"
              >
                <Phone className="h-4 w-4 text-[#ED5829] shrink-0" />
                +254 790 264 792
              </a>
            </div>
            <div className="pt-2">
              <Button
                asChild
                size="sm"
                className="rounded-full font-display font-bold bg-[#384AD3] hover:bg-[#ED5829] text-white px-5 py-5"
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

        <div className="mt-12 pt-6 border-t border-[#25318D] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[#B5BCF0] text-sm">
            © {new Date().getFullYear()} AfriNex Tech. All rights reserved.
          </p>
          <p className="text-[#B5BCF0]/80 text-xs">
            Engineered in Nairobi, Kenya • Connected Digital Ecosystems Across Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
