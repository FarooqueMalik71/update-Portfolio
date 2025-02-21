import ProjectCard from "@/components/sections/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Todo List",
    description: "A javaScript, HTML, CSS based App for managing and organizing your Tasks efficiently.",
    image: "todo.jpg",
    technologies: ["JavaScript", "HTML", "CSS", "Node"],
    link: "#"
  },
  {
    title: "Countdown Timer",
    description: "A javaScript, HTML, CSS based App Powered website to track Time with an interactive countdown feature.",
    image: "timer.jpg",
    technologies: ["JavaScript", "HTML", "CSS", "Node"],
    link: "#"
  },
  {
    title: "Calculator",
    description: "Responsive calculator app using JavaScript, Node.js, HTML, and CSS for basic arithmetic operations.",
    image: "calculator.jpg",
    technologies: ["JavaScript", "HTML", "CSS", "Node"],
    link: "#"
  },
  {
    title: "Static Interactive Resume",
    description: "A TypeScript-based Interactive resume built with HTML, CSS allowing users to showcase their skills dynamically.",
    image: "resume.jpg",
    technologies: ["TypeScript", "HTML", "CSS", "Node"],
    link: "#"
  },
  {
    title: "Clothing Website",
    description: "An online shopping clothing website built using JavaScript, HTML, and CSS, featuring stylish collections.",
    image: "clothing.jpg",
    technologies: ["TypeScript", "HTML", "CSS", "Bootstrap"],
    link: "#"
  }
];

export default function Projects() {
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
            My Projects
          </h2>
          <p className="text-[#F8FAFC]/60 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
