
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-portfolio-yellow rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-portfolio-blue rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-12 md:py-0 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 flex flex-col gap-6 animate-fade-in">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hello, I'm <span className="text-portfolio-blue">Aishwarya Murahari</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-6">
              Full Stack Developer | Cloud Native Enthusiast
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Building secure, scalable software systems with real-world impact.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/aishwaryamurahari" target="_blank" rel="noopener noreferrer">
              <Button className="flex items-center gap-2">
                <Github size={18} /> GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/aishwarya-murahari-1b6048106/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex items-center gap-2">
                <Linkedin size={18} /> LinkedIn
              </Button>
            </a>
          </div>
          
          <div className="mt-6">
            <Button 
              onClick={scrollToProjects}
              variant="ghost" 
              className="flex items-center gap-2 text-portfolio-blue dark:text-portfolio-blue"
            >
              View My Work
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </Button>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-portfolio-blue/20 rounded-full blur-md -z-10"></div>
            <div className="bg-gradient-to-br from-portfolio-blue to-portfolio-purple p-1 rounded-full shadow-xl">
              <div className="bg-white dark:bg-gray-900 rounded-full overflow-hidden h-64 w-64 md:h-80 md:w-80">
                {/* Replace with Aishwarya's profile image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Profile Image
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-portfolio-blue">5+</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Years<br/>Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
