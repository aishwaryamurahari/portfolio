import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

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
      id: "flowagent",
      title: "FlowAgent",
      description: "An autonomous assistant that converts emails into actionable Notion tasks. Features Google Authentication, inbox processing, automatic task extraction with due dates and priorities, and seamless integration with Notion databases for productivity enhancement.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NextAuth.js", "Google APIs", "Notion API"],
      githubUrl: "https://github.com/aishwaryamurahari/flowagent",
    },
    {
      id: "noted",
      title: "Noted - Chrome Extension",
      description: "A full-stack Chrome Extension that summarizes web articles using OpenAI GPT-3.5 and saves them to Notion workspace. Features smart AI categorization, OAuth authentication, and organized content management with automatic topic classification.",
      tags: ["Chrome Extension", "FastAPI", "Python", "JavaScript", "OpenAI API", "Notion API", "SQLite", "OAuth"],
      githubUrl: "https://github.com/aishwaryamurahari/Noted",
    },
    {
      id: "automotive-inventory",
      title: "Automotive Inventory Platform",
      description: "A comprehensive inventory management system for automotive dealerships with real-time updates, analytics dashboard, and customer-facing search portal.",
      tags: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes", "AWS", "Microservices"],
      githubUrl: "https://github.com/TechTitans-SJSU/CarParts_Ecommerce",
    },
    {
      id: "nutrition-chatbot",
      title: "Nutrition Intelligence Chatbot",
      description: "AI-powered nutrition chatbot using RAG architecture (Python, LangChain, HuggingFace) to extract insights from multiple PDF reports. Implemented semantic search with vector embeddings and Redis caching, and developed a responsive React/TypeScript frontend with a conversational UX.",
      tags: ["Python", "NLP", "Machine Learning", "Flask", "React"],
      githubUrl: "https://github.com/TechTitans-SJSU/FAO_Chatbot",
    },
    {
      id: "distributed-retrieval",
      title: "Distributed Retrieval Framework",
      description: "A scalable blockchain-inspired framework for distributed data integrity, client coordination, and fault tolerance.",
      tags: ["Python", "Blockchain", "Distributed Systems"],
      githubUrl: "https://github.com/BitManipulators/275_block_chain",
    },
    {
      id: "qt-game-suite",
      title: "Qt Game Suite",
      description: "A collection of interactive games developed with Qt framework, featuring cross-platform compatibility and modern UI/UX design.",
      tags: ["C++", "Qt", "Game Development"],
      githubUrl: "https://github.com/BitManipulators/202_PokerGame",
    },
    {
      id: "byos-go",
      title: "GoServe - Build Your Own Server (BYOS)",
      description: "A from-scratch HTTP server implementation in Go demonstrating low-level network programming without web frameworks. Features raw TCP socket handling, custom HTTP parser, flexible routing system, concurrent request handling with goroutines, and security features like directory traversal prevention.",
      tags: ["Go", "HTTP", "TCP", "Networking", "Concurrency", "Server", "Systems Programming"],
      githubUrl: "https://github.com/aishwaryamurahari/byos-go",
    },
  ];

  const filteredProjects = filter
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

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
    <section id="projects" className="py-20 bg-gray-50/80 dark:bg-gray-900/80 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 right-10 w-96 h-96 bg-gradient-to-bl from-[#556b2f]/10 to-[#556b2f]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-[#556b2f]/10 to-[#556b2f]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple">Projects</span>
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            variant={filter === null ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(null)}
            className={`rounded-full ${filter === null ? 'bg-gradient-to-r from-portfolio-blue to-portfolio-purple border-none' : ''}`}
          >
            All
          </Button>

          {allTags.map(tag => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tag)}
              className={`rounded-full ${filter === tag ? 'bg-gradient-to-r from-portfolio-blue to-portfolio-purple border-none' : ''}`}
            >
              {tag}
            </Button>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={filter || "all"}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={`${filter || 'all'}-${project.id}`}
              variants={itemVariants}
              className="bg-white/90 dark:bg-gray-800/90 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all backdrop-blur-sm"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="border-b border-gray-100 dark:border-gray-700 h-4 bg-gradient-to-r from-portfolio-blue to-portfolio-purple"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="text-xs bg-portfolio-light-blue text-portfolio-blue dark:bg-blue-900/30 dark:text-portfolio-blue py-1 px-3 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="flex items-center gap-2 border-portfolio-blue/30 text-portfolio-blue hover:bg-portfolio-light-blue hover:text-portfolio-blue">
                        <Github size={16} /> View Code
                      </Button>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="flex items-center gap-2 bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:opacity-90">
                        <ExternalLink size={16} /> Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
