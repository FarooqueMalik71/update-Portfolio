import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold font-poppins bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#8B5CF6] text-transparent bg-clip-text">
            Hi, I'm Farooque Malik
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-xl sm:text-2xl text-[#F8FAFC]/80 max-w-3xl mx-auto"
        >
          A front-end developer specializing in building exceptional digital experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/projects">
            <Button
              size="lg"
              className="bg-[#2DD4BF] hover:bg-[#2DD4BF]/80 text-[#0F172A]"
            >
              View My Work
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-[#0F172A]"
            >
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
