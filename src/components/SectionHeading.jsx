import { motion } from "framer-motion";

export function SectionHeading({ badge, title, description, align = "left" }) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center mx-auto" : ""} max-w-3xl`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3.5 py-1 text-xs font-mono uppercase tracking-widest bg-white/[0.06] text-[#a0b3ff] border border-white/10 rounded-full mb-4"
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-display font-normal tracking-tight text-white mb-4"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-white/65"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
