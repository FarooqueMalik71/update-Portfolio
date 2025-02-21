import Hero from "@/components/sections/Hero";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="animate-bounce text-[#2DD4BF]" size={24} />
      </motion.div>
    </div>
  );
}
