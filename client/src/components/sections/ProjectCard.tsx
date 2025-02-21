import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github?: string;
  index: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  link, 
  github,
  index 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden bg-[#1E293B] border-[#2DD4BF]/10 hover:border-[#2DD4BF]/30 transition-all duration-300">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-[#F8FAFC]">{title}</CardTitle>
          <CardDescription className="text-[#F8FAFC]/60">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-[#2DD4BF]/10 text-[#2DD4BF] hover:bg-[#2DD4BF]/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              className="text-[#2DD4BF] hover:text-[#2DD4BF]/80 hover:bg-[#2DD4BF]/10 transform hover:scale-105"
              onClick={() => window.open(link, "_blank")}
            >
              Live Demo <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            {github && (
              <Button
                variant="ghost"
                className="text-[#2DD4BF] hover:text-[#2DD4BF]/80 hover:bg-[#2DD4BF]/10 transform hover:scale-105"
                onClick={() => window.open(github, "_blank")}
              >
                Code <Github className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}