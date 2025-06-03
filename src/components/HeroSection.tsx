import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
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
  return <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Modernized background elements with gradients */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-portfolio-blue/30 to-portfolio-purple/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-portfolio-yellow/20 to-portfolio-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-portfolio-purple/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 py-12 md:py-0 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div className="order-2 md:order-1 flex flex-col gap-6" initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <span className="text-sm font-medium text-portfolio-blue/80 dark:text-portfolio-blue/90 px-3 py-1 rounded-full bg-portfolio-blue/10 dark:bg-portfolio-blue/20 inline-block mb-4">
              Full Stack Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hello, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple">Aishwarya Murahari</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-6">
              Full Stack Developer | Cloud Native Enthusiast
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Building secure, scalable software systems with real-world impact.
            </p>
          </motion.div>
          
          <motion.div className="flex gap-4" variants={itemVariants}>
            <a href="https://github.com/aishwaryamurahari" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform">
              <Button className="flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
                <Github size={18} /> GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/aishwarya-murahari-1b6048106/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform">
              <Button variant="outline" className="flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <Linkedin size={18} /> LinkedIn
              </Button>
            </a>
          </motion.div>
          
          <motion.div className="mt-6" variants={itemVariants}>
            <Button onClick={scrollToProjects} variant="ghost" className="group flex items-center gap-2 text-portfolio-blue dark:text-portfolio-blue hover:bg-portfolio-blue/10 dark:hover:bg-portfolio-blue/20">
              View My Work
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div className="order-1 md:order-2 flex justify-center" initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.7,
        ease: "easeOut"
      }}>
          <div className="relative">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/20 to-portfolio-purple/30 rounded-full blur-xl animate-pulse"></div>
            
            {/* Card with 3D effect */}
            <div className="bg-gradient-to-br from-portfolio-blue to-portfolio-purple p-[2px] rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-portfolio-blue/20 hover:shadow-xl">
              <div className="bg-white dark:bg-gray-900 rounded-full overflow-hidden h-64 w-64 md:h-80 md:w-80 relative p-1">
                <img src="https://i.postimg.cc/KvdtsHKv/IMG-1509.jpg" alt="Aishwarya Murahari" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg border border-gray-100 dark:border-gray-700" initial={{
            y: 20,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            delay: 0.8,
            duration: 0.5,
            type: "spring"
          }}>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple">4+</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Years<br />Experience</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <motion.div initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 1,
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }}>
          <ArrowDown size={24} className="text-gray-400 dark:text-gray-500" />
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;