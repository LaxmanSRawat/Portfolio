import React from 'react';

const Skills = () => {
  // Devicon CDN base URL
  const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
  // Simple Icons CDN (for icons not in devicon)
  const simpleIconsBase = "https://cdn.simpleicons.org";
  // Iconify CDN (alternative for missing icons)
  const iconifyBase = "https://api.iconify.design";

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: `${deviconBase}/python/python-original.svg` },
        { name: "JavaScript", icon: `${deviconBase}/javascript/javascript-original.svg` },
        { name: "TypeScript", icon: `${deviconBase}/typescript/typescript-original.svg` },
        { name: "SQL", icon: `${deviconBase}/azuresqldatabase/azuresqldatabase-original.svg` },
        { name: "HTML", icon: `${deviconBase}/html5/html5-original.svg` },
        { name: "CSS", icon: `${deviconBase}/css3/css3-original.svg` },
      ],
      pills: [],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: `${deviconBase}/nodejs/nodejs-original.svg` },
        { name: "Express.js", icon: `${iconifyBase}/skill-icons/expressjs-light.svg` },
        { name: "Flask", icon: `${simpleIconsBase}/flask` },
        { name: "REST APIs", icon: `${deviconBase}/fastapi/fastapi-original.svg` },
      ],
      pills: ["Microservices"],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: `${deviconBase}/react/react-original.svg` },
        { name: "Mantine", icon: `${simpleIconsBase}/mantine` },
        { name: "Material UI", icon: `${deviconBase}/materialui/materialui-original.svg` },
      ],
      pills: ["Responsive Design"],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Azure Cloud", icon: `${deviconBase}/azure/azure-original.svg` },
        { name: "Azure DevOps", icon: `${deviconBase}/azuredevops/azuredevops-original.svg` },
        { name: "Terraform", icon: `${deviconBase}/terraform/terraform-original.svg` },
        { name: "Docker", icon: `${deviconBase}/docker/docker-original.svg` },
        { name: "Redis", icon: `${deviconBase}/redis/redis-original.svg` },
      ],
      pills: [],
    },
    {
      title: "Databases",
      skills: [
        { name: "MS SQL Server", icon: `${deviconBase}/microsoftsqlserver/microsoftsqlserver-original.svg` },
        { name: "PostgreSQL", icon: `${deviconBase}/postgresql/postgresql-original.svg` },
      ],
      pills: ["Database Optimization"],
    },
    {
      title: "Security",
      skills: [
        { name: "Snyk", icon: `${simpleIconsBase}/snyk` },
        { name: "Checkmarx", icon: `${simpleIconsBase}/checkmarx` },
        { name: "Apiiro", icon: `${process.env.PUBLIC_URL}/apiiro-logo.png` },
      ],
      pills: ["SAST/DAST/SCA"],
    },
    {
      title: "Analytics",
      skills: [
        { name: "Power BI", icon: `${iconifyBase}/logos/microsoft-power-bi.svg` },
        { name: "Tableau", icon: `${iconifyBase}/logos/tableau-icon.svg` },
        { name: "DataDog", icon: `${simpleIconsBase}/datadog` },
        { name: "Databricks", icon: `${simpleIconsBase}/databricks` },
      ],
      pills: [],
    },
  ];

  // Split categories into two columns
  const leftColumn = skillCategories.slice(0, 4);
  const rightColumn = skillCategories.slice(4);

  const renderCategory = (category, index) => (
    <div
      key={index}
      className="animate-on-scroll"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Category Row */}
      <div className="flex flex-col gap-2">
        {/* Category Title */}
        <h3 className="text-lg font-semibold text-primary-500 uppercase tracking-wider">
          {category.title}
        </h3>

        {/* Skills Icons Row */}
        <div className="flex flex-wrap items-center gap-6">
          {category.skills.map((skill, skillIndex) => (
            <div
              key={skillIndex}
              className="group relative flex items-center"
            >
              {/* Icon - No bounding box */}
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                style={{ filter: 'sepia(100%) saturate(150%) brightness(0.95) hue-rotate(75deg)' }}
                onMouseOver={(e) => e.currentTarget.style.filter = 'none'}
                onMouseOut={(e) => e.currentTarget.style.filter = 'sepia(100%) saturate(150%) brightness(0.95) hue-rotate(75deg)'}
              />

              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gsap-elevated text-gsap-text text-xs font-medium rounded border border-gsap-border opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10">
                {skill.name}
              </div>
            </div>
          ))}

          {/* Pills for skills without icons */}
          {category.pills.length > 0 && (
            <>
              <div className="w-px h-4 bg-gsap-border/50 mx-0.5"></div>
              {category.pills.map((pill, pillIndex) => (
                <span
                  key={pillIndex}
                  className="px-2 py-0.5 bg-gsap-surface text-gsap-muted rounded-full text-xs border border-gsap-border hover:border-primary-500/50 hover:text-gsap-text transition-all duration-300"
                >
                  {pill}
                </span>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding bg-gsap-bg">
      <div className="container-max">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-5">
          {/* Left Column */}
          <div className="space-y-5">
            {leftColumn.map((category, index) => renderCategory(category, index))}
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {rightColumn.map((category, index) => renderCategory(category, index + 4))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
