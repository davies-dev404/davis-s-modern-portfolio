import { Code, Server, Layout as LayoutIcon, Palette, ShieldCheck } from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Web Application Development",
    description: "Building modern, responsive, and scalable web applications using cutting-edge technologies.",
    longDescription: "I specialize in building high-performance, scalable, and secure web applications tailored to your business needs. From initial concept to deployment, I ensure every aspect of your application is optimized for speed, usability, and reliability.",
    icon: Code,
    features: ["React & Next.js", "Vue.js & Nuxt", "TypeScript", "Responsive Design"],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vite"],
    benefits: [
        "Blazing fast performance",
        "SEO optimized architecture for higher rankings",
        "Responsive design that works on all devices"
    ],
    process: [
        "Requirement Gathering & Analysis",
        "UI/UX Design & Prototyping",
        "Frontend & Backend Development",
        "Testing & QA",
        "Deployment & Maintenance"
    ]
  },
  {
    id: 2,
    title: "Backend & API Development",
    description: "Designing and implementing robust RESTful and GraphQL APIs with focus on performance and security.",
    longDescription: "The backbone of any powerful application is a robust backend. I design and implement secure, scalable, and efficient APIs that power your frontend and web applications. Whether you need a simple REST API or a complex microservices architecture, I've got you covered.",
    icon: Server,
    features: ["Node.js & Express", "Python & FastAPI", "GraphQL", "Authentication & Security"],
    technologies: ["Node.js", "Express", "Python", "FastAPI", "GraphQL", "Docker", "AWS"],
    benefits: [
        "Secure data handling and authentication",
        "Scalable architecture for growing user bases",
        "Efficient API response times"
    ],
    process: [
        "Database Schema Design",
        "API Architecture Planning",
        "Development & Integration",
        "Security Audits",
        "Performance Optimization"
    ]
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designing engaging and intuitive interfaces that enhance user experience.",
    longDescription: "Great software starts with great design. I create intuitive, user-centric designs that not only look amazing but also guide users effortlessly through your application. My designs focus on usability, accessibility, and conversion.",
    icon: LayoutIcon,
    features: ["User Interface Design", "User Experience Principles", "Prototyping & Wireframes", "Usability Testing"],
    technologies: ["Figma", "Adobe XD", "Sketch", "Protopie"],
    benefits: [
        "Higher user engagement and retention",
        "Clear and intuitive navigation",
        "Consistent brand identity"
    ],
    process: [
        "User Research & Personas",
        "Wireframing & Information Architecture",
        "High-Fidelity Prototyping",
        "User Testing & Iteration"
    ]
  },
  {
    id: 4,
    title: "Graphic Design",
    description: "Creating visually appealing graphics, branding, and creative assets using modern design tools.",
    longDescription: "Establish a strong visual identity with professional graphic design services. From logos and branding materials to social media assets and marketing collateral, I help your brand stand out in a crowded marketplace.",
    icon: Palette,
    features: ["Canva", "Branding & Visual Identity", "Illustrations & Icons", "Marketing Materials"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Indesign"],
    benefits: [
        "Professional and memorable brand image",
        "Consistent visual language",
        "Eye-catching marketing materials"
    ],
    process: [
        "Brand Strategy Session",
        "Concept Development",
        "Design & Refinement",
        "Final Asset Delivery"
    ]
  },
  {
    id: 5,
    title: "Basic Cybersecurity",
    description: "Implementing fundamental security practices to protect applications and data from common threats.",
    longDescription: "Security is not an afterthought; it's a priority. I implement essential security measures to protect your applications and user data from common vulnerabilities like SQL injection, XSS, and CSRF, ensuring your digital assets are safe.",
    icon: ShieldCheck,
    features: ["Secure Authentication", "Data Protection", "Network Security Basics", "Vulnerability Awareness"],
    technologies: ["OWASP Top 10", "JWT", "OAuth", "SSL/TLS", "Helmet.js"],
    benefits: [
        "Protection against common web attacks",
        "Secure user data handling",
        "Compliance with basic security standards"
    ],
    process: [
        "Security Assessment",
        "Vulnerability Scanning",
        "Implementation of Security Headers",
        "Secure Code Review"
    ]
  }
];
