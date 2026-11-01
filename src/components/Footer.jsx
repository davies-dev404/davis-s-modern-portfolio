import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
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
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Our Work" },
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
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <AfriNexLogo />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AfriNex Tech is a premier software engineering &amp; digital solutions company in Nairobi, Kenya — building scalable web platforms, SaaS products, and enterprise systems across Africa.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((link) => (
                <Button key={link.label} variant="ghost" size="icon" asChild>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    aria-label={link.label}
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-foreground uppercase tracking-wider text-sm">Company</h3>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-foreground uppercase tracking-wider text-sm">Our Solutions</h3>
            <div className="flex flex-col gap-2.5">
              {solutionLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Headquarters */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-foreground uppercase tracking-wider text-sm">Headquarters</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                Nairobi, Kenya
              </div>
              <a
                href="mailto:info@afrinextech.co.ke"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="h-4 w-4 text-primary shrink-0" />
                info@afrinextech.co.ke
              </a>
              <a
                href="tel:+254790264792"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="h-4 w-4 text-primary shrink-0" />
                +254 790 264 792
              </a>
            </div>
            <div className="pt-2">
              <Button variant="hero" size="sm" asChild>
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

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AfriNex Tech. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Engineered in Nairobi, Kenya • Empowering Businesses Across Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
