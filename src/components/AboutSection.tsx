import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";
const AboutSection = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#556b2f]/10 to-[#556b2f]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#556b2f]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" initial={{
          opacity: 0,
          y: -20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple">Me</span>
          </motion.h2>

          <motion.div className="grid md:grid-cols-2 gap-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            <motion.div className="space-y-6" variants={itemVariants}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Who I Am</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">I'm a passionate full-stack software engineer with expertise in cloud-native applications and distributed systems. With over 4 years of professional experience, I enjoy tackling complex technical challenges and building robust, scalable solutions.</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I thrive in collaborative environments where I can contribute to meaningful projects
                that solve real-world problems. My technical foundation is complemented by strong communication
                skills and a results-driven mindset.
              </p>

              <div className="pt-4">
                <Button
                  className="flex items-center gap-2 bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:opacity-90 shadow-md hover:shadow-lg transition-all"
                  asChild
                >
                  <a
                    href="/Aishwarya_Murahari_Resume.pdf"
                    download="Aishwarya_Murahari_Resume.pdf"
                    type="application/pdf"
                  >
                    <FileText size={18} /> Download Resume
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div className="space-y-8" variants={itemVariants}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Education</h3>

              <div className="space-y-6">
                <motion.div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 backdrop-blur-sm hover:shadow-md transition-all" whileHover={{
                y: -5,
                transition: {
                  duration: 0.2
                }
              }}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">MS in Software Engineering</h4>
                    <span className="text-portfolio-blue bg-portfolio-light-blue dark:bg-blue-900/30 px-2 py-1 rounded-full text-xs font-medium">2026</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">San Jose State University</p>
                </motion.div>

                <motion.div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 backdrop-blur-sm hover:shadow-md transition-all" whileHover={{
                y: -5,
                transition: {
                  duration: 0.2
                }
              }}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">BE in Information Science</h4>
                    <span className="text-portfolio-blue bg-portfolio-light-blue dark:bg-blue-900/30 px-2 py-1 rounded-full text-xs font-medium">2017</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">BIT Bengaluru</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;