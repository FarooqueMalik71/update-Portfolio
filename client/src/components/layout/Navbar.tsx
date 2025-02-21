import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-[#0F172A]/95 backdrop-blur-sm z-50 border-b border-[#2DD4BF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="font-bold text-2xl text-[#2DD4BF]">FM.</a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={`hover:text-[#2DD4BF] transition-colors ${
                  location === item.href ? "text-[#2DD4BF]" : "text-[#F8FAFC]"
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Button 
              variant="outline"
              className="border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-[#0F172A]"
              onClick={() => window.open("https://my-resume-phi-snowy.vercel.app/", "_blank")}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F8FAFC] hover:text-[#2DD4BF]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location === item.href
                      ? "text-[#2DD4BF] bg-[#2DD4BF]/10"
                      : "text-[#F8FAFC] hover:text-[#2DD4BF] hover:bg-[#2DD4BF]/10"
                  }`}>
                    {item.label}
                  </a>
                </Link>
              ))}
              <Button 
                variant="outline"
                className="w-full mt-4 border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-[#0F172A]"
                onClick={() => window.open("https://my-resume-phi-snowy.vercel.app/", "_blank")}
              >
                Resume
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
