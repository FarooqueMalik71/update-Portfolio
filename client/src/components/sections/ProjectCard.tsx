import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  index: number;
}

export default function ProjectCard({ title, description, image, technologies, link, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden bg-[#1E293B] border-[#2DD4BF]/10 hover:border-[#2DD4BF]/30 transition-all duration-300">
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
          <Button
            variant="ghost"
            className="text-[#2DD4BF] hover:text-[#2DD4BF]/80 hover:bg-[#2DD4BF]/10"
            onClick={() => window.open(link, "_blank")}
          >
            Visit Project <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
