import { motion } from "framer-motion";

interface SkillBarProps {
  skill: string;
  level: number;
  index: number;
}

export default function SkillBar({ skill, level, index }: SkillBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-[#F8FAFC] font-medium">{skill}</span>
        <span className="text-[#F8FAFC]/60">{level}%</span>
      </div>
      <div className="h-2 bg-[#1E293B] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full bg-gradient-to-r from-[#2DD4BF] to-[#3B82F6] rounded-full"
        />
      </div>
    </div>
  );
}
