
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-portfolio-blue">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Who I Am</h3>
              <p className="text-gray-700 dark:text-gray-300">
                I'm a passionate full-stack software engineer with expertise in cloud-native applications and 
                distributed systems. With over 5 years of professional experience, I enjoy tackling complex technical 
                challenges and building robust, scalable solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I thrive in collaborative environments where I can contribute to meaningful projects 
                that solve real-world problems. My technical foundation is complemented by strong communication 
                skills and a results-driven mindset.
              </p>
              
              <div className="pt-4">
                <Button className="flex items-center gap-2">
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
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Download Resume
                </Button>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-xl font-semibold">Education</h3>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">MS in Software Engineering</h4>
                    <span className="text-portfolio-blue text-sm">2026</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">San Jose State University</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">BE in Information Science</h4>
                    <span className="text-portfolio-blue text-sm">2017</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">BIT Bengaluru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
