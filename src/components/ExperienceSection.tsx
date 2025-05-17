
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-tr from-portfolio-blue/10 to-portfolio-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple">Experience</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -left-6 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-100 dark:border-gray-700">
              <Briefcase size={20} className="text-portfolio-blue" />
            </div>
            
            <Card className="shadow-md border-l-4 border-l-portfolio-blue p-6 mb-4 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Software Engineer</h3>
                <div className="flex gap-4 items-center mt-2 md:mt-0">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Accenture</span>
                  <span className="bg-portfolio-light-blue dark:bg-blue-900/30 text-portfolio-blue text-xs px-3 py-1 rounded-full font-medium">
                    Oct 2017 - May 2022
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Led the development of enterprise-scale web applications with a focus on security, 
                  scalability, and user experience.
                </p>
                
                <div>
                  <h4 className="font-medium text-sm text-portfolio-blue mb-3 mt-4">Key Achievements:</h4>
                  <ul className="space-y-3">
                    {[
                      "Implemented WCAG-compliant user interfaces, improving accessibility metrics by 40% and ensuring compliance with industry standards.",
                      "Successfully migrated legacy authentication systems to Keycloak, enhancing security and streamlining user management across multiple applications.",
                      "Designed and built scalable GraphQL APIs that reduced endpoint complexity by 30% while improving query efficiency.",
                      "Architected and deployed cloud-native applications on AWS, implementing CI/CD pipelines that reduced deployment time from days to hours."
                    ].map((achievement, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <span className="h-6 w-6 rounded-full bg-portfolio-light-blue dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="h-2 w-2 rounded-full bg-portfolio-blue"></span>
                        </span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {["React", "Node.js", "GraphQL", "AWS", "Keycloak", "Docker"].map((tech) => (
                    <span key={tech} className="text-xs bg-gray-100 dark:bg-gray-800 py-1 px-3 rounded-full border border-gray-200 dark:border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
