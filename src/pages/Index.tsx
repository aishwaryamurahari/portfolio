
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import { useAnalytics } from "@/hooks/use-analytics";
import { useEffect } from "react";

const Index = () => {
  // Initialize analytics
  useAnalytics();

  useEffect(() => {
    const handleScrollAnimation = () => {
      const reveals = document.querySelectorAll(".reveal");

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    // Initial check in case some elements are already in view
    handleScrollAnimation();

    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <AnalyticsTracker sectionName="hero">
        <HeroSection />
      </AnalyticsTracker>
      <AnalyticsTracker sectionName="about">
        <AboutSection />
      </AnalyticsTracker>
      <AnalyticsTracker sectionName="skills">
        <SkillsSection />
      </AnalyticsTracker>
      <AnalyticsTracker sectionName="experience">
        <ExperienceSection />
      </AnalyticsTracker>
      <AnalyticsTracker sectionName="projects">
        <ProjectsSection />
      </AnalyticsTracker>
      <AnalyticsTracker sectionName="services">
        <ServicesSection />
      </AnalyticsTracker>
      <AnalyticsTracker sectionName="contact">
        <ContactSection />
      </AnalyticsTracker>
      <Footer />
    </div>
  );
};

export default Index;
