import React from 'react';
import { Linkedin, Github, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperience = () => {
    const element = document.querySelector('#experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding relative">
      <div className="container-max text-center">
        {/* Main Content */}
        <div className="animate-fade-in max-w-4xl mx-auto">
          <p className="text-primary-500 text-sm font-semibold tracking-[0.3em] uppercase mb-6 animate-slide-up">
            Solution Architect & Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-gsap-text">Laxman Singh</span>
            <br />
            <span className="gradient-text">Rawat</span>
          </h1>

          <p className="text-lg md:text-xl text-gsap-muted mb-12 max-w-2xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Building scalable solutions and automating complex workflows at enterprise scale.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://linkedin.com/in/laxman-s-rawat"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-gsap-border flex items-center justify-center text-gsap-muted hover:text-primary-500 hover:border-primary-500 transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/LaxmanSRawat"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-gsap-border flex items-center justify-center text-gsap-muted hover:text-primary-500 hover:border-primary-500 transition-all duration-300"
          >
            <Github size={20} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-gsap-bg font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
          >
            Get In Touch
          </button>

          <a
            href="/Laxman-Singh-Rawat-Resume.pdf"
            download="Laxman-Singh-Rawat-Resume.pdf"
            className="px-8 py-4 border border-gsap-border text-gsap-text hover:border-primary-500 hover:text-primary-500 font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToExperience}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gsap-muted hover:text-primary-500 transition-colors duration-300 animate-bounce-slow"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
