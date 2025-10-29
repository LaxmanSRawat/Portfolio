import React from 'react';
import { Briefcase, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      company: "New York University",
      position: "Graduate Research Assistant",
      location: "New York, NY",
      period: "Sep 2025 - Present",
      achievements: [
        "Automated data extraction and Tableau dashboard workflows using Python, reducing reporting time by 80% while implementing data validation that identified and corrected errors in prior year datasets."
      ]
    },
    {
      company: "Anheuser-Busch InBev (AB InBev)",
      position: "Solution Architect",
      location: "Karnataka, India",
      period: "Oct 2023 - Aug 2025",
      achievements: [
        "Led development of a global Account Reconciliation platform using React, Flask, Azure SQL DB, & Data Factory, processing 120-150M financial records across 6 global regions, saving $600k in licensing costs.",
        "Delivered an enterprise SKU change platform using React, Node.js, & Azure SQL DB with a custom state machine managing 60+ steps across 11 teams, streamlining 85% of processes & delivering $530k cost savings.",
        "Spearheaded DevSecOps adoption by integrating SAST, DAST, and SCA tools in CI/CD pipelines, training, & monthly check-ins across 6 development teams, reducing vulnerability risk by 25% across 15 repositories."
      ]
    },
    {
      company: "Anheuser-Busch InBev (AB InBev)",
      position: "Software Development Engineer I",
      location: "Karnataka, India",
      period: "Aug 2020 - Sep 2023",
      achievements: [
        "Built and scaled a global Journal Entry platform with multi-zonal deployments & CDN for low latency & message queue for robust integration, implementing governance workflows that improved compliance by 70%.",
        "Engineered a serverless Document Automation platform using Azure Functions, SQL DB, Blob Storage, & Doc. Intelligence, processing 90+ weekly documents, avoiding $200k detention/demurrage penalty annually.",
        "Developed a Node.js REST API microservice integrated with 16 internal applications, automating ServiceNow incident creation, reducing average response time from 2 hours to near-instant."
      ]
    },
    {
      company: "Anheuser-Busch InBev (AB InBev)",
      position: "Software Development Engineer Intern",
      location: "Karnataka, India",
      period: "May 2019 - Jul 2019",
      achievements: [
        "Built a Power BI dashboard to track RPA bots' executions to optimize license allocation through data-driven insights, contributing to a 15% annual cost saving of around $25,000 on RPA licenses.",
        "Executed a POC on OCR-based text extraction from scanned documents using Python and Tesseract, achieving ~80% accuracy and setting up benchmarks for future document digitization strategies."
      ]
    }
  ];

  const awards = [
    "Annual Leadership Culture (2025)",
    "Top Performer of the Year (2025)",
    "Excellence in Action -- Innovation (2024)",
    "Beer Shot (Individual) (2021)",
    "5 Pitcher (Team) awards (Aug 2020 - Jul 2025)"
  ];

  const extractMetrics = (text) => {
    const metrics = text.match(/\$[\d,]+k?|\d+%|\d+\+/g) || [];
    return metrics;
  };

  return (
    <section id="experience" className="section-padding bg-dark-900">
      <div className="container-max">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            5+ years of experience in solution architecture, automation, and full-stack development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-primary-400"></div>

          {experienceData.map((exp, index) => (
            <div 
              key={index}
              className={`relative mb-12 animate-on-scroll ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-8 h-8 bg-primary-600 rounded-full border-4 border-dark-900 flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 bg-dark-700/50 backdrop-blur-sm rounded-xl p-8 border border-dark-600 hover:border-primary-500/50 transition-all duration-300 card-hover`}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                  <h4 className="text-xl text-primary-400 font-semibold mb-4">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-4 text-gray-300 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  {exp.achievements.map((achievement, idx) => {
                    const metrics = extractMetrics(achievement);
                    return (
                      <div key={idx} className="flex items-start gap-3 group">
                        <div className="flex-shrink-0 w-2 h-2 bg-primary-400 rounded-full mt-2 group-hover:bg-primary-300 transition-colors duration-300"></div>
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {achievement}
                          {metrics.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {metrics.map((metric, metricIdx) => (
                                <span 
                                  key={metricIdx}
                                  className="inline-flex items-center px-2 py-1 bg-primary-600/20 text-primary-400 rounded text-sm font-semibold"
                                >
                                  <TrendingUp size={12} className="mr-1" />
                                  {metric}
                                </span>
                              ))}
                            </div>
                          )}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Awards */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-dark-700/50 backdrop-blur-sm rounded-xl p-8 border border-dark-600">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="text-primary-400" size={24} />
              Professional Awards & Recognition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {awards.map((award, index) => (
                <div 
                  key={index}
                  className="bg-dark-600/50 rounded-lg p-4 border border-dark-500 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <p className="text-gray-300 font-medium">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
