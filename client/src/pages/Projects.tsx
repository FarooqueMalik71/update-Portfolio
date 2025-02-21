import ProjectCard from "@/components/sections/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Digital Diaries",
    description: " Fully responsive, dynamic, and 100% functional — powered by Headless CMS Sanity.here’s what I’ve implemented: ✅ About Page ✅ Comments Section ✅ Contact Page …and so much.",
    image: "/images/blog.png",
    technologies: ["Next.js", "Sanity", "API Integration"],
    link: "https://blog-site-alpha-three.vercel.app/",
    github: "https://github.com/FarooqueMalik71/blog-site.git"
  },
  {
    title: "Full Stack E-commerce Website",
    description: "A complete e-commerce solution built with React, Node.js Features include user authentication, product management, shopping cart, and secure checkout.",
    image: "/images/ecomerce.png",
    technologies: ["Next.js", "Sanity", "API Integration"],
    link: "https://hackathone-151725.vercel.app/",
    github: "https://github.com/FarooqueMalik71/hackathone-151725.git"
  },
  {
    title: "Clothing Website",
    description: "An online shopping clothing website built using JavaScript, HTML, and CSS, featuring stylish collections.",
    image: "/images/webProject-04.png",
    technologies: ["TypeScript", "HTML", "CSS", "Bootstrap"],
    link: "https://malikweb.vercel.app/",
    github: "https://github.com/FarooqueMalik71/malikweb.git"
  },
  {
    title: "Static Interactive Resume",
    description: "A TypeScript-based Interactive resume built with HTML, CSS allowing users to showcase their skills dynamically.",
    image: "/images/rebuildResume-03.png",
    technologies: ["TypeScript", "HTML", "CSS", "Node"],
    link: "https://rebuild-resume.vercel.app/",
    github: "https://github.com/FarooqueMalik71/rebuild-resume.git"
  },
  {
    title: "Todo List",
    description: "A JavaScript, HTML, CSS based App for managing and organizing your Tasks efficiently.",
    image: "/images/todo-0.png",
    technologies: ["JavaScript", "HTML", "CSS", "Node"],
    link: "https://todo-app-seven-psi-95.vercel.app/",
    github: "https://github.com/FarooqueMalik71/todo-app.git"
  },
  {
    title: "Countdown Timer",
    description: "A JavaScript, HTML, CSS based App Powered website to track Time with an interactive countdown feature.",
    image: "/images/countdown-01.png",
    technologies: ["JavaScript", "HTML", "CSS", "Node"],
    link: "#",
    github: "https://github.com/your-username/timer"
  },
  {
    title: "Calculator",
    description: "Responsive calculator app using JavaScript, Node.js, HTML, and CSS for basic arithmetic operations.",
    image: "/images/calculator-02.png",
    technologies: ["JavaScript", "HTML", "CSS", "Node"],
    link: "https://farooquecalculater.vercel.app/",
    github: "https://github.com/FarooqueMalik71/farooquecalculater.git"
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