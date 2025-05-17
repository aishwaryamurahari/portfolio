
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In real app, replace with actual API call
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-portfolio-blue">Touch</span>
        </h2>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <Card className="p-4 flex items-center space-x-4">
                <div className="bg-portfolio-light-blue dark:bg-gray-800 p-2 rounded-full">
                  <Mail className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                  <a href="mailto:aishwaryamurahari95@gmail.com" className="text-portfolio-blue hover:underline">
                    aishwaryamurahari95@gmail.com
                  </a>
                </div>
              </Card>
              
              <Card className="p-4 flex items-center space-x-4">
                <div className="bg-portfolio-light-blue dark:bg-gray-800 p-2 rounded-full">
                  <Linkedin className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/aishwarya-murahari-1b6048106/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-blue hover:underline"
                  >
                    aishwarya-murahari
                  </a>
                </div>
              </Card>
              
              <Card className="p-4 flex items-center space-x-4">
                <div className="bg-portfolio-light-blue dark:bg-gray-800 p-2 rounded-full">
                  <Github className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">GitHub</h4>
                  <a 
                    href="https://github.com/aishwaryamurahari" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-blue hover:underline"
                  >
                    aishwaryamurahari
                  </a>
                </div>
              </Card>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm currently open to freelance and full-time opportunities. Feel free to reach out if you'd like to discuss potential collaborations.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={6}
                  required
                />
              </div>
              
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
