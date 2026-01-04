import React from 'react';
import { Code, Database, Cloud, Shield, BarChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
      bgIcons: ["{ }", "< />", "py", "js", "ts", "sql"],
    },
    {
      title: "Backend",
      icon: <Database className="w-5 h-5" />,
      skills: ["Node.js", "Express.js", "Flask", "REST APIs", "Microservices"],
      bgIcons: ["λ", "API", "{ }", "⚡", "🔗", ">>"],
    },
    {
      title: "Frontend",
      icon: <Code className="w-5 h-5" />,
      skills: ["React", "Mantine", "Material UI", "Responsive Design"],
      bgIcons: ["⚛", "UI", "< >", "jsx", "css", "dom"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5" />,
      skills: ["Azure Cloud", "Azure DevOps", "Terraform", "Docker", "Redis"],
      bgIcons: ["☁", "🐳", "⚙", "CI", "CD", "tf"],
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: ["MS SQL Server", "PostgreSQL", "Database Optimization"],
      bgIcons: ["📊", "sql", "db", "⬡", "idx", "qry"],
    },
    {
      title: "Security",
      icon: <Shield className="w-5 h-5" />,
      skills: ["SAST/DAST/SCA", "Snyk", "Checkmarx", "Apiiro"],
      bgIcons: ["🔒", "🛡", "⚠", "✓", "sec", "key"],
    },
    {
      title: "Analytics",
      icon: <BarChart className="w-5 h-5" />,
      skills: ["Power BI", "Tableau", "DataDog", "Databricks"],
      bgIcons: ["📈", "📊", "Σ", "fn", "viz", "data"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gsap-bg">
      <div className="container-max">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-on-scroll glass-card p-6 card-hover relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Icons Pattern */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden"
                style={{ transform: 'rotate(-15deg) scale(1.5)' }}
              >
                <div className="flex flex-wrap gap-3 text-sm font-mono text-primary-500">
                  {[...Array(6)].map((_, rowIndex) => (
                    <div key={rowIndex} className="flex gap-6 whitespace-nowrap">
                      {category.bgIcons.map((icon, iconIndex) => (
                        <span key={iconIndex} className="inline-block px-2">
                          {icon}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-500">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gsap-text">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-gsap-elevated text-gsap-muted rounded-full text-sm border border-gsap-border hover:border-primary-500/50 hover:text-gsap-text transition-all duration-300"
                  >
                    {skill}
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

export default Skills;
