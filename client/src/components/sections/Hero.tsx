import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Avatar } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[#0F172A]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/10 via-[#3B82F6]/10 to-[#8B5CF6]/10 animate-gradient-x"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 -top-10 -left-10 bg-[#2DD4BF]/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute w-96 h-96 -top-10 -right-10 bg-[#3B82F6]/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 -bottom-10 left-10 bg-[#8B5CF6]/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          {/* Animated Avatar Border */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#8B5CF6] rounded-full animate-spin-slow"></div>
            <Avatar className="w-32 h-32 border-4 border-[#0F172A] relative"
              style={{backgroundImage: `url("images/profile-pic.png")`, backgroundSize: "cover", backgroundPosition: "center"}}
            >
              <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#8B5CF6] opacity-70"></div>
            </Avatar>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold font-poppins bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#8B5CF6] text-transparent bg-clip-text animate-gradient">
            Hi, I'm Farooque Malik
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-xl sm:text-2xl text-[#F8FAFC]/80 max-w-3xl mx-auto"
        >
          A front-end developer specializing in building exceptional digital experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/projects">
            <Button
              size="lg"
              className="bg-[#2DD4BF] hover:bg-[#2DD4BF]/80 text-[#0F172A] transform hover:scale-105 transition-transform"
            >
              View My Work
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-[#0F172A] transform hover:scale-105 transition-transform"
            >
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}