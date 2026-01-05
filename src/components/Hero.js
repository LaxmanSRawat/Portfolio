import React from 'react';
import { Linkedin, Github, Download, ArrowDown, Hand, GraduationCap, Briefcase, Heart, Target } from 'lucide-react';

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
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in mb-8">
            <p className="text-primary-500 text-lg font-medium flex items-center gap-2 animate-slide-up">
              <Hand size={20} className="text-primary-500 animate-wave" />
              Hey there! I'm
            </p>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="gradient-text">Laxman </span>
            <span className="text-gsap-text">Singh Rawat</span>
          </h1>

          {/* Title */}
          <p className="text-primary-500 text-sm font-semibold tracking-[0.2em] uppercase mb-8 animate-slide-up" style={{ animationDelay: '0.15s' }}>
            Solution Architect & Full Stack Developer
          </p>

          {/* About Me Header */}
          <p className="text-lg text-gsap-muted mb-6 animate-slide-up" style={{ animationDelay: '0.18s' }}>
            A bit about me
          </p>

          {/* About Me - Flowing Text */}
          <div className="space-y-4 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-base text-gsap-muted leading-relaxed flex items-start gap-3">
              <GraduationCap size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
              <span>
                Currently pursuing my <span className="text-primary-500 font-medium">Master's in Computer Science</span> at <span className="text-gsap-text font-medium">NYU</span>,
                with a B.Tech from <span className="text-gsap-text font-medium">IIT Kharagpur</span>.
              </span>
            </p>

            <p className="text-base text-gsap-muted leading-relaxed flex items-start gap-3">
              <Briefcase size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
              <span>
                <span className="text-primary-500 font-medium">5+ years</span> at AB InBev, building enterprise platforms that process millions of records.
              </span>
            </p>

            <p className="text-base text-gsap-muted leading-relaxed flex items-start gap-3">
              <Target size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
              <span>
                Currently focused on <span className="text-primary-500 font-medium">AI/ML</span>, <span className="text-primary-500 font-medium">Cloud Architecture</span>, and <span className="text-primary-500 font-medium">Data Visualization</span>.
              </span>
            </p>

            <p className="text-base text-gsap-muted leading-relaxed flex items-start gap-3">
              <Heart size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
              <span>
                When not coding, you can find me <span className="text-primary-500 font-medium">sketching and illustrating</span>, <span className="text-primary-500 font-medium">
                  learning new recipes</span>, or <span className="text-primary-500 font-medium">competitive gaming</span>.
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-gsap-bg font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Let's Connect
            </button>

            <a
              href={`${process.env.PUBLIC_URL}/Laxman-Singh-Rawat-Resume.pdf`}
              download="Laxman-Singh-Rawat-Resume.pdf"
              className="px-8 py-4 border border-gsap-border text-gsap-text hover:border-primary-500 hover:text-primary-500 font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://linkedin.com/in/laxman-s-rawat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gsap-border flex items-center justify-center text-gsap-muted hover:text-primary-500 hover:border-primary-500 transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://github.com/LaxmanSRawat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gsap-border flex items-center justify-center text-gsap-muted hover:text-primary-500 hover:border-primary-500 transition-all duration-300"
            >
              <Github size={18} />
            </a>
          </div>
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
