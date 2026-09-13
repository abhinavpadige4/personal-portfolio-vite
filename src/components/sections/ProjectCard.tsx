import { motion } from "framer-motion";
import { SiGithub, SiGlobe } from "react-icons/si";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
}

const ProjectCard = ({ title, description, image, tech, github, live }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-background/50 backdrop-blur-sm rounded-xl border border-muted/20 p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted mb-4 line-clamp-3">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((tech, index) => (
          <span key={index} className="px-2.5 py-0.5 bg-muted/50 text-xs rounded text-muted">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-1.5 bg-muted/50 hover:bg-muted/70 text-sm rounded hover:text-foreground transition-colors"
          >
            <SiGithub className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-1.5 bg-muted/50 hover:bg-muted/70 text-sm rounded hover:text-foreground transition-colors"
          >
            <SiGlobe className="h-4 w-4" />
            <span>Live Demo</span>
          </a>
        </div>
        <span className="text-xs text-muted">Built with {tech[0]} & {tech[1]}</span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;