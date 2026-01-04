import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "New York University",
      degree: "Master of Science in Computer Science",
      location: "New York, USA",
      period: "Sep 2025 - Present",
      status: "Expected May 2027",
      logo: `${process.env.PUBLIC_URL}/nyu-logo.png`,
      logoScale: "scale-150",
    },
    {
      institution: "Indian Institute of Technology Kharagpur",
      degree: "B.Tech (Hons.) in Civil, Minor in Computer Science",
      location: "West Bengal, India",
      period: "Jul 2016 - Jul 2020",
      coursework: "Algorithms, AI, Responsible AI, Data Analytics, Information Visualization",
      scholarships: ["Merit Cum Means", "EME", "Army Education Scholarship"],
      logo: `${process.env.PUBLIC_URL}/iitkgp-logo.png`,
    }
  ];

  return (
    <section id="education" className="section-padding bg-gsap-bg">
      <div className="container-max">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="animate-on-scroll glass-card p-8 card-hover"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className={`w-full h-full object-contain ${edu.logoScale || ''}`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gsap-text mb-2">
                        {edu.institution}
                      </h3>
                      <p className="text-lg text-primary-500 font-medium mb-2">
                        {edu.degree}
                      </p>
                    </div>

                    {edu.status && (
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-500 border border-primary-500/30 mt-2 lg:mt-0">
                        {edu.status}
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap gap-6 mb-4 text-gsap-muted text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Coursework */}
                  {edu.coursework && (
                    <div className="mb-4">
                      <p className="text-gsap-muted text-sm">{edu.coursework}</p>
                    </div>
                  )}

                  {/* Scholarships */}
                  {edu.scholarships && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Award size={14} className="text-primary-500 mt-1" />
                      {edu.scholarships.map((scholarship, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gsap-elevated text-gsap-muted rounded-full text-xs border border-gsap-border"
                        >
                          {scholarship}
                        </span>
                      ))}
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
