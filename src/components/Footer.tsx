import { Github, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-80 left-20 w-96 h-96 bg-gradient-to-br from-portfolio-blue/5 to-portfolio-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-portfolio-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple">
              AM
            </a>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Building secure, scalable software systems with real-world impact.
            </p>
          </motion.div>

          <div className="flex gap-6">
            <motion.a
              href="https://github.com/aishwaryamurahari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-portfolio-blue dark:hover:text-portfolio-blue transition-colors"
              aria-label="GitHub"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <Github size={22} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aishwarya-murahari-1b6048106/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-portfolio-blue dark:hover:text-portfolio-blue transition-colors"
              aria-label="LinkedIn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <Linkedin size={22} />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-gray-500 dark:text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <span>© {year} Aishwarya Murahari. All rights reserved.</span>
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-600 dark:text-gray-400 hover:bg-portfolio-light-blue hover:text-portfolio-blue transition-colors"
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
