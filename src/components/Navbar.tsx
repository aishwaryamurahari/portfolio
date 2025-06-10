import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state
      setScrolled(window.scrollY > 10);

      // Set active section based on scroll position
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : ""
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          AM
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeSection === item.id
                  ? "bg-portfolio-light-blue text-portfolio-blue"
                  : "text-gray-600 dark:text-gray-300 hover:text-portfolio-blue dark:hover:text-portfolio-blue"
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${mobileMenuOpen ? "hidden" : "block"}`}
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${mobileMenuOpen ? "block" : "hidden"}`}
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-transform duration-300 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden pt-24`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-6">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-lg font-medium px-4 py-2 rounded-md ${
                activeSection === item.id
                  ? "bg-[#556b2f]/10 text-[#556b2f] dark:bg-[#556b2f]/20"
                  : "text-gray-800 dark:text-gray-200"
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
