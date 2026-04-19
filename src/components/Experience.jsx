import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Jamtech Technologies Pvt Ltd',
      position: 'Associate Software Engineer',
      period: '2025 - Present',
      description: 'Developing and maintaining responsive web applications using React, Laravel and Node.js. Optimized frontend performance by 30% through code splitting and lazy loading.',
    },
    {
      company: 'NIT Hamirpur',
      position: 'Data Science Intern',
      period: 'July,2024 - September,2024',
      description: 'Implemented and evaluated machine learning algorithms like Logistic Regression and Decision Tree for building a predictive model for heart disease detection, achieving an accuracy of 85% . ',
    },
  ];

  return (
    <section id="experience" className="reveal">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent-primary rounded-full -translate-x-1/2 z-10 border-4 border-bg-color"></div>

              <div className="w-full md:w-1/2 p-4 md:px-12">
                <div className="glass p-6 hover:shadow-xl transition-all">
                  <div className="flex items-center gap-2 text-accent-primary mb-2">
                    <Briefcase size={18} />
                    <span className="font-bold">{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                  <div className="flex items-center gap-2 text-text-secondary text-sm mb-4">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-text-secondary text-sm">{exp.description}</p>
                </div>
              </div>
              <div className="hidden md:block w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
