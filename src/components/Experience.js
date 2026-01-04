import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add active class to all highlight-sweep elements within this card
            const highlights = entry.target.querySelectorAll('.highlight-sweep');
            highlights.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 100); // Stagger the animations
            });
            observer.unobserve(entry.target); // Only animate once
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
      ]
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
      ]
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
      ]
    },
    {
      company: "Anheuser-Busch InBev",
      position: "Software Development Engineer Intern",
      location: "Karnataka, India",
      period: "May 2019 - Jul 2019",
      achievements: [
        { text: "Built a ", highlight: "Power BI", suffix: " dashboard to track RPA bot executions, contributing to ", metric: "15%", end: " annual cost saving (~", metric2: "$25,000", end2: ") on RPA licenses." },
        { text: "Executed OCR-based text extraction POC using ", highlight: "Python & Tesseract", suffix: ", achieving ", metric: "~80%", end: " accuracy." }
      ]
    }
  ];

  const awards = [
    "Annual Leadership Culture (2025)",
    "Top Performer of the Year (2025)",
    "Excellence in Action — Innovation (2024)",
    "Beer Shot (Individual) (2021)",
    "5 Pitcher (Team) awards"
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
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gsap-muted text-lg">5+ years building enterprise solutions</p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent"></div>

          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative mb-12 animate-on-scroll experience-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-8 transform -translate-x-1/2 w-3 h-3 bg-primary-500 rounded-full border-4 border-gsap-bg"></div>

              {/* Content Card */}
              <div className="ml-16 md:ml-20 glass-card p-8 card-hover">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gsap-text mb-1">{exp.position}</h3>
                  <h4 className="text-lg text-primary-500 font-medium mb-4">{exp.company}</h4>

                  <div className="flex flex-wrap gap-4 text-gsap-muted text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"></div>
                      <p className="text-gsap-muted text-sm leading-relaxed">
                        {renderAchievement(achievement)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Awards */}
        <div className="mt-16 animate-on-scroll">
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold text-gsap-text mb-6 flex items-center gap-3">
              <Award className="text-primary-500" size={20} />
              Recognition
            </h3>
            <div className="flex flex-wrap gap-3">
              {awards.map((award, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gsap-elevated text-gsap-muted rounded-full text-sm border border-gsap-border hover:border-primary-500/50 transition-colors duration-300"
                >
                  {award}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
