import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const highlights = entry.target.querySelectorAll('.highlight-sweep');
            highlights.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = sectionRef.current?.querySelectorAll('.experience-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const experienceData = [
    {
      company: "New York University",
      position: "Graduate Research Assistant",
      location: "New York, NY",
      period: "Sep 2025 - Present",
      achievements: [
        { text: "Automated data extraction and Tableau dashboard workflows using ", highlight: "Python", suffix: ", reducing reporting time by ", metric: "80%", end: " while implementing data validation that identified errors in prior datasets." }
      ],
      awards: []
    },
    {
      company: "Anheuser-Busch InBev",
      position: "Solution Architect",
      location: "Karnataka, India",
      period: "Oct 2023 - Aug 2025",
      achievements: [
        { text: "Led development of a global Account Reconciliation platform using ", highlight: "React, Flask, Azure SQL DB & Data Factory", suffix: ", processing ", metric: "120-150M", end: " financial records across 6 regions, saving ", metric2: "$600k", end2: " in licensing costs." },
        { text: "Delivered an enterprise SKU change platform with a custom state machine managing ", metric: "60+", suffix: " steps across 11 teams, streamlining ", metric2: "85%", end: " of processes & delivering ", metric3: "$530k", end2: " cost savings." },
        { text: "Spearheaded DevSecOps adoption by integrating ", highlight: "SAST, DAST & SCA", suffix: " tools in CI/CD pipelines, reducing vulnerability risk by ", metric: "25%", end: " across 15 repositories." }
      ],
      awards: ["Annual Leadership Culture", "Top Performer of the Year", "Excellence in Action — Innovation", "2× Pitcher (Team)"]
    },
    {
      company: "Anheuser-Busch InBev",
      position: "Software Development Engineer I",
      location: "Karnataka, India",
      period: "Aug 2020 - Sep 2023",
      achievements: [
        { text: "Built and scaled a global Journal Entry platform with multi-zonal deployments & CDN, implementing governance workflows that improved compliance by ", metric: "70%", end: "." },
        { text: "Engineered a serverless Document Automation platform using ", highlight: "Azure Functions", suffix: ", processing ", metric: "90+", end: " weekly documents, avoiding ", metric2: "$200k", end2: " detention/demurrage penalty annually." },
        { text: "Developed a ", highlight: "Node.js REST API", suffix: " microservice integrated with 16 internal applications, reducing response time from 2 hours to ", metric: "near-instant", end: "." }
      ],
      awards: ["Beer Shot (Individual)", "3× Pitcher (Team)"]
    },
    {
      company: "Anheuser-Busch InBev",
      position: "Software Development Engineer Intern",
      location: "Karnataka, India",
      period: "May 2019 - Jul 2019",
      achievements: [
        { text: "Built a ", highlight: "Power BI", suffix: " dashboard to track RPA bot executions, contributing to ", metric: "15%", end: " annual cost saving (~", metric2: "$25,000", end2: ") on RPA licenses." },
        { text: "Executed OCR-based text extraction POC using ", highlight: "Python & Tesseract", suffix: ", achieving ", metric: "~80%", end: " accuracy." }
      ],
      awards: []
    }
  ];

  const highlightStyle = "highlight-sweep px-1 font-medium";

  const renderAchievement = (achievement) => {
    return (
      <>
        {achievement.text}
        {achievement.highlight && <span className={highlightStyle}>{achievement.highlight}</span>}
        {achievement.suffix}
        {achievement.metric && <span className={highlightStyle}>{achievement.metric}</span>}
        {achievement.end}
        {achievement.metric2 && <span className={highlightStyle}>{achievement.metric2}</span>}
        {achievement.end2}
        {achievement.metric3 && <span className={highlightStyle}>{achievement.metric3}</span>}
      </>
    );
  };

  return (
    <section id="experience" className="section-padding bg-gsap-bg" ref={sectionRef}>
      <div className="container-max">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent"></div>

          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative mb-8 animate-on-scroll experience-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-8 transform -translate-x-1/2 w-3 h-3 bg-primary-500 rounded-full border-4 border-gsap-bg"></div>

              {/* Content Card */}
              <div className="ml-16 md:ml-20 glass-card p-6 card-hover">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gsap-text">{exp.position}</h3>
                    <h4 className="text-primary-500 font-medium">{exp.company}</h4>
                  </div>
                  <div className="flex items-center gap-4 text-gsap-muted text-sm mt-2 md:mt-0 md:text-right">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-1 h-1 bg-primary-500 rounded-full mt-2"></div>
                      <p className="text-gsap-muted text-sm leading-relaxed">
                        {renderAchievement(achievement)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Awards (if any) */}
                {exp.awards.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap pt-3 border-t border-gsap-border">
                    <Award size={14} className="text-primary-500" />
                    {exp.awards.map((award, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-gsap-elevated text-gsap-muted rounded text-xs border border-gsap-border"
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
