import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Jamtech Technologies Pvt Ltd',
      position: 'Associate Software Engineer',
      period: 'May, 2025 - Present',
      description: 'Developing and maintaining responsive web applications using React, Laravel and Node.js. Optimized frontend performance by 30% through code splitting and lazy loading.',
    },
    {
      company: 'NIT Hamirpur',
      position: 'Data Science Intern',
      period: 'July, 2024 - September, 2024',
      description: 'Implemented and evaluated machine learning algorithms like Logistic Regression and Decision Tree for building a predictive model for heart disease detection, achieving an accuracy of 85%.',
    },
  ];

  return (
    <section id="experience" className="reveal">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Center Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 md:gap-20 relative">
                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 top-10 w-4 h-4 bg-accent-primary rounded-full -translate-x-1/2 z-10 border-4 border-bg-color shadow-[0_0_15px_rgba(5,182,212,0.5)]"></div>

                {/* Left Side (for index 1, 3, 5...) */}
                <div className={`p-4 md:p-10 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className={`glass w-full p-8 hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-accent-primary/50 group ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`flex items-center gap-2 text-accent-primary mb-3 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                      <Briefcase size={20} className="group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-lg">{exp.company}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{exp.position}</h3>
                    <div className={`flex items-center gap-2 text-text-secondary text-sm mb-6 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                      <Calendar size={16} />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{exp.description}</p>
                  </div>
                </div>

                {/* Empty Side for balance */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
