
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "automotive-inventory",
      title: "Automotive Inventory Platform",
      description: "A comprehensive inventory management system for automotive dealerships with real-time updates, analytics dashboard, and customer-facing search portal.",
      tags: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
      githubUrl: "https://github.com/aishwaryamurahari/automotive-inventory",
    },
    {
      id: "nutrition-chatbot",
      title: "Nutrition Intelligence Chatbot",
      description: "AI-driven chatbot that provides personalized nutrition advice and meal planning based on dietary preferences and health goals.",
      tags: ["Python", "NLP", "Machine Learning", "Flask", "React"],
      githubUrl: "https://github.com/aishwaryamurahari/nutrition-intelligence",
    },
    {
      id: "distributed-retrieval",
      title: "Distributed Retrieval Framework",
      description: "A scalable framework for high-performance distributed data retrieval across multiple data stores with consistent hashing and fault tolerance.",
      tags: ["Java", "Kafka", "Redis", "Kubernetes", "Distributed Systems"],
      githubUrl: "https://github.com/aishwaryamurahari/distributed-retrieval",
    },
    {
      id: "qt-game-suite",
      title: "Qt Game Suite",
      description: "A collection of interactive games developed with Qt framework, featuring cross-platform compatibility and modern UI/UX design.",
      tags: ["C++", "Qt", "OpenGL", "Game Development"],
      githubUrl: "https://github.com/aishwaryamurahari/qt-game-suite",
    },
  ];

  const filteredProjects = filter
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-portfolio-blue">Projects</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button
            variant={filter === null ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(null)}
            className="rounded-full"
          >
            All
          </Button>
          
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tag)}
              className="rounded-full"
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow animate-fade-in-delay-${index % 3 + 1}`}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={`${project.id}-${tag}`}
                      className="text-xs bg-portfolio-light-blue text-portfolio-blue dark:bg-gray-700 dark:text-blue-300 py-1 px-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Github size={16} /> View Code
                      </Button>
                    </a>
                  )}
                  
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm">Live Demo</Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
