
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "End-to-end development of responsive, accessible web applications with modern frameworks and best practices.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-blue">
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      ),
    },
    {
      title: "Secure Auth & API Design",
      description: "Implementation of robust authentication systems and thoughtfully designed API architectures for optimal security and performance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-blue">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1" />
        </svg>
      ),
    },
    {
      title: "Cloud & DevOps Engineering",
      description: "Design and implementation of cloud-native architectures with CI/CD pipelines, infrastructure as code, and containerization.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-blue">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
    },
    {
      title: "Distributed System Optimization",
      description: "Optimization of distributed systems for performance, reliability, and scalability, with expertise in fault-tolerance and consensus algorithms.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-blue">
          <path d="M4 10h16M4 14h16" />
          <rect width="4" height="6" x="16" y="16" rx="1" />
          <rect width="4" height="6" x="10" y="16" rx="1" />
          <rect width="4" height="6" x="4" y="16" rx="1" />
          <rect width="4" height="6" x="4" y="2" rx="1" />
          <rect width="4" height="6" x="10" y="2" rx="1" />
          <rect width="4" height="6" x="16" y="2" rx="1" />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -bottom-40 left-20 w-96 h-96 bg-gradient-to-tr from-portfolio-blue/10 to-portfolio-yellow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple">Services</span>
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <motion.div 
                className="backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <div className="p-3 w-12 h-12 rounded-lg bg-portfolio-light-blue dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-gray-800 dark:text-gray-200">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
