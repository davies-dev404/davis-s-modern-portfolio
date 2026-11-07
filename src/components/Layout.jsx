import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ROUTE_SEO = {
  "/": {
    title: "AfriNex Tech | Davis Kibet Kipsoi — Software Engineer & Full-Stack Developer in Kenya",
    description:
      "AfriNex Tech is the digital solutions studio & engineering portfolio of Davis Kibet Kipsoi, a Software Engineer & Full-Stack Developer in Nairobi, Kenya. Creator of MakaziFlow SaaS, building React, Node.js, Python, and M-Pesa integrated web platforms.",
  },
  "/about": {
    title: "About Davis Kibet Kipsoi | AfriNex Tech — Software Engineer & Full-Stack Developer",
    description:
      "Learn about Davis Kibet Kipsoi, BSc IT graduate from Mount Kenya University, Power Learn Project Alumnus, and founder of AfriNex Tech in Nairobi, Kenya.",
  },
  "/projects": {
    title: "Projects & Case Studies | AfriNex Tech — Davis Kibet Kipsoi",
    description:
      "Explore full-stack web applications, SaaS platforms like MakaziFlow, legal portals, e-commerce systems, and enterprise solutions engineered by Davis Kibet Kipsoi at AfriNex Tech.",
  },
  "/services": {
    title: "Services | AfriNex Tech — Web Development, APIs, UI/UX & Cybersecurity in Kenya",
    description:
      "Professional software engineering services by Davis Kibet Kipsoi at AfriNex Tech: Web Application Development, Backend & API Development, UI/UX Design, Graphic Design, and Basic Cybersecurity.",
  },
  "/blog": {
    title: "Engineering Blog & Insights | AfriNex Tech — Davis Kibet Kipsoi",
    description:
      "Articles, tutorials, and software engineering insights on React, TypeScript, Node.js, Docker, and scalable web architecture by Davis Kibet Kipsoi.",
  },
  "/contact": {
    title: "Contact Davis Kibet Kipsoi | AfriNex Tech — Nairobi, Kenya",
    description:
      "Get in touch with Davis Kibet Kipsoi at AfriNex Tech for custom web development, SaaS platforms, or API integrations. Email info@afrinextech.co.ke or call +254 790 264 792.",
  },
};

export function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = ROUTE_SEO[pathname] || ROUTE_SEO["/"];
    document.title = seo.title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute("content", seo.description);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      const cleanPath = pathname === "/" ? "" : pathname;
      canonicalLink.setAttribute("href", `https://afrinextech.co.ke${cleanPath}`);
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
