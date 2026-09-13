import { motion } from "framer-motion";
import { FaCode, FaLaptop, FaPalette } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-8 max-w-3xl">
            Passionate full-stack developer with 5+ years of experience building modern web applications. 
            I specialize in creating responsive, user-friendly interfaces with React and Tailwind CSS, 
            while maintaining clean, scalable backend architectures. My goal is to bridge the gap between 
            beautiful design and technical excellence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1"
          >
            <img 
              src="/assets/images/profile.jpg" 
              alt="Profile" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <FaCode className="mt-2.5 h-5 w-5 text-accent" />
              <div>
                <h3 className="font-semibold text-foreground">Frontend Expertise</h3>
                <p className="text-muted">React, TypeScript, Tailwind CSS, Framer Motion, and modern JavaScript</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <FaLaptop className="mt-2.5 h-5 w-5 text-accent" />
              <div>
                <h3 className="font-semibold text-foreground">Full-Stack Development</h3>
                <p className="text-muted">Node.js, Express, MongoDB, PostgreSQL, and RESTful APIs</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <FaPalette className="mt-2.5 h-5 w-5 text-accent" />
              <div>
                <h3 className="font-semibold text-foreground">Design & UI/UX</h3>
                <p className="text-muted">Figma, Adobe XD, accessibility, and responsive design principles</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;