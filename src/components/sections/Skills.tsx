import { motion } from "framer-motion";
import { skillsData } from "../utils/constants";

const Skills = () => {
  return (
    <section id="skills" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Skills & Proficiency
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Technical skills I've developed through professional experience and personal projects
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.keys(skillsData).map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 * index }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <div className="space-y-3">
                {skillsData[category as keyof typeof skillsData].map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">{skill.name}</span>
                      <span className="font-medium text-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-2.5">
                      <div
                        className={`h-2.5 bg-accent rounded-full transition-width duration-1000 ease-out w-[${skill.proficiency}%]`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;