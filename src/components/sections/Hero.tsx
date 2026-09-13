import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Hi, I'm Alex Johnson
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted max-w-2xl mx-auto">
            Full-Stack Developer | React Specialist | UI/UX Enthusiast
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="#about"
              className="px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg transition-colors duration-200 transform hover:scale-105 motion-safe:animate-pulse"
            >
              Learn More
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-accent hover:border-accent/80 text-accent rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;