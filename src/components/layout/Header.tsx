import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-card' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-serif font-bold text-primary">
            <img 
              src="https://i.ibb.co/Yn9G5nT/logo.png" 
              alt="Virtuous Law Partners Logo" 
              className="h-12 md:h-16"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-brand-black hover:text-primary transition-colors duration-300 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-brand-black hover:text-primary transition-colors duration-300 font-medium"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection('mission')}
              className="text-brand-black hover:text-primary transition-colors duration-300 font-medium"
            >
              Our Mission
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-brand-black hover:text-primary transition-colors duration-300 font-medium"
            >
              The Team
            </button>
            <a
              href="/gallery"
              className="text-brand-black hover:text-primary transition-colors duration-300 font-medium"
            >
              Gallery
            </a>
            <a
              href="/blog"
              className="text-brand-black hover:text-primary transition-colors duration-300 font-medium"
            >
              Blog
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="default"
              className="font-bold transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-brand-black hover:text-primary transition-colors duration-300 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-brand-black hover:text-primary transition-colors duration-300 font-medium"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection('mission')}
              className="block w-full text-left py-2 text-brand-black hover:text-primary transition-colors duration-300 font-medium"
            >
              Our Mission
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left py-2 text-brand-black hover:text-primary transition-colors duration-300 font-medium"
            >
              The Team
            </button>
            <a
              href="/gallery"
              className="block w-full text-left py-2 text-brand-black hover:text-primary transition-colors duration-300 font-medium"
              onClick={closeMenu}
            >
              Gallery
            </a>
            <a
              href="/blog"
              className="block w-full text-left py-2 text-brand-black hover:text-primary transition-colors duration-300 font-medium"
              onClick={closeMenu}
            >
              Blog
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="default"
              className="w-full mt-4 font-bold"
            >
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};