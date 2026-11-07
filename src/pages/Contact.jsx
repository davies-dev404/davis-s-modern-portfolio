import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { XIcon } from "@/components/XIcon";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@afrinextech.co.ke",
    href: "mailto:info@afrinextech.co.ke",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254790264792",
    href: "tel:+254790264792",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: null,
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/davies-dev404", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/davies-kibet-342363237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/Quantito1", label: "X (formerly Twitter)" },
  { icon: MessageCircle, href: "https://wa.me/254790264792?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you", label: "WhatsApp" },
];

export default function Contact() {
  return (
    <Layout>
      <section className="py-12 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Contact"
            title="Get in Touch"
            description="Have a project in mind? Let's talk about how I can help."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#3444da]/20 border border-[#6d7cff]/30 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#6d7cff]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/55">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-[#6d7cff] transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="organic-block p-6"
              >
                <h3 className="font-display font-medium text-lg text-white mb-4">Connect With Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.label}
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/[0.05] text-white/75 hover:bg-[#3444da] hover:text-white border border-white/10"
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="organic-block p-6"
              >
                <h3 className="font-display font-medium text-lg text-white mb-2">Prefer WhatsApp?</h3>
                <p className="text-white/65 text-sm mb-4">
                  For quick responses, feel free to reach out on WhatsApp.
                </p>
                <Button className="w-full rounded-full bg-[#3444da] hover:bg-[#4f69d4] text-white font-display font-medium" asChild>
                  <a
                    href="https://wa.me/254790264792?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
