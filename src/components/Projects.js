import React from 'react';
import { Calendar, Github, BarChart3, BookOpen, Newspaper, Scale, Microscope } from 'lucide-react';

const Projects = () => {
  const projectData = [
    {
      title: "NovaSight",
      description: "Interactive data visualization analyzing NYC 911 emergency call data for 2024, sourced from NYC Open Data. Features Observable notebooks for exploring incident patterns and trends.",
      period: "2025",
      technologies: ["Python", "Observable", "D3.js", "Data Visualization"],
      github: "https://github.com/LaxmanSRawat/NovaSight",
      icon: <BarChart3 size={20} />,
    },
    {
      title: "Library Link",
      description: "Chromium browser extension that helps NYU students find library books while browsing Amazon. Features multi-persona support, book availability checking, savings tracker, and professor features.",
      period: "2025",
      technologies: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/LaxmanSRawat/Library-Link",
      icon: <BookOpen size={20} />,
    },
    {
      title: "Gradient Daily",
      description: "AI-powered news aggregator with Tinder-like swipe interface. Uses Gradient AI Agents for curation and analysis, featuring dark mode glassmorphism UI and smooth animations.",
      period: "2025",
      technologies: ["Next.js", "React", "Gradient AI", "TailwindCSS"],
      github: "https://github.com/LaxmanSRawat/gradient-daily",
      icon: <Newspaper size={20} />,
    },
    {
      title: "Responsible AI Research",
      description: "Academic research project for CS-9223 Responsible AI course at NYU, exploring ethical considerations and fairness in machine learning systems.",
      period: "2025",
      technologies: ["Python", "Machine Learning", "Fairness", "Ethics"],
      github: "https://github.com/Yahtze/CS-9223-RAI-Project",
      icon: <Scale size={20} />,
    },
    {
      title: "Failure Mode Classification in FRC",
      description: "Machine learning project classifying fiber failure modes in Fiber Reinforced Concrete using computer vision. Implemented 3 approaches: Bag of Visual Words (67%), Local Binary Pattern (89%), and custom CNN (90% accuracy).",
      period: "2019",
      technologies: ["Python", "TensorFlow", "OpenCV", "CNN"],
      github: null,
      icon: <Microscope size={20} />,
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gsap-bg">
      <div className="container-max">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="animate-on-scroll glass-card p-8 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-500 flex-shrink-0">
                  {project.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-gsap-text leading-tight">
                      {project.title}
                    </h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-8 h-8 rounded-lg border border-gsap-border flex items-center justify-center text-gsap-muted hover:text-primary-500 hover:border-primary-500 transition-all duration-300 ml-3"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gsap-muted mt-1">
                    <Calendar size={14} />
                    <span>{project.period}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gsap-muted text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gsap-elevated text-gsap-muted rounded-full text-sm border border-gsap-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
