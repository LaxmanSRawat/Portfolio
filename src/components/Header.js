import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['hero', 'experience', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', section: 'hero' },
    { name: 'Experience', href: '#experience', section: 'experience' },
    { name: 'Education', href: '#education', section: 'education' },
    { name: 'Skills', href: '#skills', section: 'skills' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gsap-bg/95 backdrop-blur-md border-b border-gsap-border' : ''
        }`}
    >
      <nav className="container-max section-padding py-5">
        <div className="flex items-center justify-between">
          {/* Logo with expanding animation */}
          <div
            className="text-2xl font-bold text-primary-500 animate-fade-in cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex">
              <span className="inline-block">L</span>
              <span
                className="inline-block overflow-hidden transition-all duration-500 ease-out"
                style={{ maxWidth: isHovered ? '100px' : '0px', opacity: isHovered ? 1 : 0 }}
              >
                axman
              </span>
              <span className="inline-block ml-0.5">S</span>
              <span
                className="inline-block overflow-hidden transition-all duration-500 ease-out"
                style={{ maxWidth: isHovered ? '50px' : '0px', opacity: isHovered ? 1 : 0 }}
              >
                ingh
              </span>
              <span className="inline-block ml-0.5">R</span>
              <span
                className="inline-block overflow-hidden transition-all duration-500 ease-out"
                style={{ maxWidth: isHovered ? '60px' : '0px', opacity: isHovered ? 1 : 0 }}
              >
                awat
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors duration-300 font-medium text-sm tracking-wide uppercase animate-fade-in ${activeSection === item.section
                    ? 'text-primary-500'
                    : 'text-gsap-muted hover:text-primary-500'
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gsap-muted hover:text-primary-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-2 transition-colors font-medium text-sm tracking-wide uppercase ${activeSection === item.section
                    ? 'text-primary-500'
                    : 'text-gsap-muted hover:text-primary-500'
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
