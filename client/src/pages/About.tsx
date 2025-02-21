import SkillBar from "@/components/sections/SkillBar";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "React.js", level: 85 },
  { name: "Next.js", level: 75 },
  { name: "Tailwind", level: 90 },
  { name: "Node.js", level: 70 }
];

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2DD4BF] mb-4">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-[#F8FAFC]/80 text-lg">
                I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0, and the Metaverse. Passionate about technology, I am constantly learning new skills to stay up-to-date with the latest innovations.
              </p>
              <p className="text-[#F8FAFC]/80 text-lg mt-4">
                My journey in the tech world is driven by curiosity and a strong desire to create impactful solutions. I have hands-on experience in web development and enjoy exploring emerging fields like blockchain, augmented reality, and machine learning.
              </p>
              <p className="text-[#F8FAFC]/80 text-lg mt-4">
                Dedicated to personal growth, I thrive on challenges that push my limits. My goal is to contribute meaningfully to the tech community and make a positive difference through innovation and creativity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-[#2DD4BF] mb-6">
              Skills & Technologies
            </h3>
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill.name}
                level={skill.level}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
