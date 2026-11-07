import { motion } from "framer-motion";

export function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-white/90">{skill.name}</span>
        <span className="text-xs font-mono text-[#a0b3ff]">{skill.level}%</span>
      </div>
      <div className="h-2.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: index * 0.05 + 0.2, ease: "easeOut" }}
          className="h-full micro1-bar-fill rounded-full"
        />
      </div>
    </motion.div>
  );
}
