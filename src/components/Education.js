import React from 'react';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

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
      logo: `${process.env.PUBLIC_URL}/iitkgp-logo.png`,
    }
  ];

  const coursework = ["Algorithms", "AI", "Responsible AI", "Data Analytics", "Information Visualization"];
  const scholarships = ["Merit Cum Means", "EME", "Army Education Scholarship"];

  return (
    <section id="education" className="section-padding bg-gsap-bg">
      <div className="container-max">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Education Cards */}
          <div className="lg:col-span-2 space-y-4">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="animate-on-scroll glass-card p-5 card-hover"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-1 overflow-hidden">
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className={`w-full h-full object-contain ${edu.logoScale || ''}`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow min-w-0">
                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-gsap-text truncate">
                          {edu.institution}
                        </h3>
                        <p className="text-primary-500 font-medium text-sm">
                          {edu.degree}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 text-gsap-muted text-xs flex-shrink-0">
                        <div className="flex items-center gap-1">
                          <MapPin size={12} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>

                    {edu.status && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-500/10 text-primary-500 border border-primary-500/30 mt-2">
                        {edu.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coursework & Scholarships Card */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card p-5 h-full">
              {/* Coursework */}
              <div className="mb-5">
                <h4 className="text-sm font-semibold text-gsap-text mb-3 flex items-center gap-2">
                  <BookOpen size={14} className="text-primary-500" />
                  Key Coursework
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gsap-elevated text-gsap-muted rounded text-xs border border-gsap-border"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Scholarships */}
              <div>
                <h4 className="text-sm font-semibold text-gsap-text mb-3 flex items-center gap-2">
                  <Award size={14} className="text-primary-500" />
                  Scholarships
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {scholarships.map((scholarship, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gsap-elevated text-gsap-muted rounded text-xs border border-gsap-border"
                    >
                      {scholarship}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
