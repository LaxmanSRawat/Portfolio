import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Download, Github } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-github-bg via-github-950 to-github-bg">
      <div className="container-max text-center">
        {/* Main Content */}
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text">Laxman Singh</span>
            <br />
            <span className="text-white">Rawat</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Solution Architect & Full Stack Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Experienced in designing scalable solutions, automating complex workflows, and delivering 
            high-impact applications that drive business efficiency and innovation.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors duration-300">
            <MapPin size={18} />
            <span>New York City, NY</span>
          </div>
          
          <a 
            href="mailto:laxman.sr.iitkgp@gmail.com" 
            className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
          >
            <Mail size={18} />
            <span>laxman.sr.iitkgp@gmail.com</span>
          </a>
          
          <a 
            href="tel:+19294091436" 
            className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
          >
            <Phone size={18} />
            <span>+1 929-409-1436</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/laxman-s-rawat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          
          <a 
            href="https://github.com/LaxmanSRawat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get In Touch
          </button>
          
          <a 
            href="/Laxman-Singh-Rawat-Resume.pdf" 
            download="Laxman-Singh-Rawat-Resume.pdf"
            className="px-8 py-3 border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
