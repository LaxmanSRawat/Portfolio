import React from 'react';
import { Folder, Calendar, User, Target, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projectData = [
    {
      title: "Failure Mode Classification in FRC Using ML and Image Processing",
      supervisor: "Dr. S.K. Barai",
      institution: "Indian Institute of Technology Kharagpur",
      period: "Jul 2019 - Dec 2019",
      description: "Advanced machine learning project focused on classifying fiber failure modes in Fiber Reinforced Concrete (FRC) using computer vision and deep learning techniques.",
      achievements: [
        "Implemented 3 Image Classification approaches: trained classifier models on features from Bag of Visual Words, Local Binary Pattern, and a custom 6-layer CNN, achieving accuracy of 67%, 89% and 90% respectively."
      ],
      technologies: ["Python", "TensorFlow", "OpenCV", "Machine Learning", "Computer Vision", "CNN", "Image Processing"],
      metrics: ["67%", "89%", "90%"],
      category: "Research & Development"
    }
  ];

  // Additional project highlights from work experience
  const workProjects = [
    {
      title: "Global Account Reconciliation Solution",
      company: "AB InBev",
      period: "2021 - 2025",
      description: "Led the global roll-out of an in-house financial data lake solution, standardizing processes across different geographies.",
      impact: "$600k cost savings",
      technologies: ["Azure Cloud", "Data Factory", "SQL", "Power BI"],
      category: "Enterprise Solution"
    },
    {
      title: "SKU Change & Pricing Workflow Digitization",
      company: "AB InBev", 
      period: "2021 - 2025",
      description: "Designed and implemented a comprehensive web application to automate complex business workflows.",
      impact: "$530k efficiency gains, 85% process automation",
      technologies: ["React", "Node.js", "Azure", "Workflow Automation"],
      category: "Web Application"
    },
    {
      title: "Document Automation Platform",
      company: "AB InBev",
      period: "2021 - 2025", 
      description: "Conceptualized and delivered a platform connecting internal teams, external systems, and customers.",
      impact: "$200k savings in detention & demurrage costs",
      technologies: ["API Integration", "Azure", "Automation", "Document Processing"],
      category: "Integration Platform"
    },
    {
      title: "RPA Bot Development & Deployment",
      company: "AB InBev",
      period: "2020 - 2021",
      description: "Developed and deployed enterprise-scale RPA solutions across multiple business functions and global zones.",
      impact: "15+ FTE equivalent efficiency, 10+ bots deployed",
      technologies: ["Blue Prism", "RPA", "Process Automation", "VBA"],
      category: "Automation"
    }
  ];

  const allProjects = [...projectData, ...workProjects];

  const getCategoryColor = (category) => {
    const colors = {
      "Research & Development": "from-purple-500 to-pink-500",
      "Enterprise Solution": "from-blue-500 to-cyan-500", 
      "Web Application": "from-green-500 to-emerald-500",
      "Integration Platform": "from-orange-500 to-red-500",
      "Automation": "from-indigo-500 to-purple-500"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <section id="projects" className="section-padding bg-github-bg">
      <div className="container-max">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects & Achievements</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Key projects spanning research, enterprise solutions, and automation initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {allProjects.map((project, index) => (
            <div 
              key={index}
              className="animate-on-scroll bg-dark-700/50 backdrop-blur-sm rounded-xl p-8 border border-dark-600 hover:border-primary-500/50 transition-all duration-300 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(project.category)} p-3 flex items-center justify-center text-white flex-shrink-0`}>
                  <Folder size={20} />
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                    {project.supervisor && (
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{project.supervisor}</span>
                      </div>
                    )}
                    {project.company && (
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{project.company}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{project.period}</span>
                    </div>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Impact/Metrics */}
              {(project.impact || project.metrics) && (
                <div className="mb-6">
                  {project.impact && (
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp size={16} className="text-primary-400" />
                      <span className="text-primary-400 font-semibold">{project.impact}</span>
                    </div>
                  )}
                  {project.metrics && (
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center px-2 py-1 bg-primary-600/20 text-primary-400 rounded text-sm font-semibold"
                        >
                          <Target size={12} className="mr-1" />
                          {metric} accuracy
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Achievements */}
              {project.achievements && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">KEY ACHIEVEMENTS</h4>
                  <div className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {project.technologies && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">TECHNOLOGIES USED</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-dark-600 text-gray-300 rounded-full text-sm border border-dark-500 hover:border-primary-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Projects Summary */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-primary-600/10 to-primary-400/10 rounded-xl p-8 border border-primary-500/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Project Impact Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-2">$1.3M+</div>
                <div className="text-gray-300">Total Cost Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-2">15+</div>
                <div className="text-gray-300">FTE Equivalent Efficiency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-2">90%</div>
                <div className="text-gray-300">Peak ML Model Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
