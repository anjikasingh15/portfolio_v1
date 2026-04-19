import React from 'react';
import { Layout, Server, Database, Code2, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout className="text-accent-primary" />,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: <Server className="text-accent-secondary" />,
      skills: ['Node.js', 'Express', 'Laravel', 'REST APIs'],
    },
    {
      title: 'Database',
      icon: <Database className="text-accent-primary" />,
      skills: ['MySQL', 'PostgreSQL', 'Supabase'],
    },
    {
      title: 'Tools',
      icon: <Settings className="text-accent-secondary" />,
      skills: ['Git', 'AWS', 'Vercel', 'Postman'],
    },
  ];

  return (
    <section id="skills" className="reveal">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="mb-6">{category.icon}</div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <ul className="flex flex-col gap-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-text-secondary">
                    <div className="w-1.5 h-1.5 bg-accent-primary rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Skills;
