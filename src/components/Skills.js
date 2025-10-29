import React from 'react';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "Flask", "REST APIs", "Microservices Architecture"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Frontend",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["React", "Mantine", "Material UI", "HTML", "CSS", "Responsive Design"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MS SQL Server", "PostgreSQL", "Database Design", "Optimization"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Azure Cloud Services", "Redis Cache", "Azure DevOps (CI/CD)", "Git", "Terraform", "Docker"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Testing & Quality",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Pytest", "SonarCloud", "Code Reviews", "Unit Testing"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Security",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Apiiro", "Snyk", "Checkmarx", "SAST/DAST/SCA Practices"],
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Observability & Analytics",
      icon: <Database className="w-6 h-6" />,
      skills: ["DataDog", "Databricks", "Power BI", "Tableau"],
      color: "from-emerald-500 to-green-500"
    }
  ];

  const getSkillLevel = (skill) => {
    // Define skill levels based on the resume context
    const expertSkills = ["Python", "JavaScript", "SQL", "Azure Cloud", "React", "Node.js", "Power BI"];
    const advancedSkills = ["TypeScript", "Flask", "Express.js", "PostgreSQL", "Terraform", "Blue Prism"];
    
    if (expertSkills.some(expert => skill.includes(expert))) return 90;
    if (advancedSkills.some(advanced => skill.includes(advanced))) return 80;
    return 70;
  };

  return (
    <section id="skills" className="section-padding bg-github-accent">
      <div className="container-max">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across full-stack development, cloud technologies, and automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="animate-on-scroll bg-dark-700/50 backdrop-blur-sm rounded-xl p-8 border border-dark-600 hover:border-primary-500/50 transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-3 flex items-center justify-center text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const skillLevel = getSkillLevel(skill);
                  return (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                          {skill}
                        </span>
                        <span className="text-sm text-gray-400">{skillLevel}%</span>
                      </div>
                      <div className="w-full bg-dark-600 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                          style={{ 
                            width: `${skillLevel}%`,
                            animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-primary-600/10 to-primary-400/10 rounded-xl p-8 border border-primary-500/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Technical Expertise Summary</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                Proficient in <span className="text-primary-400 font-semibold">full-stack development</span> with 
                expertise in modern frameworks and cloud technologies. Experienced in 
                <span className="text-primary-400 font-semibold"> automation solutions</span>, 
                <span className="text-primary-400 font-semibold"> data analytics</span>, and 
                <span className="text-primary-400 font-semibold"> enterprise-scale applications</span>. 
                Strong background in <span className="text-primary-400 font-semibold">Azure Cloud services</span>, 
                DevOps practices, and security compliance tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
