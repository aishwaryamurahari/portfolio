import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

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

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_lrtxvza', // Your service ID
        '__ejs-test-mail-service__', // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Aishwarya', // You can customize this
        },
        'sHY5lJ-wHQaOkSlQ3' // Your public key
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Failed to send email:', error);
      
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-20 bg-gray-50/80 dark:bg-gray-900/80 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-portfolio-purple/10 to-portfolio-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-20 w-72 h-72 bg-gradient-to-tr from-portfolio-yellow/10 to-portfolio-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple">Touch</span>
        </motion.h2>
        
        <motion.div 
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="p-4 flex items-center space-x-4 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                  <div className="bg-portfolio-light-blue dark:bg-blue-900/30 p-3 rounded-full">
                    <Mail className="text-portfolio-blue" size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                    <a href="mailto:aishwaryamurahari95@gmail.com" className="text-portfolio-blue hover:underline">
                      aishwaryamurahari95@gmail.com
                    </a>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="p-4 flex items-center space-x-4 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                  <div className="bg-portfolio-light-blue dark:bg-blue-900/30 p-3 rounded-full">
                    <Linkedin className="text-portfolio-blue" size={22} />
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
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="p-4 flex items-center space-x-4 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                  <div className="bg-portfolio-light-blue dark:bg-blue-900/30 p-3 rounded-full">
                    <Github className="text-portfolio-blue" size={22} />
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
              </motion.div>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                I'm currently open to freelance and full-time opportunities. Feel free to reach out if you'd like to discuss potential collaborations.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Send Me a Message</h3>
            
            <Card className="p-6 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-gray-100 dark:border-gray-700 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 focus:border-portfolio-blue focus:ring-portfolio-blue/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
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
                    className="bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 focus:border-portfolio-blue focus:ring-portfolio-blue/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
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
                    className="bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 focus:border-portfolio-blue focus:ring-portfolio-blue/20"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:opacity-90 transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={18} /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
