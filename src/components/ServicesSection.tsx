
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-portfolio-blue">Services</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow animate-fade-in-delay-${index % 3 + 1}`}
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
