
import { Card } from "@/components/ui/card";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-portfolio-blue">Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="timeline-item">
            <Card className="shadow-md border-l-4 border-l-portfolio-blue p-6 mb-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Software Engineer</h3>
                <div className="flex gap-4 items-center">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Accenture</span>
                  <span className="bg-portfolio-light-blue text-portfolio-blue text-xs px-3 py-1 rounded-full">
                    Oct 2017 - May 2022
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-gray-700 dark:text-gray-300">
                  Led the development of enterprise-scale web applications with a focus on security, 
                  scalability, and user experience.
                </p>
                
                <h4 className="font-medium text-sm text-portfolio-blue mt-4">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    Implemented WCAG-compliant user interfaces, improving accessibility metrics by 40% 
                    and ensuring compliance with industry standards.
                  </li>
                  <li>
                    Successfully migrated legacy authentication systems to Keycloak, enhancing security 
                    and streamlining user management across multiple applications.
                  </li>
                  <li>
                    Designed and built scalable GraphQL APIs that reduced endpoint complexity 
                    by 30% while improving query efficiency.
                  </li>
                  <li>
                    Architected and deployed cloud-native applications on AWS, implementing 
                    CI/CD pipelines that reduced deployment time from days to hours.
                  </li>
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-gray-100 dark:bg-gray-800 py-1 px-2 rounded-full">React</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-800 py-1 px-2 rounded-full">Node.js</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-800 py-1 px-2 rounded-full">GraphQL</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-800 py-1 px-2 rounded-full">AWS</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-800 py-1 px-2 rounded-full">Keycloak</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-800 py-1 px-2 rounded-full">Docker</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
