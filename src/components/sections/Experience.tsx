import { motion } from "framer-motion";
import { experienceData } from "../utils/constants";

const Experience = () => {
  return (
    <section id="experience" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Experience
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Professional journey in web development and software engineering
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {experienceData.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative pl-4 lg:pl-8 ${
                index % 2 === 0 ? "lg:left-0 lg:right-auto" : "lg:right-0 lg:left-auto"`
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2.5 -left-2.5 w-5 h-5 bg-accent rounded-full border-2 border-background">
              </div>
              
              {/* Timeline line */}
              <div className="absolute left-0 top-0 -left-1 w-0.5 h-full bg-accent/20">
              </div>
              
              {/* Experience content */}
              <div className="bg-background/50 backdrop-blur-sm rounded-xl border border-muted/20 p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                  <span className="text-xs text-muted bg-accent/20 px-2 py-0.5 rounded">{exp.date}</span>
                </div>
                <h4 className="text-muted mb-2">{exp.company}</h4>
                <p className="text-muted leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;