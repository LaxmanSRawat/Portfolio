import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "New York University",
      degree: "Master of Science in Computer Science",
      location: "New York, USA",
      period: "Sep 2025 - Present",
      status: "Expected May 2027",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      institution: "Indian Institute of Technology Kharagpur",
      degree: "B.Tech (Hons.) in Civil, Minor in Computer Science",
      location: "West Bengal, India",
      period: "Jul 2016 - Jul 2020",
      coursework: "Algorithms, AI, Responsible AI, Data Analytics, Information Visualization",
      scholarships: [
        "Merit Cum Means (2018-20)",
        "EME (2015-16)",
        "Army Education Scholarship (2015-16)"
      ],
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <section id="education" className="section-padding bg-github-accent">
      <div className="container-max">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Academic foundation in computer science and continuous learning
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="animate-on-scroll bg-dark-700/50 backdrop-blur-sm rounded-xl p-8 border border-dark-600 hover:border-primary-500/50 transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center text-primary-400">
                    {edu.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {edu.institution}
                      </h3>
                      <p className="text-lg text-primary-400 font-semibold mb-2">
                        {edu.degree}
                      </p>
                    </div>
                    
                    {edu.status && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-600/20 text-primary-400 border border-primary-500/30">
                        {edu.status}
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-300">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Coursework */}
                  {edu.coursework && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">RELEVANT COURSEWORK</h4>
                      <p className="text-gray-300">{edu.coursework}</p>
                    </div>
                  )}

                  {/* Scholarships */}
                  {edu.scholarships && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
                        <Award size={16} />
                        SCHOLARSHIPS
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.scholarships.map((scholarship, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-dark-600 text-gray-300 rounded-full text-sm border border-dark-500"
                          >
                            {scholarship}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
