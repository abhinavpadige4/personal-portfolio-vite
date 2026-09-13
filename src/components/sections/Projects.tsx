import { motion } from "framer-motion";
import { projectsData } from "../utils/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Projects
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A selection of my recent projects showcasing full-stack development skills
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              github={project.github}
              live={project.live}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;