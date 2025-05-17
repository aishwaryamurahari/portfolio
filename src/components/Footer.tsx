
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold text-portfolio-blue">
              AM
            </a>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Building secure, scalable software systems with real-world impact.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/aishwaryamurahari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-portfolio-blue dark:hover:text-portfolio-blue transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aishwarya-murahari-1b6048106/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-portfolio-blue dark:hover:text-portfolio-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-gray-500 dark:text-gray-500 text-sm">
          © {year} Aishwarya Murahari. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
